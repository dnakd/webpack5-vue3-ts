// 使用了 @commitlint/config-conventional，这是一个遵循 Angular 团队提交准则的预设配置
//  <type>[optional scope]: <description>
// [optional body]
// [optional footer(s)]
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 增加一个新特性
        'fix', // 修复一个bug
        'docs', // 修改文档说明
        'style', // 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
        'refactor', // 代码重构
        'test', // 增加新的测试功能或更改原有的测试模块
        'chore', // 不属于以上类型的其他类型(日常事务)
        'ci', // 对 CI 配置文件和脚本的更改
        'build', // 更改构建系统和外部依赖项（如将 gulp 改为 webpack，更新某个 npm 包）
        'perf', //  更改代码以提高性能
        'revert' // 回滚到上一个版本
      ]
    ],
    'type-case': [0], //type 的输入格式,默认为小写‘lower-case’
    'type-empty': [0], //type 是否可为空
    'scope-empty': [0], //scope 是否为空
    'scope-case': [0], //scope 的格式,默认为小写‘lower-case’
    'subject-full-stop': [0, 'never'], //subject 结尾符,默认为.
    'subject-case': [0, 'never'], //subject 的格式，默认其中之一：['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    'header-max-length': [0, 'always', 72] //header 最大长度，默认为72字符
  }
};
