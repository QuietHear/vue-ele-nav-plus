import { resolveComponent as v, openBlock as o, createBlock as c, resolveDynamicComponent as A, normalizeProps as L, mergeProps as j, withCtx as r, createElementBlock as s, toDisplayString as p, ref as T, watch as S, createVNode as q, unref as G, Fragment as y, renderList as $, createElementVNode as x, createCommentVNode as d, createTextVNode as O } from "vue";
import { useRouter as K, useRoute as Q } from "vue-router";
const f = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(n) {
    return (g, k) => {
      const D = v("el-icon");
      return n.iconObj.type === "custom" ? (o(), c(A(n.iconObj.icon), L(j({ key: 0 }, n.iconObj.attrs)), null, 16)) : n.iconObj.type === "el" ? (o(), c(D, L(j({ key: 1 }, n.iconObj.attrs)), {
        default: r(() => [
          (o(), c(A(n.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : n.iconObj.type === "iconfont" ? (o(), s("i", j({
        key: 2,
        class: ["icon iconfont", "icon-" + n.iconObj.icon]
      }, n.iconObj.attrs), null, 16)) : (o(), s("i", j({
        key: 3,
        class: n.iconObj.type
      }, n.iconObj.attrs), p(n.iconObj.icon), 17));
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
  setup(n, { emit: g }) {
    const k = n, D = K(), V = Q(), N = T("");
    let B = [], M = [];
    const E = T([]);
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
    const w = (e) => {
      let l = e instanceof Array ? [] : {};
      for (let t in e)
        l[t] = typeof e[t] == "object" ? w(e[t]) : e[t];
      return l;
    }, F = async () => {
      B = w(k.menu), B.length > 0 && (P(B), E.value = w(B), R(E.value), z());
    }, P = (e, l) => {
      e.forEach((t, b) => {
        t.index = `${l !== void 0 ? l + "-" : ""}${b}`, t.icon = t.icon || void 0, t.children && t.children.length > 0 ? P(t.children, t.index) : t.children = [], M.push(w(t));
      });
    }, R = (e) => {
      for (let l = 0; l < e.length; l++)
        e[l].show !== !1 ? !k.onlyShowFirst && e[l].children && e[l].children.length > 0 ? R(e[l].children) : e[l].children = [] : (e.splice(l, 1), l -= 1);
    };
    S(
      V,
      () => {
        z();
      }
    );
    const z = () => {
      var l;
      const e = I(V.name);
      N.value = "", e && (N.value = e.markName ? (l = I(e.markName)) == null ? void 0 : l.index : k.onlyShowFirst ? e.index.split("-")[0] : e.index);
    }, I = (e) => M.filter((l) => l.index === e || l.name === e)[0], C = (e) => {
      D.push({
        name: I(e.index).name
      });
    };
    return F(), (e, l) => {
      const t = v("el-menu-item"), b = v("el-sub-menu"), H = v("el-menu"), J = v("el-scrollbar");
      return o(), s("div", U, [
        q(J, null, {
          default: r(() => [
            q(H, j({
              class: "vue-ele-nav-plus",
              ellipsis: !1,
              "default-active": G(N),
              collapse: n.collapse
            }, e.$attrs), {
              default: r(() => [
                (o(!0), s(y, null, $(G(E), (i) => (o(), s(y, {
                  key: i.index
                }, [
                  i.children.length > 0 ? (o(), c(b, {
                    key: 0,
                    class: "first-menu",
                    "popper-class": "vue-ele-nav-plus-poper" + (n.popDark ? " dark" : ""),
                    index: i.index
                  }, {
                    title: r(() => [
                      x("div", W, [
                        i.icon && (i.icon.icon || i.icon.type) ? (o(), c(f, {
                          key: 0,
                          iconObj: i.icon
                        }, null, 8, ["iconObj"])) : d("", !0),
                        x("span", null, p(n.i18n ? e.$t(i.title) : i.title), 1)
                      ])
                    ]),
                    default: r(() => [
                      (o(!0), s(y, null, $(i.children, (a) => (o(), s(y, {
                        key: a.index
                      }, [
                        a.children.length > 0 ? (o(), c(b, {
                          key: 0,
                          "popper-class": "second",
                          index: a.index
                        }, {
                          title: r(() => [
                            x("div", X, [
                              a.icon && (a.icon.icon || a.icon.type) ? (o(), c(f, {
                                key: 0,
                                iconObj: a.icon
                              }, null, 8, ["iconObj"])) : d("", !0),
                              O(" " + p(n.i18n ? e.$t(a.title) : a.title), 1)
                            ])
                          ]),
                          default: r(() => [
                            (o(!0), s(y, null, $(a.children, (u) => (o(), s(y, {
                              key: u.index
                            }, [
                              u.children.length > 0 ? (o(), c(b, {
                                key: 0,
                                "popper-class": "third",
                                index: u.index
                              }, {
                                title: r(() => [
                                  x("div", Y, [
                                    u.icon && (u.icon.icon || u.icon.type) ? (o(), c(f, {
                                      key: 0,
                                      iconObj: u.icon
                                    }, null, 8, ["iconObj"])) : d("", !0),
                                    O(" " + p(n.i18n ? e.$t(u.title) : u.title), 1)
                                  ])
                                ]),
                                default: r(() => [
                                  (o(!0), s(y, null, $(u.children, (h) => (o(), c(t, {
                                    key: h.index,
                                    index: h.index,
                                    onClick: C
                                  }, {
                                    default: r(() => [
                                      h.icon && (h.icon.icon || h.icon.type) ? (o(), c(f, {
                                        key: 0,
                                        iconObj: h.icon
                                      }, null, 8, ["iconObj"])) : d("", !0),
                                      O(" " + p(n.i18n ? e.$t(h.title) : h.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["index"]))), 128))
                                ]),
                                _: 2
                              }, 1032, ["index"])) : (o(), c(t, {
                                key: 1,
                                index: u.index,
                                onClick: C
                              }, {
                                default: r(() => [
                                  u.icon && (u.icon.icon || u.icon.type) ? (o(), c(f, {
                                    key: 0,
                                    iconObj: u.icon
                                  }, null, 8, ["iconObj"])) : d("", !0),
                                  O(" " + p(n.i18n ? e.$t(u.title) : u.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["index"]))
                            ], 64))), 128))
                          ]),
                          _: 2
                        }, 1032, ["index"])) : (o(), c(t, {
                          key: 1,
                          index: a.index,
                          onClick: C
                        }, {
                          default: r(() => [
                            a.icon && (a.icon.icon || a.icon.type) ? (o(), c(f, {
                              key: 0,
                              iconObj: a.icon
                            }, null, 8, ["iconObj"])) : d("", !0),
                            O(" " + p(n.i18n ? e.$t(a.title) : a.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["index"]))
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["popper-class", "index"])) : (o(), c(t, {
                    key: 1,
                    class: "first-menu",
                    index: i.index,
                    onClick: C
                  }, {
                    title: r(() => [
                      x("span", null, p(n.i18n ? e.$t(i.title) : i.title), 1)
                    ]),
                    default: r(() => [
                      i.icon && (i.icon.icon || i.icon.type) ? (o(), c(f, {
                        key: 0,
                        iconObj: i.icon
                      }, null, 8, ["iconObj"])) : d("", !0)
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
        e.$attrs.mode !== "horizontal" && n.showCollapseBtn ? (o(), s("div", {
          key: 0,
          class: "collapse-btn",
          onClick: l[0] || (l[0] = (i) => g("collapseChange"))
        }, [
          n.collapse ? (o(), s(y, { key: 0 }, [
            n.closeBtn && (n.closeBtn.icon || n.closeBtn.type) ? (o(), c(f, {
              key: 0,
              iconObj: n.closeBtn
            }, null, 8, ["iconObj"])) : d("", !0)
          ], 64)) : (o(), s(y, { key: 1 }, [
            n.openBtn && (n.openBtn.icon || n.openBtn.type) ? (o(), c(f, {
              key: 0,
              iconObj: n.openBtn
            }, null, 8, ["iconObj"])) : d("", !0)
          ], 64))
        ])) : d("", !0)
      ]);
    };
  }
}, m = [Z], _ = {
  install(n) {
    m.forEach((g) => {
      n.component("vueEleNavPlus", g);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(_);
export {
  _ as default
};
