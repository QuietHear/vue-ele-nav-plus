import { useAttrs as en, ref as F, watch as I, onMounted as on, onBeforeUnmount as cn, resolveComponent as N, openBlock as n, createElementBlock as a, createVNode as ln, withCtx as y, createBlock as r, mergeProps as s, unref as _, Fragment as f, renderList as V, normalizeClass as $, createElementVNode as S, resolveDynamicComponent as k, normalizeProps as p, toDisplayString as h, createCommentVNode as C, createTextVNode as b } from "vue";
import { useRouter as tn, useRoute as an } from "vue-router";
const sn = { class: "vue-ele-nav-plus-box" }, un = ["onClick"], rn = ["onClick"], dn = ["onClick"], yn = {
  __name: "index",
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
    autoCollapse: {
      type: Boolean,
      default: !0
    },
    collapseMaxWidth: {
      type: Number,
      default: 960
    },
    showCollapseBtn: {
      type: Boolean,
      default: !0
    },
    openBtn: {
      type: Object,
      default: () => ({
        type: "el",
        icon: "Fold"
      })
    },
    closeBtn: {
      type: Object,
      default: () => ({
        type: "el",
        icon: "Expand"
      })
    },
    popDark: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["collapseChange"],
  setup(e, { expose: L, emit: T }) {
    const v = e, m = tn(), W = an(), U = en();
    let D = [], q = [];
    const J = F(!1), G = F([]), x = F([]);
    I(
      () => v.onlyShowFirst,
      () => {
        A();
      }
    ), I(
      () => v.menu,
      () => {
        A();
      }
    );
    const P = (t) => {
      let i = t instanceof Array ? [] : {};
      for (let u in t)
        i[u] = typeof t[u] == "object" ? P(t[u]) : t[u];
      return i;
    }, A = async () => {
      if (J.value = !1, D = P(v.menu), D.length > 0) {
        H(D), x.value = P(D), Q(x.value);
        let i = O(W.name).index;
        K(i), J.value = !0, X();
      }
    }, H = (t, i) => {
      t.forEach((u, B) => {
        u.index = `${i !== void 0 ? i + "-" : ""}${B}`, u.active = !1, u.icon = u.icon || void 0, u.children && u.children.length > 0 ? H(u.children, u.index) : u.children = [], q.push(P(u));
      });
    }, K = (t, i = 0) => {
      const u = t.split("-"), B = u.slice(0, i + 1).join("-");
      G.value.push(B), i += 1, i < u.length - 1 && K(t, i);
    }, Q = (t) => {
      for (let i = 0; i < t.length; i++)
        t[i].show !== !1 ? !v.onlyShowFirst && t[i].children && t[i].children.length > 0 ? Q(t[i].children) : t[i].children = [] : (t.splice(i, 1), i -= 1);
    };
    I(
      W,
      () => {
        X();
      }
    );
    const X = async () => {
      Y(x.value);
      let t = O(W.name);
      if (v.onlyShowFirst) {
        let i = t.index.split("-")[0];
        x.value.filter((u) => u.index === i).length > 0 && R(x.value, i);
      } else if (t.markName) {
        let i = O(t.markName);
        R(x.value, i.index);
      } else
        R(x.value, t.index);
    }, Y = (t) => {
      t.forEach((i) => {
        i.active = !1, i.children.length > 0 && Y(i.children);
      });
    }, R = (t, i, u = 0) => {
      const B = i.split("-"), E = B.slice(0, u + 1).join("-");
      let z = t.filter((j) => j.index === E);
      z.length > 0 && (z[0].active = !0, u += 1, u < B.length && R(z[0].children, i, u));
    }, O = (t) => q.filter((i) => i.name === t)[0], g = (t) => {
      m.push({ name: t.name });
    };
    A();
    let w = F(!1);
    v.autoCollapse || (w.value = v.collapse), U.mode !== "horizontal" && I(
      () => v.autoCollapse,
      () => {
        v.autoCollapse ? (M(), window.addEventListener("resize", M)) : (w.value = v.collapse, window.removeEventListener("resize", M));
      }
    );
    const M = () => {
      v.collapseMaxWidth > 0 && (w.value = document.body.clientWidth < v.collapseMaxWidth), T("collapseChange", w.value);
    }, Z = () => {
      w.value = !w.value, T("collapseChange", w.value);
    }, nn = () => w.value;
    return on(() => {
      U.mode !== "horizontal" && v.autoCollapse && (M(), window.addEventListener("resize", M));
    }), cn(() => {
      window.removeEventListener("resize", M);
    }), L({ manualChange: Z, getNowCollapse: nn }), (t, i) => {
      const u = N("el-icon"), B = N("el-menu-item"), E = N("el-sub-menu"), z = N("el-menu"), j = N("el-scrollbar");
      return n(), a("div", sn, [
        ln(j, null, {
          default: y(() => [
            J.value ? (n(), r(z, s({
              key: 0,
              class: "vue-ele-nav-plus",
              "default-openeds": t.$attrs.mode !== "horizontal" ? G.value : [],
              collapse: _(w),
              ellipsis: !1
            }, t.$attrs), {
              default: y(() => [
                (n(!0), a(f, null, V(x.value, (l) => (n(), a(f, {
                  key: l.index
                }, [
                  l.children.length > 0 ? (n(), r(E, {
                    key: 0,
                    class: $(l.active ? "replace-active" : ""),
                    "popper-class": "vue-ele-nav-plus-poper" + (e.popDark ? " dark" : ""),
                    index: l.index
                  }, {
                    title: y(() => [
                      S("div", {
                        class: "parent-title",
                        onClick: (o) => !e.clickParentJump && l.showSelf !== !0 || g(l)
                      }, [
                        l.icon && (l.icon.icon || l.icon.type) ? (n(), a(f, { key: 0 }, [
                          l.icon.type === "custom" ? (n(), r(k(l.icon.icon), p(s({ key: 0 }, l.icon.attrs)), null, 16)) : l.icon.type === "el" ? (n(), r(u, p(s({ key: 1 }, l.icon.attrs)), {
                            default: y(() => [
                              (n(), r(k(l.icon.icon)))
                            ]),
                            _: 2
                          }, 1040)) : l.icon.type === "iconfont" ? (n(), a("i", s({
                            key: 2,
                            class: ["icon iconfont", "icon-" + l.icon.icon]
                          }, l.icon.attrs), null, 16)) : (n(), a("i", s({
                            key: 3,
                            class: l.icon.type
                          }, l.icon.attrs), h(l.icon.icon), 17))
                        ], 64)) : C("", !0),
                        S("span", null, h(e.i18n ? t.$t(l.title) : l.title), 1)
                      ], 8, un)
                    ]),
                    default: y(() => [
                      (n(!0), a(f, null, V(l.children, (o) => (n(), a(f, {
                        key: o.index
                      }, [
                        o.children.length > 0 ? (n(), r(E, {
                          key: 0,
                          class: $(o.active ? "replace-active-child" : ""),
                          "popper-class": "second",
                          index: o.index
                        }, {
                          title: y(() => [
                            S("div", {
                              class: "parent-title",
                              onClick: (c) => !e.clickParentJump && o.showSelf !== !0 || g(o)
                            }, [
                              o.icon && (o.icon.icon || o.icon.type) ? (n(), a(f, { key: 0 }, [
                                o.icon.type === "custom" ? (n(), r(k(o.icon.icon), p(s({ key: 0 }, o.icon.attrs)), null, 16)) : o.icon.type === "el" ? (n(), r(u, p(s({ key: 1 }, o.icon.attrs)), {
                                  default: y(() => [
                                    (n(), r(k(o.icon.icon)))
                                  ]),
                                  _: 2
                                }, 1040)) : o.icon.type === "iconfont" ? (n(), a("i", s({
                                  key: 2,
                                  class: ["icon iconfont", "icon-" + o.icon.icon]
                                }, o.icon.attrs), null, 16)) : (n(), a("i", s({
                                  key: 3,
                                  class: o.icon.type
                                }, o.icon.attrs), h(o.icon.icon), 17))
                              ], 64)) : C("", !0),
                              b(" " + h(e.i18n ? t.$t(o.title) : o.title), 1)
                            ], 8, rn)
                          ]),
                          default: y(() => [
                            (n(!0), a(f, null, V(o.children, (c) => (n(), a(f, {
                              key: c.index
                            }, [
                              c.children.length > 0 ? (n(), r(E, {
                                key: 0,
                                class: $(c.active ? "replace-active-child" : ""),
                                "popper-class": "third",
                                index: c.index
                              }, {
                                title: y(() => [
                                  S("div", {
                                    class: "parent-title",
                                    onClick: (d) => !e.clickParentJump && c.showSelf !== !0 || g(c)
                                  }, [
                                    c.icon && (c.icon.icon || c.icon.type) ? (n(), a(f, { key: 0 }, [
                                      c.icon.type === "custom" ? (n(), r(k(c.icon.icon), p(s({ key: 0 }, c.icon.attrs)), null, 16)) : c.icon.type === "el" ? (n(), r(u, p(s({ key: 1 }, c.icon.attrs)), {
                                        default: y(() => [
                                          (n(), r(k(c.icon.icon)))
                                        ]),
                                        _: 2
                                      }, 1040)) : c.icon.type === "iconfont" ? (n(), a("i", s({
                                        key: 2,
                                        class: ["icon iconfont", "icon-" + c.icon.icon]
                                      }, c.icon.attrs), null, 16)) : (n(), a("i", s({
                                        key: 3,
                                        class: c.icon.type
                                      }, c.icon.attrs), h(c.icon.icon), 17))
                                    ], 64)) : C("", !0),
                                    b(" " + h(e.i18n ? t.$t(c.title) : c.title), 1)
                                  ], 8, dn)
                                ]),
                                default: y(() => [
                                  (n(!0), a(f, null, V(c.children, (d) => (n(), r(B, {
                                    key: d.index,
                                    class: $(d.active ? "replace-active-child" : ""),
                                    index: d.index,
                                    onClick: (pn) => g(d)
                                  }, {
                                    default: y(() => [
                                      d.icon && (d.icon.icon || d.icon.type) ? (n(), a(f, { key: 0 }, [
                                        d.icon.type === "custom" ? (n(), r(k(d.icon.icon), p(s({ key: 0 }, d.icon.attrs)), null, 16)) : d.icon.type === "el" ? (n(), r(u, p(s({ key: 1 }, d.icon.attrs)), {
                                          default: y(() => [
                                            (n(), r(k(d.icon.icon)))
                                          ]),
                                          _: 2
                                        }, 1040)) : d.icon.type === "iconfont" ? (n(), a("i", s({
                                          key: 2,
                                          class: ["icon iconfont", "icon-" + d.icon.icon]
                                        }, d.icon.attrs), null, 16)) : (n(), a("i", s({
                                          key: 3,
                                          class: d.icon.type
                                        }, d.icon.attrs), h(d.icon.icon), 17))
                                      ], 64)) : C("", !0),
                                      b(" " + h(e.i18n ? t.$t(d.title) : d.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "index", "onClick"]))), 128))
                                ]),
                                _: 2
                              }, 1032, ["class", "index"])) : (n(), r(B, {
                                key: 1,
                                class: $(c.active ? "replace-active-child" : ""),
                                index: c.index,
                                onClick: (d) => g(c)
                              }, {
                                default: y(() => [
                                  c.icon && (c.icon.icon || c.icon.type) ? (n(), a(f, { key: 0 }, [
                                    c.icon.type === "custom" ? (n(), r(k(c.icon.icon), p(s({ key: 0 }, c.icon.attrs)), null, 16)) : c.icon.type === "el" ? (n(), r(u, p(s({ key: 1 }, c.icon.attrs)), {
                                      default: y(() => [
                                        (n(), r(k(c.icon.icon)))
                                      ]),
                                      _: 2
                                    }, 1040)) : c.icon.type === "iconfont" ? (n(), a("i", s({
                                      key: 2,
                                      class: ["icon iconfont", "icon-" + c.icon.icon]
                                    }, c.icon.attrs), null, 16)) : (n(), a("i", s({
                                      key: 3,
                                      class: c.icon.type
                                    }, c.icon.attrs), h(c.icon.icon), 17))
                                  ], 64)) : C("", !0),
                                  b(" " + h(e.i18n ? t.$t(c.title) : c.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["class", "index", "onClick"]))
                            ], 64))), 128))
                          ]),
                          _: 2
                        }, 1032, ["class", "index"])) : (n(), r(B, {
                          key: 1,
                          class: $(o.active ? "replace-active-child" : ""),
                          index: o.index,
                          onClick: (c) => g(o)
                        }, {
                          default: y(() => [
                            o.icon && (o.icon.icon || o.icon.type) ? (n(), a(f, { key: 0 }, [
                              o.icon.type === "custom" ? (n(), r(k(o.icon.icon), p(s({ key: 0 }, o.icon.attrs)), null, 16)) : o.icon.type === "el" ? (n(), r(u, p(s({ key: 1 }, o.icon.attrs)), {
                                default: y(() => [
                                  (n(), r(k(o.icon.icon)))
                                ]),
                                _: 2
                              }, 1040)) : o.icon.type === "iconfont" ? (n(), a("i", s({
                                key: 2,
                                class: ["icon iconfont", "icon-" + o.icon.icon]
                              }, o.icon.attrs), null, 16)) : (n(), a("i", s({
                                key: 3,
                                class: o.icon.type
                              }, o.icon.attrs), h(o.icon.icon), 17))
                            ], 64)) : C("", !0),
                            b(" " + h(e.i18n ? t.$t(o.title) : o.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["class", "index", "onClick"]))
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "popper-class", "index"])) : (n(), r(B, {
                    key: 1,
                    class: $(l.active ? "replace-active" : ""),
                    index: l.index,
                    onClick: (o) => g(l)
                  }, {
                    default: y(() => [
                      l.icon && (l.icon.icon || l.icon.type) ? (n(), a(f, { key: 0 }, [
                        l.icon.type === "custom" ? (n(), r(k(l.icon.icon), p(s({ key: 0 }, l.icon.attrs)), null, 16)) : l.icon.type === "el" ? (n(), r(u, p(s({ key: 1 }, l.icon.attrs)), {
                          default: y(() => [
                            (n(), r(k(l.icon.icon)))
                          ]),
                          _: 2
                        }, 1040)) : l.icon.type === "iconfont" ? (n(), a("i", s({
                          key: 2,
                          class: ["icon iconfont", "icon-" + l.icon.icon]
                        }, l.icon.attrs), null, 16)) : (n(), a("i", s({
                          key: 3,
                          class: l.icon.type
                        }, l.icon.attrs), h(l.icon.icon), 17))
                      ], 64)) : C("", !0),
                      S("span", null, h(e.i18n ? t.$t(l.title) : l.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["class", "index", "onClick"]))
                ], 64))), 128))
              ]),
              _: 1
            }, 16, ["default-openeds", "collapse"])) : C("", !0)
          ]),
          _: 1
        }),
        t.$attrs.mode !== "horizontal" && e.collapseMaxWidth > 0 && e.showCollapseBtn ? (n(), a("div", {
          key: 0,
          class: "collapse-btn",
          onClick: Z
        }, [
          _(w) ? (n(), a(f, { key: 0 }, [
            e.closeBtn && (e.closeBtn.icon || e.closeBtn.type) ? (n(), a(f, { key: 0 }, [
              e.closeBtn.type === "custom" ? (n(), r(k(e.closeBtn.icon), s({
                key: 0,
                class: "menu-icon"
              }, e.closeBtn.attrs), null, 16)) : e.closeBtn.type === "el" ? (n(), r(u, p(s({ key: 1 }, e.closeBtn.attrs)), {
                default: y(() => [
                  (n(), r(k(e.closeBtn.icon)))
                ]),
                _: 1
              }, 16)) : e.closeBtn.type === "iconfont" ? (n(), a("i", s({
                key: 2,
                class: ["icon iconfont", "icon-" + e.closeBtn.icon]
              }, e.closeBtn.attrs), null, 16)) : (n(), a("i", s({
                key: 3,
                class: e.closeBtn.type
              }, e.closeBtn.attrs), h(e.closeBtn.icon), 17))
            ], 64)) : C("", !0)
          ], 64)) : (n(), a(f, { key: 1 }, [
            e.openBtn && (e.openBtn.icon || e.openBtn.type) ? (n(), a(f, { key: 0 }, [
              e.openBtn.type === "custom" ? (n(), r(k(e.openBtn.icon), s({
                key: 0,
                class: "menu-icon"
              }, e.openBtn.attrs), null, 16)) : e.openBtn.type === "el" ? (n(), r(u, p(s({ key: 1 }, e.openBtn.attrs)), {
                default: y(() => [
                  (n(), r(k(e.openBtn.icon)))
                ]),
                _: 1
              }, 16)) : e.openBtn.type === "iconfont" ? (n(), a("i", s({
                key: 2,
                class: ["icon iconfont", "icon-" + e.openBtn.icon]
              }, e.openBtn.attrs), null, 16)) : (n(), a("i", s({
                key: 3,
                class: e.openBtn.type
              }, e.openBtn.attrs), h(e.openBtn.icon), 17))
            ], 64)) : C("", !0)
          ], 64))
        ])) : C("", !0)
      ]);
    };
  }
}, fn = [yn], kn = {
  install(e) {
    fn.forEach((L) => {
      e.component("vueEleNavPlus", L);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(kn);
export {
  kn as default
};
