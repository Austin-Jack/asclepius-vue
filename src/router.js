import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
import Appointment from './pages/appointment'
import Scheduling from './pages/scheduling'


Vue.use(Router)

export default new Router({
    routes:[
        {   
            path:'/' ,
            name:'home',
            component: Index,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index
                },
            ]
        },
        {   
            path:'/Appointment' ,
            name:'appointment',
            component: Appointment,
            children:[
                
            ]
        },
        {   
            path:'/scheduling' ,
            name:'scheduling',
            component: Scheduling
        }

    ]
})