const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const bromeraImage = document.getElementById('bromera-image');

const buttonClipApiLibros = document.getElementById('button-clip-api-libros');
const clipApiLibros = document.getElementById('clip-api-libros');
const closeClipApiLibros = document.getElementById('close-api-libros');
const videoApiLibros = document.getElementById('video-api-libros');

buttonClipApiLibros.addEventListener('click', () => {
    buttonClipApiLibros.classList.toggle('active');
    clipApiLibros.classList.toggle('active');
    videoApiLibros.play();
});
closeClipApiLibros.addEventListener('click', () => {
    buttonClipApiLibros.classList.toggle('active');
    clipApiLibros.classList.toggle('active');
    videoApiLibros.pause();
});

const buttonClipRestaurantes = document.getElementById('button-clip-app-restaurante');
const clipAppRestaurantes = document.getElementById('clip-app-restaurantes');
const closeClipRestaurante = document.getElementById('close-app-restaurante');
const videoAppRestaurante = document.getElementById('video-app-restaurante');
buttonClipRestaurantes.addEventListener('click', () => {
    buttonClipRestaurantes.classList.toggle('active');
    clipAppRestaurantes.classList.toggle('active');
    videoAppRestaurante.play();
});
closeClipRestaurante.addEventListener('click', () => {
    buttonClipRestaurantes.classList.toggle('active');
    clipAppRestaurantes.classList.toggle('active');
    videoAppRestaurante.pause();
});

const buttonClipHoresWeb = document.getElementById('button-clip-hores-web');
const clipHoresWeb = document.getElementById('clip-hores-web');
const closeClipHoresWeb = document.getElementById('close-hores-web');
const videoHoresWeb = document.getElementById('video-hores-web');

buttonClipHoresWeb.addEventListener('click', () => {
    buttonClipHoresWeb.classList.toggle('active');
    clipHoresWeb.classList.toggle('active');
    videoHoresWeb.play();
});
closeClipHoresWeb.addEventListener('click', () => {
    buttonClipHoresWeb.classList.toggle('active');
    clipHoresWeb.classList.toggle('active');
    videoHoresWeb.pause();
});

const changueLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {

        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
    if (toggleIcon.src.includes('moon.svg')) {
        toggleText.textContent = texts['mode']['dark'];
    } else {
        toggleText.textContent = texts['mode']['light'];
    }
}

flagsElement.addEventListener('click', (e) => {
    changueLanguage(e.target.parentElement.dataset.language);
});

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'assets/icons/sun.svg';
        toggleText.textContent = 'Light Mode';
        bromeraImage.src = 'assets/images/logo-bromera.png';
    } else {
        toggleIcon.src = 'assets/icons/moon.svg';
        toggleText.textContent = 'Dark Mode';
        bromeraImage.src = 'assets/images/logo-bromera-dark.png';
    }
});

toggleColors.addEventListener('click', (e) => {
    var color = e.target.dataset.color;
    var favicon = document.getElementById('favicon');

    switch (color) {
        case 'hsl(214, 84%, 56%)': //blue
            rootStyles.setProperty('--primary-color', e.target.dataset.color);
            favicon.href = 'favicon-b.ico';
            break;
        case 'hsl(150, 84%, 56%)': //green
            rootStyles.setProperty('--primary-color', e.target.dataset.color);
            favicon.href = 'favicon-g.ico';
            break;
        case 'hsl(276, 84%, 56%)': // purple
            rootStyles.setProperty('--primary-color', e.target.dataset.color);
            favicon.href = 'favicon-p.ico';
            break;
        case 'hsl(46, 84%, 56%)': // yellow
            rootStyles.setProperty('--primary-color', e.target.dataset.color);
            favicon.href = 'favicon-y.ico';
            break;
        default:
            break;
    }
});