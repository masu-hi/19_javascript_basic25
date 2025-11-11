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
    // 6.1 / 4進んだら色が変わるようにする
    if (scrollY < scrollable / 4) {
        document.body.style.backgroundColor = 'rgb(' + settingColors[0].r + ',' + settingColors[0].g + ',' + settingColors[0].b + ')';
    }
    else if (scrollY < scrollable / 2) {
        document.body.style.backgroundColor = 'rgb(' + settingColors[1].r + ',' + settingColors[1].g + ',' + settingColors[1].b + ')';
    }
    else if (scrollY < (scrollable * 3) / 4) {
        document.body.style.backgroundColor = 'rgb(' + settingColors[2].r + ',' + settingColors[2].g + ',' + settingColors[2].b + ')';
    }
    else {
        document.body.style.backgroundColor = 'rgb(' + settingColors[3].r + ',' + settingColors[3].g + ',' + settingColors[3].b + ')';
    }


})



// 9.変数scrollableを4分割
// 10.関数の定義
// 11.関数の呼び出し（実行）の実引数
