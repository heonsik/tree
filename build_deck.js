const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
pres.author = "DOA Demo";
pres.title = "페르소나 기반 업무 위임 시스템 — 데모 MVP 개념";

const W = 13.33, H = 7.5;

// ---- Palette (Deep navy + teal, enterprise tech) ----
const NAVY = "0F2440";      // dark bg
const NAVY2 = "14304F";     // panel navy
const INK = "1E2937";       // body text
const MUTED = "64748B";     // muted
const TEAL = "12B5A5";      // accent
const TEALD = "0E8C81";
const BLUE = "2E6F95";
const ICE = "CFE3F2";
const LBG = "F4F7FA";       // light panel
const WHITE = "FFFFFF";
const CARD = "FFFFFF";
const LINEC = "D8E1EA";
const KFONT = "맑은 고딕";

const shadow = () => ({ type: "outer", color: "0F2440", blur: 8, offset: 3, angle: 90, opacity: 0.16 });

function bg(slide, color) { slide.background = { color }; }

function eyebrow(slide, text, x, y, color) {
  slide.addText(text.toUpperCase(), {
    x, y, w: 9, h: 0.35, margin: 0, fontFace: KFONT,
    fontSize: 11, bold: true, color: color || TEAL, charSpacing: 2, align: "left"
  });
}

function title(slide, text, x, y, color, w) {
  slide.addText(text, {
    x, y, w: w || 12.3, h: 0.9, margin: 0, fontFace: KFONT,
    fontSize: 30, bold: true, color: color || INK, align: "left", valign: "top"
  });
}

function card(slide, x, y, w, h, fill, opts) {
  opts = opts || {};
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: opts.radius || 0.1,
    fill: { color: fill }, line: opts.line || { color: LINEC, width: 1 },
    shadow: opts.shadow ? shadow() : undefined
  });
}

function circle(slide, x, y, d, fill, label, labelColor, fs) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { type: "none" } });
  if (label) slide.addText(label, {
    x, y, w: d, h: d, margin: 0, align: "center", valign: "middle",
    fontFace: KFONT, fontSize: fs || 16, bold: true, color: labelColor || WHITE
  });
}

function pageNum(slide, n) {
  slide.addText(String(n).padStart(2, "0"), {
    x: W - 1.0, y: H - 0.5, w: 0.6, h: 0.3, margin: 0,
    fontFace: KFONT, fontSize: 10, color: MUTED, align: "right"
  });
}

// =====================================================================
// SLIDE 1 — TITLE
// =====================================================================
let s = pres.addSlide(); bg(s, NAVY);
// subtle decorative concentric circles (motif, not a bar)
s.addShape(pres.shapes.OVAL, { x: 10.4, y: -1.6, w: 4.6, h: 4.6, fill: { color: "12345F" }, line: { type: "none" } });
s.addShape(pres.shapes.OVAL, { x: 11.3, y: -0.7, w: 2.8, h: 2.8, fill: { color: NAVY2 }, line: { type: "none" } });

s.addText("업무 관리 플랫폼 · 데모 MVP 개념 정리", {
  x: 0.9, y: 1.55, w: 11, h: 0.4, margin: 0, fontFace: KFONT,
  fontSize: 13, bold: true, color: TEAL, charSpacing: 2
});
s.addText("페르소나 기반\n업무 위임 시스템", {
  x: 0.85, y: 2.0, w: 11.5, h: 2.2, margin: 0, fontFace: KFONT,
  fontSize: 52, bold: true, color: WHITE, lineSpacing: 56, valign: "top"
});
s.addText("개인의 페르소나·기술스택을 조직 단위로 합성하고,\nLLM이 업무를 분석해 적합한 담당자에게 위임·추적하는 사내 업무 관리 페이지", {
  x: 0.9, y: 4.35, w: 10.8, h: 0.9, margin: 0, fontFace: KFONT,
  fontSize: 15, color: ICE, lineSpacing: 22
});
// org pills
const pills = ["팀", "그룹", "파트", "개인"];
pills.forEach((p, i) => {
  const px = 0.9 + i * 1.45;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: px, y: 5.55, w: 1.25, h: 0.5, rectRadius: 0.25,
    fill: { color: i === 0 ? TEAL : NAVY2 }, line: { color: i === 0 ? TEAL : BLUE, width: 1 } });
  s.addText(p, { x: px, y: 5.55, w: 1.25, h: 0.5, margin: 0, align: "center", valign: "middle",
    fontFace: KFONT, fontSize: 14, bold: true, color: i === 0 ? NAVY : ICE });
  if (i < pills.length - 1) s.addText("›", { x: px + 1.25, y: 5.55, w: 0.2, h: 0.5, margin: 0,
    align: "center", valign: "middle", fontFace: KFONT, fontSize: 16, bold: true, color: MUTED });
});
s.addText("내부 검토용  ·  2026-06-24", {
  x: 0.9, y: 6.75, w: 6, h: 0.35, margin: 0, fontFace: KFONT, fontSize: 11, color: MUTED
});

