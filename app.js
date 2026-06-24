const org = {
  team: {
    id: "team-platform",
    name: "플랫폼 운영팀",
    leaderId: "u-team-lead",
    persona:
      "고객 업무 안정성과 자동화 생산성을 함께 책임지는 팀. 장애 대응, 보안, 데이터 기반 운영 개선을 중요하게 본다.",
  },
  people: [
    {
      id: "u-team-lead",
      name: "한도윤",
      role: "팀장",
      level: "team",
      groupId: null,
      partId: null,
      persona: "사업 우선순위와 조직 역량을 연결해 업무를 설계하고 최종 승인한다.",
      skills: ["업무 설계", "리스크 관리", "우선순위 조정", "성과 관리"],
      tools: ["Task Console", "Executive Report Agent"],
    },
    {
      id: "u-g-a-lead",
      name: "이가람",
      role: "A그룹장",
      level: "group",
      groupId: "g-a",
      partId: null,
      persona: "자동화와 백엔드 운영을 묶어 고객 장애 대응 체계를 설계한다.",
      skills: ["백엔드", "운영 자동화", "장애 대응", "아키텍처"],
      tools: ["Incident Agent", "Runbook Bot"],
    },
    {
      id: "u-g-b-lead",
      name: "최서준",
      role: "B그룹장",
      level: "group",
      groupId: "g-b",
      partId: null,
      persona: "데이터 분석, 보안, 리포팅을 기반으로 운영 의사결정을 돕는다.",
      skills: ["데이터 분석", "보안", "리포팅", "거버넌스"],
      tools: ["Insight Agent", "Security Checker"],
    },
    {
      id: "u-p-a1-lead",
      name: "박민재",
      role: "자동화 파트장",
      level: "part",
      groupId: "g-a",
      partId: "p-a1",
      persona: "반복 업무를 agent와 워크플로우로 자동화하는 실행형 리더.",
      skills: ["Python", "Agent", "워크플로우", "API 연동"],
      tools: ["Flow Builder", "Agent Runner"],
    },
    {
      id: "u-p-a2-lead",
      name: "정하린",
      role: "플랫폼 파트장",
      level: "part",
      groupId: "g-a",
      partId: "p-a2",
      persona: "서비스 안정성, 배포, 관측 가능성을 책임지는 플랫폼 리더.",
      skills: ["Kubernetes", "SRE", "CI/CD", "모니터링"],
      tools: ["Deploy Agent", "Observability Bot"],
    },
    {
      id: "u-p-b1-lead",
      name: "윤태오",
      role: "데이터 파트장",
      level: "part",
      groupId: "g-b",
      partId: "p-b1",
      persona: "로그와 지표를 분석해 운영 인사이트와 리포트를 만든다.",
      skills: ["SQL", "로그 분석", "대시보드", "리포팅"],
      tools: ["Query Agent", "Report Bot"],
    },
    {
      id: "u-p-b2-lead",
      name: "오유진",
      role: "보안 파트장",
      level: "part",
      groupId: "g-b",
      partId: "p-b2",
      persona: "보안 정책, 접근 제어, 개인정보 리스크를 점검한다.",
      skills: ["보안 검토", "정책", "감사", "위협 모델링"],
      tools: ["Policy Agent", "Audit Bot"],
    },
    {
      id: "u-a1-1",
      name: "김나은",
      role: "자동화 엔지니어",
      level: "member",
      groupId: "g-a",
      partId: "p-a1",
      persona: "Python과 agent를 사용해 반복 처리 자동화를 빠르게 만든다.",
      skills: ["Python", "Agent", "API 연동", "자동화"],
      tools: ["Python Agent", "RPA Runner"],
    },
    {
      id: "u-a1-2",
      name: "문지호",
      role: "통합 엔지니어",
      level: "member",
      groupId: "g-a",
      partId: "p-a1",
      persona: "외부 시스템 API와 내부 업무 도구를 안정적으로 연결한다.",
      skills: ["Node.js", "API 연동", "Webhook", "자동화"],
      tools: ["Webhook Agent", "Integration Tester"],
    },
    {
      id: "u-a2-1",
      name: "서아현",
      role: "SRE",
      level: "member",
      groupId: "g-a",
      partId: "p-a2",
      persona: "장애 탐지, 알림, 배포 안정성을 개선한다.",
      skills: ["SRE", "모니터링", "알림", "Kubernetes"],
      tools: ["Alert Agent", "Deploy Bot"],
    },
    {
      id: "u-b1-1",
      name: "장우진",
      role: "데이터 분석가",
      level: "member",
      groupId: "g-b",
      partId: "p-b1",
      persona: "로그 데이터를 분석해 장애 유형과 반복 패턴을 찾는다.",
      skills: ["SQL", "로그 분석", "분류 모델", "대시보드"],
      tools: ["Notebook Agent", "SQL Copilot"],
    },
    {
      id: "u-b2-1",
      name: "신예린",
      role: "보안 엔지니어",
      level: "member",
      groupId: "g-b",
      partId: "p-b2",
      persona: "자동화 설계가 보안 정책과 감사 기준을 만족하는지 검토한다.",
      skills: ["보안 검토", "개인정보", "감사", "정책"],
      tools: ["Security Agent", "PII Scanner"],
    },
  ],
  groups: [
    {
      id: "g-a",
      name: "A그룹",
      leaderId: "u-g-a-lead",
      persona: "백엔드, 플랫폼, 자동화 역량을 중심으로 실행 가능한 운영 시스템을 만든다.",
    },
    {
      id: "g-b",
      name: "B그룹",
      leaderId: "u-g-b-lead",
      persona: "데이터와 보안 관점에서 운영 품질, 감사 가능성, 리포팅을 강화한다.",
    },
  ],
  parts: [
    {
      id: "p-a1",
      groupId: "g-a",
      name: "자동화파트",
      leaderId: "u-p-a1-lead",
      persona: "agent, API, 워크플로우를 활용해 반복 업무를 자동화한다.",
    },
    {
      id: "p-a2",
      groupId: "g-a",
      name: "플랫폼파트",
      leaderId: "u-p-a2-lead",
      persona: "서비스 운영 안정성, 배포, 모니터링을 담당한다.",
    },
    {
      id: "p-b1",
      groupId: "g-b",
      name: "데이터파트",
      leaderId: "u-p-b1-lead",
      persona: "로그 분석, 대시보드, 운영 리포트 생성을 담당한다.",
    },
    {
      id: "p-b2",
      groupId: "g-b",
      name: "보안파트",
      leaderId: "u-p-b2-lead",
      persona: "보안 정책, 개인정보, 감사 기준을 검토한다.",
    },
  ],
};

