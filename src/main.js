import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.js'
import App from './App.vue'
import router from './router'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//生产者信息是否显示 true false
Vue.config.productionTip = false

//实例化一个vue对象  方法一
new Vue({
  //采用render函数渲染APP页面
  render: h => h(App),
  router
}).$mount('#app')
/*
* $mount('#app') 挂载一个id为 app的容器
* 也可以采用el的形式  el:app 例如：
*   new Vue({
*   el:'#app'
*   render: h => h(App),
*   })
* */