// =====================================================================
// SLIDE 2 — 목적 & 핵심 3축
// =====================================================================
s = pres.addSlide(); bg(s, WHITE);
eyebrow(s, "Purpose", 0.9, 0.55);
title(s, "무엇을, 왜 만드는가", 0.9, 0.9);

card(s, 0.9, 2.1, 5.0, 4.6, NAVY, { radius: 0.12, line: { type: "none" }, shadow: true });
s.addText("한 줄 정의", { x: 1.25, y: 2.45, w: 4.3, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 13, bold: true, color: TEAL });
s.addText("회사의 업무를 “사람의 역량(페르소나)”에 맞춰 자동으로 배분하고, 위임 → 처리 → 컨펌까지 한 화면에서 추적하는 업무 관리 도구.", {
  x: 1.25, y: 2.9, w: 4.35, h: 1.6, margin: 0, fontFace: KFONT, fontSize: 16, color: WHITE, lineSpacing: 26
});
s.addText("핵심 가치", { x: 1.25, y: 4.55, w: 4.3, h: 0.35, margin: 0, fontFace: KFONT, fontSize: 13, bold: true, color: TEAL });
s.addText([
  { text: "업무–사람 매칭을 사람이 일일이 찾지 않는다", options: { bullet: { code: "2022" }, color: ICE, breakLine: true } },
  { text: "조직 전체 역량이 데이터로 쌓인다", options: { bullet: { code: "2022" }, color: ICE, breakLine: true } },
  { text: "누가·어디까지 했는지 항상 보인다", options: { bullet: { code: "2022" }, color: ICE } },
], { x: 1.25, y: 4.95, w: 4.4, h: 1.6, margin: 0, fontFace: KFONT, fontSize: 13.5, lineSpacing: 22 });

const pillars = [
  ["1", "페르소나 자동 집계", "개인의 페르소나·기술스택이 파트→그룹→팀으로 합성되어 조직 역량 프로필이 만들어진다."],
  ["2", "LLM 담당자 추천", "자연어 업무 설명을 분석해 적합한 담당자를 추천하고, 복잡하면 업무를 자동 분할한다."],
  ["3", "위임·컨펌 트리", "하향으로 위임하고 상향으로 컨펌한다. 최초 생성자 확인 시 업무가 종료된다."],
];
pillars.forEach((p, i) => {
  const cy = 2.1 + i * 1.56;
  card(s, 6.2, cy, 6.2, 1.4, LBG, { radius: 0.1, line: { color: LINEC, width: 1 } });
  circle(s, 6.5, cy + 0.36, 0.68, TEAL, p[0], WHITE, 22);
  s.addText(p[1], { x: 7.45, y: cy + 0.22, w: 4.7, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 16, bold: true, color: INK });
  s.addText(p[2], { x: 7.45, y: cy + 0.62, w: 4.75, h: 0.7, margin: 0, fontFace: KFONT, fontSize: 12.5, color: MUTED, lineSpacing: 17 });
});
pageNum(s, 2);

// =====================================================================
// SLIDE 3 — 조직 4계층 (nested)
// =====================================================================
s = pres.addSlide(); bg(s, WHITE);
eyebrow(s, "Organization", 0.9, 0.55);
title(s, "조직 구조 — 4계층 포함 관계", 0.9, 0.9);

// nested rounded rectangles
const layers = [
  { x: 0.9, y: 2.05, w: 7.6, h: 4.7, fill: "E8EFF6", label: "팀 (Team)", lc: NAVY2, ly: 2.2 },
  { x: 1.45, y: 2.95, w: 6.5, h: 3.55, fill: "D6E6F2", label: "그룹 (Group)", lc: BLUE, ly: 3.1 },
  { x: 2.0, y: 3.85, w: 5.4, h: 2.5, fill: "BFE0DC", label: "파트 (Part)", lc: TEALD, ly: 4.0 },
  { x: 2.55, y: 4.7, w: 4.3, h: 1.45, fill: WHITE, label: "개인 (Individual)", lc: INK, ly: 4.82 },
];
layers.forEach(l => {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: l.x, y: l.y, w: l.w, h: l.h, rectRadius: 0.1,
    fill: { color: l.fill }, line: { color: WHITE, width: 1.5 } });
  s.addText(l.label, { x: l.x + 0.25, y: l.ly, w: 4, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 14, bold: true, color: l.lc });
});
s.addText("페르소나 + 기술스택 등록", { x: 2.75, y: 5.25, w: 3.8, h: 0.5, margin: 0, fontFace: KFONT, fontSize: 13, color: MUTED });

