# 基于element-menu组件的菜单组件（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-ele-nav '浏览')


## 安装
	npm i vue-ele-nav-plus

## 使用
	import vueEleNavPlus from "vue-ele-nav-plus";
	import "vue-ele-nav-plus/index.css";
	
	app.use(vueEleNavPlus);


## 0. 可改动样式变量
* `--ele-nav-bg`：#fff;-->纵向菜单背景色

* `--ele-nav-bg-hor`：#fff;-->横向菜单背景色

* `--ele-nav-menu-height`：60px;-->菜单高度

* `--ele-nav-menu-second-height`：40px;-->横向菜单时浮窗菜单高度

* `--ele-nav-text`：#303133;-->菜单字体颜色

* `--ele-nav-menu-bg2`：transparent;-->二级菜单背景色，建议使用菜单背景色计算darken(x, 3%)

* `--ele-nav-menu-bg3`：transparent;-->三级菜单背景色，建议使用菜单背景色计算darken(x, 6%)

* `--ele-nav-menu-bg4`：transparent;-->四级菜单背景色，建议使用菜单背景色计算darken(x, 9%)

* `--ele-nav-menu-bg-hover`：#fef5e6;-->触摸菜单颜色，建议使用菜单背景色计算lighten(x, 5%)

* `--ele-nav-menu-active`：var(--el-color-primary);-->点亮菜单颜色,默认取element主色


## 1. 参数
* `menu`：要显示的菜单数据-->Array;非必传;默认*[]*
>
	// 字段说明
	{
		// 菜单唯一值，对应路由的name
		"name":'',
		// 菜单图标，只有第一层菜单设置才有效
		// 菜单名分为前后两部分，用/分隔，有以下三种情况
		// el/xxx，此时为el-icon,xxx为图标组件名
		// iconfont/xxx，此时为iconfont，xxx为图标去掉icon-后部分
		// xx/xx，此时为本地自定义图标，前半部分为class，后半部分为内容
		"icon":'',
		// 菜单名
		"title":'',
		// 当前为父级菜单时，点击是否跳转，只有设置为true才跳转
		"showSelf":false,
		// 是否展示在菜单中，只有设置为false才不展示
		"show":true,
		// 次菜单不点亮，代替点亮的菜单name
		"markName":'',
		// 子菜单，从顶层开始最深支持4层
		"children":[]
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

* 其余参数与官网ele-menu相同
