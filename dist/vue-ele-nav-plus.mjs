import { useAttrs as en, ref as V, watch as O, onMounted as on, onBeforeUnmount as cn, resolveComponent as N, openBlock as n, createElementBlock as a, createVNode as ln, withCtx as y, createBlock as u, mergeProps as i, unref as _, Fragment as f, renderList as D, normalizeClass as $, createElementVNode as S, resolveDynamicComponent as k, normalizeProps as h, toDisplayString as v, createCommentVNode as C, createTextVNode as b } from "vue";
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
    }
  },
  emits: ["collapseChange"],
  setup(c, { expose: F, emit: j }) {
    const B = c, m = tn(), L = an(), T = en();
    let P = [], U = [];
    const W = V(!1), q = V([]), w = V([]);
    O(
      () => B.menu,
      () => {
        G();
      }
    );
    const R = (t, s = 1) => {
      let r = t instanceof Array ? [] : {};
      for (let p in t)
        r[p] = typeof t[p] == "object" ? R(t[p], s + 1) : t[p];
      return r;
    }, G = async () => {
      if (W.value = !1, P = R(B.menu), P.length > 0) {
        H(P), w.value = R(P), Q(w.value);
        let s = J(L.name).index;
        K(s), W.value = !0, X();
      }
    }, H = (t, s) => {
      t.forEach((r, p) => {
        r.index = `${s !== void 0 ? s + "-" : ""}${p}`, r.active = !1, r.icon = r.icon || void 0, r.children && r.children.length > 0 ? H(r.children, r.index) : r.children = [], U.push(R(r));
      });
    }, K = (t, s = 0) => {
      const r = t.split("-"), p = r.slice(0, s + 1).join("-");
      q.value.push(p), s += 1, s < r.length - 1 && K(t, s);
    }, Q = (t) => {
      for (let s = 0; s < t.length; s++)
        t[s].show !== !1 ? !B.onlyShowFirst && t[s].children && t[s].children.length > 0 ? Q(t[s].children) : t[s].children = [] : (t.splice(s, 1), s -= 1);
    };
    O(
      L,
      () => {
        X();
      }
    );
    const X = async () => {
      Y(w.value);
      let t = J(L.name);
      if (B.onlyShowFirst) {
        let s = t.index.split("-")[0];
        w.value.filter((r) => r.index === s).length > 0 && I(w.value, s);
      } else if (t.markName) {
        let s = J(t.markName);
        I(w.value, s.index);
      } else
        I(w.value, t.index);
    }, Y = (t) => {
      t.forEach((s) => {
        s.active = !1, s.children.length > 0 && Y(s.children);
      });
    }, I = (t, s, r = 0) => {
      const p = s.split("-"), E = p.slice(0, r + 1).join("-");
      let z = t.filter((A) => A.index === E);
      z.length > 0 && (z[0].active = !0, r += 1, r < p.length && I(z[0].children, s, r));
    }, J = (t) => U.filter((s) => s.name === t)[0], g = (t) => {
      m.push({ name: t.name });
    };
    G();
    let x = V(!1);
    B.autoCollapse || (x.value = B.collapse), T.mode !== "horizontal" && O(
      () => B.autoCollapse,
      () => {
        B.autoCollapse ? (M(), window.addEventListener("resize", M)) : (x.value = B.collapse, window.removeEventListener("resize", M));
      }
    );
    const M = () => {
      B.collapseMaxWidth > 0 && (x.value = document.body.clientWidth < B.collapseMaxWidth), j("collapseChange", x.value);
    }, Z = () => {
      x.value = !x.value, j("collapseChange", x.value);
    }, nn = () => x.value;
    return on(() => {
      T.mode !== "horizontal" && B.autoCollapse && (M(), window.addEventListener("resize", M));
    }), cn(() => {
      window.removeEventListener("resize", M);
    }), F({ manualChange: Z, getNowCollapse: nn }), (t, s) => {
      const r = N("el-icon"), p = N("el-menu-item"), E = N("el-sub-menu"), z = N("el-menu"), A = N("el-scrollbar");
      return n(), a("div", sn, [
        ln(A, null, {
          default: y(() => [
            W.value ? (n(), u(z, i({
              key: 0,
              "default-openeds": q.value,
              class: "vue-ele-nav-plus",
              collapse: _(x),
              ellipsis: !1
            }, t.$attrs), {
              default: y(() => [
                (n(!0), a(f, null, D(w.value, (l) => (n(), a(f, {
                  key: l.index
                }, [
                  l.children.length > 0 ? (n(), u(E, {
                    key: 0,
                    class: $(l.active ? "replace-active" : ""),
                    "popper-class": "vue-ele-nav-plus-hor",
                    index: l.index
                  }, {
                    title: y(() => [
                      S("div", {
                        class: "parent-title",
                        onClick: (e) => !c.clickParentJump && l.showSelf !== !0 || g(l)
                      }, [
                        l.icon && (l.icon.icon || l.icon.type) ? (n(), a(f, { key: 0 }, [
                          l.icon.type === "custom" ? (n(), u(k(l.icon.icon), h(i({ key: 0 }, l.icon.attrs)), null, 16)) : l.icon.type === "el" ? (n(), u(r, h(i({ key: 1 }, l.icon.attrs)), {
                            default: y(() => [
                              (n(), u(k(l.icon.icon)))
                            ]),
                            _: 2
                          }, 1040)) : l.icon.type === "iconfont" ? (n(), a("i", i({
                            key: 2,
                            class: ["icon iconfont", "icon-" + l.icon.icon]
                          }, l.icon.attrs), null, 16)) : (n(), a("i", i({
                            key: 3,
                            class: l.icon.type
                          }, l.icon.attrs), v(l.icon.icon), 17))
                        ], 64)) : C("", !0),
                        S("span", null, v(c.i18n ? t.$t(l.title) : l.title), 1)
                      ], 8, un)
                    ]),
                    default: y(() => [
                      (n(!0), a(f, null, D(l.children, (e) => (n(), a(f, {
                        key: e.index
                      }, [
                        e.children.length > 0 ? (n(), u(E, {
                          key: 0,
                          class: $(e.active ? "replace-active-child" : ""),
                          "popper-class": "second",
                          index: e.index
                        }, {
                          title: y(() => [
                            S("div", {
                              class: "parent-title",
                              onClick: (o) => !c.clickParentJump && e.showSelf !== !0 || g(e)
                            }, [
                              e.icon && (e.icon.icon || e.icon.type) ? (n(), a(f, { key: 0 }, [
                                e.icon.type === "custom" ? (n(), u(k(e.icon.icon), h(i({ key: 0 }, e.icon.attrs)), null, 16)) : e.icon.type === "el" ? (n(), u(r, h(i({ key: 1 }, e.icon.attrs)), {
                                  default: y(() => [
                                    (n(), u(k(e.icon.icon)))
                                  ]),
                                  _: 2
                                }, 1040)) : e.icon.type === "iconfont" ? (n(), a("i", i({
                                  key: 2,
                                  class: ["icon iconfont", "icon-" + e.icon.icon]
                                }, e.icon.attrs), null, 16)) : (n(), a("i", i({
                                  key: 3,
                                  class: e.icon.type
                                }, e.icon.attrs), v(e.icon.icon), 17))
                              ], 64)) : C("", !0),
                              b(" " + v(c.i18n ? t.$t(e.title) : e.title), 1)
                            ], 8, rn)
                          ]),
                          default: y(() => [
                            (n(!0), a(f, null, D(e.children, (o) => (n(), a(f, {
                              key: o.index
                            }, [
                              o.children.length > 0 ? (n(), u(E, {
                                key: 0,
                                class: $(o.active ? "replace-active-child" : ""),
                                "popper-class": "third",
                                index: o.index
                              }, {
                                title: y(() => [
                                  S("div", {
                                    class: "parent-title",
                                    onClick: (d) => !c.clickParentJump && o.showSelf !== !0 || g(o)
                                  }, [
                                    o.icon && (o.icon.icon || o.icon.type) ? (n(), a(f, { key: 0 }, [
                                      o.icon.type === "custom" ? (n(), u(k(o.icon.icon), h(i({ key: 0 }, o.icon.attrs)), null, 16)) : o.icon.type === "el" ? (n(), u(r, h(i({ key: 1 }, o.icon.attrs)), {
                                        default: y(() => [
                                          (n(), u(k(o.icon.icon)))
                                        ]),
                                        _: 2
                                      }, 1040)) : o.icon.type === "iconfont" ? (n(), a("i", i({
                                        key: 2,
                                        class: ["icon iconfont", "icon-" + o.icon.icon]
                                      }, o.icon.attrs), null, 16)) : (n(), a("i", i({
                                        key: 3,
                                        class: o.icon.type
                                      }, o.icon.attrs), v(o.icon.icon), 17))
                                    ], 64)) : C("", !0),
                                    b(" " + v(c.i18n ? t.$t(o.title) : o.title), 1)
                                  ], 8, dn)
                                ]),
                                default: y(() => [
                                  (n(!0), a(f, null, D(o.children, (d) => (n(), u(p, {
                                    key: d.index,
                                    class: $(d.active ? "replace-active-child" : ""),
                                    index: d.index,
                                    onClick: (pn) => g(d)
                                  }, {
                                    default: y(() => [
                                      d.icon && (d.icon.icon || d.icon.type) ? (n(), a(f, { key: 0 }, [
                                        d.icon.type === "custom" ? (n(), u(k(d.icon.icon), h(i({ key: 0 }, d.icon.attrs)), null, 16)) : d.icon.type === "el" ? (n(), u(r, h(i({ key: 1 }, d.icon.attrs)), {
                                          default: y(() => [
                                            (n(), u(k(d.icon.icon)))
                                          ]),
                                          _: 2
                                        }, 1040)) : d.icon.type === "iconfont" ? (n(), a("i", i({
                                          key: 2,
                                          class: ["icon iconfont", "icon-" + d.icon.icon]
                                        }, d.icon.attrs), null, 16)) : (n(), a("i", i({
                                          key: 3,
                                          class: d.icon.type
                                        }, d.icon.attrs), v(d.icon.icon), 17))
                                      ], 64)) : C("", !0),
                                      b(" " + v(c.i18n ? t.$t(d.title) : d.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "index", "onClick"]))), 128))
                                ]),
                                _: 2
                              }, 1032, ["class", "index"])) : (n(), u(p, {
                                key: 1,
                                class: $(o.active ? "replace-active-child" : ""),
                                index: o.index,
                                onClick: (d) => g(o)
                              }, {
                                default: y(() => [
                                  o.icon && (o.icon.icon || o.icon.type) ? (n(), a(f, { key: 0 }, [
                                    o.icon.type === "custom" ? (n(), u(k(o.icon.icon), h(i({ key: 0 }, o.icon.attrs)), null, 16)) : o.icon.type === "el" ? (n(), u(r, h(i({ key: 1 }, o.icon.attrs)), {
                                      default: y(() => [
                                        (n(), u(k(o.icon.icon)))
                                      ]),
                                      _: 2
                                    }, 1040)) : o.icon.type === "iconfont" ? (n(), a("i", i({
                                      key: 2,
                                      class: ["icon iconfont", "icon-" + o.icon.icon]
                                    }, o.icon.attrs), null, 16)) : (n(), a("i", i({
                                      key: 3,
                                      class: o.icon.type
                                    }, o.icon.attrs), v(o.icon.icon), 17))
                                  ], 64)) : C("", !0),
                                  b(" " + v(c.i18n ? t.$t(o.title) : o.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["class", "index", "onClick"]))
                            ], 64))), 128))
                          ]),
                          _: 2
                        }, 1032, ["class", "index"])) : (n(), u(p, {
                          key: 1,
                          class: $(e.active ? "replace-active-child" : ""),
                          index: e.index,
                          onClick: (o) => g(e)
                        }, {
                          default: y(() => [
                            e.icon && (e.icon.icon || e.icon.type) ? (n(), a(f, { key: 0 }, [
                              e.icon.type === "custom" ? (n(), u(k(e.icon.icon), h(i({ key: 0 }, e.icon.attrs)), null, 16)) : e.icon.type === "el" ? (n(), u(r, h(i({ key: 1 }, e.icon.attrs)), {
                                default: y(() => [
                                  (n(), u(k(e.icon.icon)))
                                ]),
                                _: 2
                              }, 1040)) : e.icon.type === "iconfont" ? (n(), a("i", i({
                                key: 2,
                                class: ["icon iconfont", "icon-" + e.icon.icon]
                              }, e.icon.attrs), null, 16)) : (n(), a("i", i({
                                key: 3,
                                class: e.icon.type
                              }, e.icon.attrs), v(e.icon.icon), 17))
                            ], 64)) : C("", !0),
                            b(" " + v(c.i18n ? t.$t(e.title) : e.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["class", "index", "onClick"]))
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "index"])) : (n(), u(p, {
                    key: 1,
                    class: $(l.active ? "replace-active" : ""),
                    index: l.index,
                    onClick: (e) => g(l)
                  }, {
                    default: y(() => [
                      l.icon && (l.icon.icon || l.icon.type) ? (n(), a(f, { key: 0 }, [
                        l.icon.type === "custom" ? (n(), u(k(l.icon.icon), h(i({ key: 0 }, l.icon.attrs)), null, 16)) : l.icon.type === "el" ? (n(), u(r, h(i({ key: 1 }, l.icon.attrs)), {
                          default: y(() => [
                            (n(), u(k(l.icon.icon)))
                          ]),
                          _: 2
                        }, 1040)) : l.icon.type === "iconfont" ? (n(), a("i", i({
                          key: 2,
                          class: ["icon iconfont", "icon-" + l.icon.icon]
                        }, l.icon.attrs), null, 16)) : (n(), a("i", i({
                          key: 3,
                          class: l.icon.type
                        }, l.icon.attrs), v(l.icon.icon), 17))
                      ], 64)) : C("", !0),
                      S("span", null, v(c.i18n ? t.$t(l.title) : l.title), 1)
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
        t.$attrs.mode !== "horizontal" && c.collapseMaxWidth > 0 && c.showCollapseBtn ? (n(), a("div", {
          key: 0,
          class: "collapse-btn",
          onClick: Z
        }, [
          _(x) ? (n(), a(f, { key: 0 }, [
            c.closeBtn && (c.closeBtn.icon || c.closeBtn.type) ? (n(), a(f, { key: 0 }, [
              c.closeBtn.type === "custom" ? (n(), u(k(c.closeBtn.icon), i({
                key: 0,
                class: "menu-icon"
              }, c.closeBtn.attrs), null, 16)) : c.closeBtn.type === "el" ? (n(), u(r, h(i({ key: 1 }, c.closeBtn.attrs)), {
                default: y(() => [
                  (n(), u(k(c.closeBtn.icon)))
                ]),
                _: 1
              }, 16)) : c.closeBtn.type === "iconfont" ? (n(), a("i", i({
                key: 2,
                class: ["icon iconfont", "icon-" + c.closeBtn.icon]
              }, c.closeBtn.attrs), null, 16)) : (n(), a("i", i({
                key: 3,
                class: c.closeBtn.type
              }, c.closeBtn.attrs), v(c.closeBtn.icon), 17))
            ], 64)) : C("", !0)
          ], 64)) : (n(), a(f, { key: 1 }, [
            c.openBtn && (c.openBtn.icon || c.openBtn.type) ? (n(), a(f, { key: 0 }, [
              c.openBtn.type === "custom" ? (n(), u(k(c.openBtn.icon), i({
                key: 0,
                class: "menu-icon"
              }, c.openBtn.attrs), null, 16)) : c.openBtn.type === "el" ? (n(), u(r, h(i({ key: 1 }, c.openBtn.attrs)), {
                default: y(() => [
                  (n(), u(k(c.openBtn.icon)))
                ]),
                _: 1
              }, 16)) : c.openBtn.type === "iconfont" ? (n(), a("i", i({
                key: 2,
                class: ["icon iconfont", "icon-" + c.openBtn.icon]
              }, c.openBtn.attrs), null, 16)) : (n(), a("i", i({
                key: 3,
                class: c.openBtn.type
              }, c.openBtn.attrs), v(c.openBtn.icon), 17))
            ], 64)) : C("", !0)
          ], 64))
        ])) : C("", !0)
      ]);
    };
  }
}, fn = [yn], kn = {
  install(c) {
    fn.forEach((F) => {
      c.component("vueEleNavPlus", F);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(kn);
export {
  kn as default
};
