import { inject as G, ref as b, watch as L, resolveComponent as O, openBlock as o, createBlock as f, withCtx as u, createElementBlock as d, Fragment as p, renderList as V, normalizeClass as _, createElementVNode as E, resolveDynamicComponent as z, toDisplayString as y, createCommentVNode as R, createTextVNode as B } from "vue";
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
var A;
(function(l) {
  l.pop = "pop", l.push = "push";
})(A || (A = {}));
var q;
(function(l) {
  l.back = "back", l.forward = "forward", l.unknown = "";
})(q || (q = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var F;
(function(l) {
  l[l.aborted = 4] = "aborted", l[l.cancelled = 8] = "cancelled", l[l.duplicated = 16] = "duplicated";
})(F || (F = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const U = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), W = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function X() {
  return G(U);
}
function Y() {
  return G(W);
}
const Z = (l, w) => {
  const r = l.__vccOpts || l;
  for (const [s, I] of w)
    r[s] = I;
  return r;
}, $ = {
  name: "vueEleNavPlus",
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
    }
  },
  setup(l, { attrs: w, slots: r, emit: s, expose: I }) {
    const M = X(), C = Y(), h = b([]), x = b(!1), g = b([]), e = b([]);
    L(l.menu, () => {
      a();
    });
    const a = async () => {
      if (x.value = !1, h.value = JSON.parse(JSON.stringify(l.menu)), h.value.length > 0) {
        i(h.value), e.value = JSON.parse(JSON.stringify(h.value)), D(e.value);
        let n = (await S(h.value, C.name)).index;
        v(n), x.value = !0, j();
      }
    }, i = (c, n) => {
      c.forEach((t, k) => {
        t.index = `${n !== void 0 ? n + "-" : ""}${k}`, t.active = !1, t.icon = t.icon ? t.icon.split("/") : void 0, t.children && t.children.length > 0 ? i(t.children, t.index) : t.children = [];
      });
    }, v = (c, n = 0) => {
      const t = c.split("-"), k = t.slice(0, n + 1).join("-");
      g.value.push(k), n += 1, n < t.length - 1 && v(c, n);
    }, D = (c) => {
      for (let n = 0; n < c.length; n++)
        c[n].show !== !1 ? !l.onlyShowFirst && c[n].children && c[n].children.length > 0 ? D(c[n].children) : c[n].children = [] : (c.splice(n, 1), n -= 1);
    };
    L(C, () => {
      j();
    });
    const j = async () => {
      K(e.value);
      let c = await S(h.value, C.name);
      if (l.onlyShowFirst) {
        let n = c.index.split("-")[0];
        e.value.filter((t) => t.index === n).length > 0 && N(e.value, n);
      } else if (c.markName) {
        let n = await S(
          e.value,
          c.markName
        );
        N(e.value, n.index);
      } else
        N(e.value, c.index);
    }, K = (c) => {
      c.forEach((n) => {
        n.active = !1, n.children.length > 0 && K(n.children);
      });
    }, N = (c, n, t = 0) => {
      const k = n.split("-"), J = k.slice(0, t + 1).join("-");
      let P = c.filter((Q) => Q.index === J);
      P.length > 0 && (P[0].active = !0, t += 1, t < k.length && N(P[0].children, n, t));
    }, S = (c, n) => new Promise((t) => {
      c.forEach((k) => {
        k.name === n ? t(k) : k.children.length > 0 && S(k.children, n).then((J) => {
          t(J);
        });
      });
    }), H = (c) => {
      M.push({ name: c.name });
    };
    return a(), {
      opens: g,
      init: x,
      navInformation: e,
      menuItemClick: H
    };
  }
}, m = ["onClick"], T = ["onClick"], ee = ["onClick"];
function ne(l, w, r, s, I, M) {
  const C = O("el-icon"), h = O("el-menu-item"), x = O("el-sub-menu"), g = O("el-menu");
  return s.init ? (o(), f(g, {
    key: 0,
    "default-openeds": s.opens,
    class: "vue-ele-nav-plus"
  }, {
    default: u(() => [
      (o(!0), d(p, null, V(s.navInformation, (e) => (o(), d(p, {
        key: e.index
      }, [
        e.children.length > 0 ? (o(), f(x, {
          key: 0,
          class: _(e.active ? "replace-active" : ""),
          "popper-class": "vue-ele-nav-plus-hor-first",
          index: e.index
        }, {
          title: u(() => [
            E("div", {
              class: "parent-title",
              onClick: (a) => !r.clickParentJump && e.showSelf !== !0 || s.menuItemClick(e)
            }, [
              e.icon ? (o(), d(p, { key: 0 }, [
                e.icon[0] === "el" ? (o(), f(C, { key: 0 }, {
                  default: u(() => [
                    (o(), f(z(e.icon[1])))
                  ]),
                  _: 2
                }, 1024)) : e.icon[0] === "iconfont" ? (o(), d("i", {
                  key: 1,
                  class: _(["icon iconfont", "icon-" + e.icon[1]])
                }, null, 2)) : (o(), d("i", {
                  key: 2,
                  class: _(e.icon[0])
                }, y(e.icon[1]), 3))
              ], 64)) : R("", !0),
              E("span", null, y(r.i18n ? l.$t(e.title) : e.title), 1)
            ], 8, m)
          ]),
          default: u(() => [
            (o(!0), d(p, null, V(e.children, (a) => (o(), d(p, {
              key: a.index
            }, [
              a.children.length > 0 ? (o(), f(x, {
                key: 0,
                class: _(a.active ? "replace-active-child" : ""),
                "popper-class": "second",
                index: a.index
              }, {
                title: u(() => [
                  E("div", {
                    class: "parent-title",
                    onClick: (i) => !r.clickParentJump && a.showSelf !== !0 || s.menuItemClick(a)
                  }, y(r.i18n ? l.$t(a.title) : a.title), 9, T)
                ]),
                default: u(() => [
                  (o(!0), d(p, null, V(a.children, (i) => (o(), d(p, {
                    key: i.index
                  }, [
                    i.children.length > 0 ? (o(), f(x, {
                      key: 0,
                      class: _(i.active ? "replace-active-child" : ""),
                      "popper-class": "third",
                      index: i.index
                    }, {
                      title: u(() => [
                        E("div", {
                          class: "parent-title",
                          onClick: (v) => !r.clickParentJump && i.showSelf !== !0 || s.menuItemClick(i)
                        }, y(r.i18n ? l.$t(i.title) : i.title), 9, ee)
                      ]),
                      default: u(() => [
                        (o(!0), d(p, null, V(i.children, (v) => (o(), f(h, {
                          key: v.index,
                          class: _(v.active ? "replace-active-child" : ""),
                          index: v.index,
                          onClick: (D) => s.menuItemClick(v)
                        }, {
                          default: u(() => [
                            B(y(r.i18n ? l.$t(v.title) : v.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["class", "index", "onClick"]))), 128))
                      ]),
                      _: 2
                    }, 1032, ["class", "index"])) : (o(), f(h, {
                      key: 1,
                      class: _(i.active ? "replace-active-child" : ""),
                      index: i.index,
                      onClick: (v) => s.menuItemClick(i)
                    }, {
                      default: u(() => [
                        B(y(r.i18n ? l.$t(i.title) : i.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "index", "onClick"]))
                  ], 64))), 128))
                ]),
                _: 2
              }, 1032, ["class", "index"])) : (o(), f(h, {
                key: 1,
                class: _(a.active ? "replace-active-child" : ""),
                index: a.index,
                onClick: (i) => s.menuItemClick(a)
              }, {
                default: u(() => [
                  B(y(r.i18n ? l.$t(a.title) : a.title), 1)
                ]),
                _: 2
              }, 1032, ["class", "index", "onClick"]))
            ], 64))), 128))
          ]),
          _: 2
        }, 1032, ["class", "index"])) : (o(), f(h, {
          key: 1,
          class: _(e.active ? "replace-active" : ""),
          index: e.index,
          onClick: (a) => s.menuItemClick(e)
        }, {
          default: u(() => [
            e.icon ? (o(), d(p, { key: 0 }, [
              e.icon[0] === "el" ? (o(), f(C, { key: 0 }, {
                default: u(() => [
                  (o(), f(z(e.icon[1])))
                ]),
                _: 2
              }, 1024)) : e.icon[0] === "iconfont" ? (o(), d("i", {
                key: 1,
                class: _(["icon iconfont", "icon-" + e.icon[1]])
              }, null, 2)) : (o(), d("i", {
                key: 2,
                class: _(e.icon[0])
              }, y(e.icon[1]), 3))
            ], 64)) : R("", !0),
            E("span", null, y(r.i18n ? l.$t(e.title) : e.title), 1)
          ]),
          _: 2
        }, 1032, ["class", "index", "onClick"]))
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["default-openeds"])) : R("", !0);
}
const le = /* @__PURE__ */ Z($, [["render", ne]]), ce = [le], oe = {
  install(l) {
    ce.forEach((w) => {
      l.component(w.name, w);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(oe);
export {
  oe as default
};
