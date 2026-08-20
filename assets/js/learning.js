/* 学習中・読了の教材と書籍。
   ★本を追加するときは、このファイルの LEARNING に1行足すだけ。
     トップページと職務経歴書の両方に反映される（他のファイルを直す必要はない）。
   state は "学習中" か "読了" のどちらか。
   note は書名の後ろに（）で添える補足。不要なら省略してよい。
   ジャンルの comment は、その領域についての一言。職務経歴書の書名リストの下に小さく出る。
   不要なジャンルは comment を省略してよい。

   表示は2種類あり、置き場所のHTML属性で切り替わる:
     <div data-learning></div>        … 縦リスト（職務経歴書用。コメント・学習中バッジも出す）
     <ul data-learning="band"></ul>   … 帯（トップ用。1ジャンル=1カードの横スクロール。読了だけバッジ） */

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

  function label(b) {
    return esc(b.title) + (b.note ? "（" + esc(b.note) + "）" : "");
  }

  function linked(b) {
    return b.url
      ? '<a href="' + esc(b.url) + '" rel="noopener">' + label(b) + "</a>"
      : label(b);
  }

  /* 書影のURL。Amazonの商品IDから作る（本の追加時に画像URLを書く必要はない） */
  function coverSrc(b) {
    var m = (b.url || "").match(/\/dp\/([A-Z0-9]{10})/i);
    return m ? "https://images-na.ssl-images-amazon.com/images/P/" + m[1] + ".09.LZZZZZZZ.jpg" : null;
  }

  /* 書影1枚ぶん。画像が無い教材（Web教材など）は題名入りの無地カバーにする */
  function cover(b) {
    var src = coverSrc(b);
    var inner = src
      ? '<img loading="lazy" src="' + src + '" alt="' + esc(b.title) + '">'
      : '<span class="cov-txt">' + label(b) + "</span>";
    return b.url
      ? '<a class="cov" href="' + esc(b.url) + '" rel="noopener" title="' + esc(b.title) + '">' + inner + "</a>"
      : '<span class="cov">' + inner + "</span>";
  }

  /* 職務経歴書用: 書影グリッド（フラット。ジャンルは各冊のタグで示す）。
     ジャンルに comment があれば棚の下に注記として出す */
  function listHtml() {
    var html = '<ul class="shelf">';
    var notes = "";
    for (var i = 0; i < window.LEARNING.length; i++) {
      var g = window.LEARNING[i];
      if (g.comment) {
        notes += '<p class="shelf-note">' + esc(g.genre) + ": " + esc(g.comment) + "</p>";
      }
      for (var j = 0; j < g.items.length; j++) {
        var b = g.items[j];
        html += "<li>" + cover(b)
          + '<span class="shelf-cap">' + esc(b.title) + "</span>"
          + '<span class="shelf-meta">' + esc(g.genre)
          + (b.state === "読了" ? '<b class="shelf-done">読了</b>' : "")
          + "</span></li>";
      }
    }
    return html + "</ul>" + notes;
  }

  /* トップ用: 書影の横一列（題名はカバー画像とtitle属性で伝える） */
  function bandHtml() {
    var html = "";
    for (var i = 0; i < window.LEARNING.length; i++) {
      var g = window.LEARNING[i];
      for (var j = 0; j < g.items.length; j++) {
        html += "<li>" + cover(g.items[j]) + "</li>";
      }
    }
    return html;
  }

  for (var k = 0; k < mounts.length; k++) {
    var mode = mounts[k].getAttribute("data-learning");
    mounts[k].innerHTML = mode === "band" ? bandHtml() : listHtml();
  }
})();

/* 「技術と使用歴」の年数を自動計算する（トップページ）。
   <span class="since" data-since="2024">2024〜</span> と書くと「2年（2024〜）」に置き換わる。
   毎年の手直しは不要（表示のたびに今年から計算する）。
   data-until="2025" で終了年を指定。data-dur="6ヶ月" で年数だけ手動指定（1年未満の場合など）。 */
(function () {
  var spans = document.querySelectorAll(".since[data-since]");
  if (!spans.length) { return; }
  var now = new Date().getFullYear();
  for (var i = 0; i < spans.length; i++) {
    var s = spans[i];
    var since = parseInt(s.getAttribute("data-since"), 10);
    var untilAttr = s.getAttribute("data-until");
    var until = untilAttr ? parseInt(untilAttr, 10) : null;
    var range = until
      ? (until === since ? String(since) : since + "〜" + until)
      : since + "〜";
    var dur = s.getAttribute("data-dur");
    if (!dur) {
      var years = (until || now) - since;
      dur = years < 1 ? "1年未満" : years + "年";
    }
    s.textContent = dur + "（" + range + "）";
  }
})();
