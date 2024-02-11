// index.js file
function changeContent(section) {
  var imageSrc = '';
  var titleText = '';

  switch (section) {
    case 'About':
      imageSrc = 'https://i.ibb.co/8XPF9Kb/zaboutus.png';
      titleText = 'About';
      break;
    case 'Career':
      imageSrc = 'https://i.ibb.co/nrzXwtg/z1career.png';
      titleText = 'Career';
      break;
    case 'Showcase':
      imageSrc = 'https://i.ibb.co/XtYGTjX/showcase.png';
      titleText = 'Showcase';
      break;
    default:
      imageSrc = 'https://i.ibb.co/8XPF9Kb/zaboutus.png';
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


document.querySelectorAll('.nav-item img').forEach(item => {
  item.addEventListener('click', function() {
    const section = this.alt; // Assuming the alt tag of the image contains 'About', 'Career', or 'Showcase'
    changeContent(section);
  });
});

// Initialize the default content
document.addEventListener('DOMContentLoaded', function() {
  const images = [
    'https://i.ibb.co/8XPF9Kb/zaboutus.png',
    'https://i.ibb.co/nrzXwtg/z1career.png',
    'https://i.ibb.co/XtYGTjX/showcase.png'
  ];

  let currentImageIndex = 1; // Start from 1 because of the prepended clone
  let autoSlideInterval;
  const slideInterval = 5000; // 5 seconds for each slide

  const sliderContainer = document.querySelector('.slider-container');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  // Function to create and append/prepend image elements
  function createImage(src, prepend = false) {
    const img = document.createElement('img');
    img.src = src;
    if (prepend) {
      sliderContainer.prepend(img);
    } else {
      sliderContainer.appendChild(img);
    }
  }

  // Append all images to the slider container
  images.forEach(src => createImage(src));

  // Clone first and last images and append/prepend them
  createImage(images[images.length - 1], true); // Prepend clone of last image
  createImage(images[0]); // Append clone of first image

  function updateSlider() {
    sliderContainer.style.transition = 'transform 1s ease-in-out';
    sliderContainer.style.transform = `translateX(-${currentImageIndex * 100}vw)`;
  }

  // Function to reset and restart the auto-slide interval
  function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Clear the existing interval
    autoSlideInterval = setInterval(autoSlide, slideInterval); // Restart the auto-slide interval
  }

  // Function to automatically slide to the next image
 

// Function to automatically slide to the next image
 

function autoSlide() {
  currentImageIndex++;
  updateSlider();

  // No need to immediately jump to the first image here
  // Let the transitionend event listener handle the reset
}
    

  // Transitionend event to 'jump' to the clone without transition
  sliderContainer.addEventListener('transitionend', () => {
    if (currentImageIndex === 0) {
      sliderContainer.style.transition = 'none'; // Disable transition
      currentImageIndex = images.length; // Jump to the last original image
      sliderContainer.style.transform = `translateX(-${currentImageIndex * 100}vw)`;
    } else if (currentImageIndex === images.length + 1) {
      sliderContainer.style.transition = 'none'; // Disable transition
      currentImageIndex = 1; // Jump to the first original image
      sliderContainer.style.transform = `translateX(-${currentImageIndex * 100}vw)`;
    }
  });

  leftArrow.addEventListener('click', () => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateSlider();
      resetAutoSlide(); // Reset the auto-slide interval on manual navigation
    }
  });

  rightArrow.addEventListener('click', () => {
    if (currentImageIndex <= images.length) {
      currentImageIndex++;
      updateSlider();
      resetAutoSlide(); // Reset the auto-slide interval on manual navigation
    }
  });

  // Initialize the slider with the first image
  updateSlider();

  // Start the automatic slideshow
  resetAutoSlide();
});





sliderContainer.addEventListener('transitionend', () => {
  // Check if the slider has just moved past the last original image to the cloned first image
  if (currentImageIndex === images.length + 1) {
    sliderContainer.style.transition = 'none'; // Disable the transition for an instant switch
    currentImageIndex = 1; // Jump to the original first image
    sliderContainer.style.transform = `translateX(-${currentImageIndex * 100}vw)`;

    // Use setTimeout to re-enable the transition after the instant switch
    setTimeout(() => {
      sliderContainer.style.transition = 'transform 1s ease-in-out';
    });
  } else if (currentImageIndex === 0) {
    // This part handles the case when navigating backwards from the first to the last image
    sliderContainer.style.transition = 'none';
    currentImageIndex = images.length;
    sliderContainer.style.transform = `translateX(-${currentImageIndex * 100}vw)`;
    setTimeout(() => {
      sliderContainer.style.transition = 'transform 1s ease-in-out';
    });
  }
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
