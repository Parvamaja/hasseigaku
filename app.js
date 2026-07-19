/* ============================================================
 * 発生学クイズアプリ ロジック本体
 * データは questions_*.js から読み込む
 * ============================================================ */

/* 冊子メタ情報 */
const BOOKS = [
  { id: "star", label: "① 星マーク重点 模試", sub: "レジュメの★・テスト印を中心に30問" },
  { id: "organs", label: "② 各論模試", sub: "運動器・消化器・呼吸器・泌尿生殖器・頭頸部 21問" },
  { id: "field", label: "③ 分野別確認テスト", sub: "優先度順・全12分野 75問" },
  { id: "toc", label: "④ 目次準拠確認問題集", sub: "教科書 全19章に対応 56問" },
  { id: "exam", label: "⑤ 総仕上げ・臨床応用", sub: "並べ替え・臨床シナリオ・深掘り知識 90問" },
  { id: "mock", label: "⑥ 実践模試（オリジナル5回分）", sub: "過去問と同形式・各回35問、計175問" },
];

/* 優先度メタ情報 */
const PRI = {
  high: { label: "🔴 最優先" },
  mid: { label: "🟡 高" },
  low: { label: "⚪ 標準" },
};

/* 6冊分のデータベースファイル（questions_star.js 等）を結合 */
const QUESTIONS = [].concat(
  QUESTIONS_STAR,
  QUESTIONS_ORGANS,
  QUESTIONS_FIELD,
  QUESTIONS_TOC,
  QUESTIONS_EXAM,
  QUESTIONS_MOCK
);

/* ================================================================== */
/*  採点マーク（赤ペン◯✕）SVG                                         */
/* ================================================================== */
function hankoSVG(correct) {
  if (correct) {
    return '<svg class="hanko" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="44" ry="32" pathLength="1"/></svg>';
  }
  return '<svg class="hanko" viewBox="0 0 100 100">' +
    '<line class="l1" x1="24" y1="24" x2="76" y2="76" pathLength="1"/>' +
    '<line class="l2" x1="76" y1="24" x2="24" y2="76" pathLength="1"/>' +
    '</svg>';
}

