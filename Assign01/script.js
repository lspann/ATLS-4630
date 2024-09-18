document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('buttonColor');

    function setPageBackgroundColor() {
        const body = document.querySelector('body');
        const curColor = body.style.backgroundColor;

        // Toggle between red and blue background colors
        if (curColor === 'red') {
            body.style.backgroundColor = 'blue';
        } else {
            body.style.backgroundColor = 'red';
        }
    }

    button.addEventListener('click', setPageBackgroundColor);
});