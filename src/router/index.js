import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsPage from '@/components/Page/NewsPage';
import DetailPage from '@/components/Page/DetailPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NewsPage',
      component: NewsPage,
    },
    {
      path: '/article/:id',
      name: 'DetailPage',
      component: DetailPage,
    },
  ],
});
