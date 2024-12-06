//simple form submission message
document.getElementById("contactform").addEventListener("submit", function(event){
    event.preventDdefauil();
    alert("thank you for your message! i'll get to you soon.");

    document.getElementById("contactForm").requestFullscreen();
});