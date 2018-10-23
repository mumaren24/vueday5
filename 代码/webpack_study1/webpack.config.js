const path = require('path')

// 这是 使用 Node 语法， 向外导出一个 配置对象
module.exports = {
  mode: 'development', // production    development  注意：在开发期间，推荐使用 development 模式；
  entry: './src/second.js', // 指定一个打包的入口文件
  output: {
    // 输出的配置对象
    path: path.join(__dirname, './dist'), // 把打包好的文件，放到哪个目录中
    filename: 'bundle.js' // 指定输出的文件名称
  }
}

// 注意： webpack 从 4.x 版本开始，提供了一些默认的约定：
//   1. 如果 程序员 在 webpack.config.js 这个配置文件中，没有提供 entry 入口文件，则 webpack 默认 去 打包 src 目录下的 index.js 文件
//   2. 如果程序员没有 在配置文件中，提供 output 输入选项，则 webpack 默认，把打包构建好的代码文件，放到 dist 目录下 的 main.js 文件中
