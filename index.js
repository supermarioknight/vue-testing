import Vue from 'vue';
import App from './App.vue';

const ele = document.createElement('div');
ele.id = 'root';
document.body.appendChild(ele);

new Vue({
  el: '#root',
  render: (h) => h(App),
});
