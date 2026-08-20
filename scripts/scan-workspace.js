const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const roots = ['studex', 'huly', 'agent', 'hermes', 'obsidian', 'content', 'health', 'market', 'coffee', 'model'];
const excluded = new Set(['node_modules', '.Trash', 'Library', '.git', 'Applications']);
const results = [];

function walk(dir, depth = 0) {
  if (depth > 3) return;
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const entry of entries) {
    if (!entry.isDirectory() || excluded.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    const lower = entry.name.toLowerCase();
    if (roots.some((term) => lower.includes(term))) {
      results.push({ path: full.replace(os.homedir(), '~'), git: fs.existsSync(path.join(full, '.git')) });
    }
    walk(full, depth + 1);
  }
}

walk(os.homedir());
const output = path.join(__dirname, '..', 'data', 'discovery.local.json');
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify({ generatedAt: new Date().toISOString(), projects: results }, null, 2));
console.log(`Indexed ${results.length} project directories into ${output}`);
