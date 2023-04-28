'use strict'

const countPush = document.querySelector('#count-push');
const countNum  = document.querySelector('#count-num');

countPush.addEventListener('click', () => {
  countUp();
  saveCount();
})

function countUp() {
  countNum.textContent++;
}

function saveCount() {
  localStorage.setItem('数字')
}