const keywordMap = [
  { skill: "Python", words: ["python", "스크립트", "자동화", "agent", "에이전트"] },
  { skill: "Agent", words: ["agent", "에이전트", "자동화", "위임"] },
  { skill: "API 연동", words: ["api", "연동", "webhook", "전달"] },
  { skill: "로그 분석", words: ["로그", "분류", "장애 유형", "패턴"] },
  { skill: "모니터링", words: ["모니터링", "알림", "탐지", "장애"] },
  { skill: "보안 검토", words: ["보안", "개인정보", "감사", "정책"] },
  { skill: "리포팅", words: ["리포트", "보고", "대시보드", "결과"] },
  { skill: "SRE", words: ["운영", "안정성", "장애", "배포"] },
];

let state = {
  activeView: "command",
  activeUserId: "u-team-lead",
  recommendations: [],
  tasks: [],
  selectedTaskId: null,
  treeViewMode: "detail",
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function person(id) {
  return org.people.find((item) => item.id === id);
}

function group(id) {
  return org.groups.find((item) => item.id === id);
}

function part(id) {
  return org.parts.find((item) => item.id === id);
}

function peopleForPart(partId, includeLeader = true) {
  return org.people.filter((item) => item.partId === partId && (includeLeader || item.level === "member"));
}

function partsForGroup(groupId) {
  return org.parts.filter((item) => item.groupId === groupId);
}

function unique(items) {
  return [...new Set(items)];
}

function statusLabel(status) {
  const labels = {
    assigned: "할당됨",
    delegated: "위임됨",
    in_progress: "진행 중",
    submitted: "완료 보고",
    approved: "승인 완료",
    closed: "최종 종료",
    rejected: "반려",
  };
  return labels[status] || status;
}

function statusClass(status) {
  if (["submitted"].includes(status)) return "warning";
  if (["approved", "closed"].includes(status)) return "ok";
  if (["rejected"].includes(status)) return "danger";
  return "neutral";
}

function setView(viewName) {
  state.activeView = viewName;
  $$(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  $$(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `view-${viewName}`);
  });

  const titles = {
    command: ["팀장 화면", "업무 생성 및 추천"],
    inbox: ["실행자 화면", "내 업무함"],
    tasks: ["관리자 화면", "업무 트리 추적"],
    org: ["조직 설정", "조직 페르소나"],
  };
  $("#view-kicker").textContent = titles[viewName][0];
  $("#view-title").textContent = titles[viewName][1];
  render();
}

function detectSkills(text) {
  const haystack = text.toLowerCase();
  const skills = keywordMap
    .filter((entry) => entry.words.some((word) => haystack.includes(word.toLowerCase())))
    .map((entry) => entry.skill);
  return unique(skills.length ? skills : ["업무 설계", "자동화", "리포팅"]);
}

function buildSubtasks(title, prompt, complexity) {
  const text = `${title} ${prompt}`;
  const detected = detectSkills(text);
  const forceSimple = complexity === "simple";
  const forceComplex = complexity === "complex";
  const shouldSplit =
    forceComplex ||
    (!forceSimple && (detected.length >= 3 || /까지|그리고|동시에|전체|체계|구축/.test(text)));

  if (!shouldSplit) {
    return [
      {
        title,
        description: prompt,
        skills: detected,
      },
    ];
  }

  const subtasks = [
    {
      title: "장애 로그 수집 및 유형 분류",
      description: "반복 장애의 로그를 수집하고 유형별로 분류 기준을 만든다.",
      skills: ["로그 분석", "SQL", "분류 모델"],
    },
    {
      title: "업무 전달 자동화 워크플로우",
      description: "장애 유형에 맞는 담당자 추천과 알림 전달 흐름을 구현한다.",
      skills: ["Python", "Agent", "API 연동", "자동화"],
    },
    {
      title: "운영 알림 및 안정성 점검",
      description: "장애 탐지, 알림, 운영 안정성 기준을 정의하고 검증한다.",
      skills: ["SRE", "모니터링", "알림"],
    },
    {
      title: "보안 검토 및 결과 리포트",
      description: "개인정보, 접근 권한, 감사 기준을 확인하고 처리 결과 리포트를 만든다.",
      skills: ["보안 검토", "감사", "리포팅"],
    },
  ];

  return subtasks.filter((task) => task.skills.some((skill) => detected.includes(skill)) || forceComplex);
}

