/*
 * ただ単純に表示する
 */
// 表示する値
var data1 = [
    ["","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    ["鈴木", "○", "×", "△", "△", "○", "○", "×"],
    ["田中", "○", "×", "△", "○", "△", "×", "○"],
    ["佐藤", "○", "×", "△", "○", "×", "△", "○"],
    ["伊藤", "○", "×", "△", "×", "○", "○", "△"]
];

// handsontableの作成
var container1 = document.getElementById('grid1');
var hot = new Handsontable(container1, {data: data1});

/*
 * ただ単純に表示する
 */
// 表示する値
var data2 = [
    ["","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    ["鈴木", "○", "×", "△", "△", "○", "○", "×"],
    ["田中", "○", "×", "△", "○", "△", "×", "○"],
    ["佐藤", "○", "×", "△", "○", "×", "△", "○"],
    ["伊藤", "○", "×", "△", "×", "○", "○", "△"]
];


// handsontableの作成
var container2 = document.getElementById('grid2');
var hot = new Handsontable(container2, {
    /* オプション */
    // 表示データ
    data: data2,
    // 最大行数
    maxCols: 10,
    // 最大列数
    maxRows: 10
});


