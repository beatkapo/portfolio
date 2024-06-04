const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const bromeraImage = document.getElementById('bromera-image');

const changueLanguage = async language=>{
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){

        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML= texts[section][value];
    }
    if(toggleIcon.src.includes('moon.svg')) {
        toggleText.textContent = texts['mode']['dark'];
    }else{
        toggleText.textContent = texts['mode']['light'];
    }
}

flagsElement.addEventListener('click', (e) => {
    changueLanguage(e.target.parentElement.dataset.language);
});

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'assets/icons/sun.svg';
        toggleText.textContent = 'Light Mode';
        bromeraImage.src = 'assets/images/logo-bromera.png';
    }else{
        toggleIcon.src = 'assets/icons/moon.svg';
        toggleText.textContent = 'Dark Mode';
        bromeraImage.src = 'assets/images/logo-bromera-dark.png';
    }
});

toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
});