// right side note cards
const notes = [
  ["팀", "최상위 단위. 여러 그룹으로 구성. 업무 생성·최종 컨펌의 출발점."],
  ["그룹", "여러 파트로 구성. 팀에서 받은 업무를 파트로 위임."],
  ["파트", "여러 개인으로 구성. 실제 실행 단위에 가장 가까움."],
  ["개인", "유일하게 직접 정보를 입력하는 주체 — 페르소나·기술스택을 등록."],
];
notes.forEach((n, i) => {
  const ny = 2.05 + i * 1.2;
  card(s, 9.0, ny, 3.45, 1.02, LBG, { radius: 0.08, line: { color: LINEC, width: 1 } });
  s.addText(n[0], { x: 9.25, y: ny + 0.13, w: 3, h: 0.35, margin: 0, fontFace: KFONT, fontSize: 14, bold: true, color: TEALD });
  s.addText(n[1], { x: 9.25, y: ny + 0.46, w: 3.0, h: 0.5, margin: 0, fontFace: KFONT, fontSize: 11, color: MUTED, lineSpacing: 14 });
});
// scope callout: extensible, but MVP capped at 4 levels
card(s, 0.9, 6.92, 11.0, 0.48, "FFF3E0", { radius: 0.08, line: { color: "E0A040", width: 1 } });
s.addText([
  { text: "확장 가능  ", options: { bold: true, color: "B5781A" } },
  { text: "계층은 필요에 따라 더 늘릴 수 있다 — 단, 이번 MVP는 4계층(팀›그룹›파트›개인)까지만 구현한다.", options: { color: INK } },
], { x: 1.2, y: 6.92, w: 10.4, h: 0.48, margin: 0, valign: "middle", fontFace: KFONT, fontSize: 12 });
pageNum(s, 3);

// =====================================================================
// SLIDE 4 — 페르소나 집계 (bottom-up)
// =====================================================================
s = pres.addSlide(); bg(s, WHITE);
eyebrow(s, "Persona Aggregation", 0.9, 0.55);
title(s, "페르소나는 아래에서 위로 합성된다", 0.9, 0.9);
s.addText("개인이 입력한 페르소나·기술스택이 상위 단위의 페르소나를 자동 구성한다. (데모에서는 규칙 기반 Mock 합성)", {
  x: 0.9, y: 1.75, w: 11.5, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 13, color: MUTED });

