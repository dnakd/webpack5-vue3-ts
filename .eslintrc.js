// .eslintrc.js 示例
module.exports = {
    'env': {
        'browser': true, 'es2021': true, 'node': true,
    },
    'extends': ['eslint:recommended', 'plugin:vue/vue3-essential'],
    'parser': ['babel-eslint', 'vue-eslint-parser'],
    'parserOptions': {
        'ecmaVersion': '2020', 'sourceType': 'module',
    },
    'rules': {
        'semi': ['error', 'always'], 'quotes': ['error', 'single'],
        'no-unused-vars':['error', 'never'],
    },
    'plugins': ['vue'],
    'globals': {}
};
