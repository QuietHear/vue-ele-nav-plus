/*
 * @Author: aFei
 * @Date: 2022-07-25 17:00:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-02-03 16:14:07
*/
<template>
  <div class="vue-ele-nav-plus-box">
    <el-scrollbar>
      <el-menu class="vue-ele-nav-plus" :default-openeds="$attrs['mode'] !== 'horizontal' ? opens : []"
        :collapse="isCollapse" :ellipsis="false" v-bind="$attrs" v-if="init">
        <!-- 一级菜单 -->
        <template v-for="item1 in navInformation" :key="item1.index">
          <el-sub-menu :class="item1.active ? 'replace-active' : ''"
            :popper-class="'vue-ele-nav-plus-poper' + (popDark ? ' dark' : '')" :index="item1.index"
            v-if="item1.children.length > 0">
            <template #title>
              <div class="parent-title" @click="
                (!clickParentJump && item1.showSelf !== true) ||
                menuItemClick(item1)
              ">
                <template v-if="item1.icon && (item1.icon.icon || item1.icon.type)">
                  <component :is="item1.icon.icon" v-bind="item1.icon.attrs" v-if="item1.icon.type === 'custom'" />
                  <el-icon v-bind="item1.icon.attrs" v-else-if="item1.icon.type === 'el'">
                    <component :is="item1.icon.icon" />
                  </el-icon>
                  <i :class="['icon iconfont', 'icon-' + item1.icon.icon]" v-bind="item1.icon.attrs"
                    v-else-if="item1.icon.type === 'iconfont'" />
                  <i :class="item1.icon.type" v-bind="item1.icon.attrs" v-else>{{ item1.icon.icon }}</i>
                </template>
                <span>{{ i18n? $t(item1.title) : item1.title }}</span>
              </div>
            </template>
            <!-- 二级菜单 -->
            <template v-for="item2 in item1.children" :key="item2.index">
              <el-sub-menu :class="item2.active ? 'replace-active-child' : ''" popper-class="second"
                :index="item2.index" v-if="item2.children.length > 0">
                <template #title>
                  <div class="parent-title" @click="
                    (!clickParentJump && item2.showSelf !== true) ||
                    menuItemClick(item2)
                  ">
                    <template v-if="item2.icon && (item2.icon.icon || item2.icon.type)">
                      <component :is="item2.icon.icon" v-bind="item2.icon.attrs" v-if="item2.icon.type === 'custom'" />
                      <el-icon v-bind="item2.icon.attrs" v-else-if="item2.icon.type === 'el'">
                        <component :is="item2.icon.icon" />
                      </el-icon>
                      <i :class="['icon iconfont', 'icon-' + item2.icon.icon]" v-bind="item2.icon.attrs"
                        v-else-if="item2.icon.type === 'iconfont'" />
                      <i :class="item2.icon.type" v-bind="item2.icon.attrs" v-else>{{ item2.icon.icon }}</i>
                    </template>
                    {{ i18n? $t(item2.title) : item2.title }}
                  </div>
                </template>
                <!-- 三级菜单 -->
                <template v-for="item3 in item2.children" :key="item3.index">
                  <el-sub-menu :class="item3.active ? 'replace-active-child' : ''" popper-class="third"
                    :index="item3.index" v-if="item3.children.length > 0">
                    <template #title>
                      <div class="parent-title" @click="
                        (!clickParentJump && item3.showSelf !== true) ||
                        menuItemClick(item3)
                      ">
                        <template v-if="item3.icon && (item3.icon.icon || item3.icon.type)">
                          <component :is="item3.icon.icon" v-bind="item3.icon.attrs"
                            v-if="item3.icon.type === 'custom'" />
                          <el-icon v-bind="item3.icon.attrs" v-else-if="item3.icon.type === 'el'">
                            <component :is="item3.icon.icon" />
                          </el-icon>
                          <i :class="['icon iconfont', 'icon-' + item3.icon.icon]" v-bind="item3.icon.attrs"
                            v-else-if="item3.icon.type === 'iconfont'" />
                          <i :class="item3.icon.type" v-bind="item3.icon.attrs" v-else>{{ item3.icon.icon }}</i>
                        </template>
                        {{ i18n? $t(item3.title) : item3.title }}
                      </div>
                    </template>
                    <!-- 四级菜单 -->
                    <template v-for="item4 in item3.children" :key="item4.index">
                      <el-menu-item :class="item4.active ? 'replace-active-child' : ''" :index="item4.index"
                        @click="menuItemClick(item4)">
                        <template v-if="item4.icon && (item4.icon.icon || item4.icon.type)">
                          <component :is="item4.icon.icon" v-bind="item4.icon.attrs"
                            v-if="item4.icon.type === 'custom'" />
                          <el-icon v-bind="item4.icon.attrs" v-else-if="item4.icon.type === 'el'">
                            <component :is="item4.icon.icon" />
                          </el-icon>
                          <i :class="['icon iconfont', 'icon-' + item4.icon.icon]" v-bind="item4.icon.attrs"
                            v-else-if="item4.icon.type === 'iconfont'" />
                          <i :class="item4.icon.type" v-bind="item4.icon.attrs" v-else>{{ item4.icon.icon }}</i>
                        </template>
                        {{ i18n? $t(item4.title) : item4.title }}
                      </el-menu-item>
                    </template>
                  </el-sub-menu>
                  <el-menu-item :class="item3.active ? 'replace-active-child' : ''" :index="item3.index"
                    @click="menuItemClick(item3)" v-else>
                    <template v-if="item3.icon && (item3.icon.icon || item3.icon.type)">
                      <component :is="item3.icon.icon" v-bind="item3.icon.attrs" v-if="item3.icon.type === 'custom'" />
                      <el-icon v-bind="item3.icon.attrs" v-else-if="item3.icon.type === 'el'">
                        <component :is="item3.icon.icon" />
                      </el-icon>
                      <i :class="['icon iconfont', 'icon-' + item3.icon.icon]" v-bind="item3.icon.attrs"
                        v-else-if="item3.icon.type === 'iconfont'" />
                      <i :class="item3.icon.type" v-bind="item3.icon.attrs" v-else>{{ item3.icon.icon }}</i>
                    </template>
                    {{ i18n? $t(item3.title) : item3.title }}
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item :class="item2.active ? 'replace-active-child' : ''" :index="item2.index"
                @click="menuItemClick(item2)" v-else>
                <template v-if="item2.icon && (item2.icon.icon || item2.icon.type)">
                  <component :is="item2.icon.icon" v-bind="item2.icon.attrs" v-if="item2.icon.type === 'custom'" />
                  <el-icon v-bind="item2.icon.attrs" v-else-if="item2.icon.type === 'el'">
                    <component :is="item2.icon.icon" />
                  </el-icon>
                  <i :class="['icon iconfont', 'icon-' + item2.icon.icon]" v-bind="item2.icon.attrs"
                    v-else-if="item2.icon.type === 'iconfont'" />
                  <i :class="item2.icon.type" v-bind="item2.icon.attrs" v-else>{{ item2.icon.icon }}</i>
                </template>
                {{ i18n? $t(item2.title) : item2.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
          <el-menu-item :class="item1.active ? 'replace-active' : ''" :index="item1.index" @click="menuItemClick(item1)"
            v-else>
            <template v-if="item1.icon && (item1.icon.icon || item1.icon.type)">
              <component :is="item1.icon.icon" v-bind="item1.icon.attrs" v-if="item1.icon.type === 'custom'" />
              <el-icon v-bind="item1.icon.attrs" v-else-if="item1.icon.type === 'el'">
                <component :is="item1.icon.icon" />
              </el-icon>
              <i :class="['icon iconfont', 'icon-' + item1.icon.icon]" v-bind="item1.icon.attrs"
                v-else-if="item1.icon.type === 'iconfont'" />
              <i :class="item1.icon.type" v-bind="item1.icon.attrs" v-else>{{ item1.icon.icon }}</i>
            </template>
            <span>{{ i18n? $t(item1.title) : item1.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
    <!-- 收缩菜单 -->
    <div class="collapse-btn" @click="manualChange"
      v-if="$attrs['mode'] !== 'horizontal' && collapseMaxWidth > 0 && showCollapseBtn">
      <template v-if="isCollapse">
        <template v-if="closeBtn && (closeBtn.icon || closeBtn.type)">
          <component class="menu-icon" :is="closeBtn.icon" v-bind="closeBtn.attrs" v-if="closeBtn.type === 'custom'" />
          <el-icon v-bind="closeBtn.attrs" v-else-if="closeBtn.type === 'el'">
            <component :is="closeBtn.icon" />
          </el-icon>
          <i :class="['icon iconfont', 'icon-' + closeBtn.icon]" v-bind="closeBtn.attrs"
            v-else-if="closeBtn.type === 'iconfont'" />
          <i :class="closeBtn.type" v-bind="closeBtn.attrs" v-else>{{ closeBtn.icon }}</i>
        </template>
      </template>
      <template v-else>
        <template v-if="openBtn && (openBtn.icon || openBtn.type)">
          <component class="menu-icon" :is="openBtn.icon" v-bind="openBtn.attrs" v-if="openBtn.type === 'custom'" />
          <el-icon v-bind="openBtn.attrs" v-else-if="openBtn.type === 'el'">
            <component :is="openBtn.icon" />
          </el-icon>
          <i :class="['icon iconfont', 'icon-' + openBtn.icon]" v-bind="openBtn.attrs"
            v-else-if="openBtn.type === 'iconfont'" />
          <i :class="openBtn.type" v-bind="openBtn.attrs" v-else>{{ openBtn.icon }}</i>
        </template>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onBeforeUnmount, useAttrs } from "vue";
import { useRoute, useRouter } from "vue-router";
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
  // 点击父级菜单是否进行跳转
  clickParentJump: {
    type: Boolean,
    default: false,
  },
  collapse: {
    type: Boolean,
    default: false,
  },
  // 纵向时自动根据屏幕触收缩
  autoCollapse: {
    type: Boolean,
    default: true,
  },
  // 纵向时未收缩时屏幕最大像素
  collapseMaxWidth: {
    type: Number,
    default: 960,
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
const attrs = useAttrs();
// 完整菜单
let routeMsg = [];
// 平级数据
let rowData = [];
// 加载菜单完成
const init = ref(false);
// 默认打开的菜单
const opens = ref([]);
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
  let result = obj instanceof Array ? [] : {};
  for (let key in obj) {
    result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
  }
  return result;
};
// 初始化菜单
const initMenu = async () => {
  init.value = false;
  console.log(props.menu, 'props.menu');
  routeMsg = deepCopy(props.menu);
  if (routeMsg.length > 0) {
    sortData(routeMsg);
    // 实际菜单
    navInformation.value = deepCopy(routeMsg);
    console.log(routeMsg, rowData, "routeMsg 1111");
    checkShow(navInformation.value);
    console.log(deepCopy(navInformation.value), "navInformation 2222");
    let nowRoute = searchRoute(route.name);
    let str = nowRoute.index;
    openMenu(str);
    init.value = true;
    routeChange();
  }
};
// 格式化数据
const sortData = (list, parentIndex) => {
  list.forEach((item, index) => {
    item.index = `${parentIndex !== undefined ? parentIndex + "-" : ""
      }${index}`;
    item.active = false;
    item.icon = item.icon || undefined;
    if (item.children && item.children.length > 0) {
      sortData(item.children, item.index);
    } else {
      item.children = [];
    }
    rowData.push(deepCopy(item));
  });
};
// 打开当前路由菜单
const openMenu = (str, deep = 0) => {
  const arr = str.split("-");
  const now = arr.slice(0, deep + 1).join("-");
  opens.value.push(now);
  deep += 1;
  if (deep < arr.length - 1) {
    openMenu(str, deep);
  }
};
// 筛选出show:false的
const checkShow = (list) => {
  for (let i = 0; i < list.length; i++) {
    // 展示该菜单
    if (list[i].show !== false) {
      if (
        !props.onlyShowFirst &&
        list[i].children &&
        list[i].children.length > 0
      ) {
        checkShow(list[i].children);
      }
      // 统一格式化，后面就不用了做多余判断了
      else {
        list[i].children = [];
      }
    }
    // 不展示该菜单
    else {
      list.splice(i, 1);
      i -= 1;
    }
  }
};
watch(
  route,
  () => {
    routeChange();
  }
);
// 路由改变
const routeChange = async () => {
  shutMenu(navInformation.value);
  let nowRoute = searchRoute(route.name);
  // 只点亮第一层的菜单子元素默认都点亮对应第一层父元素
  if (props.onlyShowFirst) {
    let parentIndex = nowRoute.index.split("-")[0];
    if (
      navInformation.value.filter((item) => {
        return item.index === parentIndex;
      }).length > 0
    ) {
      lightMenu(navInformation.value, parentIndex);
    }
  }
  // 点亮多层的菜单
  else {
    if (nowRoute.markName) {
      let repliceRoute = searchRoute(nowRoute.markName);
      lightMenu(navInformation.value, repliceRoute.index);
    } else {
      lightMenu(navInformation.value, nowRoute.index);
    }
  }
  console.log(deepCopy(navInformation.value), "navInformation 4444");
};
// 熄灭菜单
const shutMenu = (list) => {
  list.forEach((item) => {
    item.active = false;
    if (item.children.length > 0) {
      shutMenu(item.children);
    }
  });
};
// 点亮菜单
const lightMenu = (list, str, deep = 0) => {
  const arr = str.split("-");
  const now = arr.slice(0, deep + 1).join("-");
  let lin = list.filter((item) => {
    return item.index === now;
  });
  if (lin.length > 0) {
    lin[0].active = true;
    deep += 1;
    if (deep < arr.length) {
      lightMenu(lin[0].children, str, deep);
    }
  }
};
// 找到当前路径
const searchRoute = (name) => {
  return rowData.filter(item => {
    return item.name === name;
  })[0];
};
// 点击事件
const menuItemClick = (item) => {
  router.push({ name: item.name });
};
initMenu();
// 收缩菜单
let isCollapse = ref(false);
if (!props.autoCollapse) {
  isCollapse.value = props.collapse;
}
if (attrs.mode !== 'horizontal') {
  watch(
    () => props.autoCollapse,
    () => {
      console.log('状态改变');
      if (props.autoCollapse) {
        widthChange();
        window.addEventListener("resize", widthChange);
      } else {
        isCollapse.value = props.collapse;
        window.removeEventListener("resize", widthChange);
      }
    }
  );
}
// 检测屏幕尺寸，自动收缩菜单
const widthChange = () => {
  if (props.collapseMaxWidth > 0) {
    isCollapse.value = document.body.clientWidth < props.collapseMaxWidth;
  }
  emit("collapseChange", isCollapse.value);
};
// 手动触发改变
const manualChange = () => {
  isCollapse.value = !isCollapse.value;
  emit("collapseChange", isCollapse.value);
};
// 获取当前收缩值
const getNowCollapse = () => {
  return isCollapse.value;
};
onMounted(() => {
  if (attrs.mode !== 'horizontal' && props.autoCollapse) {
    widthChange();
    window.addEventListener("resize", widthChange);
  }
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", widthChange);
});
defineExpose({ manualChange, getNowCollapse });
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>