const $ = (selector) => document.querySelector(selector);
const icons = { command:'◇', agents:'◎', brain:'⌘', model:'✦', content:'◉', web:'⌁', markets:'↗', health:'♡' };
let workspace;

function toast(message) {
  const el = $('#toast'); el.textContent = message; el.classList.add('show');
  clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 2400);
}

function openModal(kicker, title, body) {
  $('#modalKicker').textContent = kicker; $('#modalTitle').textContent = title; $('#modalBody').innerHTML = body; $('#modal').showModal();
}

function projectCard(group) {
  const found = group.paths.filter((item) => item.available).length;
  return `<button class="project-card" data-project="${group.id}"><span class="project-icon tone-${group.tone}">${icons[group.icon] || '◇'}</span><strong>${group.name}</strong><small>${found}/${group.paths.length} locations available</small></button>`;
}

function render(data) {
  workspace = data;
  const roots = data.projects.reduce((total, group) => total + group.paths.filter((p) => p.available).length, 0);
  $('#projectCount').textContent = roots;
  $('#agentCount').textContent = data.agents.length;
  $('#integrationCount').textContent = data.integrations.length;
  $('#projectGrid').innerHTML = data.projects.map(projectCard).join('');
  $('#agentList').innerHTML = data.agents.slice(0,5).map((agent, index) => `<div class="agent-row"><span class="agent-badge">${['CS','CD','CT','MA','HC'][index]}</span><div><strong>${agent.name}</strong><small>${agent.role} · ${agent.scope}</small></div><span class="state ${agent.status}">${agent.status}</span></div>`).join('');
  $('#modelList').innerHTML = data.models.map((model) => `<div class="model-row"><span class="model-badge">${model.provider === 'meta-cloud' ? 'M' : model.provider === 'mlx' ? 'MX' : 'LL'}</span><div><strong>${model.name}</strong><small>${model.purpose} · ${model.provider}</small></div><span class="state ${model.state}">${model.state.replaceAll('-',' ')}</span></div>`).join('');
  $('#integrationGrid').innerHTML = data.integrations.map((item) => `<div class="integration-card"><span class="logo">${item.name.slice(0,2).toUpperCase()}</span><div><strong>${item.name}</strong><small>${item.role} · ${item.configured ? 'local ready' : 'approval needed'}</small></div><i class="${item.configured ? 'on' : ''}"></i></div>`).join('');
  document.querySelectorAll('[data-project]').forEach((button) => button.addEventListener('click', () => showProject(button.dataset.project)));
}

function showProject(id) {
  const group = workspace.projects.find((item) => item.id === id);
  const rows = group.paths.map((item) => `<div class="path-row"><span><code>${item.path}</code></span><b class="${item.available ? '' : 'missing'}">${item.available ? 'AVAILABLE' : 'NOT FOUND'}</b></div>`).join('');
  openModal('PROJECT AREA', group.name, `<p>This area links existing work in place. Nothing has been moved or duplicated.</p>${rows}`);
}

async function load() {
  try { const response = await fetch('/api/workspace'); if (!response.ok) throw new Error(response.status); render(await response.json()); }
  catch { $('#projectGrid').innerHTML = '<div class="loading">The local workspace API is unavailable.</div>'; toast('Could not refresh workspace'); }
}

$('#closeModal').addEventListener('click', () => $('#modal').close());
$('#syncButton').addEventListener('click', async () => { await load(); toast('Workspace registry refreshed'); });
$('#briefButton').addEventListener('click', () => openModal('DAILY BRIEF', 'Your operating brief is ready to wire.', '<p>The brief workflow will combine approved Huly/ClickUp tasks, calendar events, agent status, repository activity and durable notes. External connectors remain disabled until their keychain-backed credentials are configured.</p>'));
$('#policyButton').addEventListener('click', () => openModal('INTEGRATION POLICY', 'Connections are approval-gated.', '<ul><li>Reads use the smallest project scope available.</li><li>Writes require a human approval or an explicit delegated workflow.</li><li>Credentials stay in macOS Keychain and are never returned to agents.</li><li>Every external change produces an audit event.</li></ul>'));
$('#securityButton').addEventListener('click', () => openModal('DATA ROOM', 'Seven levels. Deny by default.', '<p>Public → Internal → Project → Partner confidential → Financial → Executive → Secret.</p><p>Health, financial, executive and credential material stay in separate protected stores. Agents receive capabilities for a task, not broad folder access.</p>'));
$('#viewProjects').addEventListener('click', () => openModal('LOCAL REGISTRY', 'Existing work stays where it is.', `<p>${workspace ? workspace.projects.reduce((n,g)=>n+g.paths.length,0) : 0} curated project locations are mapped across command, agents, knowledge, models, content, development, ventures and health.</p>`));
$('.menu-button').addEventListener('click', () => $('.sidebar').classList.toggle('open'));
document.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#search').focus(); } if (event.key === 'Escape') $('.sidebar').classList.remove('open'); });
$('#search').addEventListener('input', (event) => { const query = event.target.value.toLowerCase(); document.querySelectorAll('.project-card').forEach((card) => card.style.display = card.textContent.toLowerCase().includes(query) ? '' : 'none'); });

const now = new Date();
$('#dateLabel').textContent = now.toLocaleDateString('en-ZA', { weekday:'long', day:'numeric', month:'long' }).toUpperCase();
load();
