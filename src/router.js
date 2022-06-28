import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
import Appointment from './pages/appointment'
import Scheduling from './pages/scheduling'
import Home from './pages/home'


Vue.use(Router)

export default new Router({
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
            path:'/Appointment' ,
            name:'appointment',
            component: Appointment,
        },
        {   
            path:'/scheduling' ,
            name:'scheduling',
            component: Scheduling
        }

    ]
})