function scorePerson(candidate, skills) {
  const matches = skills.filter((skill) => candidate.skills.includes(skill));
  const softMatches = skills.filter((skill) => {
    const profile = `${candidate.persona} ${candidate.role} ${candidate.skills.join(" ")}`;
    return profile.includes(skill);
  });
  const score = Math.min(98, 62 + matches.length * 11 + softMatches.length * 5);
  return { score, matches: unique([...matches, ...softMatches]) };
}

function recommendForSubtask(subtask) {
  const candidates = org.people
    .filter((item) => item.level === "member")
    .map((candidate) => ({
      candidate,
      ...scorePerson(candidate, subtask.skills),
    }))
    .sort((a, b) => b.score - a.score);

  const best = candidates[0].candidate;
  const bestGroup = group(best.groupId);
  const bestPart = part(best.partId);
  const partLeader = person(bestPart.leaderId);
  const groupLeader = person(bestGroup.leaderId);

  return {
    id: crypto.randomUUID(),
    route: "full_tree",
    ...subtask,
    groupId: bestGroup.id,
    partId: bestPart.id,
    personId: best.id,
    score: candidates[0].score,
    reason: `${best.name}(${best.role})은 ${candidates[0].matches.join(", ")} 역량이 맞고, ${bestPart.name}의 페르소나와도 일치합니다. 초기 할당은 ${groupLeader.name} 그룹장에게 보내고 이후 ${partLeader.name} 파트장을 거쳐 담당자에게 위임할 수 있습니다.`,
  };
}

function createRecommendations(event) {
  event.preventDefault();
  const title = $("#task-title").value.trim();
  const prompt = $("#task-prompt").value.trim();
  const complexity = $("#task-complexity").value;

  if (!title || !prompt) return;

  const subtasks = buildSubtasks(title, prompt, complexity);
  state.recommendations = subtasks.map(recommendForSubtask);

  $("#analysis-box").innerHTML = `
    <strong>LLM 분석 결과</strong><br />
    입력 업무는 ${subtasks.length > 1 ? "복합 업무" : "단일 업무"}로 판단했습니다.
    필요 역량은 ${unique(subtasks.flatMap((item) => item.skills)).join(", ")}입니다.
    추천은 개인 역량, 파트 페르소나, 그룹 책임 범위를 함께 비교했습니다.
  `;
  $("#recommendation-state").textContent = `${subtasks.length}개 추천`;
  $("#recommendation-state").className = "status-pill ok";
  $("#assign-recommendations").disabled = false;
  renderRecommendations();
}

function option(value, label, selected) {
  return `<option value="${value}" ${selected ? "selected" : ""}>${label}</option>`;
}

function renderRecommendations() {
  const list = $("#recommendation-list");
  list.innerHTML = "";
  const template = $("#recommendation-template");

  state.recommendations.forEach((rec, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    $(".rec-index", node).textContent = `하위 업무 ${index + 1}`;
    $(".rec-title", node).textContent = rec.title;
    $(".score-badge", node).textContent = `${rec.score}점`;
    $(".rec-description", node).textContent = rec.description;
    $(".rec-skills", node).innerHTML = rec.skills.map((skill) => `<span class="tag">${skill}</span>`).join("");
    $(".reason-text", node).textContent = rec.reason;

    const groupSelect = $(".rec-group", node);
    const partSelect = $(".rec-part", node);
    const personSelect = $(".rec-person", node);
    const routeSelect = $(".rec-route", node);

    routeSelect.innerHTML = routeOptions()
      .map((item) => option(item.value, item.label, item.value === rec.route))
      .join("");
    groupSelect.innerHTML = org.groups.map((item) => option(item.id, item.name, item.id === rec.groupId)).join("");
    updatePartOptions(partSelect, rec.groupId, rec.partId);
    updatePersonOptions(personSelect, rec.partId, rec.personId);

    routeSelect.addEventListener("change", () => {
      rec.route = routeSelect.value;
      rec.reason = buildManualReason(rec);
      $(".reason-text", node).textContent = rec.reason;
    });

    groupSelect.addEventListener("change", () => {
      rec.groupId = groupSelect.value;
      rec.partId = partsForGroup(rec.groupId)[0].id;
      rec.personId = peopleForPart(rec.partId, false)[0].id;
      updatePartOptions(partSelect, rec.groupId, rec.partId);
      updatePersonOptions(personSelect, rec.partId, rec.personId);
      rec.reason = buildManualReason(rec);
      $(".reason-text", node).textContent = rec.reason;
    });

    partSelect.addEventListener("change", () => {
      rec.partId = partSelect.value;
      rec.personId = peopleForPart(rec.partId, false)[0].id;
      updatePersonOptions(personSelect, rec.partId, rec.personId);
      rec.reason = buildManualReason(rec);
      $(".reason-text", node).textContent = rec.reason;
    });

    personSelect.addEventListener("change", () => {
      rec.personId = personSelect.value;
      rec.reason = buildManualReason(rec);
      $(".reason-text", node).textContent = rec.reason;
    });

    list.appendChild(node);
  });
}

