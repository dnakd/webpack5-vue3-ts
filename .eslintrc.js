// .eslintrc.js 示例
module.exports = {
    root:true,
    env: {
        'node': true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
    parserOptions: {
        'ecmaVersion': '2020', 'sourceType': 'module',
    },
    rules: {
        'semi': ['error', 'always'], 'quotes': ['error', 'single'],
        'no-unused-vars':['error'],
        'vue/multi-word-component-names':'off',
    },
};
