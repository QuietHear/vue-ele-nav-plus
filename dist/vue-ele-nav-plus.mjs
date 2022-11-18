import { ref as I, watch as j, onMounted as K, onBeforeUnmount as Q, resolveComponent as O, openBlock as e, createElementBlock as o, createVNode as X, withCtx as s, createBlock as r, mergeProps as Y, Fragment as v, renderList as S, normalizeClass as f, createElementVNode as w, resolveDynamicComponent as A, toDisplayString as y, createCommentVNode as N, createTextVNode as M } from "vue";
import { useRouter as Z, useRoute as $ } from "vue-router";
const m = (i, B) => {
  const d = i.__vccOpts || i;
  for (const [l, V] of B)
    d[l] = V;
  return d;
}, ee = {
  name: "vueEleNavPlus",
  emits: ["collapseChange"],
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    onlyShowFirst: {
      type: Boolean,
      default: !1
    },
    i18n: {
      type: Boolean,
      default: !1
    },
    clickParentJump: {
      type: Boolean,
      default: !1
    },
    collapse: {
      type: Boolean,
      default: !1
    },
    collapseMaxWidth: {
      type: Number,
      default: 960
    },
    showCollapseBtn: {
      type: Boolean,
      default: !0
    },
    openBtnClass: {
      type: String,
      default: "el/Expand"
    },
    closeBtnClass: {
      type: String,
      default: "el/Fold"
    }
  },
  setup(i, { attrs: B, slots: d, emit: l, expose: V }) {
    const D = Z(), g = $(), C = I([]), p = I(!1), E = I([]), x = I([]);
    j(
      () => i.menu,
      () => {
        n();
      }
    );
    const n = async () => {
      if (p.value = !1, C.value = JSON.parse(JSON.stringify(i.menu)), C.value.length > 0) {
        c(C.value), x.value = JSON.parse(JSON.stringify(C.value)), h(x.value);
        let t = (await R(C.value, g.name)).index;
        a(t), p.value = !0, P();
      }
    }, c = (u, t) => {
      u.forEach((k, _) => {
        k.index = `${t !== void 0 ? t + "-" : ""}${_}`, k.active = !1, k.icon = k.icon ? k.icon.split("/") : void 0, k.children && k.children.length > 0 ? c(k.children, k.index) : k.children = [];
      });
    }, a = (u, t = 0) => {
      const k = u.split("-"), _ = k.slice(0, t + 1).join("-");
      E.value.push(_), t += 1, t < k.length - 1 && a(u, t);
    }, h = (u) => {
      for (let t = 0; t < u.length; t++)
        u[t].show !== !1 ? !i.onlyShowFirst && u[t].children && u[t].children.length > 0 ? h(u[t].children) : u[t].children = [] : (u.splice(t, 1), t -= 1);
    };
    j(g, () => {
      P();
    });
    const P = async () => {
      L(x.value);
      let u = await R(C.value, g.name);
      if (i.onlyShowFirst) {
        let t = u.index.split("-")[0];
        x.value.filter((k) => k.index === t).length > 0 && b(x.value, t);
      } else if (u.markName) {
        let t = await R(
          x.value,
          u.markName
        );
        b(x.value, t.index);
      } else
        b(x.value, u.index);
    }, L = (u) => {
      u.forEach((t) => {
        t.active = !1, t.children.length > 0 && L(t.children);
      });
    }, b = (u, t, k = 0) => {
      const _ = t.split("-"), W = _.slice(0, k + 1).join("-");
      let z = u.filter((H) => H.index === W);
      z.length > 0 && (z[0].active = !0, k += 1, k < _.length && b(z[0].children, t, k));
    }, R = (u, t) => new Promise((k) => {
      u.forEach((_) => {
        _.name === t ? k(_) : _.children.length > 0 && R(_.children, t).then((W) => {
          k(W);
        });
      });
    }), T = (u) => {
      D.push({ name: u.name });
    };
    n();
    const U = I(i.openBtnClass.split("/")), q = I(i.closeBtnClass.split("/"));
    let J = I(!1);
    const F = () => {
      i.collapseMaxWidth > 0 && (J.value = document.body.clientWidth < i.collapseMaxWidth), l("collapseChange", J.value);
    }, G = () => {
      J.value = !J.value, l("collapseChange", J.value);
    };
    return K(() => {
      F(), window.addEventListener("resize", F);
    }), Q(() => {
      window.removeEventListener("resize", F);
    }), {
      opens: E,
      init: p,
      navInformation: x,
      menuItemClick: T,
      openBtnArr: U,
      closeBtnArr: q,
      isCollapse: J,
      manualChange: G
    };
  }
}, ne = {
  key: 0,
  class: "vue-ele-nav-plus-box"
}, le = ["onClick"], ce = ["onClick"], ae = ["onClick"], oe = ["onClick"], te = ["onClick"], ie = ["onClick"];
function se(i, B, d, l, V, D) {
  const g = O("el-icon"), C = O("el-menu-item"), p = O("el-sub-menu"), E = O("el-menu"), x = O("el-scrollbar");
  return i.$attrs.mode !== "horizontal" ? (e(), o("div", ne, [
    X(x, null, {
      default: s(() => [
        l.init ? (e(), r(E, Y({
          key: 0,
          "default-openeds": l.opens,
          class: "vue-ele-nav-plus",
          collapse: l.isCollapse
        }, i.$attrs), {
          default: s(() => [
            (e(!0), o(v, null, S(l.navInformation, (n) => (e(), o(v, {
              key: n.index
            }, [
              n.children.length > 0 ? (e(), r(p, {
                key: 0,
                class: f(n.active ? "replace-active" : ""),
                "popper-class": "vue-ele-nav-plus-hor-first",
                index: n.index
              }, {
                title: s(() => [
                  w("div", {
                    class: "parent-title",
                    onClick: (c) => !d.clickParentJump && n.showSelf !== !0 || l.menuItemClick(n)
                  }, [
                    n.icon ? (e(), o(v, { key: 0 }, [
                      n.icon[0] === "el" ? (e(), r(g, { key: 0 }, {
                        default: s(() => [
                          (e(), r(A(n.icon[1])))
                        ]),
                        _: 2
                      }, 1024)) : n.icon[0] === "iconfont" ? (e(), o("i", {
                        key: 1,
                        class: f(["icon iconfont", "icon-" + n.icon[1]])
                      }, null, 2)) : (e(), o("i", {
                        key: 2,
                        class: f(n.icon[0])
                      }, y(n.icon[1]), 3))
                    ], 64)) : N("", !0),
                    w("span", null, y(d.i18n ? i.$t(n.title) : n.title), 1)
                  ], 8, le)
                ]),
                default: s(() => [
                  (e(!0), o(v, null, S(n.children, (c) => (e(), o(v, {
                    key: c.index
                  }, [
                    c.children.length > 0 ? (e(), r(p, {
                      key: 0,
                      class: f(c.active ? "replace-active-child" : ""),
                      "popper-class": "second",
                      index: c.index
                    }, {
                      title: s(() => [
                        w("div", {
                          class: "parent-title",
                          onClick: (a) => !d.clickParentJump && c.showSelf !== !0 || l.menuItemClick(c)
                        }, y(d.i18n ? i.$t(c.title) : c.title), 9, ce)
                      ]),
                      default: s(() => [
                        (e(!0), o(v, null, S(c.children, (a) => (e(), o(v, {
                          key: a.index
                        }, [
                          a.children.length > 0 ? (e(), r(p, {
                            key: 0,
                            class: f(a.active ? "replace-active-child" : ""),
                            "popper-class": "third",
                            index: a.index
                          }, {
                            title: s(() => [
                              w("div", {
                                class: "parent-title",
                                onClick: (h) => !d.clickParentJump && a.showSelf !== !0 || l.menuItemClick(a)
                              }, y(d.i18n ? i.$t(a.title) : a.title), 9, ae)
                            ]),
                            default: s(() => [
                              (e(!0), o(v, null, S(a.children, (h) => (e(), r(C, {
                                key: h.index,
                                class: f(h.active ? "replace-active-child" : ""),
                                index: h.index,
                                onClick: (P) => l.menuItemClick(h)
                              }, {
                                default: s(() => [
                                  M(y(d.i18n ? i.$t(h.title) : h.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["class", "index", "onClick"]))), 128))
                            ]),
                            _: 2
                          }, 1032, ["class", "index"])) : (e(), r(C, {
                            key: 1,
                            class: f(a.active ? "replace-active-child" : ""),
                            index: a.index,
                            onClick: (h) => l.menuItemClick(a)
                          }, {
                            default: s(() => [
                              M(y(d.i18n ? i.$t(a.title) : a.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["class", "index", "onClick"]))
                        ], 64))), 128))
                      ]),
                      _: 2
                    }, 1032, ["class", "index"])) : (e(), r(C, {
                      key: 1,
                      class: f(c.active ? "replace-active-child" : ""),
                      index: c.index,
                      onClick: (a) => l.menuItemClick(c)
                    }, {
                      default: s(() => [
                        M(y(d.i18n ? i.$t(c.title) : c.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "index", "onClick"]))
                  ], 64))), 128))
                ]),
                _: 2
              }, 1032, ["class", "index"])) : (e(), r(C, {
                key: 1,
                class: f(n.active ? "replace-active" : ""),
                index: n.index,
                onClick: (c) => l.menuItemClick(n)
              }, {
                default: s(() => [
                  n.icon ? (e(), o(v, { key: 0 }, [
                    n.icon[0] === "el" ? (e(), r(g, { key: 0 }, {
                      default: s(() => [
                        (e(), r(A(n.icon[1])))
                      ]),
                      _: 2
                    }, 1024)) : n.icon[0] === "iconfont" ? (e(), o("i", {
                      key: 1,
                      class: f(["icon iconfont", "icon-" + n.icon[1]])
                    }, null, 2)) : (e(), o("i", {
                      key: 2,
                      class: f(n.icon[0])
                    }, y(n.icon[1]), 3))
                  ], 64)) : N("", !0),
                  w("span", null, y(d.i18n ? i.$t(n.title) : n.title), 1)
                ]),
                _: 2
              }, 1032, ["class", "index", "onClick"]))
            ], 64))), 128))
          ]),
          _: 1
        }, 16, ["default-openeds", "collapse"])) : N("", !0)
      ]),
      _: 1
    }),
    d.collapseMaxWidth > 0 && d.showCollapseBtn ? (e(), o("div", {
      key: 0,
      class: "collapse-btn",
      onClick: B[0] || (B[0] = (...n) => l.manualChange && l.manualChange(...n))
    }, [
      l.isCollapse ? (e(), o(v, { key: 0 }, [
        l.openBtnArr[0] === "el" ? (e(), r(g, { key: 0 }, {
          default: s(() => [
            (e(), r(A(l.openBtnArr[1])))
          ]),
          _: 1
        })) : l.openBtnArr[0] === "iconfont" ? (e(), o("i", {
          key: 1,
          class: f(["icon iconfont", "icon-" + l.openBtnArr[1]])
        }, null, 2)) : (e(), o("i", {
          key: 2,
          class: f(l.openBtnArr[0])
        }, y(l.openBtnArr[1]), 3))
      ], 64)) : (e(), o(v, { key: 1 }, [
        l.closeBtnArr[0] === "el" ? (e(), r(g, { key: 0 }, {
          default: s(() => [
            (e(), r(A(l.closeBtnArr[1])))
          ]),
          _: 1
        })) : l.closeBtnArr[0] === "iconfont" ? (e(), o("i", {
          key: 1,
          class: f(["icon iconfont", "icon-" + l.closeBtnArr[1]])
        }, null, 2)) : (e(), o("i", {
          key: 2,
          class: f(l.closeBtnArr[0])
        }, y(l.closeBtnArr[1]), 3))
      ], 64))
    ])) : N("", !0)
  ])) : (e(), o(v, { key: 1 }, [
    l.init ? (e(), r(E, {
      key: 0,
      "default-openeds": l.opens,
      class: "vue-ele-nav-plus"
    }, {
      default: s(() => [
        (e(!0), o(v, null, S(l.navInformation, (n) => (e(), o(v, {
          key: n.index
        }, [
          n.children.length > 0 ? (e(), r(p, {
            key: 0,
            class: f(n.active ? "replace-active" : ""),
            "popper-class": "vue-ele-nav-plus-hor-first",
            index: n.index
          }, {
            title: s(() => [
              w("div", {
                class: "parent-title",
                onClick: (c) => !d.clickParentJump && n.showSelf !== !0 || l.menuItemClick(n)
              }, [
                n.icon ? (e(), o(v, { key: 0 }, [
                  n.icon[0] === "el" ? (e(), r(g, { key: 0 }, {
                    default: s(() => [
                      (e(), r(A(n.icon[1])))
                    ]),
                    _: 2
                  }, 1024)) : n.icon[0] === "iconfont" ? (e(), o("i", {
                    key: 1,
                    class: f(["icon iconfont", "icon-" + n.icon[1]])
                  }, null, 2)) : (e(), o("i", {
                    key: 2,
                    class: f(n.icon[0])
                  }, y(n.icon[1]), 3))
                ], 64)) : N("", !0),
                w("span", null, y(d.i18n ? i.$t(n.title) : n.title), 1)
              ], 8, oe)
            ]),
            default: s(() => [
              (e(!0), o(v, null, S(n.children, (c) => (e(), o(v, {
                key: c.index
              }, [
                c.children.length > 0 ? (e(), r(p, {
                  key: 0,
                  class: f(c.active ? "replace-active-child" : ""),
                  "popper-class": "second",
                  index: c.index
                }, {
                  title: s(() => [
                    w("div", {
                      class: "parent-title",
                      onClick: (a) => !d.clickParentJump && c.showSelf !== !0 || l.menuItemClick(c)
                    }, y(d.i18n ? i.$t(c.title) : c.title), 9, te)
                  ]),
                  default: s(() => [
                    (e(!0), o(v, null, S(c.children, (a) => (e(), o(v, {
                      key: a.index
                    }, [
                      a.children.length > 0 ? (e(), r(p, {
                        key: 0,
                        class: f(a.active ? "replace-active-child" : ""),
                        "popper-class": "third",
                        index: a.index
                      }, {
                        title: s(() => [
                          w("div", {
                            class: "parent-title",
                            onClick: (h) => !d.clickParentJump && a.showSelf !== !0 || l.menuItemClick(a)
                          }, y(d.i18n ? i.$t(a.title) : a.title), 9, ie)
                        ]),
                        default: s(() => [
                          (e(!0), o(v, null, S(a.children, (h) => (e(), r(C, {
                            key: h.index,
                            class: f(h.active ? "replace-active-child" : ""),
                            index: h.index,
                            onClick: (P) => l.menuItemClick(h)
                          }, {
                            default: s(() => [
                              M(y(d.i18n ? i.$t(h.title) : h.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["class", "index", "onClick"]))), 128))
                        ]),
                        _: 2
                      }, 1032, ["class", "index"])) : (e(), r(C, {
                        key: 1,
                        class: f(a.active ? "replace-active-child" : ""),
                        index: a.index,
                        onClick: (h) => l.menuItemClick(a)
                      }, {
                        default: s(() => [
                          M(y(d.i18n ? i.$t(a.title) : a.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["class", "index", "onClick"]))
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "index"])) : (e(), r(C, {
                  key: 1,
                  class: f(c.active ? "replace-active-child" : ""),
                  index: c.index,
                  onClick: (a) => l.menuItemClick(c)
                }, {
                  default: s(() => [
                    M(y(d.i18n ? i.$t(c.title) : c.title), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "index", "onClick"]))
              ], 64))), 128))
            ]),
            _: 2
          }, 1032, ["class", "index"])) : (e(), r(C, {
            key: 1,
            class: f(n.active ? "replace-active" : ""),
            index: n.index,
            onClick: (c) => l.menuItemClick(n)
          }, {
            default: s(() => [
              n.icon ? (e(), o(v, { key: 0 }, [
                n.icon[0] === "el" ? (e(), r(g, { key: 0 }, {
                  default: s(() => [
                    (e(), r(A(n.icon[1])))
                  ]),
                  _: 2
                }, 1024)) : n.icon[0] === "iconfont" ? (e(), o("i", {
                  key: 1,
                  class: f(["icon iconfont", "icon-" + n.icon[1]])
                }, null, 2)) : (e(), o("i", {
                  key: 2,
                  class: f(n.icon[0])
                }, y(n.icon[1]), 3))
              ], 64)) : N("", !0),
              w("span", null, y(d.i18n ? i.$t(n.title) : n.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "index", "onClick"]))
        ], 64))), 128))
      ]),
      _: 1
    }, 8, ["default-openeds"])) : N("", !0)
  ], 64));
}
const re = /* @__PURE__ */ m(ee, [["render", se]]), de = [re], ue = {
  install(i) {
    de.forEach((B) => {
      i.component(B.name, B);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(ue);
export {
  ue as default
};
