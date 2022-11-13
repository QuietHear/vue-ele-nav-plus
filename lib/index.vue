/*
 * @Author: aFei
 * @Date: 2022-07-25 17:00:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-11-13 10:17:08
*/
<template>
  <el-menu :default-openeds="opens" class="vue-ele-nav-plus" v-if="init">
    <!-- 一级菜单 -->
    <template v-for="item1 in navInformation" :key="item1.index">
      <el-sub-menu
        :class="item1.active ? 'replace-active' : ''"
        popper-class="vue-ele-nav-plus-hor-first"
        :index="item1.index"
        v-if="item1.children.length > 0"
      >
        <template #title>
          <div
            class="parent-title"
            @click="
              (!clickParentJump && item1.showSelf !== true) ||
                menuItemClick(item1)
            "
          >
            <template v-if="item1.icon">
              <el-icon v-if="item1.icon[0] === 'el'">
                <component :is="item1.icon[1]" />
              </el-icon>
              <i
                :class="['icon iconfont', 'icon-' + item1.icon[1]]"
                v-else-if="item1.icon[0] === 'iconfont'"
              />
              <i :class="item1.icon[0]" v-else>{{ item1.icon[1] }}</i>
            </template>
            <span>{{ i18n ? $t(item1.title) : item1.title }}</span>
          </div>
        </template>
        <!-- 二级菜单 -->
        <template v-for="item2 in item1.children" :key="item2.index">
          <el-sub-menu
            :class="item2.active ? 'replace-active-child' : ''"
            popper-class="second"
            :index="item2.index"
            v-if="item2.children.length > 0"
          >
            <template #title>
              <div
                class="parent-title"
                @click="
                  (!clickParentJump && item2.showSelf !== true) ||
                    menuItemClick(item2)
                "
              >
                {{ i18n ? $t(item2.title) : item2.title }}
              </div>
            </template>
            <!-- 三级菜单 -->
            <template v-for="item3 in item2.children" :key="item3.index">
              <el-sub-menu
                :class="item3.active ? 'replace-active-child' : ''"
                popper-class="third"
                :index="item3.index"
                v-if="item3.children.length > 0"
              >
                <template #title>
                  <div
                    class="parent-title"
                    @click="
                      (!clickParentJump && item3.showSelf !== true) ||
                        menuItemClick(item3)
                    "
                  >
                    {{ i18n ? $t(item3.title) : item3.title }}
                  </div>
                </template>
                <!-- 四级菜单 -->
                <template v-for="item4 in item3.children" :key="item4.index">
                  <el-menu-item
                    :class="item4.active ? 'replace-active-child' : ''"
                    :index="item4.index"
                    @click="menuItemClick(item4)"
                  >
                    {{ i18n ? $t(item4.title) : item4.title }}
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item
                :class="item3.active ? 'replace-active-child' : ''"
                :index="item3.index"
                @click="menuItemClick(item3)"
                v-else
              >
                {{ i18n ? $t(item3.title) : item3.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
          <el-menu-item
            :class="item2.active ? 'replace-active-child' : ''"
            :index="item2.index"
            @click="menuItemClick(item2)"
            v-else
          >
            {{ i18n ? $t(item2.title) : item2.title }}
          </el-menu-item>
        </template>
      </el-sub-menu>
      <el-menu-item
        :class="item1.active ? 'replace-active' : ''"
        :index="item1.index"
        @click="menuItemClick(item1)"
        v-else
      >
        <template v-if="item1.icon">
          <el-icon v-if="item1.icon[0] === 'el'">
            <component :is="item1.icon[1]" />
          </el-icon>
          <i
            :class="['icon iconfont', 'icon-' + item1.icon[1]]"
            v-else-if="item1.icon[0] === 'iconfont'"
          />
          <i :class="item1.icon[0]" v-else>{{ item1.icon[1] }}</i>
        </template>
        <span>{{ i18n ? $t(item1.title) : item1.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "vueEleNavPlus",
  props: {
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
  },
  setup(props, { attrs, slots, emit, expose }) {
    const router = useRouter();
    const route = useRoute();
    // 完整菜单
    const routeMsg = ref([]);
    // 默认打开的菜单
    const init = ref(false);
    const opens = ref([]);
    // 展示菜单
    const navInformation = ref([]);
    watch(props.menu, () => {
      initMenu();
    });
    // 初始化菜单
    const initMenu = async () => {
      init.value = false;
      routeMsg.value = JSON.parse(JSON.stringify(props.menu));
      if (routeMsg.value.length > 0) {
        sortData(routeMsg.value);
        // 实际菜单
        navInformation.value = JSON.parse(JSON.stringify(routeMsg.value));
        // console.log(
        //   JSON.parse(JSON.stringify(routeMsg.value)),
        //   "routeMsg 1111"
        // );
        checkShow(navInformation.value);
        // console.log(
        //   JSON.parse(JSON.stringify(navInformation.value)),
        //   "navInformation 2222"
        // );
        let nowRoute = await searchRoute(routeMsg.value, route.name);
        let str = nowRoute.index;
        openMenu(str);
        init.value = true;
        routeChange();
      }
    };
    // 格式化数据
    const sortData = (list, parentIndex) => {
      list.forEach((item, index) => {
        item.index = `${
          parentIndex !== undefined ? parentIndex + "-" : ""
        }${index}`;
        item.active = false;
        item.icon = item.icon ? item.icon.split("/") : undefined;
        if (item.children && item.children.length > 0) {
          sortData(item.children, item.index);
        } else {
          item.children = [];
        }
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
    watch(route, () => {
      routeChange();
    });
    // 路由改变
    const routeChange = async () => {
      shutMenu(navInformation.value);
      let nowRoute = await searchRoute(routeMsg.value, route.name);
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
          let repliceRoute = await searchRoute(
            navInformation.value,
            nowRoute.markName
          );
          lightMenu(navInformation.value, repliceRoute.index);
        } else {
          lightMenu(navInformation.value, nowRoute.index);
        }
      }
      // console.log(
      //   JSON.parse(JSON.stringify(navInformation.value)),
      //   "navInformation 4444"
      // );
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
    const searchRoute = (list, name) => {
      return new Promise((resolve) => {
        list.forEach((item) => {
          if (item.name === name) {
            resolve(item);
          } else if (item.children.length > 0) {
            searchRoute(item.children, name).then((res) => {
              resolve(res);
            });
          }
        });
      });
    };
    // 点击事件
    const menuItemClick = (item) => {
      router.push({ name: item.name });
    };
    initMenu();
    return {
      opens,
      init,
      navInformation,
      menuItemClick,
    };
  },
};
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>