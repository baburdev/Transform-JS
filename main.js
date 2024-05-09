let button = document.querySelector('.btn');
let all = document.querySelector('.all');
let center = document.querySelector('.center');
let head = document.querySelector('.head');
let box = document.querySelector('.box');
let middle = document.querySelector('.middle');
let box_btn = document.querySelector('.box-btn');

button.addEventListener('click', () => {
    if(all.classList.contains('all-new')){
        all.classList.remove('all-new');
        button.classList.remove('btn-new');
        center.classList.remove('center-new');
        head.classList.remove('head-new');
        box.classList.remove('box-new');
        middle.classList.remove('middle-new');
        box_btn.classList.remove('box-btn-new');
        button.textContent = "Change it";
    } else {
        all.classList.add('all-new');
        button.classList.add('btn-new');
        center.classList.add('center-new');
        head.classList.add('head-new');
        box.classList.add('box-new');
        middle.classList.add('middle-new');
        box_btn.classList.add('box-btn-new');
        head.textContent = "Page design and text were changed";
        button.textContent = "Different";
    }
});

box_btn.addEventListener('click', () => {
    if(center.classList.contains('center-newx2')){
        center.classList.remove('center-newx2');
        box_btn.classList.remove('box-btnx2');
    } else {
        center.classList.add('center-newx2');
        box_btn.classList.add('box-btnx2');
        head.textContent = "WOW";
    }
});