/* ================================================================== */
/*  状態                                                              */
/* ================================================================== */
const state = {
  step: "cover", // cover | books | units | priority | quiz | result
  selectedBooks: new Set(),
  selectedUnits: new Set(),
  selectedPriorities: new Set(["high", "mid", "low"]),
  queue: [],
  index: 0,
  answered: null,
  score: { correct: 0, total: 0 },
  wrongIds: [],
  orderPool: [],
  orderBuilt: [],
  mc2Selected: [],
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function availableUnits() {
  const seen = [];
  const set = new Set();
  QUESTIONS.forEach((q) => {
    if (state.selectedBooks.has(q.book) && !set.has(q.unit)) {
      set.add(q.unit);
      seen.push(q.unit);
    }
  });
  return seen;
}

function filteredCount() {
  return QUESTIONS.filter(
    (q) => state.selectedBooks.has(q.book) && state.selectedUnits.has(q.unit) && state.selectedPriorities.has(q.priority)
  ).length;
}

function priorityCounts() {
  const base = QUESTIONS.filter((q) => state.selectedBooks.has(q.book) && state.selectedUnits.has(q.unit));
  return {
    high: base.filter((q) => q.priority === "high").length,
    mid: base.filter((q) => q.priority === "mid").length,
    low: base.filter((q) => q.priority === "low").length,
  };
}

function loadCurrentQuestion() {
  const q = state.queue[state.index];
  state.mc2Selected = [];
  if (q && q.type === "order") {
    state.orderPool = shuffle(q.items);
    state.orderBuilt = [];
  } else {
    state.orderPool = [];
    state.orderBuilt = [];
  }
}

/* ================================================================== */
/*  アクション                                                        */
/* ================================================================== */
function goStep(step) {
  state.step = step;
  render();
}

function toggleBook(id) {
  if (state.selectedBooks.has(id)) state.selectedBooks.delete(id);
  else state.selectedBooks.add(id);
  render();
}

function toggleUnit(u) {
  if (state.selectedUnits.has(u)) state.selectedUnits.delete(u);
  else state.selectedUnits.add(u);
  render();
}
function toggleUnitAt(i) {
  const u = availableUnits()[i];
  toggleUnit(u);
}

function togglePriority(p) {
  if (state.selectedPriorities.has(p)) state.selectedPriorities.delete(p);
  else state.selectedPriorities.add(p);
  render();
}

function selectAllUnits() {
  state.selectedUnits = new Set(availableUnits());
  render();
}
function clearAllUnits() {
  state.selectedUnits = new Set();
  render();
}

function goToUnitsStep() {
  state.selectedUnits = new Set();
  QUESTIONS.forEach((q) => { if (state.selectedBooks.has(q.book)) state.selectedUnits.add(q.unit); });
  state.step = "units";
  render();
}

function startQuizWithPool(pool) {
  state.queue = shuffle(pool);
  state.index = 0;
  state.score = { correct: 0, total: 0 };
  state.wrongIds = [];
  state.answered = null;
  loadCurrentQuestion();
  state.step = "quiz";
  render();
}

function startQuiz() {
  const pool = QUESTIONS.filter(
    (q) => state.selectedBooks.has(q.book) && state.selectedUnits.has(q.unit) && state.selectedPriorities.has(q.priority)
  );
  startQuizWithPool(pool);
}

function handleAnswerSelect(i) {
  if (state.answered) return;
  const q = state.queue[state.index];
  const correct = i === q.answer;
  state.answered = { selectedIndex: i, correct };
  state.score.total += 1;
  if (correct) state.score.correct += 1;
  else state.wrongIds.push(q.id);
  render();
}

function handleRecallReveal() {
  if (state.answered) return;
  state.answered = { revealedOnly: true };
  render();
}

function handleRecallScore(correct) {
  if (state.answered && state.answered.correct !== undefined) return;
  const q = state.queue[state.index];
  state.answered = { selectedIndex: null, correct, revealed: true };
  state.score.total += 1;
  if (correct) state.score.correct += 1;
  else state.wrongIds.push(q.id);
  render();
}

function pickOrderItem(poolIdx) {
  if (state.answered) return;
  const q = state.queue[state.index];
  const item = state.orderPool[poolIdx];
  state.orderBuilt.push(item);
  state.orderPool.splice(poolIdx, 1);
  if (state.orderBuilt.length === q.items.length) {
    const correct = state.orderBuilt.every((v, i) => v === q.items[i]);
    state.answered = { selectedIndex: null, correct };
    state.score.total += 1;
    if (correct) state.score.correct += 1;
    else state.wrongIds.push(q.id);
  }
  render();
}

function undoOrderItem(builtIdx) {
  if (state.answered) return;
  const item = state.orderBuilt[builtIdx];
  state.orderBuilt.splice(builtIdx, 1);
  state.orderPool.push(item);
  render();
}

function handleMc2Toggle(i) {
  if (state.answered) return;
  const q = state.queue[state.index];
  const idx = state.mc2Selected.indexOf(i);
  if (idx !== -1) {
    state.mc2Selected.splice(idx, 1);
    render();
    return;
  }
  if (state.mc2Selected.length >= 2) return;
  state.mc2Selected.push(i);
  if (state.mc2Selected.length === 2) {
    const sel = [...state.mc2Selected].sort();
    const ans = [...q.answer].sort();
    const correct = sel.length === ans.length && sel.every((v, k) => v === ans[k]);
    state.answered = { correct };
    state.score.total += 1;
    if (correct) state.score.correct += 1;
    else state.wrongIds.push(q.id);
  }
  render();
}

function nextQuestion() {
  if (state.index + 1 >= state.queue.length) {
    state.step = "result";
  } else {
    state.index += 1;
    state.answered = null;
    loadCurrentQuestion();
  }
  render();
}

function retryWrong() {
  const wrong = state.queue.filter((q) => state.wrongIds.includes(q.id));
  startQuizWithPool(wrong);
}

/* ================================================================== */
/*  レンダリング                                                      */
/* ================================================================== */
function render() {
  const app = document.getElementById("app");
  if (state.step === "cover") app.innerHTML = renderCover();
  else if (state.step === "books") app.innerHTML = renderBooks();
  else if (state.step === "units") app.innerHTML = renderUnits();
  else if (state.step === "priority") app.innerHTML = renderPriority();
  else if (state.step === "quiz") app.innerHTML = renderQuiz();
  else if (state.step === "result") app.innerHTML = renderResult();
}

function renderCover() {
  const bookRows = BOOKS.map(
    (b) => `<li><b>${b.label}</b><span> — ${b.sub}</span></li>`
  ).join("");
  return `
    <div class="eyebrow">EMBRYOLOGY DRILL</div>
    <h1 class="title">発生学<br>確認問題</h1>
    <p class="lede">これまで作成した6冊・全${QUESTIONS.length}問を、冊子→単元→優先度の順に絞り込んで
      1問1答形式で解けます。正解は赤丸、不正解は赤バツで採点されます。</p>
    <div class="book-list">
      <div class="label">収録冊子</div>
      <ol>${bookRows}</ol>
    </div>
    <button class="btn btn-primary" onclick="goStep('books')">はじめる →</button>
  `;
}

function renderBooks() {
  const items = BOOKS.map(
    (b) => `<button class="toggle ${state.selectedBooks.has(b.id) ? "on" : ""}" onclick="toggleBook('${b.id}')">
      <div class="t-title">${b.label}</div>
      <div class="t-sub">${b.sub}</div>
    </button>`
  ).join("");
  return `
    <div class="step-header">
      <button class="back" onclick="goStep('cover')">‹</button>
      <div><div class="step-label">STEP 1 / 3</div><div class="step-title">冊子を選択</div></div>
    </div>
    ${items}
    <button class="btn btn-primary" style="margin-top:8px" ${state.selectedBooks.size === 0 ? "disabled" : ""} onclick="goToUnitsStep()">次へ（単元を選ぶ） →</button>
  `;
}

function renderUnits() {
  const units = availableUnits();
  const items = units.map(
    (u, i) => `<button class="toggle ${state.selectedUnits.has(u) ? "on" : ""}" onclick="toggleUnitAt(${i})">
      <div class="t-title">${u}</div>
    </button>`
  ).join("");
  return `
    <div class="step-header">
      <button class="back" onclick="goStep('books')">‹</button>
      <div><div class="step-label">STEP 2 / 3</div><div class="step-title">出題単元を選択</div></div>
    </div>
    <div class="link-row">
      <button onclick="selectAllUnits()">全て選択</button>
      <button onclick="clearAllUnits()">全て解除</button>
    </div>
    <div class="unit-scroll">${items}</div>
    <button class="btn btn-primary" ${state.selectedUnits.size === 0 ? "disabled" : ""} onclick="goStep('priority')">次へ（優先度を選ぶ） →</button>
  `;
}

function renderPriority() {
  const pc = priorityCounts();
  const rows = ["high", "mid", "low"].map((p) => {
    const on = state.selectedPriorities.has(p);
    const tone = p === "high" ? "on-red" : p === "mid" ? "on-amber" : "on-gray";
    return `<button class="toggle ${on ? tone : ""}" onclick="togglePriority('${p}')">
      <div class="t-title">${PRI[p].label}</div>
      <div class="t-sub">該当 ${pc[p]}問</div>
    </button>`;
  }).join("");
  const fc = filteredCount();
  return `
    <div class="step-header">
      <button class="back" onclick="goStep('units')">‹</button>
      <div><div class="step-label">STEP 3 / 3</div><div class="step-title">優先度を選択</div></div>
    </div>
    ${rows}
    <div class="count-box" style="margin-top:18px">
      <div class="cb-label">この条件での出題数</div>
      <div class="cb-num">${fc} 問</div>
    </div>
    <button class="btn btn-accent" ${fc === 0 ? "disabled" : ""} onclick="startQuiz()">出題開始 →</button>
  `;
}

function renderQuiz() {
  const q = state.queue[state.index];
  if (!q) return `<p>問題がありません。設定をやり直してください。</p>`;
  const progress = (state.index / state.queue.length) * 100;
  const ans = state.answered;

  let body = "";

  if (q.type === "mc" || q.type === "tf") {
    body = q.options.map((opt, i) => {
      const isSelected = ans && ans.selectedIndex === i;
      const isCorrectOpt = ans && i === q.answer;
      let cls = "";
      if (ans) {
        if (isCorrectOpt) cls = "correct";
        else if (isSelected) cls = "wrong-selected";
        else cls = "dim";
      }
      return `<button class="opt-btn ${cls}" ${ans ? "disabled" : ""} onclick="handleAnswerSelect(${i})">
        ${opt}
        ${isSelected ? hankoSVG(ans.correct) : ""}
      </button>`;
    }).join("");
  } else if (q.type === "recall") {
    if (!ans) {
      body = `<button class="reveal-btn" onclick="handleRecallReveal()">答えを見る</button>`;
    } else {
      const scored = ans.correct !== undefined;
      body = `
        <div class="answer-box">
          <div class="a-label">解答</div>
          <div class="a-text">${q.answer}</div>
        </div>
        ${!scored ? `
          <div class="self-score">
            <button class="ss-ok" onclick="handleRecallScore(true)">○ できた</button>
            <button class="ss-ng" onclick="handleRecallScore(false)">✕ できなかった</button>
          </div>` : ""}
      `;
    }
  } else if (q.type === "order") {
    const builtChips = state.orderBuilt.map(
      (item, i) => `<button class="order-chip" ${ans ? "disabled" : ""} onclick="undoOrderItem(${i})">
        <span class="num">${i + 1}</span>${item}
      </button>`
    ).join("");
    const poolChips = state.orderPool.map(
      (item, i) => `<button ${ans ? "disabled" : ""} onclick="pickOrderItem(${i})">${item}</button>`
    ).join("");
    body = `
      <div class="order-hint">下のカードをタップして正しい順番に並べてください</div>
      <div class="order-built">
        ${state.orderBuilt.length === 0 ? '<span class="order-empty">（ここに順番に並びます）</span>' : builtChips}
        ${ans ? hankoSVG(ans.correct) : ""}
      </div>
      ${state.orderPool.length > 0 ? `<div class="order-pool">${poolChips}</div>` : ""}
      ${ans && !ans.correct ? `
        <div class="order-correct">
          <div class="oc-label">正しい順番</div>
          ${q.items.map((it, i) => (i + 1) + ". " + it).join(" → ")}
        </div>` : ""}
    `;
  } else if (q.type === "mc2") {
    const selCount = state.mc2Selected.length;
    body = `
      <div class="order-hint">2つ選択してください（${ans ? "回答済み" : "残り " + (2 - selCount) + " 個"}）</div>
      ${q.options.map((opt, i) => {
        const isSelected = state.mc2Selected.includes(i);
        const isCorrectOpt = ans && q.answer.includes(i);
        let cls = "";
        if (ans) {
          if (isCorrectOpt) cls = "correct";
          else if (isSelected) cls = "wrong-selected";
          else cls = "dim";
        } else if (isSelected) {
          cls = "correct";
        }
        return `<button class="opt-btn ${cls}" ${ans ? "disabled" : ""} onclick="handleMc2Toggle(${i})">
          ${opt}
          ${ans && isSelected ? hankoSVG(ans.correct) : ""}
        </button>`;
      }).join("")}
      ${ans && !ans.correct ? `
        <div class="order-correct">
          <div class="oc-label">正しい組み合わせ</div>
          ${q.answer.map((i) => q.options[i]).join(" ／ ")}
        </div>` : ""}
    `;
  }

  const nextBtn = (ans && ans.correct !== undefined)
    ? `<button class="btn btn-primary" style="margin-top:20px" onclick="nextQuestion()">${state.index + 1 >= state.queue.length ? "結果を見る" : "次の問題へ"} →</button>`
    : "";

  return `
    <div class="top-bar">
      <button onclick="goStep('priority')">⌂</button>
      <div class="counter mono">${state.index + 1} / ${state.queue.length}</div>
    </div>
    <div class="progress"><div style="width:${progress}%"></div></div>
    <div class="meta-row">
      <span class="chip chip-${q.priority}">${PRI[q.priority].label}</span>
      <span class="unit-name">${q.unit}</span>
    </div>
    <div class="q-card"><p>${q.q}</p></div>
    ${body}
    ${nextBtn}
  `;
}

function renderResult() {
  const pct = state.score.total ? Math.round((state.score.correct / state.score.total) * 100) : 0;
  const byPriority = ["high", "mid", "low"].map((p) => {
    const qs = state.queue.filter((q) => q.priority === p);
    const wrong = qs.filter((q) => state.wrongIds.includes(q.id)).length;
    return { p, total: qs.length, correct: qs.length - wrong };
  });
  const priRows = byPriority.filter((r) => r.total > 0).map((r) => `
    <div class="pri-row">
      <div class="pr-top">
        <span class="chip chip-${r.p}">${PRI[r.p].label}</span>
        <span class="pr-num">${r.correct} / ${r.total}</span>
      </div>
      <div class="pri-bar"><div class="bar-${r.p}" style="width:${r.total ? (r.correct / r.total) * 100 : 0}%"></div></div>
    </div>
  `).join("");

  const wrongQs = state.queue.filter((q) => state.wrongIds.includes(q.id));
  const wrongPanel = wrongQs.length > 0 ? `
    <div class="panel">
      <div class="p-label">間違えた問題（${wrongQs.length}問）</div>
      <ul class="wrong-list">
        ${wrongQs.map((q) => `<li><span class="w-unit">${q.unit}｜</span>${q.q}</li>`).join("")}
      </ul>
    </div>
  ` : "";

  const retryBtn = wrongQs.length > 0
    ? `<button class="btn btn-accent" onclick="retryWrong()">↺ 間違えた問題だけ再挑戦</button>`
    : "";

  return `
    <div class="result-score">
      <div class="rs-label">結果</div>
      <div class="rs-num">${state.score.correct}<small> / ${state.score.total}</small></div>
      <div class="rs-pct">正答率 ${pct}%</div>
    </div>
    <div class="panel">
      <div class="p-label">優先度別</div>
      ${priRows}
    </div>
    ${wrongPanel}
    <div style="display:flex; flex-direction:column; gap:10px; margin-top:6px;">
      ${retryBtn}
      <button class="btn btn-outline" onclick="startQuiz()">同じ条件でもう一度</button>
      <button class="btn btn-outline" onclick="goStep('books')">‹ 条件を変える</button>
      <button class="btn btn-ghost" onclick="goStep('cover')">⌂ トップへ戻る</button>
    </div>
  `;
}

/* 初期表示 */
render();
