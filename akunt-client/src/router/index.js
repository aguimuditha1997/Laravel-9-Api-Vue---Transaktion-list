import { createRouter,createWebHistory } from "vue-router";
import Index from '../views/transaction/Index.vue'
import Create from '../views/transaction/Create.vue'
import Edit from '../views/transaction/Edit.vue'

const routes=[
    {
        path:'/',
        name: 'index',
        component: Index
    },
    {
        path:'/create',
        name: 'create',
        component:Create
    },
    {
        path:'/edit/:id',
        name: 'edit',
        component:Edit
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;