const steps = [
  { t: "개인", s: "페르소나 + 기술스택\n직접 등록", c: WHITE, tc: INK, b: TEAL },
  { t: "파트 페르소나", s: "소속 개인들의\n역량을 합성", c: "E6F6F4", tc: INK, b: TEALD },
  { t: "그룹 페르소나", s: "소속 파트들의\n프로필을 합성", c: "DCEAF5", tc: INK, b: BLUE },
  { t: "팀 페르소나", s: "전체 그룹의\n역량 총합", c: NAVY, tc: WHITE, b: NAVY2 },
];
const bw = 2.7, gap = 0.42, startX = 0.95, by = 2.75, bh = 2.6;
steps.forEach((st, i) => {
  const x = startX + i * (bw + gap);
  card(s, x, by, bw, bh, st.c, { radius: 0.12, line: { color: st.c === WHITE ? LINEC : st.c, width: 1 }, shadow: true });
  circle(s, x + bw/2 - 0.34, by + 0.3, 0.68, st.b, String(i + 1), WHITE, 20);
  s.addText(st.t, { x: x + 0.15, y: by + 1.1, w: bw - 0.3, h: 0.5, margin: 0, align: "center", fontFace: KFONT, fontSize: 17, bold: true, color: st.tc });
  s.addText(st.s, { x: x + 0.15, y: by + 1.62, w: bw - 0.3, h: 0.8, margin: 0, align: "center", fontFace: KFONT, fontSize: 12.5, color: st.c === NAVY ? ICE : MUTED, lineSpacing: 16 });
  if (i < steps.length - 1) {
    s.addShape(pres.shapes.RIGHT_ARROW, { x: x + bw + 0.02, y: by + bh/2 - 0.18, w: gap - 0.04, h: 0.36, fill: { color: BLUE }, line: { type: "none" } });
  }
});
// two callouts: 자동 합성 vs 수동 보정
card(s, 0.95, 5.6, 5.75, 1.15, "E6F6F4", { radius: 0.1, line: { color: TEAL, width: 1 } });
s.addText("자동 합성 (bottom-up)", { x: 1.2, y: 5.78, w: 5.3, h: 0.35, margin: 0, fontFace: KFONT, fontSize: 13.5, bold: true, color: TEALD });
s.addText("하위에 변화가 생기면 상위 페르소나가 자동으로 갱신된다.", { x: 1.2, y: 6.16, w: 5.3, h: 0.5, margin: 0, fontFace: KFONT, fontSize: 12.5, color: INK, lineSpacing: 16 });
card(s, 6.85, 5.6, 5.5, 1.15, "FFF3E0", { radius: 0.1, line: { color: "E0A040", width: 1 } });
s.addText("수동 보정 (override)", { x: 7.1, y: 5.78, w: 5.0, h: 0.35, margin: 0, fontFace: KFONT, fontSize: 13.5, bold: true, color: "B5781A" });
s.addText("파트장·그룹장·팀장은 자기 단위의 페르소나를 직접 수정·보완할 수 있다.", { x: 7.1, y: 6.16, w: 5.05, h: 0.5, margin: 0, fontFace: KFONT, fontSize: 12.5, color: INK, lineSpacing: 16 });
pageNum(s, 4);

// =====================================================================
// SLIDE 5 — 전체 시나리오 흐름 (6 steps)
// =====================================================================
s = pres.addSlide(); bg(s, LBG);
eyebrow(s, "Scenario", 0.9, 0.55);
title(s, "업무 시나리오 — 전체 흐름 한눈에", 0.9, 0.9);

const flow = [
  ["1", "업무 생성", "팀장이 자연어로\n업무를 설명"],
  ["2", "LLM 추천", "팀 페르소나 분석 →\n담당자 추천·업무 분할"],
  ["3", "할당", "추천대로 또는\n수정해서 배정"],
  ["4", "하향 위임", "그룹장→파트장→\n파트원으로 전달"],
  ["5", "처리", "직접 처리 또는\n자동화 툴·Agent 할당"],
  ["6", "상향 컨펌", "완료 → 상위 컨펌 →\n팀장 확인 시 종료"],
];
const fw = 3.75, fh = 1.95, fgx = 0.42, fgy = 0.55, fsx = 0.95, fsy = 2.2;
flow.forEach((f, i) => {
  const col = i % 3, row = Math.floor(i / 3);
  const x = fsx + col * (fw + fgx), y = fsy + row * (fh + fgy);
  card(s, x, y, fw, fh, WHITE, { radius: 0.1, line: { color: LINEC, width: 1 }, shadow: true });
  circle(s, x + 0.28, y + 0.28, 0.6, i === 0 ? TEAL : NAVY2, f[0], WHITE, 18);
  s.addText(f[1], { x: x + 1.05, y: y + 0.32, w: fw - 1.2, h: 0.45, margin: 0, fontFace: KFONT, fontSize: 16.5, bold: true, color: INK });
  s.addText(f[2], { x: x + 0.32, y: y + 1.0, w: fw - 0.6, h: 0.8, margin: 0, fontFace: KFONT, fontSize: 12.5, color: MUTED, lineSpacing: 16 });
  if (col < 2) s.addShape(pres.shapes.RIGHT_ARROW, { x: x + fw + 0.04, y: y + fh/2 - 0.14, w: fgx - 0.08, h: 0.28, fill: { color: BLUE }, line: { type: "none" } });
});
// down arrow between rows
s.addShape(pres.shapes.DOWN_ARROW, { x: fsx + 2*(fw+fgx) + fw/2 - 0.14, y: fsy + fh + 0.08, w: 0.28, h: fgy - 0.16, fill: { color: BLUE }, line: { type: "none" } });
pageNum(s, 5);

// =====================================================================
// SLIDE 6 — STEP 1: 업무 생성 + LLM 추천
// =====================================================================
s = pres.addSlide(); bg(s, WHITE);
eyebrow(s, "Scenario · Step ①", 0.9, 0.55);
title(s, "① 업무 생성 → LLM 담당자 추천", 0.9, 0.9);

