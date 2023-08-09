import { resolveComponent as v, openBlock as o, createBlock as c, resolveDynamicComponent as A, normalizeProps as L, mergeProps as j, withCtx as s, createElementBlock as r, toDisplayString as p, ref as T, watch as S, createVNode as q, unref as G, Fragment as y, renderList as D, createElementVNode as x, createCommentVNode as d, createTextVNode as O } from "vue";
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
      const N = v("el-icon");
      return e.iconObj.type === "custom" ? (o(), c(A(e.iconObj.icon), L(j({ key: 0 }, e.iconObj.attrs)), null, 16)) : e.iconObj.type === "el" ? (o(), c(N, L(j({ key: 1 }, e.iconObj.attrs)), {
        default: s(() => [
          (o(), c(A(e.iconObj.icon)))
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
    const k = e, N = K(), V = Q(), E = T("");
    let w = [], M = [];
    const F = T([]);
    S(
      () => k.onlyShowFirst,
      () => {
        I();
      }
    ), S(
      () => k.menu,
      () => {
        I();
      }
    );
    const B = (n) => {
      let l = n instanceof Array ? [] : {};
      for (let t in n)
        l[t] = typeof n[t] == "object" ? B(n[t]) : n[t];
      return l;
    }, I = async () => {
      w = B(k.menu), w.length > 0 && (P(w), F.value = B(w), R(F.value), z());
    }, P = (n, l) => {
      n.forEach((t, b) => {
        t.index = `${l !== void 0 ? l + "-" : ""}${b}`, t.icon = t.icon || void 0, t.children && t.children.length > 0 ? P(t.children, t.index) : t.children = [], M.push(B(t));
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
      const n = C(V.name);
      E.value = "", n && (E.value = n.markName ? (l = C(n.markName)) == null ? void 0 : l.index : k.onlyShowFirst ? n.index.split("-")[0] : n.index);
    }, C = (n) => M.filter((l) => l.index === n || l.name === n)[0], $ = (n) => {
      const l = C(n.index);
      l.link ? (window.open(l.link), window.location.reload()) : N.push({
        name: C(n.index).name
      });
    };
    return I(), (n, l) => {
      const t = v("el-menu-item"), b = v("el-sub-menu"), H = v("el-menu"), J = v("el-scrollbar");
      return o(), r("div", U, [
        q(J, null, {
          default: s(() => [
            q(H, j({
              class: "vue-ele-nav-plus",
              ellipsis: !1,
              "default-active": G(E),
              collapse: e.collapse
            }, n.$attrs), {
              default: s(() => [
                (o(!0), r(y, null, D(G(F), (i) => (o(), r(y, {
                  key: i.index
                }, [
                  i.children.length > 0 ? (o(), c(b, {
                    key: 0,
                    class: "first-menu",
                    "popper-class": "vue-ele-nav-plus-poper" + (e.popDark ? " dark" : ""),
                    index: i.index
                  }, {
                    title: s(() => [
                      x("div", W, [
                        i.icon && (i.icon.icon || i.icon.type) ? (o(), c(f, {
                          key: 0,
                          iconObj: i.icon
                        }, null, 8, ["iconObj"])) : d("", !0),
                        x("span", null, p(e.i18n ? n.$t(i.title) : i.title), 1)
                      ])
                    ]),
                    default: s(() => [
                      (o(!0), r(y, null, D(i.children, (a) => (o(), r(y, {
                        key: a.index
                      }, [
                        a.children.length > 0 ? (o(), c(b, {
                          key: 0,
                          "popper-class": "second",
                          index: a.index
                        }, {
                          title: s(() => [
                            x("div", X, [
                              a.icon && (a.icon.icon || a.icon.type) ? (o(), c(f, {
                                key: 0,
                                iconObj: a.icon
                              }, null, 8, ["iconObj"])) : d("", !0),
                              O(" " + p(e.i18n ? n.$t(a.title) : a.title), 1)
                            ])
                          ]),
                          default: s(() => [
                            (o(!0), r(y, null, D(a.children, (u) => (o(), r(y, {
                              key: u.index
                            }, [
                              u.children.length > 0 ? (o(), c(b, {
                                key: 0,
                                "popper-class": "third",
                                index: u.index
                              }, {
                                title: s(() => [
                                  x("div", Y, [
                                    u.icon && (u.icon.icon || u.icon.type) ? (o(), c(f, {
                                      key: 0,
                                      iconObj: u.icon
                                    }, null, 8, ["iconObj"])) : d("", !0),
                                    O(" " + p(e.i18n ? n.$t(u.title) : u.title), 1)
                                  ])
                                ]),
                                default: s(() => [
                                  (o(!0), r(y, null, D(u.children, (h) => (o(), c(t, {
                                    key: h.index,
                                    index: h.index,
                                    onClick: $
                                  }, {
                                    default: s(() => [
                                      h.icon && (h.icon.icon || h.icon.type) ? (o(), c(f, {
                                        key: 0,
                                        iconObj: h.icon
                                      }, null, 8, ["iconObj"])) : d("", !0),
                                      O(" " + p(e.i18n ? n.$t(h.title) : h.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["index"]))), 128))
                                ]),
                                _: 2
                              }, 1032, ["index"])) : (o(), c(t, {
                                key: 1,
                                index: u.index,
                                onClick: $
                              }, {
                                default: s(() => [
                                  u.icon && (u.icon.icon || u.icon.type) ? (o(), c(f, {
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
                        }, 1032, ["index"])) : (o(), c(t, {
                          key: 1,
                          index: a.index,
                          onClick: $
                        }, {
                          default: s(() => [
                            a.icon && (a.icon.icon || a.icon.type) ? (o(), c(f, {
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
                  }, 1032, ["popper-class", "index"])) : (o(), c(t, {
                    key: 1,
                    class: "first-menu",
                    index: i.index,
                    onClick: $
                  }, {
                    title: s(() => [
                      x("span", null, p(e.i18n ? n.$t(i.title) : i.title), 1)
                    ]),
                    default: s(() => [
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
        n.$attrs.mode !== "horizontal" && e.showCollapseBtn ? (o(), r("div", {
          key: 0,
          class: "collapse-btn",
          onClick: l[0] || (l[0] = (i) => g("collapseChange"))
        }, [
          e.collapse ? (o(), r(y, { key: 0 }, [
            e.closeBtn && (e.closeBtn.icon || e.closeBtn.type) ? (o(), c(f, {
              key: 0,
              iconObj: e.closeBtn
            }, null, 8, ["iconObj"])) : d("", !0)
          ], 64)) : (o(), r(y, { key: 1 }, [
            e.openBtn && (e.openBtn.icon || e.openBtn.type) ? (o(), c(f, {
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
