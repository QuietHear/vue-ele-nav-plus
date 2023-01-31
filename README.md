# 基于el-menu的菜单组件（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-ele-nav '浏览')


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
* 在root中！！！

* `--ele-nav-menu-second-height`：40px;-->浮窗菜单高度

* `--ele-nav-text`：#303133;-->菜单字体颜色

* `--ele-nav-menu-bg2`：transparent;-->二级菜单背景色，建议使用菜单背景色计算darken(x, 3%)

* `--ele-nav-menu-bg3`：transparent;-->三级菜单背景色，建议使用菜单背景色计算darken(x, 6%)

* `--ele-nav-menu-bg4`：transparent;-->四级菜单背景色，建议使用菜单背景色计算darken(x, 9%)

* `--ele-nav-menu-bg-hover`：#fef5e6;-->触摸菜单颜色，建议使用菜单背景色计算lighten(x, 5%)

* `--ele-nav-menu-active`：var(--el-color-primary);-->点亮菜单颜色,默认取element主色

* 非root中！！！

* `--ele-nav-bg`：#fff;-->菜单背景色

* `--ele-nav-menu-height`：60px;-->嵌入DOM中的菜单高度


## 1. 参数
* `menu`：要显示的菜单数据-->Array;非必传;默认*[]*
>
	// 配置项说明
	{
		"name":'' // 菜单唯一值，对应路由的name
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
		"title":'' // 菜单名
		"showSelf":false // 当前为父级菜单时，点击是否跳转，只有设置为true才跳转
		"show":true // 是否展示在菜单中，只有设置为false才不展示
		"markName":'' // 次菜单不点亮，代替点亮的菜单name
		"children":[] // 子菜单，从顶层开始最深支持4层
	}
>

* `onlyShowFirst`：只展示菜单第一层-->Boolean;非必传;默认*false*
>
	如果子菜单的第一层父菜单显示出来了，则会点亮第一层父级菜单
	如果子菜单的第一层父菜单隐藏了，则会点亮他的markName菜单
>

* `i18n`：标题是否开启国际化-->Boolean;非必传;默认*false*

* `clickParentJump`：点击父级菜单是否进行跳转-->Boolean;非必传;默认*false*
>
	如果父级菜单设置了showSelf:true，则无视此全局设置
>

* `autoCollapse`：纵向时自动根据屏幕触收缩-->Boolean;非必传;默认*true*
>
	会监听该参数：
	若为true，会自动计算当前的收缩状态，且会触发@collapseChange；
	若为false，则会取传入的collapse值
>

* `showCollapsebtn`：纵向时是否展示收缩按钮-->Boolean;非必传;默认*true*

* `collapseMaxWidth`：纵向时未收缩时屏幕最大像素-->Number;非必传;默认*960*

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

* `@collapseChange`：纵向菜单触发收缩时触发-->第一个参数返回当前是否收缩true/false

* 其余参数与官网ele-menu相同


## 2. 方法
* `manualChange`：手动触发纵向菜单收缩-->会触发@collapseChange

* `getNowCollapse`：获取当前纵向菜单是否收缩
