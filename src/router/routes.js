import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

export default[
    {
        path:'/',
        component:Home,
        
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'search',
        props:(route) => ({keyword3:route.params.keyword,keyword4:route.query.keyword2})
        
    },
    {
        path:'/register',
        component:Register,
        name:'register',
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        }
    },
]