'use strict'

// カウントを増やすボタン
const countPush = document.querySelector('#count-push');
//　カウントを表示する要素
const countNum  = document.querySelector('#count-num');
// ローカルストレージにカウントを格納する配列
let countData = [];


// カウントを増やすボタンをクリックしたときのイベント
countPush.addEventListener('click', countUp);

// ★イベントと関数を分離すると、「ボタンクリック」以外でもその処理を呼び出せるようになる
// ボタン以外の要素.addEventListener('クリック以外のイベント', countUp)
// のようにcountUpを使いまわすことができるのでコードの可読性・再利用性向上につながる

// カウントを増やす処理の関数
function countUp() {
  let countDatum = countNum.textContent++;
  countData.push(countDatum);
  localStorage.setItem('数字', JSON.stringify(countData))
  // ★データを保存する部分まで含めて「カウントを増やす処理」と考えることも可能
}