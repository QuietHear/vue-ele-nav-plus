/*
 * @Author: aFei
 * @Date: 2023-06-29 14:30:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-06-29 14:52:19
*/
<template>
  <component class="menu-icon" :is="iconObj.icon" v-bind="iconObj.attrs" v-if="iconObj.type === 'custom'" />
  <el-icon v-bind="iconObj.attrs" v-else-if="iconObj.type === 'el'">
    <component :is="iconObj.icon" />
  </el-icon>
  <i :class="['icon iconfont', 'icon-' + iconObj.icon]" v-bind="iconObj.attrs" v-else-if="iconObj.type === 'iconfont'" />
  <i :class="iconObj.type" v-bind="iconObj.attrs" v-else>{{ iconObj.icon }}</i>
</template>
<script setup>
const props = defineProps({
  iconObj: {
    type: Object,
    requured: true
  }
});
</script>