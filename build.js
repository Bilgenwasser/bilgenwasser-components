const { build } = require("esbuild")

const streamPlugin = {
    name: "stream-plugin",
    setup(build) {
        build.onResolve({ filter: /^stream$/ }, () => ({
            path: "stream",
            namespace: "stream",
        }))

        build.onLoad({ filter: /^stream$/ }, () => ({
            contents: 'export * from "stream";',
            resolveDir: "node_modules/stream",
        }))
    },
}

build({
    entryPoints: ["index.ts"],
    bundle: true,
    minify: true,
    tsconfig: "tsconfig.json",
    platform: "node",
    external: ["react", "react-native"],
    outdir: "build",
    format: "cjs",
    target: ["node18"],
    loader: {
        ".png": "file",
        ".js": "jsx",
    },
    sourcemap: true,
    plugins: [streamPlugin],
}).catch((err) => {
    console.error(err)
    process.exit(1)
})
