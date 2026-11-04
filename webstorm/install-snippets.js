#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');

function log(msg) {
	console.log(`[tool] ${msg}`);
}

function getJetBrainsBaseDir() {
	const home = os.homedir();

	if (process.platform === 'darwin') {
		return path.join(home, 'Library/Application Support/JetBrains');
	}

	if (process.platform === 'win32') {
		return path.join(process.env.APPDATA, 'JetBrains');
	}

	return path.join(home, '.config/JetBrains');
}

function findAllWebStormTemplatesDirs(baseDir) {
	if (!fs.existsSync(baseDir)) {
		throw new Error('JetBrains directory not found');
	}

	const dirs = fs.readdirSync(baseDir);

	const wsDirs = dirs.filter(d => d.startsWith('WebStorm'));

	if (!wsDirs.length) {
		throw new Error('WebStorm not found');
	}

	return wsDirs.map(dir => {
		const templatesDir = path.join(baseDir, dir, 'templates');

		if (!fs.existsSync(templatesDir)) {
			fs.mkdirSync(templatesDir, { recursive: true });
		}

		return templatesDir;
	});
}

function copySnippets(targetDir) {
	const source = path.join(__dirname, '../webstorm/_tool-frontend.xml');

	if (!fs.existsSync(source)) {
		console.error('[tool] Snippets not found. Is the library installed?');
		process.exit(1);
	}

	const destination = path.join(targetDir, '_tool-frontend.xml');

	log(`Copy from: ${source}`);
	log(`Copy to: ${destination}`);

	if (!fs.existsSync(source)) {
		throw new Error('Snippets file not found in package');
	}

	fs.copyFileSync(source, destination);
}

function run() {
	try {
		log('Installing WebStorm snippets...');

		const baseDir = getJetBrainsBaseDir();
		const templateDirs = findAllWebStormTemplatesDirs(baseDir);

		templateDirs.forEach(dir => {
			copySnippets(dir);
			log(`✅ Installed to: ${dir}`);
		});

		log('⚠️ Restart WebStorm to apply snippets');
	} catch (e) {
		console.error('[evo-lib] ❌ Error:', e.message);
		process.exit(1);
	}
}

run();
