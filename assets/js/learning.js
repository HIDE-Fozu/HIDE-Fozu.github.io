/* 学習中・読了の教材と書籍。
   ★本を追加するときは、このファイルの LEARNING に1行足すだけ。
     トップページと職務経歴書の両方に反映される（他のファイルを直す必要はない）。
   state は "学習中" か "読了" のどちらか。
   note は書名の後ろに（）で添える補足。不要なら省略してよい。
   ジャンルの comment は、その領域についての一言。書くと書名リストの下に小さく出る。
   不要なジャンルは comment を省略してよい。 */

window.LEARNING = [
  { genre: "バックエンド基盤", items: [
    { title: "1週間でMySQLの基礎が学べる本", url: "https://www.amazon.co.jp/dp/4295012556", state: "学習中" },
    { title: "認証と認可Keycloak入門", url: "https://www.amazon.co.jp/dp/4865943226", state: "学習中" }
  ]},
  { genre: "Python", items: [
    { title: "FastAPI本格入門", url: "https://www.amazon.co.jp/dp/4297144476", state: "学習中" },
    { title: "Pythonブートキャンプ［データ分析コース］", url: "https://www.amazon.co.jp/dp/4297149311", state: "学習中" }
  ]},
  { genre: "設計・アーキテクチャ", items: [
    { title: "リファクタリング - 既存のコードを安全に改善する", url: "https://www.amazon.co.jp/dp/4274224546", state: "学習中" },
    { title: "マルチテナントSaaSアーキテクチャの構築", url: "https://www.amazon.co.jp/dp/4814401019", state: "学習中" },
    { title: "部下としてのAI", url: "https://www.amazon.co.jp/dp/4163921141", state: "読了" }
  ]},
  { genre: "Git", items: [
    { title: "Learn Git Branching", url: "https://learngitbranching.js.org/?locale=ja", note: "Web教材", state: "学習中" },
    { title: "Git入門 コマンドライン演習80", url: "https://www.amazon.co.jp/dp/4798066338", state: "学習中" }
  ]},
  { genre: "基本情報技術者", items: [
    { title: "令和03年 栢木先生の基本情報技術者教室", url: "https://www.amazon.co.jp/dp/B08P6Z2F4N", state: "読了" },
    { title: "令和06年 基本情報技術者 パーフェクトラーニング過去問題集", url: "https://www.amazon.co.jp/dp/4297138832", state: "学習中" }
  ]},
  { genre: "UI・デザイン", comment: "実装経験が少ない領域なので、重点的に読んでいます。", items: [
    { title: "プロセス・オブ・UI/UXデザイン", url: "https://www.amazon.co.jp/dp/4798185906", state: "学習中" },
    { title: "データ視覚化のデザイン", url: "https://www.amazon.co.jp/dp/4815604053", state: "学習中" },
    { title: "やってはいけないデザイン", url: "https://www.amazon.co.jp/dp/4798145939", state: "学習中" }
  ]},
  { genre: "VBA", items: [
    { title: "Excel VBA開発を超効率化するプログラミングテクニック", url: "https://www.amazon.co.jp/dp/4297140233", state: "学習中" }
  ]},
  { genre: "Unity", items: [
    { title: "Unity2019 C#スクリプト超入門", url: "https://www.amazon.co.jp/dp/4798058882", state: "読了" }
  ]},
  { genre: "マネジメント・心理学", items: [
    { title: "理不尽仕事論", url: "https://www.amazon.co.jp/dp/4163920935", state: "学習中" },
    { title: "認知バイアス 心に潜むふしぎな働き", url: "https://www.amazon.co.jp/dp/4065219515", state: "学習中" }
  ]}
];

(function () {
  var mounts = document.querySelectorAll("[data-learning]");
  if (!mounts.length || !window.LEARNING) { return; }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var html = "";
  for (var i = 0; i < window.LEARNING.length; i++) {
    var g = window.LEARNING[i];
    html += '<div class="lrn-row"><span class="lrn-genre">' + esc(g.genre) + "</span>";
    html += '<div class="lrn-right"><ul class="lrn-books">';
    for (var j = 0; j < g.items.length; j++) {
      var b = g.items[j];
      var label = esc(b.title) + (b.note ? "（" + esc(b.note) + "）" : "");
      var body = b.url
        ? '<a href="' + esc(b.url) + '" rel="noopener">' + label + "</a>"
        : label;
      var cls = b.state === "読了" ? "lrn-state done" : "lrn-state";
      html += "<li>" + body + '<span class="' + cls + '">' + esc(b.state) + "</span></li>";
    }
    html += "</ul>";
    if (g.comment) {
      html += '<p class="lrn-comment">' + esc(g.comment) + "</p>";
    }
    html += "</div></div>";
  }

  for (var k = 0; k < mounts.length; k++) {
    mounts[k].innerHTML = html;
  }
})();