// left: input mock
card(s, 0.9, 2.1, 5.1, 4.55, NAVY, { radius: 0.12, line: { type: "none" }, shadow: true });
s.addText("업무 생성 (팀장)", { x: 1.2, y: 2.38, w: 4.5, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 14, bold: true, color: TEAL });
s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.2, y: 2.95, w: 4.5, h: 2.35, rectRadius: 0.06, fill: { color: "1B3556" }, line: { color: BLUE, width: 1 } });
s.addText("“다음 분기 신규 결제 모듈을 붙이고, 관련 랜딩페이지 개편과 데이터 마이그레이션까지 함께 진행해야 함.”", {
  x: 1.42, y: 3.18, w: 4.1, h: 1.9, margin: 0, fontFace: KFONT, fontSize: 14, color: WHITE, italic: true, lineSpacing: 24 });
s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.2, y: 5.55, w: 2.3, h: 0.6, rectRadius: 0.3, fill: { color: TEAL }, line: { type: "none" } });
s.addText("LLM 분석 요청 ▶", { x: 1.2, y: 5.55, w: 2.3, h: 0.6, margin: 0, align: "center", valign: "middle", fontFace: KFONT, fontSize: 13, bold: true, color: NAVY });

// arrow
s.addShape(pres.shapes.RIGHT_ARROW, { x: 6.12, y: 4.1, w: 0.6, h: 0.5, fill: { color: BLUE }, line: { type: "none" } });

// right: recommendation cards
s.addText("추천 결과 — 업무 자동 분할 + 담당자 매칭", { x: 6.85, y: 2.12, w: 6, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 14, bold: true, color: INK });
const recs = [
  ["분할 1", "결제 모듈 연동", "A그룹 › 결제파트 › 김결제", "Node·결제연동"],
  ["분할 2", "랜딩페이지 개편", "B그룹 › 프론트파트 › 이프론트", "React·UI"],
  ["분할 3", "데이터 마이그레이션", "A그룹 › 데이터파트 › 박데이터", "SQL·ETL"],
];
recs.forEach((r, i) => {
  const ry = 2.65 + i * 1.32;
  card(s, 6.85, ry, 5.55, 1.16, LBG, { radius: 0.08, line: { color: LINEC, width: 1 } });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.05, y: ry + 0.2, w: 0.95, h: 0.42, rectRadius: 0.21, fill: { color: TEALD }, line: { type: "none" } });
  s.addText(r[0], { x: 7.05, y: ry + 0.2, w: 0.95, h: 0.42, margin: 0, align: "center", valign: "middle", fontFace: KFONT, fontSize: 11, bold: true, color: WHITE });
  s.addText(r[1], { x: 8.15, y: ry + 0.16, w: 4.1, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 14.5, bold: true, color: INK });
  s.addText(r[2], { x: 7.05, y: ry + 0.66, w: 4.4, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 12, color: BLUE });
  s.addText(r[3], { x: 10.9, y: ry + 0.66, w: 1.4, h: 0.4, margin: 0, align: "right", fontFace: KFONT, fontSize: 11, color: MUTED });
});
s.addText("팀장은 추천을 그대로 할당하거나, 담당자를 직접 수정해 배정한다.", {
  x: 6.85, y: 6.55, w: 5.6, h: 0.35, margin: 0, fontFace: KFONT, fontSize: 12, italic: true, color: MUTED });
pageNum(s, 6);

// =====================================================================
// SLIDE 7 — STEP 2: 하향 위임 트리
// =====================================================================
s = pres.addSlide(); bg(s, WHITE);
eyebrow(s, "Scenario · Step ②", 0.9, 0.55);
title(s, "② 할당·위임 — 트리는 가이드, 배정은 자유롭게", 0.9, 0.9);
s.addText("기본은 트리(팀장→그룹장→파트장→파트원)지만, 단계를 건너뛰거나 자기 선에서 끝낼 수도 있다.", {
  x: 0.9, y: 1.72, w: 11.5, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 13, color: MUTED });

