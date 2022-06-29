import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
import Appointment from './pages/appointment'
import Scheduling from './pages/scheduling'
import AppointDetail from './pages/AppointDetail'
import Authentication from './pages/authentication'
import Home from './pages/home'



Vue.use(Router)

const router = new Router({
    routes:[
        {   
            path:'/' ,
            name:'home1',
            component: Index,
            redirect:'/detail',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index
                }
            ]
            
        },
        {
           path:'/home',
           name:'home',
           component:Home
        },
        {   
            path:'/appointment' ,
            name:'appointment',
            component: Appointment,
        },
        {
            path:'/detail',
            component:AppointDetail
        },
        {   
            path:'/scheduling' ,
            name:'scheduling',
            component: Scheduling
        },
        {
            path:'/authentication',
            component: Authentication
        }

    ]
})

// 路由导航守卫
// router.beforeEach((to,from,next)=>{
//     if(to.path==='/appointment/detail'){
//     // 获取token
//         const uid=window.sessionStorage.getItem('uid')
//         if(!uid) return next('/authentication')
//         next();
//     }
//     next()
//   })
  export default router