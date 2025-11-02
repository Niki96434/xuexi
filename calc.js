'use strict';
// const parentElement = document.querySelector('.container');
const lineInput = document.getElementById('input');
const buttons = document.querySelectorAll('.button');
const equal = document.getElementById("equal");
const delItem = document.getElementById("delete");
const subtr = document.getElementById("subtr");
const multi = document.getElementById("multi");
const deduc = document.getElementById("deduc");
const adds = document.getElementById("add");
let numberX; // x
let numberY; // y
let numberQuestion; // question
let btnTextX;
let btnTextY;


function del() {
    lineInput.innerHTML = "";
}

function question() {
    numberQuestion = numberX + numberY;
    lineInput.innerHTML = numberQuestion;
}

function Calc() {  
        buttons.forEach(btn => {
        btn.addEventListener("click", function inputItem() {
                    btnTextX = btn.textContent; // 1е число
                    numberX = parseInt(btnTextX); // 1е число инт
                    lineInput.innerHTML += btnTextX; // выводим
                    btn.removeEventListener("click", inputItem)}) // удаляем эту функцию
        adds.addEventListener("click", () => {
                    lineInput.innerHTML = btnTextX + '+';
                    btn.addEventListener("click", () => {
                        btnTextY = btn.textContent; // 2е число
                        numberY = parseInt(btnTextY); 
                        lineInput.innerHTML += btnTextY;})
                    })
                })

        delItem.addEventListener("click", del);
        equal.addEventListener("click", question);
            }

Calc()