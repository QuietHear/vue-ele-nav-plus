/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-10-09 11:24:36
*/
<template>
  <div :class="['demo', collapse ? 'else' : '']">
    <el-scrollbar>
      <div style="display: flex;">
        <div class="line">
          <vue-ele-nav-plus :menu="menu" :collapse="collapse" @collapseChange="collapse = !collapse" />
        </div>
        <div class="line">
          <vue-ele-nav-plus :menu="menu" :collapse="collapse" @collapseChange="collapse = !collapse" onlyShowFirst />
        </div>
        <div class="row-box">
          <div class="row">
            <vue-ele-nav-plus :menu="menu" mode="horizontal" />
          </div>
          <div class="row">
            <vue-ele-nav-plus :menu="menu" mode="horizontal" onlyShowFirst />
          </div>
          <el-button @click="router.push({ name: 'f' })" v-if="isLogin">跳与菜单无交互的路由</el-button>
          <el-button @click="doLogin" v-if="!isLogin">登录</el-button>
          <router-view v-else />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script setup>
import vueEleNavPlus from "~/lib/index.vue";
const router = useRouter();
const isLogin = ref(false);
const menu = ref([]);
const collapse = ref(false);
const doLogin = () => {
  isLogin.value = true;
  menu.value = [
    {
      name: 'a',
      icon: { type: 'el', icon: 'Apple' },
      title: '普通一级路由'
    },
    {
      name: 'b',
      icon: { type: 'el', icon: 'Apple' },
      title: '一级路由'
    },
    {
      name: 'c',
      icon: { type: 'el', icon: 'Apple' },
      title: '普通一级路由',
      children: [
        {
          name: 'ca',
          icon: { type: 'el', icon: 'Apple' },
          title: '普通二级路由',
          children: [
            {
              name: 'caa',
              icon: { type: 'el', icon: 'Apple' },
              title: '普通三级路由',
              children: [
                {
                  name: 'caaa',
                  icon: { type: 'el', icon: 'Apple' },
                  title: '普通四级路由'
                },
                {
                  name: 'caab',
                  icon: { type: 'el', icon: 'Apple' },
                  title: '普通四级路由'
                }
              ]
            },
            {
              name: 'cab',
              icon: { type: 'el', icon: 'Apple' },
              title: '普通三级路由'
            }
          ]
        },
        {
          name: 'cb',
          icon: { type: 'el', icon: 'Apple' },
          title: '二级路由'
        }
      ]
    },
    {
      name: 'd',
      icon: { type: 'el', icon: 'Apple' },
      title: '一级路由',
      children: [
        {
          name: 'da',
          icon: { type: 'el', icon: 'Apple' },
          title: '二级路由'
        },
        {
          name: 'db',
          icon: { type: 'el', icon: 'Apple' },
          title: '二级路由'
        }
      ]
    },
    {
      name: 'e',
      icon: { type: 'el', icon: 'Apple' },
      title: '外链',
      link: 'https://www.baidu.com/'
    },
  ];
};
</script>