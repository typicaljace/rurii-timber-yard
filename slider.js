const images = [
    'assets/bed1.4.jpeg',
    'assets/bed6.jpeg',
    'assets/bed4.jpeg',
    'assets/bed1.5.jpeg'
  ];
  
  let currentIndex = 0;
  const slide1 = document.getElementById('slide1');
  const slide2 = document.getElementById('slide2');
  
  let activeSlide = slide1;
  
  function showSlide(index) {
    const nextSlide = activeSlide === slide1 ? slide2 : slide1;
    
    nextSlide.style.backgroundImage = `url('${images[index]}')`;
    nextSlide.style.zIndex = 0;
    activeSlide.style.zIndex = 1;
    
    activeSlide.style.transform = "scale(0.8)";
    activeSlide.style.opacity = "0";
  
    // Reset after animation
    setTimeout(() => {
      activeSlide.style.transition = "none";
      activeSlide.style.transform = "scale(1)";
      activeSlide.style.opacity = "1";
      activeSlide.style.zIndex = 0;
      activeSlide.style.backgroundImage = nextSlide.style.backgroundImage;
      
      activeSlide.style.transition = "transform 1s ease, opacity 1s ease";
    }, 1000);
  
    activeSlide = nextSlide;
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }
  
  // Auto-change every 5 seconds
  
  // Initial background
  showSlide(currentIndex);