const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { snapshot, safePath } = require('../server');

test('workspace snapshot omits secret references', () => {
  const data = snapshot();
  const serialized = JSON.stringify(data);
  assert.equal(serialized.includes('secretRef'), false);
  assert.equal(serialized.includes('api-token'), false);
  assert.ok(data.projects.length >= 8);
});

test('home paths resolve locally', () => {
  assert.equal(safePath('~/demo'), path.join(require('node:os').homedir(), 'demo'));
});

test('public shell and planning artifacts exist', () => {
  for (const file of ['public/index.html', 'public/app.css', 'public/app.js', 'task_plan.md', 'findings.md', 'progress.md', '.env.example']) {
    assert.ok(fs.existsSync(path.join(__dirname, '..', file)), file);
  }
});
