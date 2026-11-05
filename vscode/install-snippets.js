#!/usr/bin/env node
const fs = require('fs');
const os = require('os');
const path = require('path');

const log = m => console.log(`[tool] ${m}`);

function getVscodeSnippetsDir() {
	const home = os.homedir();
	if (process.platform === 'darwin') return path.join(home, 'Library/Application Support/Code/User/snippets');
	if (process.platform === 'win32') return path.join(process.env.APPDATA, 'Code/User/snippets');
	return path.join(home, '.config/Code/User/snippets');
}

function run() {
	try {
		log('Installing VS Code snippets...');
		const dir = getVscodeSnippetsDir();
		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

		const source = path.join(__dirname, '../vscode/tool-frontend.code-snippets');
		const destination = path.join(dir, 'tool-frontend.code-snippets');

		if (!fs.existsSync(source)) throw new Error('Snippets file not found in package');

		log(`Copy from: ${source}`);
		log(`Copy to: ${destination}`);
		fs.copyFileSync(source, destination);
		log(`✅ Installed`);
		log('⚠️ Reload VS Code window (Ctrl+Shift+P -> Reload Window)');
	} catch (e) {
		console.error('[tool] ❌ Error:', e.message);
		process.exit(1);
	}
}
run();
