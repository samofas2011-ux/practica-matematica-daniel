import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await copyFile('index.html', 'dist/index.html');
await copyFile('.nojekyll', 'dist/.nojekyll');
console.log('Build completado: dist/index.html');
