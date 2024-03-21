# 基于el-menu的菜单组件（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-ele-nav '右键新窗口浏览')

## 预览
	clone项目后npm run preview即可

## 安装
	npm i vue-ele-nav-plus
	// 需要安装前置依赖组件，已安装请忽略
	npm i vue-router
	npm i element-plus
	// 开启国际化需要安装组件，已安装请忽略
	npm i vue-i18n

## 使用
	import vueEleNavPlus from "vue-ele-nav-plus";
	import "vue-ele-nav-plus/index.css";
	
	app.use(vueEleNavPlus);


## 0. 可改动样式变量
> 当前dom层级的vue-ele-nav-plus-box中！！！

* `--ele-nav-menu-height`：60px;-->嵌入DOM中的菜单高度

* `--ele-nav-text`：#303133;-->菜单字体颜色

* `--ele-nav-bg`：#fff;-->一级菜单背景色

* `--ele-nav-menu-bg2`：transparent;-->二级菜单背景色，建议使用菜单背景色less函数计算darken(x, 3%)

* `--ele-nav-menu-bg3`：transparent;-->三级菜单背景色，建议使用菜单背景色less函数计算darken(x, 6%)

* `--ele-nav-menu-bg4`：transparent;-->四级菜单背景色，建议使用菜单背景色less函数计算darken(x, 9%)

* `--ele-nav-menu-bg-hover`：#fef5e6;-->触摸菜单颜色，建议使用菜单背景色less函数计算lighten(x, 5%)

* `--ele-nav-menu-active`：var(--el-color-primary);-->点亮菜单颜色,默认取element主色

* `--ele-nav-colla-bg`：rgba(255, 255, 255, .2);-->收缩按钮背景色

> body中的vue-ele-nav-plus-poper中！！！

* `--ele-nav-menu-second-height`：40px;-->浮窗菜单高度

* `--ele-nav-text`：#303133;-->浮窗菜单字体颜色

* `--ele-nav-menu-bg2`：transparent;-->二级菜单背景色，建议使用菜单背景色less函数计算darken(x, 3%)

* `--ele-nav-menu-bg3`：transparent;-->三级菜单背景色，建议使用菜单背景色less函数计算darken(x, 6%)

* `--ele-nav-menu-bg4`：transparent;-->四级菜单背景色，建议使用菜单背景色less函数计算darken(x, 9%)

* `--ele-nav-menu-bg-hover`：#fef5e6;-->触摸菜单颜色，建议使用菜单背景色less函数计算lighten(x, 5%)

* `--ele-nav-menu-active`：var(--el-color-primary);-->点亮菜单颜色,默认取element主色


## 1. 参数
* `menu`：要显示的菜单数据-->Array;非必传;默认*[]*
>
	// 配置项说明
	{
		"name":'' // 菜单唯一值，对应路由的name，点击触发跳转时会跳转该name
		"icon":{  // 菜单图标
			"attrs":{},
			"type":'',
			"icon":''
		}
		//
		// attrs的值会v-bind到对应dom上
		// type的值，有以下四种情况：
		// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
		// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
		// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
		// 其他，此时为本地自定义图标，type为class，icon为内容
		//
		"title":'' // 普通菜单名或i18n对应的key
		"link":'' // 如果是外链菜单的话，传入跳转地址，点击后会刷新当前页面并打开新窗口打开该地址
		"children":[] // 子菜单，从顶层开始最深支持4层，有子集时父级是无法触发点击（跳转）事件的
	}
	// 菜单激活颜色说明
	有激活状态的路由，必须能找到对应或代点亮的菜单数据，且指向为父级菜单时无效，必须是无子集的菜单
	// 代点亮说明
	路由跳转时，如果当前路由存在route.meta.markName，则会在菜单数据中查找该属性对应的name，并触发点亮（如果存在且可被点亮）；不存在该属性时，会点亮当前路由name对应的菜单数据（如果存在且可被点亮），onlyShowFirst模式下，传入的子菜单数据都会被过滤掉，所以都只会点亮第一层父级，而不是自己
>

* `onlyShowFirst`：只展示菜单第一层数据-->Boolean;非必传;默认*false*
>
	会监听该参数：
	原本父级无法点击事件在此时就能点击了，所以需要自己在路由定义中做路由重定向（有需要的话）
>

* `i18n`：标题是否开启国际化-->Boolean;非必传;默认*false*

* `showCollapsebtn`：纵向时是否展示收缩按钮-->Boolean;非必传;默认*true*

* `openBtn`：展开时的按钮-->Object;非必传;默认*{type:'el',icon:'Fold'}*
>
	attrs的值会v-bind到对应dom上
	type的值，有以下四种情况
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>

* `closeBtn`：收起时的按钮-->Object;非必传;默认*{type:'el',icon:'Expand'}*
>
	attrs的值会v-bind到对应dom上
	type的值，有以下四种情况
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>

* `popDark`：弹窗深色化-->Boolean;非必传;默认*false*
>
	无实际变化，只会给浮窗添加'dark'class
	为了应对非html.dark时组件仍深色的情况
>

* `@collapseChange`：点收缩按钮时触发，这个只是一个空事件，需要自己控制原生属性collapse，包括屏幕多少像素后自动收起，都需要页面自己控制

* 其余参数与官网ele-menu相同


## 更多vue3组件
[**自定义右键菜单**](https://github.com/QuietHear/vue-diy-rightmenu-plus '右键新窗口浏览') | [**可拖拽菜单**](https://github.com/QuietHear/vue-drag-menu-plus '右键新窗口浏览') | [**echarts组件**](https://github.com/QuietHear/vue-echarts-block-plus '右键新窗口浏览') | ***基于el-menu的菜单组件*** | [**面包屑组件**](https://github.com/QuietHear/vue-permission-breads-plus '右键新窗口浏览') | [**滑动拼图**](https://github.com/QuietHear/vue-puzzle-slider-plus '右键新窗口浏览') | [**工作日历**](https://github.com/QuietHear/vue-shop-calendar-plus '右键新窗口浏览') | [**多页签组件**](https://github.com/QuietHear/vue-tabs-plus '右键新窗口浏览') | [**wangEditor**](https://github.com/QuietHear/vue-wangEditor-block-plus '右键新窗口浏览') | [**年密度组件**](https://github.com/QuietHear/vue-year-density-plus '右键新窗口浏览')