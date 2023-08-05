const { build } = require("esbuild")
const { exec } = require("child_process")

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
})
    .then(() => {
        // generate the typings using the Typescript compiler ("tsc")
        exec("tsc --emitDeclarationOnly", (err, stdout, stderr) => {
            if (err) {
                console.error(err)
                process.exit(1)
            }

            if (stderr) {
                console.error(stderr)
                process.exit(1)
            }

            console.log(stdout)
        })
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
