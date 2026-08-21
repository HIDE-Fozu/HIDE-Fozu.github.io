/* 学習中・読了の教材と書籍。
   ★本を追加するときは、このファイルの LEARNING に1行足すだけ。
     トップページと職務経歴書の両方に反映される（他のファイルを直す必要はない）。

   1冊の書き方:
     { title: "書名", url: "https://www.amazon.co.jp/dp/XXXXXXXXXX",
       state: "学習中", read: 72, pages: 251, comment: "ひとこと" }

   - state … "学習中" / "読了" / それ以外の文字（"辞書・索引" "参考" など）
       学習中 … read（読んだページ）と pages（総ページ数）を書くと、
                割合を自動計算して書影の上端に緑のゲージで出す。
                「100pまで読んだ」→ read: 100 に書き換えるだけ
       読了   … 書影の左上に緑バッジ
       その他 … 書いた文字がそのまま青緑バッジになる（辞書・索引、参考 など）
   - comment … 書影にマウスを乗せたときの吹き出しに出るひとこと。空欄 "" なら出ない
   - note    … 書名の後ろに（）で添える補足（Web教材など）。不要なら省略
   - 書影はAmazonのURLから自動で取得する（URLが無い本は題名入りの無地カバーになる） */

window.LEARNING = [
  { genre: "Git", items: [
    { title: "Git入門 コマンドライン演習80", url: "https://www.amazon.co.jp/dp/4798066338", state: "学習中", read: 72, pages: 328, comment: "Gitを基礎から学習中です。" },
    { title: "Learn Git Branching", url: "https://learngitbranching.js.org/?locale=ja", note: "Web教材", state: "学習中", read: 7, pages: 20, comment: "GitをコマンドとGUIで学習できるサイトです。" }
  ]},
  { genre: "Python", items: [
    { title: "FastAPI本格入門", url: "https://www.amazon.co.jp/dp/4297144476", state: "学習中", read: 72, pages: 251, comment: "業務で作成したアプリのフレームワーク学習" },
    { title: "Pythonブートキャンプ［データ分析コース］", url: "https://www.amazon.co.jp/dp/4297149311", state: "学習中", read: 48, pages: 546, comment: "Pythonを基礎から学習" }
  ]},
  { genre: "ビジネス書", items: [
    { title: "部下としてのAI", url: "https://www.amazon.co.jp/dp/4163921141", state: "読了", comment: "Microsoftのエンジニアさんを感じられる素晴らしい書籍でした" },
    { title: "理不尽仕事論", url: "https://www.amazon.co.jp/dp/4163920935", state: "学習中", comment: "マネジメントで参考にしている坂井風太さんの書籍です。" }
  ]},
  { genre: "UI・デザイン", comment: "実装経験が少ない領域なので、重点的に読んでいます。", items: [
    { title: "プロセス・オブ・UI/UXデザイン", url: "https://www.amazon.co.jp/dp/4798185906", state: "辞書・索引", comment: "スマホUIの言語的理解を深める資料" },
    { title: "データ視覚化のデザイン", url: "https://www.amazon.co.jp/dp/4815604053", state: "辞書・索引", comment: "数値をグラフ化する時の参考資料" },
    { title: "やってはいけないデザイン", url: "https://www.amazon.co.jp/dp/4798145939", state: "辞書・索引", comment: "デザインの基礎的な参考資料" }
  ]},
  { genre: "設計", items: [
    { title: "リファクタリング - 既存のコードを安全に改善する", url: "https://www.amazon.co.jp/dp/4274224546", state: "学習中", comment: "コードレビューの手法を学んでいます。面白いです。" },
    { title: "認証と認可Keycloak入門", url: "https://www.amazon.co.jp/dp/4865943226", state: "学習中", comment: "" },
    { title: "マルチテナントSaaSアーキテクチャの構築", url: "https://www.amazon.co.jp/dp/4814401019", state: "参考", comment: "マルチテナント方式の参考例として" }
  ]},
  { genre: "FE試験", items: [
    { title: "令和03年 栢木先生の基本情報技術者教室", url: "https://www.amazon.co.jp/dp/B08P6Z2F4N", state: "読了", comment: "部分的な興味はあるものの幅の広さに挫折" },
    { title: "令和06年 基本情報技術者 パーフェクトラーニング過去問題集", url: "https://www.amazon.co.jp/dp/4297138832", state: "学習中", comment: "改めて学習中、9月6日に試験を受けます。" }
  ]},
  { genre: "DB", items: [
    { title: "1週間でMySQLの基礎が学べる本", url: "https://www.amazon.co.jp/dp/4295012556", state: "学習中", read: 58, pages: 312, comment: "" }
  ]},
  { genre: "その他言語", items: [
    { title: "Excel VBA開発を超効率化するプログラミングテクニック", url: "https://www.amazon.co.jp/dp/4297140233", state: "学習中", read: 144, pages: 380, comment: "VBAでの開発時にモジュール管理方法などを学びました" },
    { title: "Unity2019 C#スクリプト超入門", url: "https://www.amazon.co.jp/dp/4798058882", state: "読了", comment: "スマホゲームであればGUIで作成できることを学びましたが、自分はもっとクオリティの高いゲームが作りたいと考え、先へは進みませんでした。" }
  ]},
  { genre: "心理学・哲学", items: [
    { title: "認知バイアス 心に潜むふしぎな働き", url: "https://www.amazon.co.jp/dp/4065219515", state: "読了", comment: "統計的に証明された思考の偏り＝バイアスと、「人にはバイアスがある」ということ自体がバイアスである。という学びがあった本です。" },
    { title: "ショーペンハウアー全集1～3", state: "読了", comment: "哲学書。感覚を言語化することで自己理解が深まります。\n特に好きなのは理性と感情の間に「悟性」があるという話です。" }
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

  /* 読んだページ数から進行度(%)を計算する。データが無ければ null */
  function percent(b) {
    if (typeof b.read === "number" && typeof b.pages === "number" && b.pages > 0) {
      return Math.max(0, Math.min(100, Math.round(b.read / b.pages * 100)));
    }
    return null;
  }

  /* 状態の一文（吹き出し用） */
  function stateText(b) {
    if (b.state !== "学習中") { return b.state; }
    var p = percent(b);
    if (p !== null) { return "読書中 " + b.read + "/" + b.pages + "（" + p + "%）"; }
    return "学習中";
  }

  /* 書影のURL。Amazonの商品IDから作る */
  function coverSrc(b) {
    var m = (b.url || "").match(/\/dp\/([A-Z0-9]{10})/i);
    return m ? "https://images-na.ssl-images-amazon.com/images/P/" + m[1] + ".09.LZZZZZZZ.jpg" : null;
  }

  /* 書影1枚ぶん。読了=緑バッジ / 学習中でページ入力あり=上端ゲージ / その他の状態=青緑バッジ */
  function cover(b, genre) {
    var src = coverSrc(b);
    var inner = src
      ? '<img loading="lazy" src="' + src + '" alt="' + esc(b.title) + '">'
      : '<span class="cov-txt">' + label(b) + "</span>";
    var p = percent(b);
    if (b.state === "読了") {
      inner += '<span class="cov-badge">読了</span>';
    } else if (b.state !== "学習中") {
      inner += '<span class="cov-badge cov-badge-ref">' + esc(b.state) + "</span>";
    } else if (p !== null) {
      inner += '<span class="cov-gauge"><span class="cov-gauge-fill" style="width:' + p + '%"></span></span>';
    }
    var tipAttrs = ' data-tip-title="' + esc(b.title) + '"'
      + ' data-tip-state="' + (genre ? esc(genre) + " ・ " : "") + esc(stateText(b)) + '"'
      + (b.comment ? ' data-tip-comment="' + esc(b.comment).replace(/\n/g, "&#10;") + '"' : "");
    return b.url
      ? '<a class="cov" href="' + esc(b.url) + '" rel="noopener"' + tipAttrs + ">" + inner + "</a>"
      : '<span class="cov"' + tipAttrs + ">" + inner + "</span>";
  }

  /* 職務経歴書用: 1冊=1行のフラットなリスト。行頭にジャンルタグ。
     ジャンルでの区分け（見出し・列分け）はしない。comment はリストの下の注記 */
  function listHtml() {
    var html = '<ul class="booklist">';
    var notes = "";
    for (var i = 0; i < window.LEARNING.length; i++) {
      var g = window.LEARNING[i];
      if (g.comment) {
        notes += '<p class="shelf-note">' + esc(g.genre) + ": " + esc(g.comment) + "</p>";
      }
      for (var j = 0; j < g.items.length; j++) {
        var b = g.items[j];
        var p = percent(b);
        var st = b.state === "学習中"
          ? (p !== null ? "学習中 " + p + "%" : "学習中")
          : b.state;
        html += '<li><span class="book-tag">' + esc(g.genre) + "</span>";
        html += b.url
          ? '<a class="book-title" href="' + esc(b.url) + '" rel="noopener">' + label(b) + "</a>"
          : '<span class="book-title">' + label(b) + "</span>";
        html += '<span class="book-state' + (b.state === "読了" ? " done" : "") + '">'
          + esc(st) + "</span></li>";
      }
    }
    return html + "</ul>" + notes;
  }

  /* トップ用: ジャンルのタグごとに書影をまとめた横一列 */
  function bandHtml() {
    var html = "";
    for (var i = 0; i < window.LEARNING.length; i++) {
      var g = window.LEARNING[i];
      html += '<li class="band-group"><span class="book-tag">' + esc(g.genre) + "</span>";
      html += '<span class="band-covers">';
      for (var j = 0; j < g.items.length; j++) {
        html += cover(g.items[j], g.genre);
      }
      html += "</span></li>";
    }
    return html;
  }

  for (var k = 0; k < mounts.length; k++) {
    var mode = mounts[k].getAttribute("data-learning");
    mounts[k].innerHTML = mode === "band" ? bandHtml() : listHtml();
  }

  /* 書影の吹き出し（題名・進行度・コメント）。
     横スクロールの帯の中では普通のツールチップが切れるため、body直下に固定表示する */
  var tip = document.createElement("div");
  tip.className = "cov-tip";
  tip.hidden = true;
  document.body.appendChild(tip);

  document.addEventListener("mouseover", function (e) {
    var c = e.target && e.target.closest ? e.target.closest("[data-tip-title]") : null;
    if (!c) {
      tip.hidden = true;
      return;
    }
    tip.textContent = "";
    var t = document.createElement("b");
    t.textContent = c.getAttribute("data-tip-title");
    tip.appendChild(t);
    var s = document.createElement("span");
    s.className = "cov-tip-state";
    s.textContent = c.getAttribute("data-tip-state") || "";
    tip.appendChild(s);
    var cm = c.getAttribute("data-tip-comment");
    if (cm) {
      var p = document.createElement("span");
      p.className = "cov-tip-comment";
      p.textContent = cm;
      tip.appendChild(p);
    }
    tip.hidden = false;
    var r = c.getBoundingClientRect();
    var x = Math.round(r.left + r.width / 2 - tip.offsetWidth / 2);
    x = Math.max(8, Math.min(x, window.innerWidth - tip.offsetWidth - 8));
    var y = Math.round(r.bottom + 8);
    if (y + tip.offsetHeight > window.innerHeight - 8) {
      y = Math.round(r.top - tip.offsetHeight - 8);
    }
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  });
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