function node(x, y, w, h, t1, t2, fill, tc, sc) {
  card(s, x, y, w, h, fill, { radius: 0.1, line: { color: fill === WHITE ? LINEC : fill, width: 1 }, shadow: true });
  s.addText(t1, { x: x + 0.1, y: y + 0.14, w: w - 0.2, h: 0.38, margin: 0, align: "center", fontFace: KFONT, fontSize: 15, bold: true, color: tc });
  if (t2) s.addText(t2, { x: x + 0.1, y: y + 0.54, w: w - 0.2, h: 0.4, margin: 0, align: "center", fontFace: KFONT, fontSize: 11, color: sc || MUTED, lineSpacing: 13 });
}
function vline(x, y, h) { s.addShape(pres.shapes.LINE, { x, y, w: 0, h, line: { color: BLUE, width: 2 } }); }

// vertical tree (left half)
const nx = 2.35, nw = 2.7, ncx = nx + nw / 2;
node(nx, 2.25, nw, 0.95, "팀장", "업무 생성·최종 컨펌", NAVY, WHITE, ICE);
vline(ncx, 3.2, 0.22);
node(nx, 3.42, nw, 0.95, "그룹장", "파트로 위임", "DCEAF5", INK);
vline(ncx, 4.37, 0.22);
node(nx, 4.59, nw, 0.95, "파트장", "파트원에 배정", "BFE0DC", INK);
vline(ncx, 5.54, 0.22);
node(nx, 5.76, nw, 0.95, "파트원", "직접 처리 / Agent", WHITE, INK);

// dashed "level skip" shortcut on the left
s.addShape(pres.shapes.LINE, { x: 1.55, y: 2.725, w: nx - 1.55, h: 0, line: { color: "E0A040", width: 1.5, dashType: "dash" } });
s.addShape(pres.shapes.LINE, { x: 1.55, y: 2.725, w: 0, h: 3.51, line: { color: "E0A040", width: 1.5, dashType: "dash" } });
s.addShape(pres.shapes.RIGHT_ARROW, { x: 1.6, y: 6.09, w: nx - 1.6, h: 0.3, fill: { color: "E0A040" }, line: { type: "none" } });
s.addText("다이렉트\n할당", { x: 0.7, y: 4.0, w: 0.82, h: 0.9, margin: 0, align: "center", valign: "middle", fontFace: KFONT, fontSize: 11, bold: true, color: "B5781A", lineSpacing: 14 });

// right panel: 4 assignment patterns
const pats = [
  ["1", "트리 순차 위임", "그룹장 → 파트장 → 파트원으로 한 단계씩 내려보낸다 (기본형)."],
  ["2", "레벨 스킵 · 다이렉트", "팀장이 중간을 건너뛰고 파트원에게 바로 할당할 수 있다."],
  ["3", "부분 위임", "그룹장만 지정하고, 그 아래 누구에게 줄지는 그룹장이 결정한다."],
  ["4", "자기 선에서 처리", "받은 관리자가 하위에 내리지 않고 본인이 직접 해결·완료한다."],
];
const px0 = 6.7, pw = 5.7, ph = 1.0, pgap = 0.16, py0 = 2.35;
pats.forEach((p, i) => {
  const y = py0 + i * (ph + pgap);
  card(s, px0, y, pw, ph, LBG, { radius: 0.09, line: { color: LINEC, width: 1 } });
  circle(s, px0 + 0.25, y + 0.26, 0.5, i === 1 ? "E0A040" : TEALD, p[0], WHITE, 16);
  s.addText(p[1], { x: px0 + 0.95, y: y + 0.15, w: pw - 1.1, h: 0.38, margin: 0, fontFace: KFONT, fontSize: 15, bold: true, color: INK });
  s.addText(p[2], { x: px0 + 0.95, y: y + 0.52, w: pw - 1.15, h: 0.42, margin: 0, fontFace: KFONT, fontSize: 11.5, color: MUTED, lineSpacing: 15 });
});
pageNum(s, 7);

// =====================================================================
// SLIDE 8 — STEP 3: 상향 컨펌
// =====================================================================
s = pres.addSlide(); bg(s, LBG);
eyebrow(s, "Scenario · Step ③", 0.9, 0.55);
title(s, "③ 완료 & 상향 컨펌 — 위로 거슬러 마감", 0.9, 0.9);

