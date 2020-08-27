var rangeValue = document.querySelector('.second-box input');
var leftValue = document.querySelector('.second-box h5 span');
var vvalue = document.querySelector('.second-box h5 span:nth-of-type(2)');
var another_value = document.querySelector('.box-data h2');


leftValue.innerHTML=rangeValue.value;
leftValue.textContent = rangeValue.value;
vvalue.textContent = 1000-rangeValue.value ;
another_value.innerHTML =  rangeValue.value

rangeValue.oninput= function() {
    leftValue.textContent = this.value;
    vvalue.textContent = 1000-this.value ;
    another_value.innerHTML =  this.value

    var color = this.value / 10;
    var main_color = 'inear-gradient(90deg,hsl(6, 100%, 80%)' +color + '%, hsl(335, 100%, 65%)'+ color + '%, hsl(228, 61%, 13%) 55%)';
    rangeValue.style.background = main_color
   
}
// rangeValue.addEventListener('mousemove' , ()=>{
//     // var color = rangeValue.value / 10;
//     // var main_color = 'inear-gradient(90deg,hsl(6, 100%, 80%)' +color + '%, hsl(335, 100%, 65%)'+ color + '%, hsl(228, 61%, 13%) 55%)';
//     // rangeValue.style.background = main_color

// })
