(function(o,d){typeof exports=="object"&&typeof module<"u"?module.exports=d(require("vue"),require("vue-router")):typeof define=="function"&&define.amd?define(["vue","vue-router"],d):(o=typeof globalThis<"u"?globalThis:o||self,o.vueEleNavPlus=d(o.Vue,o.vueRouter))})(this,function(o,d){"use strict";const H="",J={class:"vue-ele-nav-plus-box"},A=["onClick"],j=["onClick"],q=["onClick"],O=[{__name:"index",props:{menu:{type:Array,default:()=>[]},onlyShowFirst:{type:Boolean,default:!1},i18n:{type:Boolean,default:!1},clickParentJump:{type:Boolean,default:!1},collapse:{type:Boolean,default:!1},autoCollapse:{type:Boolean,default:!0},collapseMaxWidth:{type:Number,default:960},showCollapseBtn:{type:Boolean,default:!0},openBtn:{type:Object,default:()=>({type:"el",icon:"Fold"})},closeBtn:{type:Object,default:()=>({type:"el",icon:"Expand"})}},emits:["collapseChange"],setup(c,{expose:w,emit:S}){const s=c,U=d.useRouter(),P=d.useRoute(),F=o.useAttrs();let C=[],$=[];const E=o.ref(!1),M=o.ref([]),B=o.ref([]);o.watch(()=>s.onlyShowFirst,()=>{D()}),o.watch(()=>s.menu,()=>{D()});const m=t=>{let a=t instanceof Array?[]:{};for(let r in t)a[r]=typeof t[r]=="object"?m(t[r]):t[r];return a},D=async()=>{if(E.value=!1,C=m(s.menu),C.length>0){L(C),B.value=m(C),T(B.value);let a=z(P.name).index;R(a),E.value=!0,b()}},L=(t,a)=>{t.forEach((r,p)=>{r.index=`${a!==void 0?a+"-":""}${p}`,r.active=!1,r.icon=r.icon||void 0,r.children&&r.children.length>0?L(r.children,r.index):r.children=[],$.push(m(r))})},R=(t,a=0)=>{const r=t.split("-"),p=r.slice(0,a+1).join("-");M.value.push(p),a+=1,a<r.length-1&&R(t,a)},T=t=>{for(let a=0;a<t.length;a++)t[a].show!==!1?!s.onlyShowFirst&&t[a].children&&t[a].children.length>0?T(t[a].children):t[a].children=[]:(t.splice(a,1),a-=1)};o.watch(P,()=>{b()});const b=async()=>{I(B.value);let t=z(P.name);if(s.onlyShowFirst){let a=t.index.split("-")[0];B.value.filter(r=>r.index===a).length>0&&x(B.value,a)}else if(t.markName){let a=z(t.markName);x(B.value,a.index)}else x(B.value,t.index)},I=t=>{t.forEach(a=>{a.active=!1,a.children.length>0&&I(a.children)})},x=(t,a,r=0)=>{const p=a.split("-"),h=p.slice(0,r+1).join("-");let g=t.filter(N=>N.index===h);g.length>0&&(g[0].active=!0,r+=1,r<p.length&&x(g[0].children,a,r))},z=t=>$.filter(a=>a.name===t)[0],y=t=>{U.push({name:t.name})};D();let k=o.ref(!1);s.autoCollapse||(k.value=s.collapse),F.mode!=="horizontal"&&o.watch(()=>s.autoCollapse,()=>{s.autoCollapse?(f(),window.addEventListener("resize",f)):(k.value=s.collapse,window.removeEventListener("resize",f))});const f=()=>{s.collapseMaxWidth>0&&(k.value=document.body.clientWidth<s.collapseMaxWidth),S("collapseChange",k.value)},W=()=>{k.value=!k.value,S("collapseChange",k.value)},G=()=>k.value;return o.onMounted(()=>{F.mode!=="horizontal"&&s.autoCollapse&&(f(),window.addEventListener("resize",f))}),o.onBeforeUnmount(()=>{window.removeEventListener("resize",f)}),w({manualChange:W,getNowCollapse:G}),(t,a)=>{const r=o.resolveComponent("el-icon"),p=o.resolveComponent("el-menu-item"),h=o.resolveComponent("el-sub-menu"),g=o.resolveComponent("el-menu"),N=o.resolveComponent("el-scrollbar");return o.openBlock(),o.createElementBlock("div",J,[o.createVNode(N,null,{default:o.withCtx(()=>[E.value?(o.openBlock(),o.createBlock(g,o.mergeProps({key:0,class:"vue-ele-nav-plus","default-openeds":t.$attrs.mode!=="horizontal"?M.value:[],collapse:o.unref(k),ellipsis:!1},t.$attrs),{default:o.withCtx(()=>[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(B.value,l=>(o.openBlock(),o.createElementBlock(o.Fragment,{key:l.index},[l.children.length>0?(o.openBlock(),o.createBlock(h,{key:0,class:o.normalizeClass(l.active?"replace-active":""),"popper-class":"vue-ele-nav-plus-hor",index:l.index},{title:o.withCtx(()=>[o.createElementVNode("div",{class:"parent-title",onClick:n=>!c.clickParentJump&&l.showSelf!==!0||y(l)},[l.icon&&(l.icon.icon||l.icon.type)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[l.icon.type==="custom"?(o.openBlock(),o.createBlock(o.resolveDynamicComponent(l.icon.icon),o.normalizeProps(o.mergeProps({key:0},l.icon.attrs)),null,16)):l.icon.type==="el"?(o.openBlock(),o.createBlock(r,o.normalizeProps(o.mergeProps({key:1},l.icon.attrs)),{default:o.withCtx(()=>[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(l.icon.icon)))]),_:2},1040)):l.icon.type==="iconfont"?(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:2,class:["icon iconfont","icon-"+l.icon.icon]},l.icon.attrs),null,16)):(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:3,class:l.icon.type},l.icon.attrs),o.toDisplayString(l.icon.icon),17))],64)):o.createCommentVNode("",!0),o.createElementVNode("span",null,o.toDisplayString(c.i18n?t.$t(l.title):l.title),1)],8,A)]),default:o.withCtx(()=>[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(l.children,n=>(o.openBlock(),o.createElementBlock(o.Fragment,{key:n.index},[n.children.length>0?(o.openBlock(),o.createBlock(h,{key:0,class:o.normalizeClass(n.active?"replace-active-child":""),"popper-class":"second",index:n.index},{title:o.withCtx(()=>[o.createElementVNode("div",{class:"parent-title",onClick:e=>!c.clickParentJump&&n.showSelf!==!0||y(n)},[n.icon&&(n.icon.icon||n.icon.type)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[n.icon.type==="custom"?(o.openBlock(),o.createBlock(o.resolveDynamicComponent(n.icon.icon),o.normalizeProps(o.mergeProps({key:0},n.icon.attrs)),null,16)):n.icon.type==="el"?(o.openBlock(),o.createBlock(r,o.normalizeProps(o.mergeProps({key:1},n.icon.attrs)),{default:o.withCtx(()=>[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(n.icon.icon)))]),_:2},1040)):n.icon.type==="iconfont"?(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:2,class:["icon iconfont","icon-"+n.icon.icon]},n.icon.attrs),null,16)):(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:3,class:n.icon.type},n.icon.attrs),o.toDisplayString(n.icon.icon),17))],64)):o.createCommentVNode("",!0),o.createTextVNode(" "+o.toDisplayString(c.i18n?t.$t(n.title):n.title),1)],8,j)]),default:o.withCtx(()=>[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(n.children,e=>(o.openBlock(),o.createElementBlock(o.Fragment,{key:e.index},[e.children.length>0?(o.openBlock(),o.createBlock(h,{key:0,class:o.normalizeClass(e.active?"replace-active-child":""),"popper-class":"third",index:e.index},{title:o.withCtx(()=>[o.createElementVNode("div",{class:"parent-title",onClick:i=>!c.clickParentJump&&e.showSelf!==!0||y(e)},[e.icon&&(e.icon.icon||e.icon.type)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[e.icon.type==="custom"?(o.openBlock(),o.createBlock(o.resolveDynamicComponent(e.icon.icon),o.normalizeProps(o.mergeProps({key:0},e.icon.attrs)),null,16)):e.icon.type==="el"?(o.openBlock(),o.createBlock(r,o.normalizeProps(o.mergeProps({key:1},e.icon.attrs)),{default:o.withCtx(()=>[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(e.icon.icon)))]),_:2},1040)):e.icon.type==="iconfont"?(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:2,class:["icon iconfont","icon-"+e.icon.icon]},e.icon.attrs),null,16)):(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:3,class:e.icon.type},e.icon.attrs),o.toDisplayString(e.icon.icon),17))],64)):o.createCommentVNode("",!0),o.createTextVNode(" "+o.toDisplayString(c.i18n?t.$t(e.title):e.title),1)],8,q)]),default:o.withCtx(()=>[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(e.children,i=>(o.openBlock(),o.createBlock(p,{key:i.index,class:o.normalizeClass(i.active?"replace-active-child":""),index:i.index,onClick:Q=>y(i)},{default:o.withCtx(()=>[i.icon&&(i.icon.icon||i.icon.type)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[i.icon.type==="custom"?(o.openBlock(),o.createBlock(o.resolveDynamicComponent(i.icon.icon),o.normalizeProps(o.mergeProps({key:0},i.icon.attrs)),null,16)):i.icon.type==="el"?(o.openBlock(),o.createBlock(r,o.normalizeProps(o.mergeProps({key:1},i.icon.attrs)),{default:o.withCtx(()=>[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(i.icon.icon)))]),_:2},1040)):i.icon.type==="iconfont"?(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:2,class:["icon iconfont","icon-"+i.icon.icon]},i.icon.attrs),null,16)):(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:3,class:i.icon.type},i.icon.attrs),o.toDisplayString(i.icon.icon),17))],64)):o.createCommentVNode("",!0),o.createTextVNode(" "+o.toDisplayString(c.i18n?t.$t(i.title):i.title),1)]),_:2},1032,["class","index","onClick"]))),128))]),_:2},1032,["class","index"])):(o.openBlock(),o.createBlock(p,{key:1,class:o.normalizeClass(e.active?"replace-active-child":""),index:e.index,onClick:i=>y(e)},{default:o.withCtx(()=>[e.icon&&(e.icon.icon||e.icon.type)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[e.icon.type==="custom"?(o.openBlock(),o.createBlock(o.resolveDynamicComponent(e.icon.icon),o.normalizeProps(o.mergeProps({key:0},e.icon.attrs)),null,16)):e.icon.type==="el"?(o.openBlock(),o.createBlock(r,o.normalizeProps(o.mergeProps({key:1},e.icon.attrs)),{default:o.withCtx(()=>[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(e.icon.icon)))]),_:2},1040)):e.icon.type==="iconfont"?(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:2,class:["icon iconfont","icon-"+e.icon.icon]},e.icon.attrs),null,16)):(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:3,class:e.icon.type},e.icon.attrs),o.toDisplayString(e.icon.icon),17))],64)):o.createCommentVNode("",!0),o.createTextVNode(" "+o.toDisplayString(c.i18n?t.$t(e.title):e.title),1)]),_:2},1032,["class","index","onClick"]))],64))),128))]),_:2},1032,["class","index"])):(o.openBlock(),o.createBlock(p,{key:1,class:o.normalizeClass(n.active?"replace-active-child":""),index:n.index,onClick:e=>y(n)},{default:o.withCtx(()=>[n.icon&&(n.icon.icon||n.icon.type)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[n.icon.type==="custom"?(o.openBlock(),o.createBlock(o.resolveDynamicComponent(n.icon.icon),o.normalizeProps(o.mergeProps({key:0},n.icon.attrs)),null,16)):n.icon.type==="el"?(o.openBlock(),o.createBlock(r,o.normalizeProps(o.mergeProps({key:1},n.icon.attrs)),{default:o.withCtx(()=>[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(n.icon.icon)))]),_:2},1040)):n.icon.type==="iconfont"?(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:2,class:["icon iconfont","icon-"+n.icon.icon]},n.icon.attrs),null,16)):(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:3,class:n.icon.type},n.icon.attrs),o.toDisplayString(n.icon.icon),17))],64)):o.createCommentVNode("",!0),o.createTextVNode(" "+o.toDisplayString(c.i18n?t.$t(n.title):n.title),1)]),_:2},1032,["class","index","onClick"]))],64))),128))]),_:2},1032,["class","index"])):(o.openBlock(),o.createBlock(p,{key:1,class:o.normalizeClass(l.active?"replace-active":""),index:l.index,onClick:n=>y(l)},{default:o.withCtx(()=>[l.icon&&(l.icon.icon||l.icon.type)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[l.icon.type==="custom"?(o.openBlock(),o.createBlock(o.resolveDynamicComponent(l.icon.icon),o.normalizeProps(o.mergeProps({key:0},l.icon.attrs)),null,16)):l.icon.type==="el"?(o.openBlock(),o.createBlock(r,o.normalizeProps(o.mergeProps({key:1},l.icon.attrs)),{default:o.withCtx(()=>[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(l.icon.icon)))]),_:2},1040)):l.icon.type==="iconfont"?(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:2,class:["icon iconfont","icon-"+l.icon.icon]},l.icon.attrs),null,16)):(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:3,class:l.icon.type},l.icon.attrs),o.toDisplayString(l.icon.icon),17))],64)):o.createCommentVNode("",!0),o.createElementVNode("span",null,o.toDisplayString(c.i18n?t.$t(l.title):l.title),1)]),_:2},1032,["class","index","onClick"]))],64))),128))]),_:1},16,["default-openeds","collapse"])):o.createCommentVNode("",!0)]),_:1}),t.$attrs.mode!=="horizontal"&&c.collapseMaxWidth>0&&c.showCollapseBtn?(o.openBlock(),o.createElementBlock("div",{key:0,class:"collapse-btn",onClick:W},[o.unref(k)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[c.closeBtn&&(c.closeBtn.icon||c.closeBtn.type)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[c.closeBtn.type==="custom"?(o.openBlock(),o.createBlock(o.resolveDynamicComponent(c.closeBtn.icon),o.mergeProps({key:0,class:"menu-icon"},c.closeBtn.attrs),null,16)):c.closeBtn.type==="el"?(o.openBlock(),o.createBlock(r,o.normalizeProps(o.mergeProps({key:1},c.closeBtn.attrs)),{default:o.withCtx(()=>[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(c.closeBtn.icon)))]),_:1},16)):c.closeBtn.type==="iconfont"?(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:2,class:["icon iconfont","icon-"+c.closeBtn.icon]},c.closeBtn.attrs),null,16)):(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:3,class:c.closeBtn.type},c.closeBtn.attrs),o.toDisplayString(c.closeBtn.icon),17))],64)):o.createCommentVNode("",!0)],64)):(o.openBlock(),o.createElementBlock(o.Fragment,{key:1},[c.openBtn&&(c.openBtn.icon||c.openBtn.type)?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[c.openBtn.type==="custom"?(o.openBlock(),o.createBlock(o.resolveDynamicComponent(c.openBtn.icon),o.mergeProps({key:0,class:"menu-icon"},c.openBtn.attrs),null,16)):c.openBtn.type==="el"?(o.openBlock(),o.createBlock(r,o.normalizeProps(o.mergeProps({key:1},c.openBtn.attrs)),{default:o.withCtx(()=>[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(c.openBtn.icon)))]),_:1},16)):c.openBtn.type==="iconfont"?(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:2,class:["icon iconfont","icon-"+c.openBtn.icon]},c.openBtn.attrs),null,16)):(o.openBlock(),o.createElementBlock("i",o.mergeProps({key:3,class:c.openBtn.type},c.openBtn.attrs),o.toDisplayString(c.openBtn.icon),17))],64)):o.createCommentVNode("",!0)],64))])):o.createCommentVNode("",!0)])}}}],V={install(c){O.forEach(w=>{c.component("vueEleNavPlus",w)})}};return typeof window<"u"&&window.Vue&&window.Vue.use(V),V});
