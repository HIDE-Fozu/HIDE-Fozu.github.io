/* 代表作ギャラリーの横送りボタン（1周ループ・自前アニメーション）。
   OSの「アニメーション効果OFF」設定やタブの表示状態に左右されないよう、
   requestAnimationFrameではなく経過時間ベースのタイマーで動かす */
document.querySelectorAll('.gallery-wrap').forEach(function (wrap) {
  var strip = wrap.querySelector('.gallery-grid');
  var prev = wrap.querySelector('.gallery-btn-prev');
  var next = wrap.querySelector('.gallery-btn-next');
  if (!strip || !prev || !next) return;

  var animId = 0;
  function animateTo(target, ms) {
    var id = ++animId;
    var start = strip.scrollLeft;
    var diff = target - start;
    if (!diff) return;
    var t0 = Date.now();
    function ease(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
    function tick() {
      if (id !== animId) return;           // 新しい操作が来たら中断
      var p = Math.min((Date.now() - t0) / ms, 1);
      strip.scrollLeft = start + diff * ease(p);
      if (p < 1) setTimeout(tick, 16);
    }
    tick();
  }

  function step() { return Math.round(strip.clientWidth * 0.8); }
  function max() { return strip.scrollWidth - strip.clientWidth; }

  next.addEventListener('click', function () {
    if (strip.scrollLeft >= max() - 2) {
      animateTo(0, 700);                   // 右端→先頭へ1周(写真が左端まで戻る)
    } else {
      animateTo(Math.min(strip.scrollLeft + step(), max()), 450);
    }
  });
  prev.addEventListener('click', function () {
    if (strip.scrollLeft <= 2) {
      animateTo(max(), 700);               // 先頭→右端へ回り込み
    } else {
      animateTo(Math.max(strip.scrollLeft - step(), 0), 450);
    }
  });
});
