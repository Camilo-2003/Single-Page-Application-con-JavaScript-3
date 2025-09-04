/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  const t = function () {
    return '\n    <div class="Header-main">\n        <div class="Header-logo">\n            <h1>\n                <a href="/">100tifi.co</a>\n            </h1>\n        </div>\n\n        <div class="Header-nav">\n            <a href="#/about/">About</a>\n        </div>\n    </div>\n    ';
  };
  function n() {
    var t,
      e,
      o = "function" == typeof Symbol ? Symbol : {},
      c = o.iterator || "@@iterator",
      a = o.toStringTag || "@@toStringTag";
    function i(n, o, c, a) {
      var i = o && o.prototype instanceof f ? o : f,
        s = Object.create(i.prototype);
      return (
        r(
          s,
          "_invoke",
          (function (n, r, o) {
            var c,
              a,
              i,
              f = 0,
              s = o || [],
              p = !1,
              l = {
                p: 0,
                n: 0,
                v: t,
                a: v,
                f: v.bind(t, 4),
                d: function (n, r) {
                  return (c = n), (a = 0), (i = t), (l.n = r), u;
                },
              };
            function v(n, r) {
              for (a = n, i = r, e = 0; !p && f && !o && e < s.length; e++) {
                var o,
                  c = s[e],
                  v = l.p,
                  h = c[2];
                n > 3
                  ? (o = h === r) &&
                    ((i = c[(a = c[4]) ? 5 : ((a = 3), 3)]), (c[4] = c[5] = t))
                  : c[0] <= v &&
                    ((o = n < 2 && v < c[1])
                      ? ((a = 0), (l.v = r), (l.n = c[1]))
                      : v < h &&
                        (o = n < 3 || c[0] > r || r > h) &&
                        ((c[4] = n), (c[5] = r), (l.n = h), (a = 0)));
              }
              if (o || n > 1) return u;
              throw ((p = !0), r);
            }
            return function (o, s, h) {
              if (f > 1) throw TypeError("Generator is already running");
              for (
                p && 1 === s && v(s, h), a = s, i = h;
                (e = a < 2 ? t : i) || !p;

              ) {
                c ||
                  (a
                    ? a < 3
                      ? (a > 1 && (l.n = -1), v(a, i))
                      : (l.n = i)
                    : (l.v = i));
                try {
                  if (((f = 2), c)) {
                    if ((a || (o = "next"), (e = c[o]))) {
                      if (!(e = e.call(c, i)))
                        throw TypeError("iterator result is not an object");
                      if (!e.done) return e;
                      (i = e.value), a < 2 && (a = 0);
                    } else
                      1 === a && (e = c.return) && e.call(c),
                        a < 2 &&
                          ((i = TypeError(
                            "The iterator does not provide a '" + o + "' method"
                          )),
                          (a = 1));
                    c = t;
                  } else if ((e = (p = l.n < 0) ? i : n.call(r, l)) !== u)
                    break;
                } catch (n) {
                  (c = t), (a = 1), (i = n);
                } finally {
                  f = 1;
                }
              }
              return { value: e, done: p };
            };
          })(n, c, a),
          !0
        ),
        s
      );
    }
    var u = {};
    function f() {}
    function s() {}
    function p() {}
    e = Object.getPrototypeOf;
    var l = [][c]
        ? e(e([][c]()))
        : (r((e = {}), c, function () {
            return this;
          }),
          e),
      v = (p.prototype = f.prototype = Object.create(l));
    function h(t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, p)
          : ((t.__proto__ = p), r(t, a, "GeneratorFunction")),
        (t.prototype = Object.create(v)),
        t
      );
    }
    return (
      (s.prototype = p),
      r(v, "constructor", p),
      r(p, "constructor", s),
      (s.displayName = "GeneratorFunction"),
      r(p, a, "GeneratorFunction"),
      r(v),
      r(v, a, "Generator"),
      r(v, c, function () {
        return this;
      }),
      r(v, "toString", function () {
        return "[object Generator]";
      }),
      (n = function () {
        return { w: i, m: h };
      })()
    );
  }
  function r(t, n, e, o) {
    var c = Object.defineProperty;
    try {
      c({}, "", {});
    } catch (t) {
      c = 0;
    }
    (r = function (t, n, e, o) {
      function a(n, e) {
        r(t, n, function (t) {
          return this._invoke(n, e, t);
        });
      }
      n
        ? c
          ? c(t, n, {
              value: e,
              enumerable: !o,
              configurable: !o,
              writable: !o,
            })
          : (t[n] = e)
        : (a("next", 0), a("throw", 1), a("return", 2));
    }),
      r(t, n, e, o);
  }
  function e(t, n, r, e, o, c, a) {
    try {
      var i = t[c](a),
        u = i.value;
    } catch (t) {
      return void r(t);
    }
    i.done ? n(u) : Promise.resolve(u).then(e, o);
  }
  var o = "https://rickandmortyapi.com/api/character/";
  const c = (function () {
    var t,
      r =
        ((t = n().m(function t(r) {
          var e, c, a, i;
          return n().w(
            function (t) {
              for (;;)
                switch ((t.p = t.n)) {
                  case 0:
                    return (
                      (e = r ? "".concat(o).concat(r) : o),
                      (t.p = 1),
                      (t.n = 2),
                      fetch(e)
                    );
                  case 2:
                    return (c = t.v), (t.n = 3), c.json();
                  case 3:
                    return (a = t.v), t.a(2, a);
                  case 4:
                    (t.p = 4), (i = t.v), console.log("Fetch Error", i);
                  case 5:
                    return t.a(2);
                }
            },
            t,
            null,
            [[1, 4]]
          );
        })),
        function () {
          var n = this,
            r = arguments;
          return new Promise(function (o, c) {
            var a = t.apply(n, r);
            function i(t) {
              e(a, o, c, i, u, "next", t);
            }
            function u(t) {
              e(a, o, c, i, u, "throw", t);
            }
            i(void 0);
          });
        });
    return function (t) {
      return r.apply(this, arguments);
    };
  })();
  function a() {
    var t,
      n,
      r = "function" == typeof Symbol ? Symbol : {},
      e = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function c(r, e, o, c) {
      var a = e && e.prototype instanceof f ? e : f,
        s = Object.create(a.prototype);
      return (
        i(
          s,
          "_invoke",
          (function (r, e, o) {
            var c,
              a,
              i,
              f = 0,
              s = o || [],
              p = !1,
              l = {
                p: 0,
                n: 0,
                v: t,
                a: v,
                f: v.bind(t, 4),
                d: function (n, r) {
                  return (c = n), (a = 0), (i = t), (l.n = r), u;
                },
              };
            function v(r, e) {
              for (a = r, i = e, n = 0; !p && f && !o && n < s.length; n++) {
                var o,
                  c = s[n],
                  v = l.p,
                  h = c[2];
                r > 3
                  ? (o = h === e) &&
                    ((i = c[(a = c[4]) ? 5 : ((a = 3), 3)]), (c[4] = c[5] = t))
                  : c[0] <= v &&
                    ((o = r < 2 && v < c[1])
                      ? ((a = 0), (l.v = e), (l.n = c[1]))
                      : v < h &&
                        (o = r < 3 || c[0] > e || e > h) &&
                        ((c[4] = r), (c[5] = e), (l.n = h), (a = 0)));
              }
              if (o || r > 1) return u;
              throw ((p = !0), e);
            }
            return function (o, s, h) {
              if (f > 1) throw TypeError("Generator is already running");
              for (
                p && 1 === s && v(s, h), a = s, i = h;
                (n = a < 2 ? t : i) || !p;

              ) {
                c ||
                  (a
                    ? a < 3
                      ? (a > 1 && (l.n = -1), v(a, i))
                      : (l.n = i)
                    : (l.v = i));
                try {
                  if (((f = 2), c)) {
                    if ((a || (o = "next"), (n = c[o]))) {
                      if (!(n = n.call(c, i)))
                        throw TypeError("iterator result is not an object");
                      if (!n.done) return n;
                      (i = n.value), a < 2 && (a = 0);
                    } else
                      1 === a && (n = c.return) && n.call(c),
                        a < 2 &&
                          ((i = TypeError(
                            "The iterator does not provide a '" + o + "' method"
                          )),
                          (a = 1));
                    c = t;
                  } else if ((n = (p = l.n < 0) ? i : r.call(e, l)) !== u)
                    break;
                } catch (n) {
                  (c = t), (a = 1), (i = n);
                } finally {
                  f = 1;
                }
              }
              return { value: n, done: p };
            };
          })(r, o, c),
          !0
        ),
        s
      );
    }
    var u = {};
    function f() {}
    function s() {}
    function p() {}
    n = Object.getPrototypeOf;
    var l = [][e]
        ? n(n([][e]()))
        : (i((n = {}), e, function () {
            return this;
          }),
          n),
      v = (p.prototype = f.prototype = Object.create(l));
    function h(t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, p)
          : ((t.__proto__ = p), i(t, o, "GeneratorFunction")),
        (t.prototype = Object.create(v)),
        t
      );
    }
    return (
      (s.prototype = p),
      i(v, "constructor", p),
      i(p, "constructor", s),
      (s.displayName = "GeneratorFunction"),
      i(p, o, "GeneratorFunction"),
      i(v),
      i(v, o, "Generator"),
      i(v, e, function () {
        return this;
      }),
      i(v, "toString", function () {
        return "[object Generator]";
      }),
      (a = function () {
        return { w: c, m: h };
      })()
    );
  }
  function i(t, n, r, e) {
    var o = Object.defineProperty;
    try {
      o({}, "", {});
    } catch (t) {
      o = 0;
    }
    (i = function (t, n, r, e) {
      function c(n, r) {
        i(t, n, function (t) {
          return this._invoke(n, r, t);
        });
      }
      n
        ? o
          ? o(t, n, {
              value: r,
              enumerable: !e,
              configurable: !e,
              writable: !e,
            })
          : (t[n] = r)
        : (c("next", 0), c("throw", 1), c("return", 2));
    }),
      i(t, n, r, e);
  }
  function u(t, n, r, e, o, c, a) {
    try {
      var i = t[c](a),
        u = i.value;
    } catch (t) {
      return void r(t);
    }
    i.done ? n(u) : Promise.resolve(u).then(e, o);
  }
  const f = function () {
    return location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
  };
  function s() {
    var t,
      n,
      r = "function" == typeof Symbol ? Symbol : {},
      e = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function c(r, e, o, c) {
      var u = e && e.prototype instanceof i ? e : i,
        f = Object.create(u.prototype);
      return (
        p(
          f,
          "_invoke",
          (function (r, e, o) {
            var c,
              i,
              u,
              f = 0,
              s = o || [],
              p = !1,
              l = {
                p: 0,
                n: 0,
                v: t,
                a: v,
                f: v.bind(t, 4),
                d: function (n, r) {
                  return (c = n), (i = 0), (u = t), (l.n = r), a;
                },
              };
            function v(r, e) {
              for (i = r, u = e, n = 0; !p && f && !o && n < s.length; n++) {
                var o,
                  c = s[n],
                  v = l.p,
                  h = c[2];
                r > 3
                  ? (o = h === e) &&
                    ((u = c[(i = c[4]) ? 5 : ((i = 3), 3)]), (c[4] = c[5] = t))
                  : c[0] <= v &&
                    ((o = r < 2 && v < c[1])
                      ? ((i = 0), (l.v = e), (l.n = c[1]))
                      : v < h &&
                        (o = r < 3 || c[0] > e || e > h) &&
                        ((c[4] = r), (c[5] = e), (l.n = h), (i = 0)));
              }
              if (o || r > 1) return a;
              throw ((p = !0), e);
            }
            return function (o, s, h) {
              if (f > 1) throw TypeError("Generator is already running");
              for (
                p && 1 === s && v(s, h), i = s, u = h;
                (n = i < 2 ? t : u) || !p;

              ) {
                c ||
                  (i
                    ? i < 3
                      ? (i > 1 && (l.n = -1), v(i, u))
                      : (l.n = u)
                    : (l.v = u));
                try {
                  if (((f = 2), c)) {
                    if ((i || (o = "next"), (n = c[o]))) {
                      if (!(n = n.call(c, u)))
                        throw TypeError("iterator result is not an object");
                      if (!n.done) return n;
                      (u = n.value), i < 2 && (i = 0);
                    } else
                      1 === i && (n = c.return) && n.call(c),
                        i < 2 &&
                          ((u = TypeError(
                            "The iterator does not provide a '" + o + "' method"
                          )),
                          (i = 1));
                    c = t;
                  } else if ((n = (p = l.n < 0) ? u : r.call(e, l)) !== a)
                    break;
                } catch (n) {
                  (c = t), (i = 1), (u = n);
                } finally {
                  f = 1;
                }
              }
              return { value: n, done: p };
            };
          })(r, o, c),
          !0
        ),
        f
      );
    }
    var a = {};
    function i() {}
    function u() {}
    function f() {}
    n = Object.getPrototypeOf;
    var l = [][e]
        ? n(n([][e]()))
        : (p((n = {}), e, function () {
            return this;
          }),
          n),
      v = (f.prototype = i.prototype = Object.create(l));
    function h(t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, f)
          : ((t.__proto__ = f), p(t, o, "GeneratorFunction")),
        (t.prototype = Object.create(v)),
        t
      );
    }
    return (
      (u.prototype = f),
      p(v, "constructor", f),
      p(f, "constructor", u),
      (u.displayName = "GeneratorFunction"),
      p(f, o, "GeneratorFunction"),
      p(v),
      p(v, o, "Generator"),
      p(v, e, function () {
        return this;
      }),
      p(v, "toString", function () {
        return "[object Generator]";
      }),
      (s = function () {
        return { w: c, m: h };
      })()
    );
  }
  function p(t, n, r, e) {
    var o = Object.defineProperty;
    try {
      o({}, "", {});
    } catch (t) {
      o = 0;
    }
    (p = function (t, n, r, e) {
      function c(n, r) {
        p(t, n, function (t) {
          return this._invoke(n, r, t);
        });
      }
      n
        ? o
          ? o(t, n, {
              value: r,
              enumerable: !e,
              configurable: !e,
              writable: !e,
            })
          : (t[n] = r)
        : (c("next", 0), c("throw", 1), c("return", 2));
    }),
      p(t, n, r, e);
  }
  function l(t, n, r, e, o, c, a) {
    try {
      var i = t[c](a),
        u = i.value;
    } catch (t) {
      return void r(t);
    }
    i.done ? n(u) : Promise.resolve(u).then(e, o);
  }
  const v = function () {
      return '<div class="Error404">\n        <h2>Error 404</h2>\n    </div> \n    ';
    },
    h = function (t) {
      return t.length <= 3 ? ("/" === t ? t : "/:id") : "/".concat(t);
    };
  function y() {
    var t,
      n,
      r = "function" == typeof Symbol ? Symbol : {},
      e = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function c(r, e, o, c) {
      var u = e && e.prototype instanceof i ? e : i,
        f = Object.create(u.prototype);
      return (
        d(
          f,
          "_invoke",
          (function (r, e, o) {
            var c,
              i,
              u,
              f = 0,
              s = o || [],
              p = !1,
              l = {
                p: 0,
                n: 0,
                v: t,
                a: v,
                f: v.bind(t, 4),
                d: function (n, r) {
                  return (c = n), (i = 0), (u = t), (l.n = r), a;
                },
              };
            function v(r, e) {
              for (i = r, u = e, n = 0; !p && f && !o && n < s.length; n++) {
                var o,
                  c = s[n],
                  v = l.p,
                  h = c[2];
                r > 3
                  ? (o = h === e) &&
                    ((u = c[(i = c[4]) ? 5 : ((i = 3), 3)]), (c[4] = c[5] = t))
                  : c[0] <= v &&
                    ((o = r < 2 && v < c[1])
                      ? ((i = 0), (l.v = e), (l.n = c[1]))
                      : v < h &&
                        (o = r < 3 || c[0] > e || e > h) &&
                        ((c[4] = r), (c[5] = e), (l.n = h), (i = 0)));
              }
              if (o || r > 1) return a;
              throw ((p = !0), e);
            }
            return function (o, s, h) {
              if (f > 1) throw TypeError("Generator is already running");
              for (
                p && 1 === s && v(s, h), i = s, u = h;
                (n = i < 2 ? t : u) || !p;

              ) {
                c ||
                  (i
                    ? i < 3
                      ? (i > 1 && (l.n = -1), v(i, u))
                      : (l.n = u)
                    : (l.v = u));
                try {
                  if (((f = 2), c)) {
                    if ((i || (o = "next"), (n = c[o]))) {
                      if (!(n = n.call(c, u)))
                        throw TypeError("iterator result is not an object");
                      if (!n.done) return n;
                      (u = n.value), i < 2 && (i = 0);
                    } else
                      1 === i && (n = c.return) && n.call(c),
                        i < 2 &&
                          ((u = TypeError(
                            "The iterator does not provide a '" + o + "' method"
                          )),
                          (i = 1));
                    c = t;
                  } else if ((n = (p = l.n < 0) ? u : r.call(e, l)) !== a)
                    break;
                } catch (n) {
                  (c = t), (i = 1), (u = n);
                } finally {
                  f = 1;
                }
              }
              return { value: n, done: p };
            };
          })(r, o, c),
          !0
        ),
        f
      );
    }
    var a = {};
    function i() {}
    function u() {}
    function f() {}
    n = Object.getPrototypeOf;
    var s = [][e]
        ? n(n([][e]()))
        : (d((n = {}), e, function () {
            return this;
          }),
          n),
      p = (f.prototype = i.prototype = Object.create(s));
    function l(t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, f)
          : ((t.__proto__ = f), d(t, o, "GeneratorFunction")),
        (t.prototype = Object.create(p)),
        t
      );
    }
    return (
      (u.prototype = f),
      d(p, "constructor", f),
      d(f, "constructor", u),
      (u.displayName = "GeneratorFunction"),
      d(f, o, "GeneratorFunction"),
      d(p),
      d(p, o, "Generator"),
      d(p, e, function () {
        return this;
      }),
      d(p, "toString", function () {
        return "[object Generator]";
      }),
      (y = function () {
        return { w: c, m: l };
      })()
    );
  }
  function d(t, n, r, e) {
    var o = Object.defineProperty;
    try {
      o({}, "", {});
    } catch (t) {
      o = 0;
    }
    (d = function (t, n, r, e) {
      function c(n, r) {
        d(t, n, function (t) {
          return this._invoke(n, r, t);
        });
      }
      n
        ? o
          ? o(t, n, {
              value: r,
              enumerable: !e,
              configurable: !e,
              writable: !e,
            })
          : (t[n] = r)
        : (c("next", 0), c("throw", 1), c("return", 2));
    }),
      d(t, n, r, e);
  }
  function b(t, n, r, e, o, c, a) {
    try {
      var i = t[c](a),
        u = i.value;
    } catch (t) {
      return void r(t);
    }
    i.done ? n(u) : Promise.resolve(u).then(e, o);
  }
  var m = {
    "/": (function () {
      var t,
        n =
          ((t = a().m(function t() {
            var n, r;
            return a().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    return (t.n = 1), c();
                  case 1:
                    return (
                      (n = t.v),
                      (r = '\n    <div class="Characters">\n     '.concat(
                        n.results
                          .map(function (t) {
                            return '\n        <article class="Character-item">\n         <a href="#/'
                              .concat(t.id, '/">\n            <img src="')
                              .concat(t.image, '" alt="')
                              .concat(t.name, '">\n            <h2>')
                              .concat(
                                t.name,
                                "</h2>\n         </a>\n        </article>\n        "
                              );
                          })
                          .join(""),
                        "\n    </div>\n    "
                      )),
                      t.a(2, r)
                    );
                }
            }, t);
          })),
          function () {
            var n = this,
              r = arguments;
            return new Promise(function (e, o) {
              var c = t.apply(n, r);
              function a(t) {
                u(c, e, o, a, i, "next", t);
              }
              function i(t) {
                u(c, e, o, a, i, "throw", t);
              }
              a(void 0);
            });
          });
      return function () {
        return n.apply(this, arguments);
      };
    })(),
    "/:id": (function () {
      var t,
        n =
          ((t = s().m(function t() {
            var n, r, e;
            return s().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    return (n = f()), (t.n = 1), c(n);
                  case 1:
                    return (
                      (r = t.v),
                      (e =
                        '\n    <div class="Character-inner">\n        <article class="Characters-card personaje">\n            <img src="'
                          .concat(r.image, '" alt="')
                          .concat(r.name, '">\n            <h2>')
                          .concat(
                            r.name,
                            '</h2>\n        </article>\n        <article class="Characters-card">\n            <h3>Episodes: <span>'
                          )
                          .concat(
                            r.episode.length,
                            "</span></h3>\n            <h3>Status: <span>"
                          )
                          .concat(
                            r.status,
                            "</span></h3>\n            <h3>Species: <span>"
                          )
                          .concat(
                            r.species,
                            "</span></h3>\n            <h3>Gender: <span>"
                          )
                          .concat(
                            r.gender,
                            "</span></h3>\n            <h3>Origin: <span>"
                          )
                          .concat(
                            r.origin.name,
                            "</span></h3>\n            <h3>Last Location: <span>"
                          )
                          .concat(
                            r.location.name,
                            "</span></h3>\n        </article>\n    </div>\n    "
                          )),
                      t.a(2, e)
                    );
                }
            }, t);
          })),
          function () {
            var n = this,
              r = arguments;
            return new Promise(function (e, o) {
              var c = t.apply(n, r);
              function a(t) {
                l(c, e, o, a, i, "next", t);
              }
              function i(t) {
                l(c, e, o, a, i, "throw", t);
              }
              a(void 0);
            });
          });
      return function () {
        return n.apply(this, arguments);
      };
    })(),
    "/contact": "Contact",
  };
  const g = (function () {
    var n,
      r =
        ((n = y().m(function n() {
          var r, e, o, c, a;
          return y().w(function (n) {
            for (;;)
              switch (n.n) {
                case 0:
                  return (
                    (r = document.getElementById("header")),
                    (e = document.getElementById("content")),
                    (n.n = 1),
                    t()
                  );
                case 1:
                  return (r.innerHTML = n.v), (o = f()), (n.n = 2), h(o);
                case 2:
                  return (c = n.v), (a = m[c] ? m[c] : v), (n.n = 3), a();
                case 3:
                  e.innerHTML = n.v;
                case 4:
                  return n.a(2);
              }
          }, n);
        })),
        function () {
          var t = this,
            r = arguments;
          return new Promise(function (e, o) {
            var c = n.apply(t, r);
            function a(t) {
              b(c, e, o, a, i, "next", t);
            }
            function i(t) {
              b(c, e, o, a, i, "throw", t);
            }
            a(void 0);
          });
        });
    return function () {
      return r.apply(this, arguments);
    };
  })();
  window.addEventListener("load", g), window.addEventListener("hashchange", g);
})();
