// -----------------------------------------
// 12種類の「運勢」
// -----------------------------------------
const fortuneList = [
    "今日は新しい出会いに恵まれそう！積極的に動いてみて。",
    "思わぬラッキーが舞い込む日。いつもより少し冒険してみて。",
    "リラックスすると良いアイデアが生まれる日。",
    "身近な人に優しくできると幸運がアップ！",
    "努力が実りやすい一日。コツコツが鍵。",
    "素敵なヒントがSNSや会話から得られそう。",
    "今日は気分が乗りやすい日。やりたいことに挑戦して！",
    "少しの工夫が運を引き寄せる日。",
    "心がワクワクするような出来事が起こりそう。",
    "直感が冴えている日。気になったことをすぐ行動して吉。",
    "新しい情報から良い刺激を受けそう。",
    "周りのやさしさに気づける日。感謝を伝えると◎"
];

// -----------------------------------------
// 12種類の「ラッキーナンバー」
// -----------------------------------------
const luckyNumberList = [
    1, 3, 5, 7, 9, 11, 14, 18, 21, 24, 33, 42
];

// -----------------------------------------
// 12種類の「ラッキーアイテム」
// -----------------------------------------
const luckyItemList = [
    "赤い小物",
    "お気に入りの香水",
    "ミントガム",
    "青色のアクセサリー",
    "ハンカチ",
    "白いマグカップ",
    "スマホスタンド",
    "黒いペン",
    "ノート",
    "ネックレス",
    "クッキー",
    "音楽プレーヤー"
];


// -----------------------------------------
// ランダムに1つ取り出す関数
// -----------------------------------------
function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}


// -----------------------------------------
// ⭐ ページ読み込み時に12星座の結果を決めておく
//     （ページを更新するまで変わらない）
// -----------------------------------------
const zodiacNames = {
    "aries": "おひつじ座",
    "taurus": "おうし座",
    "gemini": "ふたご座",
    "cancer": "かに座",
    "leo": "しし座",
    "virgo": "おとめ座",
    "libra": "てんびん座",
    "scorpio": "さそり座",
    "sagittarius": "いて座",
    "capricorn": "やぎ座",
    "aquarius": "みずがめ座",
    "pisces": "うお座"
};

// ここに「星座ごとの今日の結果」を保存する
const todayResult = {};

// ページ読み込み時に1回だけランダム決定
Object.keys(zodiacNames).forEach(sign => {
    todayResult[sign] = {
        fortune: getRandom(fortuneList),
        number: getRandom(luckyNumberList),
        item: getRandom(luckyItemList)
    };
});
// ここで「今日の全12星座の結果」が完成！


// -----------------------------------------
// ⭐ 星座をクリックしたときにモーダルで表示
// -----------------------------------------
function showZodiacResult(sign) {
    const name = zodiacNames[sign];
    const result = todayResult[sign]; // ← 更新するまで固定

    document.getElementById("modal-title").textContent = name;
    document.getElementById("modal-fortune").textContent = result.fortune;
    document.getElementById("modal-number").textContent = result.number;
    document.getElementById("modal-item").textContent = result.item;

    // 画像
    document.getElementById("modal-zodiac-img").src = `./1x/${sign}.png`;

    // モーダル表示
    document.getElementById("modal-overlay").classList.remove("hidden");
    document.getElementById("modal").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("modal").classList.add("show");
    }, 10);
}


// -----------------------------------------
// ⭐ 星座クリックイベント
// -----------------------------------------
document.querySelectorAll(".zodiac").forEach(z => {
    z.addEventListener("click", () => {
        const sign = z.getAttribute("data-sign");
        showZodiacResult(sign);
    });
});


// -----------------------------------------
// ⭐ モーダルを閉じる
// -----------------------------------------
document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("show");
    setTimeout(() => {
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("modal-overlay").classList.add("hidden");
    }, 300);
});

// -----------------------------------------
// ⭐ 星を流すアニメーション（右上 → 左下）
// -----------------------------------------
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // ランダム位置
    const startX = Math.random() * window.innerWidth;
    const startY = -10;

    star.style.left = startX + "px";
    star.style.top = startY + "px";

    // 星のサイズ
    const size = Math.random() * 1.2 + 1.2;
    star.style.width = size + "px";
    star.style.height = size + "px";

    // 速度
    const duration = Math.random() * 2 + 3;
    star.style.animationDuration = duration + "s";
    star.style.setProperty("--fall-duration", duration + "s");

    // ⭐ 10%の確率でキラッと光る星
    if (Math.random() < 0.4) {
        star.classList.add("twinkle");
    }

    document.querySelector(".starry-background").appendChild(star);

    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

// 0.15秒ごとに星を生成
setInterval(createStar, 150);