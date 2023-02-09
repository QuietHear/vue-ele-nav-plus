import { useAttrs as on, ref as N, watch as I, nextTick as cn, onMounted as ln, onBeforeUnmount as tn, resolveComponent as S, openBlock as n, createElementBlock as a, createVNode as an, withCtx as y, createBlock as r, mergeProps as s, unref as m, Fragment as f, renderList as L, normalizeClass as $, createElementVNode as b, resolveDynamicComponent as k, normalizeProps as p, toDisplayString as h, createCommentVNode as C, createTextVNode as D } from "vue";
import { useRouter as sn, useRoute as un } from "vue-router";
const rn = { class: "vue-ele-nav-plus-box" }, dn = ["onClick"], yn = ["onClick"], fn = ["onClick"], kn = {
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
  setup(e, { expose: V, emit: U }) {
    const v = e, nn = sn(), W = un(), J = on(), q = N(null);
    let P = [], G = [];
    const A = N(!1), H = N([]), w = N([]);
    I(
      () => v.onlyShowFirst,
      () => {
        T();
      }
    ), I(
      () => v.menu,
      () => {
        T();
      }
    );
    const R = (l) => {
      let i = l instanceof Array ? [] : {};
      for (let u in l)
        i[u] = typeof l[u] == "object" ? R(l[u]) : l[u];
      return i;
    }, T = async () => {
      if (A.value = !1, P = R(v.menu), P.length > 0) {
        K(P), w.value = R(P), X(w.value);
        let i = O(W.name).index;
        Q(i), A.value = !0, Y();
      }
    }, K = (l, i) => {
      l.forEach((u, B) => {
        u.index = `${i !== void 0 ? i + "-" : ""}${B}`, u.active = !1, u.icon = u.icon || void 0, u.children && u.children.length > 0 ? K(u.children, u.index) : u.children = [], G.push(R(u));
      });
    }, Q = (l, i = 0) => {
      const u = l.split("-"), B = u.slice(0, i + 1).join("-");
      H.value.push(B), i += 1, i < u.length - 1 && Q(l, i);
    }, X = (l) => {
      for (let i = 0; i < l.length; i++)
        l[i].show !== !1 ? !v.onlyShowFirst && l[i].children && l[i].children.length > 0 ? X(l[i].children) : l[i].children = [] : (l.splice(i, 1), i -= 1);
    };
    I(
      W,
      () => {
        Y();
      }
    );
    const Y = async () => {
      Z(w.value);
      let l = O(W.name);
      if (J.mode === "horizontal" && cn(() => {
        q.value.setScrollLeft(l.index.split("-")[0] * document.getElementsByClassName("vue-ele-nav-plus")[0].getElementsByTagName("li")[0].clientWidth);
      }), v.onlyShowFirst) {
        let i = l.index.split("-")[0];
        w.value.filter((u) => u.index === i).length > 0 && F(w.value, i);
      } else if (l.markName) {
        let i = O(l.markName);
        F(w.value, i.index);
      } else
        F(w.value, l.index);
    }, Z = (l) => {
      l.forEach((i) => {
        i.active = !1, i.children.length > 0 && Z(i.children);
      });
    }, F = (l, i, u = 0) => {
      const B = i.split("-"), M = B.slice(0, u + 1).join("-");
      let z = l.filter((j) => j.index === M);
      z.length > 0 && (z[0].active = !0, u += 1, u < B.length && F(z[0].children, i, u));
    }, O = (l) => G.filter((i) => i.name === l)[0], g = (l) => {
      nn.push({ name: l.name });
    };
    T();
    let x = N(!1);
    v.autoCollapse || (x.value = v.collapse), J.mode !== "horizontal" && I(
      () => v.autoCollapse,
      () => {
        v.autoCollapse ? (E(), window.addEventListener("resize", E)) : (x.value = v.collapse, window.removeEventListener("resize", E));
      }
    );
    const E = () => {
      v.collapseMaxWidth > 0 && (x.value = document.body.clientWidth < v.collapseMaxWidth), U("collapseChange", x.value);
    }, _ = () => {
      x.value = !x.value, U("collapseChange", x.value);
    }, en = () => x.value;
    return ln(() => {
      J.mode !== "horizontal" && v.autoCollapse && (E(), window.addEventListener("resize", E));
    }), tn(() => {
      window.removeEventListener("resize", E);
    }), V({ manualChange: _, getNowCollapse: en }), (l, i) => {
      const u = S("el-icon"), B = S("el-menu-item"), M = S("el-sub-menu"), z = S("el-menu"), j = S("el-scrollbar");
      return n(), a("div", rn, [
        an(j, {
          ref_key: "scroll",
          ref: q
        }, {
          default: y(() => [
            A.value ? (n(), r(z, s({
              key: 0,
              class: "vue-ele-nav-plus",
              "default-openeds": l.$attrs.mode !== "horizontal" ? H.value : [],
              collapse: m(x),
              ellipsis: !1
            }, l.$attrs), {
              default: y(() => [
                (n(!0), a(f, null, L(w.value, (t) => (n(), a(f, {
                  key: t.index
                }, [
                  t.children.length > 0 ? (n(), r(M, {
                    key: 0,
                    class: $(t.active ? "replace-active" : ""),
                    "popper-class": "vue-ele-nav-plus-poper" + (e.popDark ? " dark" : ""),
                    index: t.index
                  }, {
                    title: y(() => [
                      b("div", {
                        class: "parent-title",
                        onClick: (o) => !e.clickParentJump && t.showSelf !== !0 || g(t)
                      }, [
                        t.icon && (t.icon.icon || t.icon.type) ? (n(), a(f, { key: 0 }, [
                          t.icon.type === "custom" ? (n(), r(k(t.icon.icon), p(s({ key: 0 }, t.icon.attrs)), null, 16)) : t.icon.type === "el" ? (n(), r(u, p(s({ key: 1 }, t.icon.attrs)), {
                            default: y(() => [
                              (n(), r(k(t.icon.icon)))
                            ]),
                            _: 2
                          }, 1040)) : t.icon.type === "iconfont" ? (n(), a("i", s({
                            key: 2,
                            class: ["icon iconfont", "icon-" + t.icon.icon]
                          }, t.icon.attrs), null, 16)) : (n(), a("i", s({
                            key: 3,
                            class: t.icon.type
                          }, t.icon.attrs), h(t.icon.icon), 17))
                        ], 64)) : C("", !0),
                        b("span", null, h(e.i18n ? l.$t(t.title) : t.title), 1)
                      ], 8, dn)
                    ]),
                    default: y(() => [
                      (n(!0), a(f, null, L(t.children, (o) => (n(), a(f, {
                        key: o.index
                      }, [
                        o.children.length > 0 ? (n(), r(M, {
                          key: 0,
                          class: $(o.active ? "replace-active-child" : ""),
                          "popper-class": "second",
                          index: o.index
                        }, {
                          title: y(() => [
                            b("div", {
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
                              D(" " + h(e.i18n ? l.$t(o.title) : o.title), 1)
                            ], 8, yn)
                          ]),
                          default: y(() => [
                            (n(!0), a(f, null, L(o.children, (c) => (n(), a(f, {
                              key: c.index
                            }, [
                              c.children.length > 0 ? (n(), r(M, {
                                key: 0,
                                class: $(c.active ? "replace-active-child" : ""),
                                "popper-class": "third",
                                index: c.index
                              }, {
                                title: y(() => [
                                  b("div", {
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
                                    D(" " + h(e.i18n ? l.$t(c.title) : c.title), 1)
                                  ], 8, fn)
                                ]),
                                default: y(() => [
                                  (n(!0), a(f, null, L(c.children, (d) => (n(), r(B, {
                                    key: d.index,
                                    class: $(d.active ? "replace-active-child" : ""),
                                    index: d.index,
                                    onClick: (vn) => g(d)
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
                                      D(" " + h(e.i18n ? l.$t(d.title) : d.title), 1)
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
                                  D(" " + h(e.i18n ? l.$t(c.title) : c.title), 1)
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
                            D(" " + h(e.i18n ? l.$t(o.title) : o.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["class", "index", "onClick"]))
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "popper-class", "index"])) : (n(), r(B, {
                    key: 1,
                    class: $(t.active ? "replace-active" : ""),
                    index: t.index,
                    onClick: (o) => g(t)
                  }, {
                    default: y(() => [
                      t.icon && (t.icon.icon || t.icon.type) ? (n(), a(f, { key: 0 }, [
                        t.icon.type === "custom" ? (n(), r(k(t.icon.icon), p(s({ key: 0 }, t.icon.attrs)), null, 16)) : t.icon.type === "el" ? (n(), r(u, p(s({ key: 1 }, t.icon.attrs)), {
                          default: y(() => [
                            (n(), r(k(t.icon.icon)))
                          ]),
                          _: 2
                        }, 1040)) : t.icon.type === "iconfont" ? (n(), a("i", s({
                          key: 2,
                          class: ["icon iconfont", "icon-" + t.icon.icon]
                        }, t.icon.attrs), null, 16)) : (n(), a("i", s({
                          key: 3,
                          class: t.icon.type
                        }, t.icon.attrs), h(t.icon.icon), 17))
                      ], 64)) : C("", !0),
                      b("span", null, h(e.i18n ? l.$t(t.title) : t.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["class", "index", "onClick"]))
                ], 64))), 128))
              ]),
              _: 1
            }, 16, ["default-openeds", "collapse"])) : C("", !0)
          ]),
          _: 1
        }, 512),
        l.$attrs.mode !== "horizontal" && e.collapseMaxWidth > 0 && e.showCollapseBtn ? (n(), a("div", {
          key: 0,
          class: "collapse-btn",
          onClick: _
        }, [
          m(x) ? (n(), a(f, { key: 0 }, [
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
}, pn = [kn], hn = {
  install(e) {
    pn.forEach((V) => {
      e.component("vueEleNavPlus", V);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(hn);
export {
  hn as default
};
