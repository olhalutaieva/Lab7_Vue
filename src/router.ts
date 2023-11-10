// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Todo from '@/views/Todo.vue';
import About from '@/views/About.vue';
import store from './store';

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/todo' },
    {
        path: '/todo',
        component: Todo,
        meta: { requiresAuth: true },
    },
    {
        path: '/about',
        component: About,
        meta: { requiresAuth: true },
    },
    {
        path: '/protected',
        name: 'ProtectedRoute',
        component: () => import('../views/ProtectedRoute.vue'),
        beforeEnter: (to, from, next) => {
            if (store.state.isAuthenticated) {
                next(); // Перейти до маршруту, якщо користувач аутентифікований
            } else {
                next('/login'); // Перенаправлення на сторінку авторизації, якщо користувач не аутентифікований
            }
        },
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

router.beforeEach(async (to, from, next) => {
    const user = firebase.auth().currentUser;
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!user) {
            next('/login'); // Перенаправити на сторінку авторизації, якщо користувач не авторизований
        } else if (!user.emailVerified) {
            next('/verify-email'); // Перенаправити на сторінку підтвердження email, якщо email не підтверджений
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;