// ボタンを押す

const loadWeather = function () {
    const result = document.querySelector(".box");

}

// fetchで APIにアクセス吐き出しているポイントをエンドポイント
//JSONをｈ
fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json')
    .then(function (responce) {
        //取得したJSONをオブジェクトに変換するメソッド.json()
        return responce.json();
    }).then(function (json) {
        // document.body.textContent = JSON.stringify(json);
        // 天気：晴れ
        console.log(json[0].timeSeries[0].areas[0].weathers[0]);
        // 最高気温：12℃
        console.log(json[0].timeSeries[2].areas[0].temps[0]);
        // 最低気温：12℃
        console.log(json[0].timeSeries[2].areas[0].temps[1]);
        // 降水確率（午前）：0 %
        console.log(json[0].timeSeries[1].areas[0].pops[0]);
        // 降水確率（午後）：0 %
        console.log(json[0].timeSeries[1].areas[0].pops[1]);

        const weather = json[0].timeSeries[0].areas[0].weathers[0];
        const temp = json[0].timeSeries[2].areas[0].temps[0];
        const tempMin = json[0].timeSeries[2].areas[0].temps[1];
        const pop = json[0].timeSeries[1].areas[0].pops[0];
        const popMin = json[0].timeSeries[1].areas[0].pops[1];

        result.innerHTML = `
    <ul>
        <li>天気：${weather}</li>
        <li>最高気温：${temp}</li>
        <li>最低気温：${tempMin}</li>
        <li>降水確率（午前）：${pop}</li>
        <li>降水確率（午後）：${popMin}</li>
    </ul>
`;
    })
    .catch(function (error) {
        console.log(',エラーが発生しました', error);
    });

const button = document.querySelector('loadBtn');
button.addEventListener('click', function () {
    console.log('ボタンがクリックされました');
    loadWeather();
});


// JSONを解析
// 必要な情報だけ取り出す
// HTMLに表示する
// 読み込み中は「読み込み中…」を表示
// async / awaitで書き直す