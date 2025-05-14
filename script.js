function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment the slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    // Remove the "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Check if slides[slideIndex - 1] exists before accessing it
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }

    // Check if dots[slideIndex - 1] exists before accessing it
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }

    // Set a timer to change the slide every 5 seconds
    setTimeout(showSlides, 5000); // 5000ms = 5 seconds
}