function updatePartOptions(select, groupId, selectedPartId) {
  select.innerHTML = partsForGroup(groupId)
    .map((item) => option(item.id, item.name, item.id === selectedPartId))
    .join("");
}

function updatePersonOptions(select, partId, selectedPersonId) {
  select.innerHTML = peopleForPart(partId, false)
    .map((item) => option(item.id, `${item.name} / ${item.role}`, item.id === selectedPersonId))
    .join("");
}

function routeOptions() {
  return [
    { value: "full_tree", label: "전체 트리 직접 할당" },
    { value: "group_only", label: "그룹장만 할당" },
    { value: "part_only", label: "파트장까지 할당" },
    { value: "direct_member", label: "파트원 다이렉트" },
  ];
}

function routeLabel(route) {
  return routeOptions().find((item) => item.value === route)?.label || route;
}

function buildManualReason(rec) {
  const assignee = person(rec.personId);
  const recPart = part(rec.partId);
  const recGroup = group(rec.groupId);
  return `수정된 배정안입니다. ${routeLabel(rec.route)} 방식으로 ${recGroup.name} > ${recPart.name} > ${assignee.name}(${assignee.role}) 경로를 사용합니다. 담당자의 주요 역량은 ${assignee.skills.join(", ")}입니다.`;
  return `수정된 배정안입니다. ${recGroup.name} > ${recPart.name} > ${assignee.name}(${assignee.role}) 경로로 할당하며, 담당자의 주요 역량은 ${assignee.skills.join(", ")}입니다.`;
}

function assignRecommendations() {
  if (!state.recommendations.length) return;

  const title = $("#task-title").value.trim();
  const prompt = $("#task-prompt").value.trim();
  const rootId = crypto.randomUUID();
  const now = new Date().toLocaleString("ko-KR");

  const task = {
    id: rootId,
    title,
    description: prompt,
    createdBy: state.activeUserId,
    createdAt: now,
    status: "assigned",
    priority: $("#task-priority").value,
    children: state.recommendations.map((rec) => createAssignmentForRoute(rec, rootId)),
    history: [`${now} ${person(state.activeUserId).name}이 업무를 생성하고 추천안으로 할당했습니다.`],
  };

  state.tasks.unshift(task);
  state.selectedTaskId = task.id;
  state.recommendations = [];
  $("#recommendation-list").innerHTML = "";
  $("#recommendation-state").textContent = "할당 완료";
  $("#recommendation-state").className = "status-pill ok";
  $("#assign-recommendations").disabled = true;
  setView("tasks");
}

function createAssignmentForRoute(rec, parentId) {
  if (rec.route === "direct_member") return createMemberAssignment(rec, parentId);
  if (rec.route === "part_only") return createPartAssignment(rec, parentId, false);
  return createGroupAssignment(rec, parentId, rec.route === "full_tree");
}

function createGroupAssignment(rec, parentId, includeChildren = false) {
  const recGroup = group(rec.groupId);
  const node = {
    id: crypto.randomUUID(),
    parentId,
    type: "group",
    title: rec.title,
    description: rec.description,
    skills: rec.skills,
    groupId: rec.groupId,
    partId: rec.partId,
    recommendedPersonId: rec.personId,
    ownerId: recGroup.leaderId,
    status: includeChildren ? "delegated" : "assigned",
    result: "",
    children: [],
  };

  if (includeChildren) {
    node.children.push(createPartAssignment(rec, node.id, true));
  }

  return node;
}

function createPartAssignment(rec, parentId, includeChildren = false) {
  const targetPart = part(rec.partId);
  const node = {
    id: crypto.randomUUID(),
    parentId,
    type: "part",
    title: rec.title,
    description: rec.description,
    skills: rec.skills,
    groupId: rec.groupId,
    partId: rec.partId,
    recommendedPersonId: rec.personId,
    ownerId: targetPart.leaderId,
    status: includeChildren ? "delegated" : "assigned",
    result: "",
    children: [],
  };

  if (includeChildren) {
    node.children.push(createMemberAssignment(rec, node.id));
  }

  return node;
}

function createMemberAssignment(rec, parentId) {
  return {
    id: crypto.randomUUID(),
    parentId,
    type: "member",
    title: rec.title,
    description: rec.description,
    skills: rec.skills,
    groupId: rec.groupId,
    partId: rec.partId,
    recommendedPersonId: rec.personId,
    ownerId: rec.personId,
    status: "in_progress",
    result: "",
    children: [],
  };
}

