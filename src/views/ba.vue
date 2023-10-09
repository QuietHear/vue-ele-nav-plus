/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-10-07 15:36:05
*/
<template>
  <div class="">
    一级路由ba<el-button @click="router.push({name:'bb'})">去详情</el-button>
  </div>
</template>
<script setup>
const router = useRouter();
</script>