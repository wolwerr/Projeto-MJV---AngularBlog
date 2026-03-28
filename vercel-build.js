const fs = require('fs');
const path = require('path');

const envFilePath = path.join(__dirname, 'src', 'assets', 'env.js');
const localEnvPath = path.join(__dirname, '.env.local');

function loadLocalEnvFile() {
  if (!fs.existsSync(localEnvPath)) {
    return;
  }

  const content = fs.readFileSync(localEnvPath, 'utf8');
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex < 0) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadLocalEnvFile();

const envConfig = {
  BASE_URL_BACKEND: process.env.BASE_URL_BACKEND || '',
  BASE_URL_EMAIL: process.env.BASE_URL_EMAIL || ''
};

const envFileContent = `window.__env = ${JSON.stringify(envConfig, null, 2)};\n`;

fs.writeFileSync(envFilePath, envFileContent, 'utf8');

console.log('Runtime environment variables written to src/assets/env.js');
