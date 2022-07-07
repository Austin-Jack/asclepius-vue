module.exports = {
    devServer:{
      host:'localhost',
      port:8080,
      proxy:{
        '/api':{
          // target:'http://mi.llynsyw.cn:80',
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