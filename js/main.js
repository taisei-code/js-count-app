'use strict'

// カウントを増やすボタン
const countPush = document.querySelector('#count-push');
//　カウントを表示する要素
const countNum  = document.querySelector('#count-num');
// ローカルストレージにカウントを格納する配列
let countData = [];

countPush.addEventListener('click', () => {
  countUp();
  saveLS();
})

// カウントを増やす処理の関数
function countUp() {
  let countDatum = countNum.textContent++;
  countData.push(countDatum);
}

// ローカルストレージに配列に格納されたデータを保存する関数
function saveLS() {
  localStorage.setItem('数字', JSON.stringify(countData))
}