function delegateNode(node) {
  if (node.type === "group") {
    const targetPart = part(node.partId);
    node.status = "delegated";
    node.children.push({
      id: crypto.randomUUID(),
      parentId: node.id,
      type: "part",
      title: node.title,
      description: node.description,
      skills: node.skills,
      groupId: node.groupId,
      partId: node.partId,
      recommendedPersonId: node.recommendedPersonId,
      ownerId: targetPart.leaderId,
      status: "assigned",
      result: "",
      children: [],
    });
  } else if (node.type === "part") {
    node.status = "delegated";
    node.children.push({
      id: crypto.randomUUID(),
      parentId: node.id,
      type: "member",
      title: node.title,
      description: node.description,
      skills: node.skills,
      groupId: node.groupId,
      partId: node.partId,
      recommendedPersonId: node.recommendedPersonId,
      ownerId: node.recommendedPersonId,
      status: "in_progress",
      result: "",
      children: [],
    });
  }
  appendHistory(`${person(state.activeUserId).name}이 "${node.title}" 업무를 하위 담당자에게 위임했습니다.`);
  refreshTaskStatuses();
  render();
}

function submitNode(node, result) {
  node.status = "submitted";
  node.result = result || "처리 결과를 입력했습니다.";
  appendHistory(`${person(state.activeUserId).name}이 "${node.title}" 업무 완료 보고를 제출했습니다.`);
  refreshTaskStatuses();
  render();
}

function approveNode(node) {
  node.status = "approved";
  appendHistory(`${person(state.activeUserId).name}이 "${node.title}" 업무를 승인했습니다.`);
  refreshTaskStatuses();
  render();
}

function rejectNode(node) {
  node.status = "rejected";
  appendHistory(`${person(state.activeUserId).name}이 "${node.title}" 업무를 반려했습니다.`);
  refreshTaskStatuses();
  render();
}

function appendHistory(text) {
  const selected = state.tasks.find((task) => task.id === state.selectedTaskId) || state.tasks[0];
  if (selected) selected.history.push(`${new Date().toLocaleString("ko-KR")} ${text}`);
}

function refreshTaskStatuses() {
  state.tasks.forEach((task) => {
    const nodes = flattenNodes(task.children);
    const allApproved = task.children.length > 0 && task.children.every((node) => node.status === "approved");
    const hasSubmitted = nodes.some((node) => node.status === "submitted");
    const hasRejected = nodes.some((node) => node.status === "rejected");

    if (allApproved && task.status !== "closed") task.status = "approved";
    else if (hasRejected) task.status = "rejected";
    else if (hasSubmitted) task.status = "submitted";
    else task.status = "assigned";
  });
}

function closeTask(task) {
  task.status = "closed";
  task.history.push(`${new Date().toLocaleString("ko-KR")} ${person(state.activeUserId).name}이 최종 승인하여 업무를 종료했습니다.`);
  render();
}

function flattenNodes(nodes) {
  return nodes.flatMap((node) => [node, ...flattenNodes(node.children || [])]);
}

function findNode(nodeId) {
  for (const task of state.tasks) {
    const found = flattenNodes(task.children).find((node) => node.id === nodeId);
    if (found) return found;
  }
  return null;
}

function parentOf(node) {
  for (const task of state.tasks) {
    if (task.id === node.parentId) return { type: "root", task };
    const parent = flattenNodes(task.children).find((item) => item.id === node.parentId);
    if (parent) return { type: "node", node: parent, task };
  }
  return null;
}

function renderUserOptions() {
  $("#active-user").innerHTML = org.people
    .map((item) => option(item.id, `${item.name} / ${item.role}`, item.id === state.activeUserId))
    .join("");
}

function renderMetrics() {
  const nodes = state.tasks.flatMap((task) => flattenNodes(task.children));
  $("#metric-total").textContent = state.tasks.length;
  $("#metric-active").textContent = nodes.filter((node) => ["assigned", "delegated", "in_progress"].includes(node.status)).length;
  $("#metric-review").textContent = nodes.filter((node) => node.status === "submitted").length;
}

function renderInbox() {
  const user = person(state.activeUserId);
  $("#inbox-role").textContent = `${user.name} / ${user.role}`;
  $("#inbox-title").textContent = "내 업무";

  const assignedItems = state.tasks.flatMap((task) =>
    flattenNodes(task.children)
      .filter((node) => node.ownerId === state.activeUserId)
      .map((node) => ({ task, node }))
  );
  const createdItems = state.tasks.filter((task) => task.createdBy === state.activeUserId);

  $("#inbox-count").textContent = `${assignedItems.length + createdItems.length}건`;
  const list = $("#inbox-list");

  if (!assignedItems.length && !createdItems.length) {
    list.innerHTML = `<div class="tree-empty">현재 사용자에게 연결된 업무가 없습니다. 팀장 화면에서 업무를 생성하거나 역할을 바꿔 확인하세요.</div>`;
    return;
  }

  list.innerHTML = `
    ${
      createdItems.length
        ? `<div class="work-section-title">내가 만든 업무</div>${createdItems.map((task) => renderCreatedTaskCard(task)).join("")}`
        : ""
    }
    ${
      assignedItems.length
        ? `<div class="work-section-title">내가 받은 업무</div>${assignedItems.map(({ task, node }) => renderWorkCard(task, node)).join("")}`
        : ""
    }
  `;

  $$(".open-created-task", list).forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedTaskId = button.dataset.taskId;
      setView("tasks");
    });
  });

  $$(".delegate-action", list).forEach((button) => {
    button.addEventListener("click", () => delegateNode(findNode(button.dataset.nodeId)));
  });
  $$(".submit-action", list).forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".work-card");
      submitNode(findNode(button.dataset.nodeId), $(".result-text", card).value.trim());
    });
  });
  $$(".approve-action", list).forEach((button) => {
    button.addEventListener("click", () => approveNode(findNode(button.dataset.nodeId)));
  });
  $$(".reject-action", list).forEach((button) => {
    button.addEventListener("click", () => rejectNode(findNode(button.dataset.nodeId)));
  });
}

