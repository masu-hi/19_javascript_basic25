//htmlから表示する要素を取得
const result = document.getElementById('.resultFetch');

const loadNews = function () {
    fetch('./news.json')
        .then(function (responce) {
            //json()メソッドでJSONデータをオブジェクトに変換して返す
            //１つ目の.then()の蹴り値が次の.then()の引数になる
            return responce.json();
        })
        .then(function (json) {
            // console.log(json);
            //バックティックでテンプレートリテラル
            result.innerHTML = '<p>${json.news}</p>';
        })
        .catch(function (error) {
            console.log(error);
        });
};

loadNews();


const Btn = document.querySelector('.loadAjaxBtn');
Btn.addEventListener('click', function () {
    //読み込み直し
    loadNews();

});
