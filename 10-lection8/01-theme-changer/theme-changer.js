const changer = document.getElementById('theme-changer');
const changer_burger = document.getElementById("theme-changer-burger");
const changers = [changer, changer_burger];

const html = document.documentElement;

changers.forEach(changer => changer.addEventListener('change', () => html.toggleAttribute('data-theme-dark')));
