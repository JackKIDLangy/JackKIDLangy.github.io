const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu); 