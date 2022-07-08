module.exports = {
    devServer:{
      host:'localhost',
      port:8081,
      proxy:{
        '/api':{
          // target:'https://as.llynsyw.cn',
          target:'http://192.168.167.210:8080',
          changeOrigin:true,
          pathRewrite:{
            '/api':'/api'
          }
        }
      },
    },
    productionSourceMap:false,
    chainWebpack:(config)=>{
      config.plugins.delete('prefetch');
    }
  }