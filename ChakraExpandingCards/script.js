
// for reading background images in div
// Wait for the DOM content to fully load before executing the script
document.addEventListener('DOMContentLoaded', function () {

    // Select all .panel elements that have a data-bg attribute
    const panels = document.querySelectorAll('.panel[data-bg]');

    // Loop through each panel element
    panels.forEach(panel => {

        // Retrieve the value of the data-bg attribute, which is our image path
        const bg = panel.getAttribute('data-bg');

        // Set the backgroundImage style of the panel to the image path
        panel.style.backgroundImage = `url('${bg}')`;
    });
});


const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')

    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


