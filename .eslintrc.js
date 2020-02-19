module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    plugins: ["@typescript-eslint", "react"],
    rules: {
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,

        "max-len": ["warning", { "code": 120 }], // Max line length
        "comma-dangle": ["warning", "always"], // trailing comma
        "tabWidth": 4,
        "semi": true,
        "endOfLine": "lf",
        "useTabs": false,
        "bracketSpacing": true,
        "jsxBracketSameLine": false,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "printWidth": 120
    }
};
