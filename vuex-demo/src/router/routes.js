import login from '../components/login/login.vue'
import main from '../components/main.vue'
export default([
  {
    path:'/',
    component:main
  },
  {
    path:'/login',
    name:'login',
    component:login
  }
])
