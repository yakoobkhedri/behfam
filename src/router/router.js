import { createRouter,createWebHistory } from "vue-router";
import Home from '../pages/Home.vue';
// import Pannel from '../pages/fiveF_step_TwoView.vue';

const routes=[
    {name:'home',path:'/',component:Home},
    // {name:'pannel',path:'/pannel',component:Pannel},
];

const router=createRouter({
    history:createWebHistory(),
    routes
});


export default router;