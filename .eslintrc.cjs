module.exports = {
    extends: ["eslint:recommended", "plugin:svelte/recommended", "prettier"],
    plugins: ["svelte"],
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
            },
        },
    ],
    env: {
        browser: true,
        es2021: true,
    },
    rules: {
        "no-unused-vars": "warn",
        "no-extra-semi": "warn",
    },
};
