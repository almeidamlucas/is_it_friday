var img = document.querySelector('img');
var day = new Date();
var week = day.getDay();


function changeColor(){
    var r = Math.random()*255;
    var g = Math.random()*255;
    var b = Math.random()*255;
    document.body.style.background = `rgb(${r},${g},${b})`;
    console.log(`${r}, ${g}, ${b}`);
}

/*For each day*/
if (week == 0){
    document.body.style.background = "rgb(213,196,56)"
    document.querySelector('h3').innerHTML = "No. It's Sunday 😎";
    img.src = 'img/happyy.jpg';
} else if (week == 1){ 
    document.body.style.background = "rgb(191,181,172)"
    document.querySelector('h3').innerHTML = "No. It's Monday 😭";
    img.src = 'img/pug.jpg';
} else if (week == 2){ 
    document.body.style.background = "rgb(234,232,233)"
    document.querySelector('h3').innerHTML = "No. It's Tuesday 😫";
    img.src = 'img/pcPug.jpg';
} else if (week == 3){
    document.body.style.background = "rgb(170,134,108)"
    document.querySelector('h3').innerHTML = "No. It's Wednesday 😑";
    img.src = 'img/wednesday.jpg';
} else if (week == 4){
    document.body.style.background = "rgb(178,144,96)"
    document.querySelector('h3').innerHTML = "No. It's Thursday 🤤";
    img.src = 'img/moly.jpg';
} else if (week == 5){
    setInterval(changeColor, 100);
    document.querySelector('h3').innerHTML = "YES! IT'S FRIDAY! 🤙 ";
    img.src = 'img/friday.jpg';
} else if (week == 6){
    document.body.style.background = "rgb(252,170,172)"
    document.querySelector('h3').innerHTML = "No. It's Saturday 😀"
    img.src = 'img/partyy.jpg'
}