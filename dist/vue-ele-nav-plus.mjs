import { resolveComponent as j, openBlock as e, createBlock as t, resolveDynamicComponent as z, normalizeProps as A, mergeProps as w, withCtx as s, createElementBlock as r, toDisplayString as p, ref as L, watch as V, createVNode as T, unref as q, Fragment as y, renderList as D, createElementVNode as O, createCommentVNode as d, createTextVNode as v } from "vue";
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
    return (g, h) => {
      const E = j("el-icon");
      return n.iconObj.type === "custom" ? (e(), t(z(n.iconObj.icon), A(w({ key: 0 }, n.iconObj.attrs)), null, 16)) : n.iconObj.type === "el" ? (e(), t(E, A(w({ key: 1 }, n.iconObj.attrs)), {
        default: s(() => [
          (e(), t(z(n.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : n.iconObj.type === "iconfont" ? (e(), r("i", w({
        key: 2,
        class: ["icon iconfont", "icon-" + n.iconObj.icon]
      }, n.iconObj.attrs), null, 16)) : (e(), r("i", w({
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
    const h = n, E = K(), b = Q(), N = L("");
    let B = [], M = [];
    const F = L([]);
    V(
      () => h.onlyShowFirst,
      () => {
        I();
      }
    ), V(
      () => h.menu,
      () => {
        I();
      }
    );
    const C = (o) => {
      let u = o instanceof Array ? [] : {};
      for (let l in o)
        u[l] = typeof o[l] == "object" ? C(o[l]) : o[l];
      return u;
    }, I = async () => {
      B = C(h.menu), B.length > 0 && (P(B), F.value = C(B), h.onlyShowFirst && G(F.value), R());
    }, P = (o, u) => {
      o.forEach((l, x) => {
        l.index = `${u !== void 0 ? u + "-" : ""}${x}`, l.icon = l.icon || void 0, l.children && l.children.length > 0 ? P(l.children, l.index) : l.children = [], M.push(C(l));
      });
    }, G = (o) => {
      o.forEach((u) => {
        u.children = [];
      });
    };
    V(
      b,
      () => {
        R();
      }
    );
    const R = () => {
      const o = S(b.meta && b.meta.markName ? b.meta.markName : b.name);
      N.value = "", o && (N.value = h.onlyShowFirst ? o.index.split("-")[0] : o.index);
    }, S = (o) => M.filter((u) => u.index === o || u.name === o)[0], $ = (o) => {
      const u = S(o.index);
      u.link ? (window.open(u.link), window.location.reload()) : E.push({
        name: S(o.index).name
      });
    };
    return I(), (o, u) => {
      const l = j("el-menu-item"), x = j("el-sub-menu"), H = j("el-menu"), J = j("el-scrollbar");
      return e(), r("div", U, [
        T(J, null, {
          default: s(() => [
            T(H, w({
              class: "vue-ele-nav-plus",
              ellipsis: !1,
              "default-active": q(N),
              collapse: n.collapse
            }, o.$attrs), {
              default: s(() => [
                (e(!0), r(y, null, D(q(F), (c) => (e(), r(y, {
                  key: c.index
                }, [
                  c.children.length > 0 ? (e(), t(x, {
                    key: 0,
                    class: "first-menu",
                    "popper-class": "vue-ele-nav-plus-poper" + (n.popDark ? " dark" : ""),
                    index: c.index
                  }, {
                    title: s(() => [
                      O("div", W, [
                        c.icon && (c.icon.icon || c.icon.type) ? (e(), t(f, {
                          key: 0,
                          iconObj: c.icon
                        }, null, 8, ["iconObj"])) : d("", !0),
                        O("span", null, p(n.i18n ? o.$t(c.title) : c.title), 1)
                      ])
                    ]),
                    default: s(() => [
                      (e(!0), r(y, null, D(c.children, (i) => (e(), r(y, {
                        key: i.index
                      }, [
                        i.children.length > 0 ? (e(), t(x, {
                          key: 0,
                          "popper-class": "second",
                          index: i.index
                        }, {
                          title: s(() => [
                            O("div", X, [
                              i.icon && (i.icon.icon || i.icon.type) ? (e(), t(f, {
                                key: 0,
                                iconObj: i.icon
                              }, null, 8, ["iconObj"])) : d("", !0),
                              v(" " + p(n.i18n ? o.$t(i.title) : i.title), 1)
                            ])
                          ]),
                          default: s(() => [
                            (e(!0), r(y, null, D(i.children, (a) => (e(), r(y, {
                              key: a.index
                            }, [
                              a.children.length > 0 ? (e(), t(x, {
                                key: 0,
                                "popper-class": "third",
                                index: a.index
                              }, {
                                title: s(() => [
                                  O("div", Y, [
                                    a.icon && (a.icon.icon || a.icon.type) ? (e(), t(f, {
                                      key: 0,
                                      iconObj: a.icon
                                    }, null, 8, ["iconObj"])) : d("", !0),
                                    v(" " + p(n.i18n ? o.$t(a.title) : a.title), 1)
                                  ])
                                ]),
                                default: s(() => [
                                  (e(!0), r(y, null, D(a.children, (k) => (e(), t(l, {
                                    key: k.index,
                                    index: k.index,
                                    onClick: $
                                  }, {
                                    default: s(() => [
                                      k.icon && (k.icon.icon || k.icon.type) ? (e(), t(f, {
                                        key: 0,
                                        iconObj: k.icon
                                      }, null, 8, ["iconObj"])) : d("", !0),
                                      v(" " + p(n.i18n ? o.$t(k.title) : k.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["index"]))), 128))
                                ]),
                                _: 2
                              }, 1032, ["index"])) : (e(), t(l, {
                                key: 1,
                                index: a.index,
                                onClick: $
                              }, {
                                default: s(() => [
                                  a.icon && (a.icon.icon || a.icon.type) ? (e(), t(f, {
                                    key: 0,
                                    iconObj: a.icon
                                  }, null, 8, ["iconObj"])) : d("", !0),
                                  v(" " + p(n.i18n ? o.$t(a.title) : a.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["index"]))
                            ], 64))), 128))
                          ]),
                          _: 2
                        }, 1032, ["index"])) : (e(), t(l, {
                          key: 1,
                          index: i.index,
                          onClick: $
                        }, {
                          default: s(() => [
                            i.icon && (i.icon.icon || i.icon.type) ? (e(), t(f, {
                              key: 0,
                              iconObj: i.icon
                            }, null, 8, ["iconObj"])) : d("", !0),
                            v(" " + p(n.i18n ? o.$t(i.title) : i.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["index"]))
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["popper-class", "index"])) : (e(), t(l, {
                    key: 1,
                    class: "first-menu",
                    index: c.index,
                    onClick: $
                  }, {
                    title: s(() => [
                      O("span", null, p(n.i18n ? o.$t(c.title) : c.title), 1)
                    ]),
                    default: s(() => [
                      c.icon && (c.icon.icon || c.icon.type) ? (e(), t(f, {
                        key: 0,
                        iconObj: c.icon
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
        o.$attrs.mode !== "horizontal" && n.showCollapseBtn ? (e(), r("div", {
          key: 0,
          class: "collapse-btn",
          onClick: u[0] || (u[0] = (c) => g("collapseChange"))
        }, [
          n.collapse ? (e(), r(y, { key: 0 }, [
            n.closeBtn && (n.closeBtn.icon || n.closeBtn.type) ? (e(), t(f, {
              key: 0,
              iconObj: n.closeBtn
            }, null, 8, ["iconObj"])) : d("", !0)
          ], 64)) : (e(), r(y, { key: 1 }, [
            n.openBtn && (n.openBtn.icon || n.openBtn.type) ? (e(), t(f, {
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
