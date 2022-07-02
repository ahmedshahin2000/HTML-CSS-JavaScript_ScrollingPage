let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boot = document.getElementById("boot");
let shahin = document.querySelector(".shahin");

window.onscroll = function(){
    let value =scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boot.style.top = value + 'px';
    boot.style.left = value * 3 + 'px';
    shahin.style.fontSize = value + 'px';
    if(scrollY >= 67){
        shahin.style.fontSize = 67 + 'px';
        shahin.style.position = 'fixed';
        if(scrollY >= 441){
        shahin.style.display = 'none';
        }else{
        shahin.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(to top, #200016, transparent)';

        }
    }
}