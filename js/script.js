const btnEl = document.querySelector('button');
const bodyEl = document.querySelector('body');

let color = ['linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)','linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))',' repeating-linear-gradient(red, yellow 10%, green 20%)','linear-gradient(red, yellow)','repeating-radial-gradient(red, yellow 10%, green 15%)',' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)','linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',' radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)','linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)','radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'];

bodyEl.style.background = 'pink';

btnEl.addEventListener('click', changeColorBackground);


function changeColorBackground(){
    let changeBg = parseInt(Math.random()*color.length);
    bodyEl.style.background = color[changeBg];
}














