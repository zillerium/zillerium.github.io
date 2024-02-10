// index.js file
function changeContent(section) {
  var imageSrc = '';
  var titleText = '';

  switch (section) {
    case 'About':
      imageSrc = 'https://i.ibb.co/mbFntXV/zcareer2.webp';
      titleText = 'About';
      break;
    case 'Career':
      imageSrc = 'https://i.ibb.co/KDTm4Rd/zcareer.webp';
      titleText = 'Career';
      break;
    case 'Showcase':
      imageSrc = 'https://i.ibb.co/3dZJ6Bv/zcareer3.webp';
      titleText = 'Showcase';
      break;
    default:
      imageSrc = 'https://i.ibb.co/mbFntXV/zcareer2.webp';
      titleText = 'Default';
  }

  // Update the image
  document.getElementById('fullImageDisplay').innerHTML = '<img src="' + imageSrc + '" alt="' + section + ' Image">';

  // Update the content title
  document.getElementById('contentTitle').innerHTML = '<h2 style="text-align:center;">' + titleText + '</h2>';

  var contentSection = document.getElementById(section);
  if (contentSection) {
    // Smooth scroll to the content section
    contentSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initialize the default content
document.addEventListener('DOMContentLoaded', function() {
  changeContent('About');
});


function hoverEffect(element) {
  element.querySelector('img').style.opacity = '0';
  element.querySelector('.overlay-text').style.opacity = '1';
}

function hoverEffectOut(element) {
  element.querySelector('img').style.opacity = '1';
  element.querySelector('.overlay-text').style.opacity = '0';
}

function toggleText1(elementId) {
  var textElement = document.getElementById(elementId);
  if (textElement.style.display === "none" || textElement.style.display === "") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}

function toggleText(elementId) {
  var textElement = document.getElementById(elementId);
  var circleText = textElement.previousElementSibling.querySelector('.circle-text');
  
  if (textElement.style.display === "none" || textElement.style.display === "") {
    textElement.style.display = "block";
    circleText.innerHTML = '&#x2796;'; // Arrow pointing up
  } else {
    textElement.style.display = "none";
    circleText.innerHTML = '&#x279C;'; // Arrow pointing right
  }
}


// Initialize elements to be hidden on page load if necessary
document.addEventListener('DOMContentLoaded', function() {
  toggleText('experienceText');
  toggleText('teamText');
});