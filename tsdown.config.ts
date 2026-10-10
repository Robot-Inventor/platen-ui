import { defineConfig } from "tsdown";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";

const config = defineConfig({
    deps: {
        neverBundle: [/^react(?:\/|$)/u]
    },
    dts: true,
    entry: {
        "components/Accordion": "./src/components/Accordion/index.tsx",
        "components/Button": "./src/components/Button/index.tsx",
        "components/Input": "./src/components/Input/index.tsx",
        "components/Progress": "./src/components/Progress/index.tsx",
        "components/Select": "./src/components/Select/index.tsx",
        "components/Switch": "./src/components/Switch/index.tsx",
        "components/Toast": "./src/components/Toast/index.tsx"
    },
    format: "esm",
    outputOptions: {
        // Avoid consumer-side vanilla-extract plugins reprocessing compiled style modules as `.css.js` sources
        entryFileNames: ({ name }) => `${name.replace(/\.css$/u, ".styles")}.js`
    },
    platform: "neutral",
    plugins: [
        react({
            compiler: true,
            exclude: [/node_modules/u, /\.d\.ts$/u]
        }),
        vanillaExtractPlugin({
            identifiers: "short"
        })
    ],
    root: "./src",
    unbundle: true
});

export default config;
