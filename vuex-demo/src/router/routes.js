import login from '../components/login/login.vue'
export default([
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component:login
  }
])
