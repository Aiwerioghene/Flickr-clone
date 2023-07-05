
        window.onload = function() {
          var images = [
            "images/Unknown.jpeg",
            "images/color.avif",
            "images/unknown4.jpeg"
          ]; 
          var currentIndex = 0;
    
          function changeBackground() {
            document.body.style.backgroundImage = "url('" + images[currentIndex] + "')";
            currentIndex = (currentIndex + 1) % images.length;
          }
    
          // Change background image every 5 seconds
          setInterval(changeBackground, 5000);
        };      