function renderCreatedTaskCard(task) {
  const nodes = flattenNodes(task.children);
  const owners = unique(nodes.map((node) => person(node.ownerId)?.name).filter(Boolean));
  const submittedCount = nodes.filter((node) => node.status === "submitted").length;
  const activeCount = nodes.filter((node) => ["assigned", "delegated", "in_progress"].includes(node.status)).length;

  return `
    <article class="work-card created-task-card">
      <header>
        <div>
          <p class="eyebrow">Created task</p>
          <h4>${task.title}</h4>
        </div>
        <span class="status-pill ${statusClass(task.status)}">${statusLabel(task.status)}</span>
      </header>
      <p class="muted-text">${task.description}</p>
      <div class="summary-grid">
        <div class="mini-stat"><span>배정 노드</span><strong>${nodes.length}</strong></div>
        <div class="mini-stat"><span>진행 중</span><strong>${activeCount}</strong></div>
        <div class="mini-stat"><span>완료 보고</span><strong>${submittedCount}</strong></div>
        <div class="mini-stat"><span>담당자</span><strong>${owners.length}</strong></div>
      </div>
      <div class="tag-row">${owners.map((name) => `<span class="tag">${name}</span>`).join("")}</div>
      <button class="primary-button open-created-task" data-task-id="${task.id}">트리에서 진행 상황 보기</button>
    </article>
  `;
}

function renderWorkCard(task, node) {
  const assignee = person(node.ownerId);
  const recPart = part(node.partId);
  const recGroup = group(node.groupId);
  const children = node.children || [];
  const submittedChildren = children.filter((child) => child.status === "submitted");
  const canDelegate = (node.type === "group" || node.type === "part") && !children.length;
  const canSubmit = node.type === "member" && node.status !== "submitted" && node.status !== "approved";
  const canSelfSubmit =
    node.type !== "member" &&
    !children.length &&
    node.status !== "submitted" &&
    node.status !== "approved" &&
    node.status !== "delegated";
  const canSubmitUpward =
    node.type !== "member" &&
    children.length > 0 &&
    children.every((child) => child.status === "approved") &&
    node.status !== "submitted" &&
    node.status !== "approved";
  const canApprove = submittedChildren.length > 0;

  return `
    <article class="work-card">
      <header>
        <div>
          <p class="eyebrow">${task.title}</p>
          <h4>${node.title}</h4>
        </div>
        <span class="status-pill ${statusClass(node.status)}">${statusLabel(node.status)}</span>
      </header>
      <p class="muted-text">${node.description}</p>
      <div class="card-meta">
        <span>${recGroup.name}</span>
        <span>${recPart.name}</span>
        <span>${assignee.name} / ${assignee.role}</span>
      </div>
      <div class="tag-row">${node.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
      ${node.result ? `<div class="analysis-box"><strong>완료 결과</strong><br />${node.result}</div>` : ""}
      ${
        canSubmit || canSelfSubmit || canSubmitUpward
          ? `<div class="result-input"><label>완료 결과</label><textarea class="result-text" rows="3">자동화 초안과 검증 결과를 정리했습니다.</textarea></div>`
          : ""
      }
      <div class="button-row">
        ${canDelegate ? `<button class="small-button delegate-action" data-node-id="${node.id}">하위 담당자에게 위임</button>` : ""}
        ${canSubmit ? `<button class="primary-button submit-action" data-node-id="${node.id}">완료 보고</button>` : ""}
        ${canSubmitUpward ? `<button class="primary-button submit-action" data-node-id="${node.id}">상위 완료 보고</button>` : ""}
        ${canSelfSubmit ? `<button class="primary-button submit-action" data-node-id="${node.id}">본인 선에서 완료 보고</button>` : ""}
        ${
          canApprove
            ? submittedChildren
                .map(
                  (child) => `
                    <button class="primary-button approve-action" data-node-id="${child.id}">${person(child.ownerId).name} 결과 승인</button>
                    <button class="danger-button reject-action" data-node-id="${child.id}">${person(child.ownerId).name} 반려</button>
                  `
                )
                .join("")
            : ""
        }
      </div>
    </article>
  `;
}

function renderTasks() {
  const list = $("#task-list");

  if (!state.tasks.length) {
    list.innerHTML = `<div class="tree-empty">아직 생성된 업무가 없습니다.</div>`;
    $("#task-tree").innerHTML = `업무를 생성하면 배정 트리와 승인 흐름이 표시됩니다.`;
    $("#task-tree").className = "tree-empty";
    $("#tree-title").textContent = "업무를 선택하세요";
    $("#tree-status").textContent = "대기";
    $("#tree-status").className = "status-pill neutral";
    return;
  }

  if (!state.selectedTaskId) state.selectedTaskId = state.tasks[0].id;

  list.innerHTML = state.tasks
    .map(
      (task) => `
        <button class="task-card ${task.id === state.selectedTaskId ? "selected" : ""}" data-task-id="${task.id}">
          <header>
            <div>
              <p class="eyebrow">${task.createdAt}</p>
              <h4>${task.title}</h4>
            </div>
            <span class="status-pill ${statusClass(task.status)}">${statusLabel(task.status)}</span>
          </header>
          <p class="muted-text">${task.description.slice(0, 110)}${task.description.length > 110 ? "..." : ""}</p>
        </button>
      `
    )
    .join("");

  $$(".task-card", list).forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedTaskId = button.dataset.taskId;
      renderTasks();
    });
  });

  renderSelectedTaskTree();
}

