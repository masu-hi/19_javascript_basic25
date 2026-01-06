// ボタンを押す

//  .catch (function (error) {
//     console.log(',エラーが発生しました', error);
// });


//変数 = functionの書き方は、式という
//async式
// const loadWeather = async function () {
//     const result = document.querySelector(".box");
//     //読み込み中は「読み込み中」を表示
//     result.innerHTML = '読み込み中...';

//     try {

//         //awaitでfetchを持つ
//         const responce = await fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json');
//         //JSONを解析
//         const json = await responce.json();

//         const weather = json[0].timeSeries[0].areas[0].weathers[0];
//         const temp = json[0].timeSeries[2].areas[0].temps[0];
//         const tempMin = json[0].timeSeries[2].areas[0].temps[1];
//         const pop = json[0].timeSeries[1].areas[0].pops[0];
//         const popMin = json[0].timeSeries[1].areas[0].pops[1];


//         //テンプレートリテラル

//         result.innerHTML = `
//     <ul>
//         <li>天気：${weather}</li>
//         <li>最高気温：${temp}</li>
//         <li>最低気温：${tempMin}</li>
//         <li>降水確率（午前）：${pop}</li>
//         <li>降水確率（午後）：${popMin}</li>
//     </ul>
// `;
//     };
// }

// const button = document.querySelector('loadBtn');
// button.addEventListener('click', function () {
//     console.log('ボタンがクリックされました');
//     loadWeather();
// });



const loadBtn = document.querySelector('.loadBtn');
const weather = document.querySelector('#weather');

const loadWeather = async function () {
    weather.textContent = '読み込み中…';
    console.log('ボタンを押しました');
    // fetchでAPIにアクセス
    // 気象庁API（愛知県）
    try {
        const response = await fetch(
            'https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json'
        );
        const json = await response.json();

        // document.body.textContent = JSON.stringify(json);
        // JSONを解析
        console.log(json);
        console.log(json[0].timeSeries[0].areas[0].weathers[0]);
        console.log(json[0].timeSeries[2].areas[0].temps[0]);
        console.log(json[0].timeSeries[2].areas[0].temps[1]);
        console.log(json[0].timeSeries[1].areas[0].pops[0]);
        console.log(json[0].timeSeries[1].areas[0].pops[1]);

        // 今日の天気情報
        const today = json[0].timeSeries[0].areas[0];

        // 天気（晴れ/くもり/雨 など）
        const weatherText = today.weathers[0];

        // 気温データ
        const temps = json[0].timeSeries[2].areas[0];
        const maxTemp = temps.temps[1]; // 最高気温
        const minTemp = temps.temps[0]; // 最低気温

        // 降水確率
        const pops = json[0].timeSeries[1].areas[0].pops;
        const popMorning = pops[0];
        const popAfternoon = pops[1];

        // --- HTML に表示 ---
        weather.innerHTML = `<h2>今日の天気（愛知県西部）</h2>
        <p>天気：${weatherText}</p>
        <p>最高気温：${maxTemp}℃</p>
        <p>最低気温：${minTemp}℃</p>
        <p>降水確率（午前）：${popMorning}%</p>
        <p>降水確率（午後）：${popAfternoon}%</p>
      `;
    } catch (error) {
        console.log(error);
    }
};

loadBtn.addEventListener('click', function () {
    loadWeather();
});

// JSONを解析
// 必要な情報だけ取り出す
// HTMLに表示する
// 読み込み中は「読み込み中…」を表示
// async / awaitで書き直す