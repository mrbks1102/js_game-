const question = 'ゲーム市場、最も売れたゲーム機は？';
const answers = [
  'スーファミ',
  'プレイステーション',
  '任天度DS',
  '任天堂64'
];

const correct = '任天度DS'

const $button = document.getElementsByTagName('button');

// クイズの問題
// 関数にまとめた方がわかりやすい
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  // HTMLのオブジェクトを撮ってくる場合は$マークをつけるとわかりやすい
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();





$button[0].addEventListener('click', (e) => {
  console.log(e);
  // ボタンクリックしたら正誤判定
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});

$button[1].addEventListener('click', (e) => {
  // ボタンクリックしたら正誤判定
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});

$button[2].addEventListener('click', (e) => {
  // ボタンクリックしたら正誤判定
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});

$button[3].addEventListener('click', (e) => {
  // ボタンクリックしたら正誤判定
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});