function renderSelectedTaskTree() {
  const task = state.tasks.find((item) => item.id === state.selectedTaskId);
  if (!task) return;

  $("#tree-title").textContent = task.title;
  $("#tree-status").textContent = statusLabel(task.status);
  $("#tree-status").className = `status-pill ${statusClass(task.status)}`;

  const modeSelect = $("#tree-view-mode");
  if (modeSelect) modeSelect.value = state.treeViewMode;

  if (state.treeViewMode === "compact") {
    $("#task-tree").className = "compact-tree";
    $("#task-tree").innerHTML = renderCompactTaskTree(task);
    return;
  }

  $("#task-tree").className = "tree-root";
  $("#task-tree").innerHTML = `
    <article class="tree-node">
      <header>
        <h4>${task.title}</h4>
        <span class="status-pill ${statusClass(task.status)}">${statusLabel(task.status)}</span>
      </header>
      <p class="muted-text">${task.description}</p>
      <div class="tree-meta">
        <span>생성자: ${person(task.createdBy).name}</span>
        <span>우선순위: ${task.priority}</span>
      </div>
      ${task.status === "approved" && state.activeUserId === task.createdBy ? `<button class="primary-button close-task" data-task-id="${task.id}">최종 승인 및 종료</button>` : ""}
    </article>
    <div class="tree-children">
      ${task.children.map((node) => renderTreeNode(node, 1)).join("")}
    </div>
    <section class="analysis-box">
      <strong>히스토리</strong><br />
      ${task.history.map((item) => `<div>${item}</div>`).join("")}
    </section>
  `;

  $(".close-task")?.addEventListener("click", () => closeTask(task));
}

function renderCompactTaskTree(task) {
  const creator = person(task.createdBy);
  const children = renderCompactChildren(task.children);
  return `
    <div class="compact-tree-inner">
      <div class="compact-unit has-children">
        <div class="compact-node root" title="${task.title}">${creator.name}</div>
        ${children}
      </div>
    </div>
  `;
}

function renderCompactChildren(nodes) {
  if (!nodes.length) return "";
  const multiClass = nodes.length > 1 ? "multi" : "single";
  const center = (nodes.length - 1) / 2;
  return `
    <div class="compact-children ${multiClass}">
      ${nodes
        .map((node, index) => {
          const angle = nodes.length > 1 ? Math.max(-38, Math.min(38, (index - center) * 18)) : 0;
          return renderCompactNode(node, angle);
        })
        .join("")}
    </div>
  `;
}

function renderCompactNode(node, branchAngle = 0) {
  const owner = person(node.ownerId);
  const children = renderCompactChildren(node.children || []);
  return `
    <div class="compact-child" style="--branch-angle: ${branchAngle}deg">
      <div class="compact-unit ${children ? "has-children" : ""}">
        <div class="compact-node ${statusClass(node.status)}" title="${node.title} / ${statusLabel(node.status)}">${owner.name}</div>
        ${children}
      </div>
    </div>
  `;
}

function renderTreeNode(node, depth) {
  const owner = person(node.ownerId);
  const recGroup = group(node.groupId);
  const recPart = part(node.partId);
  const parent = parentOf(node);
  const canUpperApprove = node.status === "submitted" && parent && state.activeUserId === (parent.node?.ownerId || parent.task.createdBy);

  const childNodes = (node.children || []).map((child) => renderTreeNode(child, depth + 1)).join("");

  return `
    <div class="tree-branch">
    <article class="tree-node">
      <header>
        <h4>${node.title}</h4>
        <span class="status-pill ${statusClass(node.status)}">${statusLabel(node.status)}</span>
      </header>
      <p class="muted-text">${node.description}</p>
      <div class="tree-meta">
        <span>${node.type === "group" ? "그룹장" : node.type === "part" ? "파트장" : "담당자"}: ${owner.name}</span>
        <span>${recGroup.name}</span>
        <span>${recPart.name}</span>
      </div>
      <div class="tag-row">${node.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
      ${node.result ? `<div class="analysis-box"><strong>완료 결과</strong><br />${node.result}</div>` : ""}
      ${canUpperApprove ? `<button class="primary-button inline-approve" data-node-id="${node.id}">상위 승인</button>` : ""}
    </article>
    ${childNodes ? `<div class="tree-children">${childNodes}</div>` : ""}
    </div>
  `;
}

function derivedPartPersona(partItem) {
  const members = peopleForPart(partItem.id);
  const skills = unique(members.flatMap((item) => item.skills));
  return `${partItem.name}는 ${members.map((item) => item.name).join(", ")}의 페르소나와 ${skills.join(", ")} 역량을 취합해 만들어진 파트 페르소나입니다.`;
}

