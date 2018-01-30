import Router from 'vue-router';

import home from './views/home';

const routes = [{
    path: '/',
    name: 'home',
    component: home,
    meta: {
        keepAlive: true // 是否缓存
    }
}];


export default new Router({
    // mode: 'history',
    routes
});