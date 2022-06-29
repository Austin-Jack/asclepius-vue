module.exports = {
    devServer:{
      host:'localhost',
      port:8080,
      proxy:{
        '/api':{
          target:'http://mi.lhlthefirst.com:80',
          changeOrigin:true,
          // pathRewrite:{
          //   '/api':''
          // }
        }
      }
    },
    productionSourceMap:false,
    chainWebpack:(config)=>{
      config.plugins.delete('prefetch');
    }
  }