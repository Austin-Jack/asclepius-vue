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
<<<<<<< HEAD
=======
          target:'http://192.168.1.135:8080',
          changeOrigin:true,
          pathRewrite:{
            '/api':''
          }
>>>>>>> d3de877 (fix:fixup conflict)
        }
      }
    },
    productionSourceMap:false,
    chainWebpack:(config)=>{
      config.plugins.delete('prefetch');
    }
  }