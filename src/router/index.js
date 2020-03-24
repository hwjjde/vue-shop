import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/About.vue')
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import ('../components/login.vue')
}, {
    path: '/',
    redirect: '/login'
}, {
    path: '/home',
    component: () =>
        import ('../components/home.vue')
}]
const router = new VueRouter({
        routes
    })
    //路由导航守卫 to要访问的路径 from是从哪个路径跳转来的 next()放行
router.beforeEach((to, from, next) => {
    if (to.path != "/login") {
        let bool = window.sessionStorage.getItem("token");
        if (bool) {
            next();
        } else {
            next("/login");
        }
    }
    next();
});
export default router