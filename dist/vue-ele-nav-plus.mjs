import { ref as S, watch as G, onMounted as Y, onBeforeUnmount as Z, resolveComponent as b, openBlock as e, createElementBlock as a, createVNode as m, withCtx as s, createBlock as u, mergeProps as ee, unref as H, Fragment as v, renderList as w, normalizeClass as r, createElementVNode as C, resolveDynamicComponent as O, toDisplayString as h, createCommentVNode as N, createTextVNode as P } from "vue";
import { useRouter as ne, useRoute as le } from "vue-router";
const ce = {
  key: 0,
  class: "vue-ele-nav-plus-box"
}, ae = ["onClick"], oe = ["onClick"], te = ["onClick"], ie = ["onClick"], se = ["onClick"], ue = ["onClick"], re = {
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
  emits: ["collapseChange"],
  setup(d, { emit: R }) {
    const g = d, K = ne(), F = le(), B = S([]), _ = S(!1), W = S([]), p = S([]);
    G(
      () => g.menu,
      () => {
        D();
      }
    );
    const D = async () => {
      if (_.value = !1, B.value = JSON.parse(JSON.stringify(g.menu)), B.value.length > 0) {
        L(B.value), p.value = JSON.parse(JSON.stringify(B.value)), T(p.value);
        let c = (await V(B.value, F.name)).index;
        j(c), _.value = !0, U();
      }
    }, L = (l, c) => {
      l.forEach((i, f) => {
        i.index = `${c !== void 0 ? c + "-" : ""}${f}`, i.active = !1, i.icon = i.icon ? i.icon.split("/") : void 0, i.children && i.children.length > 0 ? L(i.children, i.index) : i.children = [];
      });
    }, j = (l, c = 0) => {
      const i = l.split("-"), f = i.slice(0, c + 1).join("-");
      W.value.push(f), c += 1, c < i.length - 1 && j(l, c);
    }, T = (l) => {
      for (let c = 0; c < l.length; c++)
        l[c].show !== !1 ? !g.onlyShowFirst && l[c].children && l[c].children.length > 0 ? T(l[c].children) : l[c].children = [] : (l.splice(c, 1), c -= 1);
    };
    G(F, () => {
      U();
    });
    const U = async () => {
      q(p.value);
      let l = await V(B.value, F.name);
      if (g.onlyShowFirst) {
        let c = l.index.split("-")[0];
        p.value.filter((i) => i.index === c).length > 0 && I(p.value, c);
      } else if (l.markName) {
        let c = await V(
          p.value,
          l.markName
        );
        I(p.value, c.index);
      } else
        I(p.value, l.index);
    }, q = (l) => {
      l.forEach((c) => {
        c.active = !1, c.children.length > 0 && q(c.children);
      });
    }, I = (l, c, i = 0) => {
      const f = c.split("-"), x = f.slice(0, i + 1).join("-");
      let E = l.filter((A) => A.index === x);
      E.length > 0 && (E[0].active = !0, i += 1, i < f.length && I(E[0].children, c, i));
    }, V = (l, c) => new Promise((i) => {
      l.forEach((f) => {
        f.name === c ? i(f) : f.children.length > 0 && V(f.children, c).then((x) => {
          i(x);
        });
      });
    }), y = (l) => {
      K.push({ name: l.name });
    };
    D();
    const J = S(g.openBtnClass.split("/")), M = S(g.closeBtnClass.split("/"));
    let $ = S(!1);
    const z = () => {
      g.collapseMaxWidth > 0 && ($.value = document.body.clientWidth < g.collapseMaxWidth), R("collapseChange", $.value);
    }, Q = () => {
      $.value = !$.value, R("collapseChange", $.value);
    };
    return Y(() => {
      z(), window.addEventListener("resize", z);
    }), Z(() => {
      window.removeEventListener("resize", z);
    }), (l, c) => {
      const i = b("el-icon"), f = b("el-menu-item"), x = b("el-sub-menu"), E = b("el-menu"), A = b("el-scrollbar");
      return l.$attrs.mode !== "horizontal" ? (e(), a("div", ce, [
        m(A, null, {
          default: s(() => [
            _.value ? (e(), u(E, ee({
              key: 0,
              "default-openeds": W.value,
              class: "vue-ele-nav-plus",
              collapse: H($)
            }, l.$attrs), {
              default: s(() => [
                (e(!0), a(v, null, w(p.value, (n) => (e(), a(v, {
                  key: n.index
                }, [
                  n.children.length > 0 ? (e(), u(x, {
                    key: 0,
                    class: r(n.active ? "replace-active" : ""),
                    "popper-class": "vue-ele-nav-plus-hor-first",
                    index: n.index
                  }, {
                    title: s(() => [
                      C("div", {
                        class: "parent-title",
                        onClick: (o) => !d.clickParentJump && n.showSelf !== !0 || y(n)
                      }, [
                        n.icon ? (e(), a(v, { key: 0 }, [
                          n.icon[0] === "el" ? (e(), u(i, { key: 0 }, {
                            default: s(() => [
                              (e(), u(O(n.icon[1])))
                            ]),
                            _: 2
                          }, 1024)) : n.icon[0] === "iconfont" ? (e(), a("i", {
                            key: 1,
                            class: r(["icon iconfont", "icon-" + n.icon[1]])
                          }, null, 2)) : (e(), a("i", {
                            key: 2,
                            class: r(n.icon[0])
                          }, h(n.icon[1]), 3))
                        ], 64)) : N("", !0),
                        C("span", null, h(d.i18n ? l.$t(n.title) : n.title), 1)
                      ], 8, ae)
                    ]),
                    default: s(() => [
                      (e(!0), a(v, null, w(n.children, (o) => (e(), a(v, {
                        key: o.index
                      }, [
                        o.children.length > 0 ? (e(), u(x, {
                          key: 0,
                          class: r(o.active ? "replace-active-child" : ""),
                          "popper-class": "second",
                          index: o.index
                        }, {
                          title: s(() => [
                            C("div", {
                              class: "parent-title",
                              onClick: (t) => !d.clickParentJump && o.showSelf !== !0 || y(o)
                            }, h(d.i18n ? l.$t(o.title) : o.title), 9, oe)
                          ]),
                          default: s(() => [
                            (e(!0), a(v, null, w(o.children, (t) => (e(), a(v, {
                              key: t.index
                            }, [
                              t.children.length > 0 ? (e(), u(x, {
                                key: 0,
                                class: r(t.active ? "replace-active-child" : ""),
                                "popper-class": "third",
                                index: t.index
                              }, {
                                title: s(() => [
                                  C("div", {
                                    class: "parent-title",
                                    onClick: (k) => !d.clickParentJump && t.showSelf !== !0 || y(t)
                                  }, h(d.i18n ? l.$t(t.title) : t.title), 9, te)
                                ]),
                                default: s(() => [
                                  (e(!0), a(v, null, w(t.children, (k) => (e(), u(f, {
                                    key: k.index,
                                    class: r(k.active ? "replace-active-child" : ""),
                                    index: k.index,
                                    onClick: (X) => y(k)
                                  }, {
                                    default: s(() => [
                                      P(h(d.i18n ? l.$t(k.title) : k.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "index", "onClick"]))), 128))
                                ]),
                                _: 2
                              }, 1032, ["class", "index"])) : (e(), u(f, {
                                key: 1,
                                class: r(t.active ? "replace-active-child" : ""),
                                index: t.index,
                                onClick: (k) => y(t)
                              }, {
                                default: s(() => [
                                  P(h(d.i18n ? l.$t(t.title) : t.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["class", "index", "onClick"]))
                            ], 64))), 128))
                          ]),
                          _: 2
                        }, 1032, ["class", "index"])) : (e(), u(f, {
                          key: 1,
                          class: r(o.active ? "replace-active-child" : ""),
                          index: o.index,
                          onClick: (t) => y(o)
                        }, {
                          default: s(() => [
                            P(h(d.i18n ? l.$t(o.title) : o.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["class", "index", "onClick"]))
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "index"])) : (e(), u(f, {
                    key: 1,
                    class: r(n.active ? "replace-active" : ""),
                    index: n.index,
                    onClick: (o) => y(n)
                  }, {
                    default: s(() => [
                      n.icon ? (e(), a(v, { key: 0 }, [
                        n.icon[0] === "el" ? (e(), u(i, { key: 0 }, {
                          default: s(() => [
                            (e(), u(O(n.icon[1])))
                          ]),
                          _: 2
                        }, 1024)) : n.icon[0] === "iconfont" ? (e(), a("i", {
                          key: 1,
                          class: r(["icon iconfont", "icon-" + n.icon[1]])
                        }, null, 2)) : (e(), a("i", {
                          key: 2,
                          class: r(n.icon[0])
                        }, h(n.icon[1]), 3))
                      ], 64)) : N("", !0),
                      C("span", null, h(d.i18n ? l.$t(n.title) : n.title), 1)
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
        d.collapseMaxWidth > 0 && d.showCollapseBtn ? (e(), a("div", {
          key: 0,
          class: "collapse-btn",
          onClick: Q
        }, [
          H($) ? (e(), a(v, { key: 0 }, [
            J.value[0] === "el" ? (e(), u(i, { key: 0 }, {
              default: s(() => [
                (e(), u(O(J.value[1])))
              ]),
              _: 1
            })) : J.value[0] === "iconfont" ? (e(), a("i", {
              key: 1,
              class: r(["icon iconfont", "icon-" + J.value[1]])
            }, null, 2)) : (e(), a("i", {
              key: 2,
              class: r(J.value[0])
            }, h(J.value[1]), 3))
          ], 64)) : (e(), a(v, { key: 1 }, [
            M.value[0] === "el" ? (e(), u(i, { key: 0 }, {
              default: s(() => [
                (e(), u(O(M.value[1])))
              ]),
              _: 1
            })) : M.value[0] === "iconfont" ? (e(), a("i", {
              key: 1,
              class: r(["icon iconfont", "icon-" + M.value[1]])
            }, null, 2)) : (e(), a("i", {
              key: 2,
              class: r(M.value[0])
            }, h(M.value[1]), 3))
          ], 64))
        ])) : N("", !0)
      ])) : (e(), a(v, { key: 1 }, [
        _.value ? (e(), u(E, {
          key: 0,
          "default-openeds": W.value,
          class: "vue-ele-nav-plus"
        }, {
          default: s(() => [
            (e(!0), a(v, null, w(p.value, (n) => (e(), a(v, {
              key: n.index
            }, [
              n.children.length > 0 ? (e(), u(x, {
                key: 0,
                class: r(n.active ? "replace-active" : ""),
                "popper-class": "vue-ele-nav-plus-hor-first",
                index: n.index
              }, {
                title: s(() => [
                  C("div", {
                    class: "parent-title",
                    onClick: (o) => !d.clickParentJump && n.showSelf !== !0 || y(n)
                  }, [
                    n.icon ? (e(), a(v, { key: 0 }, [
                      n.icon[0] === "el" ? (e(), u(i, { key: 0 }, {
                        default: s(() => [
                          (e(), u(O(n.icon[1])))
                        ]),
                        _: 2
                      }, 1024)) : n.icon[0] === "iconfont" ? (e(), a("i", {
                        key: 1,
                        class: r(["icon iconfont", "icon-" + n.icon[1]])
                      }, null, 2)) : (e(), a("i", {
                        key: 2,
                        class: r(n.icon[0])
                      }, h(n.icon[1]), 3))
                    ], 64)) : N("", !0),
                    C("span", null, h(d.i18n ? l.$t(n.title) : n.title), 1)
                  ], 8, ie)
                ]),
                default: s(() => [
                  (e(!0), a(v, null, w(n.children, (o) => (e(), a(v, {
                    key: o.index
                  }, [
                    o.children.length > 0 ? (e(), u(x, {
                      key: 0,
                      class: r(o.active ? "replace-active-child" : ""),
                      "popper-class": "second",
                      index: o.index
                    }, {
                      title: s(() => [
                        C("div", {
                          class: "parent-title",
                          onClick: (t) => !d.clickParentJump && o.showSelf !== !0 || y(o)
                        }, h(d.i18n ? l.$t(o.title) : o.title), 9, se)
                      ]),
                      default: s(() => [
                        (e(!0), a(v, null, w(o.children, (t) => (e(), a(v, {
                          key: t.index
                        }, [
                          t.children.length > 0 ? (e(), u(x, {
                            key: 0,
                            class: r(t.active ? "replace-active-child" : ""),
                            "popper-class": "third",
                            index: t.index
                          }, {
                            title: s(() => [
                              C("div", {
                                class: "parent-title",
                                onClick: (k) => !d.clickParentJump && t.showSelf !== !0 || y(t)
                              }, h(d.i18n ? l.$t(t.title) : t.title), 9, ue)
                            ]),
                            default: s(() => [
                              (e(!0), a(v, null, w(t.children, (k) => (e(), u(f, {
                                key: k.index,
                                class: r(k.active ? "replace-active-child" : ""),
                                index: k.index,
                                onClick: (X) => y(k)
                              }, {
                                default: s(() => [
                                  P(h(d.i18n ? l.$t(k.title) : k.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["class", "index", "onClick"]))), 128))
                            ]),
                            _: 2
                          }, 1032, ["class", "index"])) : (e(), u(f, {
                            key: 1,
                            class: r(t.active ? "replace-active-child" : ""),
                            index: t.index,
                            onClick: (k) => y(t)
                          }, {
                            default: s(() => [
                              P(h(d.i18n ? l.$t(t.title) : t.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["class", "index", "onClick"]))
                        ], 64))), 128))
                      ]),
                      _: 2
                    }, 1032, ["class", "index"])) : (e(), u(f, {
                      key: 1,
                      class: r(o.active ? "replace-active-child" : ""),
                      index: o.index,
                      onClick: (t) => y(o)
                    }, {
                      default: s(() => [
                        P(h(d.i18n ? l.$t(o.title) : o.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "index", "onClick"]))
                  ], 64))), 128))
                ]),
                _: 2
              }, 1032, ["class", "index"])) : (e(), u(f, {
                key: 1,
                class: r(n.active ? "replace-active" : ""),
                index: n.index,
                onClick: (o) => y(n)
              }, {
                default: s(() => [
                  n.icon ? (e(), a(v, { key: 0 }, [
                    n.icon[0] === "el" ? (e(), u(i, { key: 0 }, {
                      default: s(() => [
                        (e(), u(O(n.icon[1])))
                      ]),
                      _: 2
                    }, 1024)) : n.icon[0] === "iconfont" ? (e(), a("i", {
                      key: 1,
                      class: r(["icon iconfont", "icon-" + n.icon[1]])
                    }, null, 2)) : (e(), a("i", {
                      key: 2,
                      class: r(n.icon[0])
                    }, h(n.icon[1]), 3))
                  ], 64)) : N("", !0),
                  C("span", null, h(d.i18n ? l.$t(n.title) : n.title), 1)
                ]),
                _: 2
              }, 1032, ["class", "index", "onClick"]))
            ], 64))), 128))
          ]),
          _: 1
        }, 8, ["default-openeds"])) : N("", !0)
      ], 64));
    };
  }
}, de = [re], ve = {
  install(d) {
    de.forEach((R) => {
      d.component("vueEleNavPlus", R);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(ve);
export {
  ve as default
};