function derivedGroupPersona(groupItem) {
  const parts = partsForGroup(groupItem.id);
  const skills = unique(org.people.filter((item) => item.groupId === groupItem.id).flatMap((item) => item.skills));
  return `${groupItem.name}는 ${parts.map((item) => item.name).join(", ")}의 페르소나와 ${skills.join(", ")} 역량을 취합해 만들어진 그룹 페르소나입니다.`;
}

function derivedTeamPersona() {
  const skills = unique(org.people.flatMap((item) => item.skills));
  return `${org.team.name}은 ${org.groups.map((item) => item.name).join(", ")}의 페르소나와 ${skills.join(", ")} 역량을 취합해 만들어진 팀 페르소나입니다.`;
}

function canEditPersona(entity) {
  return entity.leaderId === state.activeUserId;
}

function personaEditorCard(entityType, entity, derivedPersona) {
  const editable = canEditPersona(entity);
  return `
    <article class="persona-card">
      <h4>${entity.name} / ${person(entity.leaderId).name}</h4>
      <div class="persona-derived"><strong>하위 취합 페르소나</strong><br />${derivedPersona}</div>
      <div class="persona-editor">
        <label>관리자 수정 페르소나</label>
        <textarea class="persona-text" data-entity-type="${entityType}" data-entity-id="${entity.id}" rows="4" ${editable ? "" : "disabled"}>${entity.persona}</textarea>
        ${
          editable
            ? `<button class="small-button persona-save" data-entity-type="${entityType}" data-entity-id="${entity.id}">페르소나 저장</button>`
            : `<span class="muted-text">현재 사용자는 이 페르소나를 수정할 권한이 없습니다.</span>`
        }
      </div>
    </article>
  `;
}

function renderOrg() {
  $("#org-tree").innerHTML = org.groups
    .map(
      (groupItem) => `
        <section class="org-node">
          <h4>${groupItem.name} / ${person(groupItem.leaderId).name}</h4>
          <p class="muted-text">${groupItem.persona}</p>
          <div class="org-children">
            ${partsForGroup(groupItem.id)
              .map(
                (partItem) => `
                  <section class="org-node">
                    <h4>${partItem.name} / ${person(partItem.leaderId).name}</h4>
                    <p class="muted-text">${partItem.persona}</p>
                    <div class="tag-row">
                      ${peopleForPart(partItem.id)
                        .map((member) => `<span class="tag">${member.name} ${member.role}</span>`)
                        .join("")}
                    </div>
                  </section>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  $("#persona-summary").innerHTML = `
    ${personaEditorCard("team", org.team, derivedTeamPersona())}
    ${org.groups.map((groupItem) => personaEditorCard("group", groupItem, derivedGroupPersona(groupItem))).join("")}
    ${org.parts.map((partItem) => personaEditorCard("part", partItem, derivedPartPersona(partItem))).join("")}
  `;

  $$(".persona-save", $("#persona-summary")).forEach((button) => {
    button.addEventListener("click", () => savePersona(button.dataset.entityType, button.dataset.entityId));
  });
}

function savePersona(entityType, entityId) {
  const textarea = $(`.persona-text[data-entity-type="${entityType}"][data-entity-id="${entityId}"]`);
  const value = textarea.value.trim();
  if (!value) return;

  if (entityType === "team") org.team.persona = value;
  if (entityType === "group") group(entityId).persona = value;
  if (entityType === "part") part(entityId).persona = value;

  renderOrg();
}

function render() {
  renderUserOptions();
  renderMetrics();
  renderInbox();
  renderTasks();
  renderOrg();

  $$(".inline-approve").forEach((button) => {
    button.addEventListener("click", () => approveNode(findNode(button.dataset.nodeId)));
  });
}

function resetDemo() {
  state = {
    activeView: "command",
    activeUserId: "u-team-lead",
    recommendations: [],
    tasks: [],
    selectedTaskId: null,
    treeViewMode: "detail",
  };
  $("#task-title").value = "고객사 장애 대응 자동화 체계 구축";
  $("#task-prompt").value =
    "고객사에서 반복적으로 발생하는 장애를 빠르게 분류하고 담당자에게 전달하는 업무 체계를 만들고 싶다. 로그 수집, 장애 유형 분류, 관리자 알림, 처리 결과 리포트까지 자동화가 필요하다. 보안 검토와 운영 안정성도 같이 고려해야 한다.";
  $("#analysis-box").textContent =
    "업무 설명을 입력하고 추천을 생성하면, 팀/그룹/파트/개인 페르소나를 기준으로 하위 업무와 담당 경로가 제안됩니다.";
  $("#recommendation-list").innerHTML = "";
  $("#recommendation-state").textContent = "추천 전";
  $("#recommendation-state").className = "status-pill";
  $("#assign-recommendations").disabled = true;
  setView("command");
}

function bindEvents() {
  $("#task-form").addEventListener("submit", createRecommendations);
  $("#assign-recommendations").addEventListener("click", assignRecommendations);
  $("#reset-demo").addEventListener("click", resetDemo);
  $("#active-user").addEventListener("change", (event) => {
    state.activeUserId = event.target.value;
    render();
  });
  $("#tree-view-mode").addEventListener("change", (event) => {
    state.treeViewMode = event.target.value;
    renderTasks();
  });
  $$(".nav-button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
}

bindEvents();
render();
