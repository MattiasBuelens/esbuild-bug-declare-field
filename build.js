const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/bundle.js',
    tsconfig: 'tsconfig.json',
    format: 'esm',
    target: 'es2015'
}).catch(() => process.exit(1))
