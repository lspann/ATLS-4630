document.addEventListener('DOMContentLoaded', function() {
    const buttonColor = document.getElementById('buttonColor');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    let colorIndex = 0;

    // Function to change the page background color
    function setPageBackgroundColor() {
        const body = document.querySelector('body');
        
        body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }
    buttonColor.addEventListener('click', setPageBackgroundColor);

    const buttonText = document.getElementById("buttonText");

    const texts = ["You clicked me!", "Click again!", "Keep clicking!", "I'm changing!"];
    let textIndex = 0;

    buttonText.addEventListener('click', function() {
        textIndex = (textIndex + 1) % texts.length; // Loop through the preset texts
        buttonText.textContent = texts[textIndex]; // Change the button's text
    });
});
