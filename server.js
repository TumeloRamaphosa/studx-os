const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, 'public');
const PORT = Number(process.env.STUDX_PORT || 4310);
const HOST = process.env.STUDX_HOST || '127.0.0.1';

const json = (file) => JSON.parse(fs.readFileSync(path.join(ROOT, 'config', file), 'utf8'));
const safePath = (value) => value.replace(/^~/, os.homedir());
const exists = (value) => fs.existsSync(safePath(value));

function snapshot() {
  const projects = json('projects.json').map((group) => ({
    ...group,
    paths: group.paths.map((projectPath) => ({ path: projectPath, available: exists(projectPath) })),
  }));
  const integrations = json('integrations.json').map(({ secretRef, ...item }) => ({
    ...item,
    configured: item.state === 'available-local' || item.state === 'cli-available',
    requiresSecret: Boolean(secretRef),
  }));
  return {
    workspace: json('workspace.json'),
    projects,
    integrations,
    models: json('models.json'),
    agents: json('agents.json'),
    permissions: json('permissions.json'),
    generatedAt: new Date().toISOString(),
  };
}

function send(res, status, type, body) {
  res.writeHead(status, {
    'Content-Type': type,
    'Cache-Control': type.includes('text/html') ? 'no-store' : 'public, max-age=60',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'no-referrer',
    'Content-Security-Policy': "default-src 'self'; style-src 'self'; script-src 'self'; img-src 'self' data:; connect-src 'self'",
  });
  res.end(body);
}

function serveFile(reqPath, res) {
  const relative = reqPath === '/' ? 'index.html' : reqPath.slice(1);
  const normalized = path.normalize(relative).replace(/^(\.\.(\/|\\|$))+/, '');
  const file = path.join(PUBLIC, normalized);
  if (!file.startsWith(PUBLIC) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    return send(res, 404, 'application/json; charset=utf-8', JSON.stringify({ error: 'not_found' }));
  }
  const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
  send(res, 200, types[path.extname(file)] || 'application/octet-stream', fs.readFileSync(file));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (req.method !== 'GET') return send(res, 405, 'application/json; charset=utf-8', JSON.stringify({ error: 'method_not_allowed' }));
  if (url.pathname === '/api/workspace') return send(res, 200, 'application/json; charset=utf-8', JSON.stringify(snapshot()));
  if (url.pathname === '/api/health') return send(res, 200, 'application/json; charset=utf-8', JSON.stringify({ status: 'ok', service: 'studx-workspace' }));
  serveFile(url.pathname, res);
});

if (require.main === module) server.listen(PORT, HOST, () => console.log(`STUDX Workspace: http://${HOST}:${PORT}`));

module.exports = { server, snapshot, safePath };
