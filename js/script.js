window.addEventListener('load', () => loadDayOfTheWeek());

const loadDayOfTheWeek = () => {
    const image = document.querySelector('img');
    const date = new Date();
    const dayOfWeek = date.getDay();
    const bodySelector = document.body;
    const answerPhraseSelector = document.querySelector('h3');

    if (dayOfWeek === 0) {
        bodySelector.style.background = 'rgb(213,196,56)';
        answerPhraseSelector.innerHTML = "No. It's Sunday 😎";
        image.src = 'img/happyy.jpg';
    } else if (dayOfWeek === 1) {
        bodySelector.style.background = 'rgb(191,181,172)';
        answerPhraseSelector.innerHTML = "No. It's Monday 😭";
        image.src = 'img/pug.jpg';
    } else if (dayOfWeek === 2) {
        bodySelector.style.background = 'rgb(234,232,233)';
        answerPhraseSelector.innerHTML = "No. It's Tuesday 😫";
        image.src = 'img/pcPug.jpg';
    } else if (dayOfWeek === 3) {
        bodySelector.style.background = 'rgb(170,134,108)';
        answerPhraseSelector.innerHTML = "No. It's Wednesday 😑";
        image.src = 'img/wednesday.jpg';
    } else if (dayOfWeek === 4) {
        bodySelector.style.background = 'rgb(178,144,96)';
        answerPhraseSelector.innerHTML = "No. It's Thursday 🤤";
        image.src = 'img/moly.jpg';
        debugger
    } else if (dayOfWeek === 5) {
        setInterval(getRandomBackgroundColor, 100);
        answerPhraseSelector.innerHTML = "YES! IT'S FRIDAY! 🤙";
        image.src = 'img/friday.jpg';
    } else if (dayOfWeek === 6) {
        bodySelector.style.background = 'rgb(252,170,172)';
        answerPhraseSelector.innerHTML = "No. It's Saturday 😀";
        image.src = 'img/partyy.jpg';
    }

}

const getRandomBackgroundColor = () => {
    var r = Math.random()*255;
    var g = Math.random()*255;
    var b = Math.random()*255;
    document.body.style.background = `rgb(${r},${g},${b})`;
}