const conf = [
  ["파트원", "결과 입력 후\n완료 처리", TEAL, WHITE, ICE],
  ["파트장", "결과 확인\n컨펌", "BFE0DC", INK, MUTED],
  ["그룹장", "취합 후\n컨펌", "DCEAF5", INK, MUTED],
  ["팀장", "최종 컨펌\n→ 업무 종료", NAVY, WHITE, ICE],
];
const cw = 2.75, cgap = 0.55, csx = 0.95, csy = 2.75, ch = 2.3;
conf.forEach((c, i) => {
  const x = csx + i * (cw + cgap);
  card(s, x, csy, cw, ch, c[2], { radius: 0.12, line: { color: c[2] === NAVY ? NAVY : c[2], width: 1 }, shadow: true });
  s.addText(c[0], { x: x + 0.1, y: csy + 0.35, w: cw - 0.2, h: 0.5, margin: 0, align: "center", fontFace: KFONT, fontSize: 18, bold: true, color: c[3] });
  s.addText(c[1], { x: x + 0.1, y: csy + 1.05, w: cw - 0.2, h: 0.8, margin: 0, align: "center", fontFace: KFONT, fontSize: 13, color: c[4], lineSpacing: 17 });
  if (i < conf.length - 1) s.addShape(pres.shapes.RIGHT_ARROW, { x: x + cw + 0.07, y: csy + ch/2 - 0.18, w: cgap - 0.14, h: 0.36, fill: { color: TEALD }, line: { type: "none" } });
});
s.addText("↑  상향 컨펌 (bottom-up confirm) — 각 관리자가 같은 방식으로 컨펌하며, 최초 생성자(팀장) 확인이 모두 끝나면 테스크가 종료된다.", {
  x: 0.95, y: 5.5, w: 11.5, h: 0.6, margin: 0, fontFace: KFONT, fontSize: 13.5, bold: true, color: TEALD, lineSpacing: 20 });
s.addText("업무 테스크는 동시에 여러 개가 각자의 위임·컨펌 트리를 갖고 병렬로 진행된다.", {
  x: 0.95, y: 6.2, w: 11.5, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 12.5, italic: true, color: MUTED });
pageNum(s, 8);

// =====================================================================
// SLIDE 9 — 팀장 모니터링 뷰
// =====================================================================
s = pres.addSlide(); bg(s, WHITE);
eyebrow(s, "Monitoring", 0.9, 0.55);
title(s, "팀장 관점 — 위임 트리·진행 현황 추적", 0.9, 0.9);
s.addText("팀장이 본인이 만든 테스크를 클릭하면, 어떤 업무가 어떤 트리를 타고 누구에게 갔는지와 각 진행 상태를 한눈에 본다.", {
  x: 0.9, y: 1.75, w: 11.5, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 13, color: MUTED });

// task tree mock with status badges
function badge(x, y, text, color) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 1.05, h: 0.4, rectRadius: 0.2, fill: { color }, line: { type: "none" } });
  s.addText(text, { x, y, w: 1.05, h: 0.4, margin: 0, align: "center", valign: "middle", fontFace: KFONT, fontSize: 11, bold: true, color: WHITE });
}
const rows = [
  [0, "테스크: 신규 결제 모듈 프로젝트", "팀장 · 김팀장", "진행중", BLUE],
  [1, "분할1 · 결제 모듈 연동", "A그룹 김결제", "완료", TEALD],
  [2, "└ Agent 처리 결과 컨펌 대기", "파트장", "대기", "C9912E"],
  [1, "분할2 · 랜딩페이지 개편", "B그룹 이프론트", "진행중", BLUE],
  [2, "└ 직접 처리 중 (60%)", "이프론트", "진행중", BLUE],
  [1, "분할3 · 데이터 마이그레이션", "A그룹 박데이터", "완료", TEALD],
];
const ry0 = 2.4, rh = 0.66;
rows.forEach((r, i) => {
  const y = ry0 + i * (rh + 0.08);
  const indent = r[0] * 0.55;
  card(s, 0.9 + indent, y, 9.1 - indent, rh, r[0] === 0 ? "EAF1F8" : LBG, { radius: 0.06, line: { color: LINEC, width: 1 } });
  s.addText(r[1], { x: 1.15 + indent, y: y + 0.08, w: 6.5 - indent, h: 0.5, margin: 0, valign: "middle", fontFace: KFONT, fontSize: r[0] === 0 ? 14 : 12.5, bold: r[0] === 0, color: INK });
  s.addText(r[2], { x: 7.5, y: y + 0.08, w: 2.0, h: 0.5, margin: 0, valign: "middle", align: "right", fontFace: KFONT, fontSize: 11, color: MUTED });
  badge(10.2, y + 0.13, r[3], r[4]);
});
// legend
card(s, 11.5, 2.4, 1.4, 2.0, LBG, { radius: 0.08, line: { color: LINEC, width: 1 } });
s.addText("상태", { x: 11.65, y: 2.55, w: 1.1, h: 0.3, margin: 0, fontFace: KFONT, fontSize: 11, bold: true, color: INK });
[["진행중", BLUE], ["완료", TEALD], ["대기", "C9912E"]].forEach((l, i) => {
  s.addShape(pres.shapes.OVAL, { x: 11.65, y: 2.95 + i * 0.45, w: 0.22, h: 0.22, fill: { color: l[1] }, line: { type: "none" } });
  s.addText(l[0], { x: 11.95, y: 2.9 + i * 0.45, w: 0.95, h: 0.32, margin: 0, valign: "middle", fontFace: KFONT, fontSize: 11, color: INK });
});
pageNum(s, 9);

