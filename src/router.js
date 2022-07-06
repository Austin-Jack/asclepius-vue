import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
import Appointment from './pages/appointment'
import Scheduling from './pages/scheduling'
import AppointDetail from './pages/AppointDetail'
import Home from './pages/home'
import UserCenter from './pages/userCenter'
import Introduction from './pages/introduction'
import History from './pages/history'
Vue.use(Router)

const router = new Router({
    routes:[
        {   
            path:'/' ,
            name:'home1',
            component: Index,
            redirect:'/index',
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
            path:'/appointment/:level' ,
            name:'appointment',
            component: Appointment,
        },
        {
            path:'/detail/:dId/:docId',
            name:'detail',
            component:AppointDetail
        },
        {   
            path:'/scheduling' ,
            name:'scheduling',
            component: Scheduling
        },
        {
            path:'/userCenter',
            component: UserCenter
        },
        {
            path:'/introduction',
            component:Introduction
        },
        {
            path:'/history',
            component: History
        }

    ]
})


// router.beforeEach((to,from,next)=>{
//      if(to.path === '/userCenter'){
//         const id = localStorage.getItem('token')
//         if(id){ next()}
//         else { alert('请先进行登录') }
//      }else{
//         next()
//      }
//   })
  export default router