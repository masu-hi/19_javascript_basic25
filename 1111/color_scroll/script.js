// 1.オブジェクトで色を用意
// 3.4色制作して、配列にする

const settingColors =
    [{ r: 255, g: 0, b: 0 }, //赤
    { r: 0, g: 255, b: 0 }, //緑
    { r: 0, g: 0, b: 255 }, //青
    { r: 255, g: 255, b: 0 }]; //黄

// 5.documentの縦の長さ取得
const fullHeight = document.documentElement.scrollHeight;
console.log(fullHeight); //2400

// 8.スクロール量を計算
const viewHeight = document.documentElement.clientHeight;
const scrollable = fullHeight - viewHeight;


// 10.関数の定義 仮引数(num)
function colorChange(num) {
    //関数処理を書く
    bodyElm.style.backgroundColor = 'rgb(' + settingColors[num].r + ',' + settingColors[num].g + ',' + settingColors[num].b + ')';
}


// 2.オブジェクトの色をbodyの背景色にする
const bodyElm = document.body;
console.log(bodyElm);
bodyElm.style.backgroundColor = 'rgb(' + settingColors[0].r + ',' + settingColors[0].g + ',' + settingColors[0].b + ')';


// 4.スクロールするたびにイベント
window.addEventListener('scroll', function () {
    console.log('スクローーーーーーーーーーる');
    const scrollY = window.scrollY; //今開いているページの位置
    console.log(scrollY);

    // 7.スクロールを4分割
    // 9.変数scrollableを4分割
    // 6.1 / 4進んだら色が変わるようにする
    if (scrollY < scrollable / 4) {
        colorChange(0)
    }
    else if (scrollY < scrollable / 2) {
        colorChange(1)
    }
    else if (scrollY < (scrollable * 3) / 4) {
        colorChange(2)
    }
    else {
        //関数名() = 関数の呼び出し
        colorChange(3)
    }
})

//1200pxを超えたらボタンが出てくる
window.addEventListener('scroll', function () {
    const button = document.querySelector('.moveToTop');
    if (window.scrollY >= 1200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

//上に戻るボタン実装
const button = document.querySelector('.moveToTop');
button.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavier: 'smooth'
    });
});
