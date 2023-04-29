'use strict'

// カウントを増やすボタン
const countPush = document.querySelector('#count-push');
//　カウントを表示する要素
const countNum  = document.querySelector('#count-num');
// ★ローカルストレージに保存するのは配列ではなくただの数値でもOK
let count = 0;


// カウントを増やすボタンをクリックしたときのイベント
countPush.addEventListener('click', countUp);

// カウントを増やす処理の関数
function countUp() {

  // ★カウントを増やす
  count++;
  
  // ★カウントを画面とローカルストレージに保存
  countNum.textContent = count + "";
  localStorage.setItem('数字', count + "");

  // textContentもlocalStorageもどっちも文字列なので、
  // count + "" と書いて明示的に数値を文字列に変換している
  // （これをやらなくても数値は暗黙的に文字列に変換されるが）

}