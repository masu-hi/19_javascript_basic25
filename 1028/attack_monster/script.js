// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth; //offsetWidth 再描写　そのためのおまじない
  enemyArea.classList.add('hit');
}

// 状態（HP）
let hp = MAX_HP; //100
let hp2 = MAX_HP; //100

// モンスター
const enemy = document.querySelector('.enemyImg');

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');

// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

//効果音取得
const seHit = document.querySelector('#se-hit');
console.log(seHit);

const seDefeat = document.querySelector('#se-defeat');
console.log(seDefeat);

// ①ランダムダメージの実装

attackButton.addEventListener('click', function () {
  const damage = Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1) + DAMAGE_MIN)
  hp = hp - damage;
  hpText.textContent = hp; // テキストを書き換える

  // ②HP表示の更新ロジック修正（マイナス値の防止）

  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;

    // ③撃破時のエフェクト適用（enemy--fly または enemy--squashどちらでも良い）
    enemy.classList.add('enemy--fly');

    //断末魔
    seDefeat.play();

    // ④撃破後のボタン無効化処理
    attackButton.disabled = true;

    //変数に入れずに、そのまま . でつなぐ書き方でもOK
    // ⑤撃破メッセージの表示
    document.querySelector('.log').textContent = "モンスターを倒した！"
  }
  else {
    hpText.textContent = hp;
    hpBar.value = hp;

    // ⑥攻撃時の効果を追加
    shakeEnemy();
    seHit.currentTime = 0; //current = 現在
    seHit.play();
  }
});

// 効果音の追加（オプション）
// リスタート機能の実装（オプション）

//モンスター２用-----------------------------------------------------------

//震えるアニメーション関数の定義
function sheepEnemy() {
  const enemyArea = document.querySelector('.enemy2');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;
  enemyArea.classList.add('hit');
}

// モンスター
const enemy2 = document.querySelector('.enemyImg2');

// HP表示部分
const hphpText = document.querySelector('.hphpText span');
const hphpBar = document.querySelector('.hphpBar');

// 攻撃処理
const atButton = document.querySelector('.atBtn');

atButton.addEventListener('click', function () {
  const damage = Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1) + DAMAGE_MIN)
  hp2 = hp2 - damage;
  hphpText.textContent = hp2;

  if (hp2 <= 0) {
    hphpText.textContent = 0;
    hphpBar.value = 0;

    enemy2.classList.add('enemy--squash');

    seDefeat.play();

    atButton.disabled = true;

    document.querySelector('.loged').textContent = "モンスターを倒した！"
  }
  else {
    hphpText.textContent = hp2;
    hphpBar.value = hp2;

    sheepEnemy();
    seHit.currentTime = 0;
    seHit.play();
  }
});
