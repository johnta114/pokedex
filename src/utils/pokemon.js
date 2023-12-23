export const getAllPokemon = (url) => {
    // Promisは中に記述した処理が終わるまで待ってもらうこと
    return new Promise((resolve, reject) => {
        // データの取得
        fetch(url)
        // データの取得ができたらJSON形式に変換
        .then((res) => res.json())
        // JSON形式のデータをdataとして受け取り、resolve(data)でJSON形式のデータをreturnする
        .then((data) => resolve(data));
    });
};

export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            resolve(data);
        });
    });
};