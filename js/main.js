'use strict'

const countPush = document.querySelector('#count-push');
const countNum  = document.querySelector('#count-num');

let countData = [];

countPush.addEventListener('click', () => {
  countUp();
  saveLS();
})

function countUp() {
  let countDatum = countNum.textContent++;
  countData.push(countDatum);
}

function saveLS() {
  localStorage.setItem('数字', JSON.stringify(countData))
}