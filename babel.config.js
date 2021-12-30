// babel的控制文件  es6转成5等
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 按需引入ElementUI设置
    //@babel/preset-env新改的
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
