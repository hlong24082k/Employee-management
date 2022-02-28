 //tao thanh menu ra vao
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

//
let card = document.querySelector('.card');
let cardBox = document.querySelector('.cardBox')
cardBox.onclick = function(){
    cardBox.classList.add('hd');
}
//
document.getElementById("infor1").onclick = function(){
    document.getElementById("display1").style.display = "block";
    document.getElementById("display2").style.display = "none";
    document.getElementById("display3").style.display = "none";
    document.getElementById("display4").style.display = "none";
};

document.getElementById("infor2").onclick = function(){
    document.getElementById("display2").style.display = "block";
    document.getElementById("display1").style.display = "none";
    document.getElementById("display3").style.display = "none";
    document.getElementById("display4").style.display = "none";
};

document.getElementById("infor3").onclick = function(){
    document.getElementById("display3").style.display = "block";
    document.getElementById("display2").style.display = "none";
    document.getElementById("display1").style.display = "none";
    document.getElementById("display4").style.display = "none";
};

document.getElementById("infor4").onclick = function(){
    document.getElementById("display4").style.display = "block";
    document.getElementById("display2").style.display = "none";
    document.getElementById("display3").style.display = "none";
    document.getElementById("display1").style.display = "none";
};
        
document.getElementById("close1").onclick = function(){
    document.getElementById("display1").style.display = "none";
    cardBox.classList.remove('hd');
};
document.getElementById("close2").onclick = function(){
    document.getElementById("display2").style.display = "none";
    cardBox.classList.remove('hd');
};
document.getElementById("close3").onclick = function(){
    document.getElementById("display3").style.display = "none";
    cardBox.classList.remove('hd');
};
document.getElementById("close4").onclick = function(){
    document.getElementById("display4").style.display = "none";
    cardBox.classList.remove('hd');
};
        