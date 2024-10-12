/*
 * @Author: aFei
 * @Date: 2022-07-25 17:00:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-10-12 17:18:27
*/
<template>
  <div class="vue-ele-nav-plus-box">
    <el-scrollbar>
      <el-menu class="vue-ele-nav-plus" :ellipsis="false" :default-active="activeIndex" :collapse="collapse"
        v-bind="$attrs">
        <!-- 一级菜单 -->
        <template v-for="item1 in navInformation" :key="item1.index">
          <!-- 一级父菜单 -->
          <el-sub-menu class="first-menu" :popper-class="'vue-ele-nav-plus-poper' + (popDark ? ' dark' : '')"
            :index="item1.index" v-if="item1.children.length > 0">
            <template #title>
              <div class="parent-title">
                <Icon :iconObj="item1.icon" v-if="item1.icon && (item1.icon.icon || item1.icon.type)" />
                <span>{{ i18n ? $t(item1.title) : item1.title }}</span>
              </div>
            </template>
            <!-- 二级菜单 -->
            <template v-for="item2 in item1.children" :key="item2.index">
              <!-- 二级父菜单 -->
              <el-sub-menu popper-class="second" :index="item2.index" v-if="item2.children.length > 0">
                <template #title>
                  <div class="parent-title">
                    <Icon :iconObj="item2.icon" v-if="item2.icon && (item2.icon.icon || item2.icon.type)" />
                    {{ i18n ? $t(item2.title) : item2.title }}
                  </div>
                </template>
                <!-- 三级菜单 -->
                <template v-for="item3 in item2.children" :key="item3.index">
                  <!-- 三级父菜单 -->
                  <el-sub-menu popper-class="third" :index="item3.index" v-if="item3.children.length > 0">
                    <template #title>
                      <div class="parent-title">
                        <Icon :iconObj="item3.icon" v-if="item3.icon && (item3.icon.icon || item3.icon.type)" />
                        {{ i18n ? $t(item3.title) : item3.title }}
                      </div>
                    </template>
                    <!-- 四级菜单 -->
                    <template v-for="item4 in item3.children" :key="item4.index">
                      <!-- 四级子菜单 -->
                      <el-menu-item :index="item4.index" @click="menuItemClick">
                        <Icon :iconObj="item4.icon" v-if="item4.icon && (item4.icon.icon || item4.icon.type)" />
                        {{ i18n ? $t(item4.title) : item4.title }}
                      </el-menu-item>
                    </template>
                  </el-sub-menu>
                  <!-- 三级子菜单 -->
                  <el-menu-item :index="item3.index" @click="menuItemClick" v-else>
                    <Icon :iconObj="item3.icon" v-if="item3.icon && (item3.icon.icon || item3.icon.type)" />
                    {{ i18n ? $t(item3.title) : item3.title }}
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <!-- 二级子菜单 -->
              <el-menu-item :index="item2.index" @click="menuItemClick" v-else>
                <Icon :iconObj="item2.icon" v-if="item2.icon && (item2.icon.icon || item2.icon.type)" />
                {{ i18n ? $t(item2.title) : item2.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
          <!-- 一级子菜单 -->
          <el-menu-item class="first-menu" :index="item1.index" @click="menuItemClick" v-else>
            <Icon :iconObj="item1.icon" v-if="item1.icon && (item1.icon.icon || item1.icon.type)" />
            <template #title>
              <span>{{ i18n ? $t(item1.title) : item1.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
    <!-- 收缩菜单 -->
    <div class="collapse-btn" @click="emit('collapseChange')" v-if="$attrs['mode'] !== 'horizontal' && showCollapseBtn">
      <template v-if="collapse">
        <Icon :iconObj="closeBtn" v-if="closeBtn && (closeBtn.icon || closeBtn.type)" />
      </template>
      <template v-else>
        <Icon :iconObj="openBtn" v-if="openBtn && (openBtn.icon || openBtn.type)" />
      </template>
    </div>
  </div>
</template>
<script setup>
import Icon from "./components/icon.vue";
const emit = defineEmits(["collapseChange"]);
const props = defineProps({
  // 菜单集合数据
  menu: {
    type: Array,
    default: () => {
      return [];
    },
  },
  // 只展示菜单第一层
  onlyShowFirst: {
    type: Boolean,
    default: false,
  },
  // 标题是否开启国际化
  i18n: {
    type: Boolean,
    default: false,
  },
  collapse: {
    type: Boolean,
    default: false,
  },
  // 纵向时展示收缩按钮
  showCollapseBtn: {
    type: Boolean,
    default: true,
  },
  // 展开时的按钮
  openBtn: {
    type: Object,
    default: () => {
      return {
        type: "el",
        icon: "Fold"
      };
    }
  },
  // 收起时的按钮
  closeBtn: {
    type: Object,
    default: () => {
      return {
        type: "el",
        icon: "Expand"
      };
    }
  },
  // 浮窗深色化
  popDark: {
    type: Boolean,
    default: false,
  }
});
const router = useRouter();
const route = useRoute();
// 当前激活的菜单index
const activeIndex = ref('');
// 完整菜单
let routeMsg = [];
// 平级数据
let rowData = [];
// 展示菜单
const navInformation = ref([]);
watch(
  () => props.onlyShowFirst,
  () => {
    initMenu();
  }
);
watch(
  () => props.menu,
  () => {
    initMenu();
  }
);
// 深拷贝
const deepCopy = (obj) => {
  if (typeof obj === 'object' && !isVNode(obj) && obj !== null && !obj instanceof Date) {
    let result = obj instanceof Array ? [] : {};
    for (let key in obj) {
      result[key] = typeof obj[key] === 'object' && !isVNode(obj[key]) && obj[key] !== null && !obj[key] instanceof Date ? deepCopy(obj[key]) : obj[key];
    }
    return result;
  } else {
    return obj;
  }
};
// 初始化菜单
const initMenu = async () => {
  console.log(props.menu, 'props.menu');
  routeMsg = deepCopy(props.menu);
  if (routeMsg.length > 0) {
    sortData(routeMsg);
    console.log(routeMsg, "routeMsg 1111");
    console.log(rowData, "rowData 1111");
    // 实际菜单
    navInformation.value = deepCopy(routeMsg);
    if (props.onlyShowFirst) {
      checkShow(navInformation.value);
    }
    console.log(deepCopy(navInformation.value), "navInformation 2222");
    routeChange();
  }
};
// 格式化数据
const sortData = (list, parentIndex) => {
  list.forEach((item, index) => {
    item.index = `${parentIndex !== undefined ? parentIndex + "-" : ""}${index}`;
    item.icon = item.icon || undefined;
    if (item.children && item.children.length > 0) {
      sortData(item.children, item.index);
    }
    else {
      item.children = [];
    }
    rowData.push(deepCopy(item));
  });
};
// 只保留第一层数据
const checkShow = (list) => {
  list.forEach(item => {
    item.children = [];
  });
};
watch(
  route,
  () => {
    routeChange();
  }
);
// 路由改变
const routeChange = () => {
  console.log(route, 'now route');
  const self = searchRoute(route.meta && route.meta.markName ? route.meta.markName : route.name);
  activeIndex.value = '';
  if (self) {
    activeIndex.value = props.onlyShowFirst ? self.index.split('-')[0] : self.index;
  }
  console.log(activeIndex.value, 'activeIndex.value');
};

// 找到当前路径
const searchRoute = (sq) => {
  return rowData.filter(item => {
    return item.index === sq || item.name === sq;
  })[0];
};
// 点击事件
const menuItemClick = (item) => {
  const res = searchRoute(item.index);
  console.log(res);
  if (res.link) {
    window.open(res.link);
    window.location.reload();
  }
  else {
    router.push({
      name: searchRoute(item.index).name
    });
  }
};
initMenu();
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>