/*
 * @Author: aFei
 * @Date: 2022-07-25 17:00:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-01-11 18:04:42
*/
import vueEleNavPlus from "./index.vue";
const arr = [vueEleNavPlus];
const comment = {
  install(Vue) {
    arr.forEach(item => {
      Vue.component('vueEleNavPlus', item);
    })
  },
};
// 注入script方式vue中
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
// 导出为全量
export default comment;