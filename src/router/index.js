import vue from 'vue';
import VueRouter from 'vue-router';
import findUser from "@/views/addUser";
import editUser from "@/views/editUser";
import deleteUser from "@/views/deleteUser";
import addUser from "@/views/findUser";
import index from "@/views/index";


vue.use(VueRouter);

export default new VueRouter(
    {
        routes:[
            {
                path: '/editUser',
                name:'editUser',
                component:editUser
            },
            {
                path: '/deleteUser',
                name: 'deleteUser',
                component:deleteUser
            },
            {
                path: '/addUser',
                name: 'addUser',
                component:addUser
            },
            {
                path: '/findUser',
                name: 'findUser',
                component:findUser
            },
            {
                path: '/',
                name: 'index',
                component:index
            },

        ]
    }

);
