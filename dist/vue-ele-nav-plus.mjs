import { resolveComponent as v, openBlock as o, createBlock as t, resolveDynamicComponent as A, mergeProps as j, normalizeProps as J, withCtx as s, createElementBlock as r, toDisplayString as p, ref as L, watch as S, createVNode as T, unref as q, Fragment as y, renderList as $, createElementVNode as x, createCommentVNode as d, createTextVNode as O } from "vue";
import { useRouter as K, useRoute as Q } from "vue-router";
const f = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(e) {
    return (g, k) => {
      const D = v("el-icon");
      return e.iconObj.type === "custom" ? (o(), t(A(e.iconObj.icon), j({
        key: 0,
        class: "menu-icon"
      }, e.iconObj.attrs), null, 16)) : e.iconObj.type === "el" ? (o(), t(D, J(j({ key: 1 }, e.iconObj.attrs)), {
        default: s(() => [
          (o(), t(A(e.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : e.iconObj.type === "iconfont" ? (o(), r("i", j({
        key: 2,
        class: ["icon iconfont", "icon-" + e.iconObj.icon]
      }, e.iconObj.attrs), null, 16)) : (o(), r("i", j({
        key: 3,
        class: e.iconObj.type
      }, e.iconObj.attrs), p(e.iconObj.icon), 17));
    };
  }
};
const U = { class: "vue-ele-nav-plus-box" }, W = { class: "parent-title" }, X = { class: "parent-title" }, Y = { class: "parent-title" }, Z = {
  __name: "index",
  props: {
    // 菜单集合数据
    menu: {
      type: Array,
      default: () => []
    },
    // 只展示菜单第一层
    onlyShowFirst: {
      type: Boolean,
      default: !1
    },
    // 标题是否开启国际化
    i18n: {
      type: Boolean,
      default: !1
    },
    collapse: {
      type: Boolean,
      default: !1
    },
    // 纵向时展示收缩按钮
    showCollapseBtn: {
      type: Boolean,
      default: !0
    },
    // 展开时的按钮
    openBtn: {
      type: Object,
      default: () => ({
        type: "el",
        icon: "Fold"
      })
    },
    // 收起时的按钮
    closeBtn: {
      type: Object,
      default: () => ({
        type: "el",
        icon: "Expand"
      })
    },
    // 浮窗深色化
    popDark: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["collapseChange"],
  setup(e, { emit: g }) {
    const k = e, D = K(), V = Q(), N = L("");
    let B = [], M = [];
    const E = L([]);
    S(
      () => k.onlyShowFirst,
      () => {
        F();
      }
    ), S(
      () => k.menu,
      () => {
        F();
      }
    );
    const w = (n) => {
      let l = n instanceof Array ? [] : {};
      for (let c in n)
        l[c] = typeof n[c] == "object" ? w(n[c]) : n[c];
      return l;
    }, F = async () => {
      B = w(k.menu), B.length > 0 && (P(B), E.value = w(B), R(E.value), z());
    }, P = (n, l) => {
      n.forEach((c, b) => {
        c.index = `${l !== void 0 ? l + "-" : ""}${b}`, c.icon = c.icon || void 0, c.children && c.children.length > 0 ? P(c.children, c.index) : c.children = [], M.push(w(c));
      });
    }, R = (n) => {
      for (let l = 0; l < n.length; l++)
        n[l].show !== !1 ? !k.onlyShowFirst && n[l].children && n[l].children.length > 0 ? R(n[l].children) : n[l].children = [] : (n.splice(l, 1), l -= 1);
    };
    S(
      V,
      () => {
        z();
      }
    );
    const z = () => {
      var l;
      const n = I(V.name);
      N.value = "", n && (N.value = n.markName ? (l = I(n.markName)) == null ? void 0 : l.index : k.onlyShowFirst ? n.index.split("-")[0] : n.index);
    }, I = (n) => M.filter((l) => l.index === n || l.name === n)[0], C = (n) => {
      D.push({
        name: I(n.index).name
      });
    };
    return F(), (n, l) => {
      const c = v("el-menu-item"), b = v("el-sub-menu"), G = v("el-menu"), H = v("el-scrollbar");
      return o(), r("div", U, [
        T(H, null, {
          default: s(() => [
            T(G, j({
              class: "vue-ele-nav-plus",
              ellipsis: !1,
              "default-active": q(N),
              collapse: e.collapse
            }, n.$attrs), {
              default: s(() => [
                (o(!0), r(y, null, $(q(E), (i) => (o(), r(y, {
                  key: i.index
                }, [
                  i.children.length > 0 ? (o(), t(b, {
                    key: 0,
                    class: "first-menu",
                    "popper-class": "vue-ele-nav-plus-poper" + (e.popDark ? " dark" : ""),
                    index: i.index
                  }, {
                    title: s(() => [
                      x("div", W, [
                        i.icon && (i.icon.icon || i.icon.type) ? (o(), t(f, {
                          key: 0,
                          iconObj: i.icon
                        }, null, 8, ["iconObj"])) : d("", !0),
                        x("span", null, p(e.i18n ? n.$t(i.title) : i.title), 1)
                      ])
                    ]),
                    default: s(() => [
                      (o(!0), r(y, null, $(i.children, (a) => (o(), r(y, {
                        key: a.index
                      }, [
                        a.children.length > 0 ? (o(), t(b, {
                          key: 0,
                          "popper-class": "second",
                          index: a.index
                        }, {
                          title: s(() => [
                            x("div", X, [
                              a.icon && (a.icon.icon || a.icon.type) ? (o(), t(f, {
                                key: 0,
                                iconObj: a.icon
                              }, null, 8, ["iconObj"])) : d("", !0),
                              O(" " + p(e.i18n ? n.$t(a.title) : a.title), 1)
                            ])
                          ]),
                          default: s(() => [
                            (o(!0), r(y, null, $(a.children, (u) => (o(), r(y, {
                              key: u.index
                            }, [
                              u.children.length > 0 ? (o(), t(b, {
                                key: 0,
                                "popper-class": "third",
                                index: u.index
                              }, {
                                title: s(() => [
                                  x("div", Y, [
                                    u.icon && (u.icon.icon || u.icon.type) ? (o(), t(f, {
                                      key: 0,
                                      iconObj: u.icon
                                    }, null, 8, ["iconObj"])) : d("", !0),
                                    O(" " + p(e.i18n ? n.$t(u.title) : u.title), 1)
                                  ])
                                ]),
                                default: s(() => [
                                  (o(!0), r(y, null, $(u.children, (h) => (o(), t(c, {
                                    key: h.index,
                                    index: h.index,
                                    onClick: C
                                  }, {
                                    default: s(() => [
                                      h.icon && (h.icon.icon || h.icon.type) ? (o(), t(f, {
                                        key: 0,
                                        iconObj: h.icon
                                      }, null, 8, ["iconObj"])) : d("", !0),
                                      O(" " + p(e.i18n ? n.$t(h.title) : h.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["index"]))), 128))
                                ]),
                                _: 2
                              }, 1032, ["index"])) : (o(), t(c, {
                                key: 1,
                                index: u.index,
                                onClick: C
                              }, {
                                default: s(() => [
                                  u.icon && (u.icon.icon || u.icon.type) ? (o(), t(f, {
                                    key: 0,
                                    iconObj: u.icon
                                  }, null, 8, ["iconObj"])) : d("", !0),
                                  O(" " + p(e.i18n ? n.$t(u.title) : u.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["index"]))
                            ], 64))), 128))
                          ]),
                          _: 2
                        }, 1032, ["index"])) : (o(), t(c, {
                          key: 1,
                          index: a.index,
                          onClick: C
                        }, {
                          default: s(() => [
                            a.icon && (a.icon.icon || a.icon.type) ? (o(), t(f, {
                              key: 0,
                              iconObj: a.icon
                            }, null, 8, ["iconObj"])) : d("", !0),
                            O(" " + p(e.i18n ? n.$t(a.title) : a.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["index"]))
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["popper-class", "index"])) : (o(), t(c, {
                    key: 1,
                    class: "first-menu",
                    index: i.index,
                    onClick: C
                  }, {
                    default: s(() => [
                      i.icon && (i.icon.icon || i.icon.type) ? (o(), t(f, {
                        key: 0,
                        iconObj: i.icon
                      }, null, 8, ["iconObj"])) : d("", !0),
                      x("span", null, p(e.i18n ? n.$t(i.title) : i.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["index"]))
                ], 64))), 128))
              ]),
              _: 1
            }, 16, ["default-active", "collapse"])
          ]),
          _: 1
        }),
        n.$attrs.mode !== "horizontal" && e.showCollapseBtn ? (o(), r("div", {
          key: 0,
          class: "collapse-btn",
          onClick: l[0] || (l[0] = (i) => g("collapseChange"))
        }, [
          e.collapse ? (o(), r(y, { key: 0 }, [
            e.closeBtn && (e.closeBtn.icon || e.closeBtn.type) ? (o(), t(f, {
              key: 0,
              iconObj: e.closeBtn
            }, null, 8, ["iconObj"])) : d("", !0)
          ], 64)) : (o(), r(y, { key: 1 }, [
            e.openBtn && (e.openBtn.icon || e.openBtn.type) ? (o(), t(f, {
              key: 0,
              iconObj: e.openBtn
            }, null, 8, ["iconObj"])) : d("", !0)
          ], 64))
        ])) : d("", !0)
      ]);
    };
  }
}, m = [Z], _ = {
  install(e) {
    m.forEach((g) => {
      e.component("vueEleNavPlus", g);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(_);
export {
  _ as default
};