// =====================================================================
// SLIDE 10 — 데모 범위 / 기술 결정
// =====================================================================
s = pres.addSlide(); bg(s, WHITE);
eyebrow(s, "Demo Scope", 0.9, 0.55);
title(s, "데모 MVP 범위 — 합의된 결정", 0.9, 0.9);

const decs = [
  ["산출물 형태", "개념 정리 문서 (이 PPTX)", "먼저 개념을 맞춘 뒤, 동작하는 웹 앱으로 구현"],
  ["LLM 추천", "Mock · 규칙 기반", "기술스택 매칭 등 규칙으로 추천 흉내. API 키 불필요·항상 동작"],
  ["조직/구성원", "가상 시드 데이터", "팀·그룹·파트·구성원 수십 명을 미리 채워 바로 시연"],
  ["데이터 저장", "브라우저 localStorage", "DB 없이 저장. 새로고침해도 유지·설치 부담 없음"],
];
decs.forEach((d, i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const x = 0.9 + col * 6.05, y = 2.1 + row * 2.15;
  card(s, x, y, 5.75, 1.95, LBG, { radius: 0.1, line: { color: LINEC, width: 1 }, shadow: true });
  s.addText(d[0], { x: x + 0.3, y: y + 0.25, w: 5.1, h: 0.4, margin: 0, fontFace: KFONT, fontSize: 13, bold: true, color: MUTED });
  s.addText(d[1], { x: x + 0.3, y: y + 0.66, w: 5.1, h: 0.5, margin: 0, fontFace: KFONT, fontSize: 19, bold: true, color: TEALD });
  s.addText(d[2], { x: x + 0.3, y: y + 1.25, w: 5.15, h: 0.6, margin: 0, fontFace: KFONT, fontSize: 12.5, color: INK, lineSpacing: 17 });
});
pageNum(s, 10);

// =====================================================================
// SLIDE 11 — 다음 단계 (closing)
// =====================================================================
s = pres.addSlide(); bg(s, NAVY);
s.addShape(pres.shapes.OVAL, { x: -1.4, y: 4.6, w: 4.4, h: 4.4, fill: { color: "12345F" }, line: { type: "none" } });
eyebrow(s, "Next", 0.9, 1.1, TEAL);
s.addText("이 개념이 맞나요?", { x: 0.9, y: 1.5, w: 11, h: 1.0, margin: 0, fontFace: KFONT, fontSize: 40, bold: true, color: WHITE });
s.addText("아래를 확인해 주시면, 동일한 구조로 동작하는 데모 웹 앱 구현을 시작하겠습니다.", {
  x: 0.9, y: 2.6, w: 11, h: 0.5, margin: 0, fontFace: KFONT, fontSize: 15, color: ICE });

const checks = [
  "조직 4계층(팀›그룹›파트›개인)과 페르소나 상향 합성 방향이 맞는지",
  "업무 흐름(생성→LLM추천→하향위임→처리→상향컨펌→종료)이 맞는지",
  "데모 범위(Mock LLM · 가상 시드 · localStorage)로 진행해도 되는지",
  "추가로 보고 싶은 화면·역할(예: 개인 페르소나 등록 화면)이 있는지",
];
checks.forEach((c, i) => {
  const y = 3.45 + i * 0.85;
  circle(s, 0.95, y, 0.5, TEAL, "✓", NAVY, 16);
  s.addText(c, { x: 1.65, y: y - 0.02, w: 10.6, h: 0.6, margin: 0, valign: "middle", fontFace: KFONT, fontSize: 15, color: WHITE, lineSpacing: 20 });
});
s.addText("내부 검토용  ·  2026-06-24", { x: 0.9, y: 7.0, w: 6, h: 0.35, margin: 0, fontFace: KFONT, fontSize: 11, color: MUTED });

pres.writeFile({ fileName: "업무관리_데모_개념정리.pptx" }).then(f => console.log("WROTE", f));
