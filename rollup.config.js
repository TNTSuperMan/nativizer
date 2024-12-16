import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

function cfg(format,name){
    return[{
        input: "./src/index.ts",
        output: {
            file: `./dist/nativizer.${name??format}.js`, format,
            name: "nativizer",
            sourcemap: true
        },
        plugins: [typescript()]
    },{
        input: "./src/index.ts",
        output: {
            file: `./dist/nativizer.${name??format}.min.js`, format,
            name: "nativizer",
            sourcemap: true
        },
        plugins: [typescript(), terser()]
    }]
}
export default [
    ...cfg("amd"),
    ...cfg("cjs"),
    ...cfg("es", "esm"),
    ...cfg("iife", "global"),
    ...cfg("system"),
    ...cfg("umd"),
]
