const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    answers: ['スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: ['MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: ['フリオニール', 'クラウド', 'ティーダ', 'セシル'],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const correct = '任天度DS'
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題
// 関数にまとめた方がわかりやすい
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  // HTMLのオブジェクトを撮ってくる場合は$マークをつけるとわかりやすい
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

// クイズの問題文を定義している
// 問題を実行する時に再度やってくれないとこ困る。
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題数があれば実行
    setupQuiz();
  } else {
    //問題数がなければ終了
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');

  }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    // ボタンクリックしたら正誤判定
    clickHandler(e);
  });
  handleIndex++;
};

