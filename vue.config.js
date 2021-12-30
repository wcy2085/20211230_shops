module.exports={
    lintOnSave:false,//关闭语法检查
    
    //两种方式，不可同时使用
    //开启代理服务器  方式一
  /*   devServer: {
        //这个5000，是告诉代理服务器转发给谁
        proxy: 'http://localhost:5000'
    }, */
   
    devServer: {     
       //开启代理服务器  方式二   可以配置多个请求服务器
        proxy: {
            //1:完整的请求配置
            //'/demo':请求前缀,走不走代理路径,demo是自己起的名字
          '/demo': {
            //  target: '<url>'   向哪里发
            target: 'http://localhost:5001',
            //代理服务器转发给5000的，去掉前缀
            pathRewrite:{'^/demo':''},
             //ws  用于支持websocket，可以不写，默认是true
            ws: true,
            //'说慌'，跟被请求的服务器保持一致的服务器，也说自己是5000，
            changeOrigin: true  //用于控制请求头中的host值  可省略，默认为true
          },
          //2:简写的请求配置
          '/foo': {
            target: 'http://localhost:5000',
            pathRewrite:{'^/foo':''},
          }
        },
      }
}
