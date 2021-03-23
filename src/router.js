import Vue from 'vue'
import VueRouter from 'vue-router'
import Slot from './view/1.1/index.vue'
import Biaoddan from './view/1.2/index.vue'
import CustomSwitch from './view/1.3/index.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {path: '/slot', component: Slot},
        {path: '/biaodan', component: Biaoddan},
        {path: '/cunstom-switch', component: CustomSwitch}

    ]
});

export default router