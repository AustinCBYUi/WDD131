let selectElement = document.querySelector('select');
const body = document.querySelector('body');
let logo = document.querySelector('img');

selectElement.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElement.value;
    if (current == 'dark') {
        //code to change colors and logo
        body.classList.add('dark');
        logo.setAttribute('src', 'images/byui-logo-dark.png');
    } else {
        //code to change colors and logo
        body.classList.remove('dark');
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
    }
}