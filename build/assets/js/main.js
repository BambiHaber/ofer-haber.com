/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement)cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)for (h in a.converters)typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*")k = l; else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g)i in d && (c[g[i]] = d[i]);
        while (f[0] === "*")f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)for (i in e)if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0]in d)j = f[0]; else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b))f.each(b, function (b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        }); else if (!c && f.type(b) === "object")for (var e in b)b_(a + "[" + e + "]", b[e], c, d); else d(a, b)
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l;
        for (; i < j && (k || !l); i++)l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j;
                for (; e < g; e++)h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4;
        if (d > 0) {
            if (c !== "border")for (; e < g; e += 2)c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null)d = a.style[b];
        if (bt.test(d))return d;
        d = parseFloat(d) || 0;
        if (c)for (; e < g; e += 2)d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio")a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)for (d = 0, e = i[c].length; d < e; d++)f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement)while (b.length)c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType)return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b))return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return!a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return!0
    }

    function J() {
        return!1
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b]))continue;
            if (b !== "toJSON")return!1
        }
        return!0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++)b[a[c]] = !0;
        return b
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
            return new e.fn.init(a, b, h)
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
            return(b + "").toUpperCase()
        }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
        e.fn = e.prototype = {constructor: e, init: function (a, d, f) {
            var g, h, j, k;
            if (!a)return this;
            if (a.nodeType) {
                this.context = this[0] = a, this.length = 1;
                return this
            }
            if (a === "body" && !d && c.body) {
                this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                return this
            }
            if (typeof a == "string") {
                a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                if (g && (g[1] || !d)) {
                    if (g[1]) {
                        d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                        return e.merge(this, a)
                    }
                    h = c.getElementById(g[2]);
                    if (h && h.parentNode) {
                        if (h.id !== g[2])return f.find(a);
                        this.length = 1, this[0] = h
                    }
                    this.context = c, this.selector = a;
                    return this
                }
                return!d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
            }
            if (e.isFunction(a))return f.ready(a);
            a.selector !== b && (this.selector = a.selector, this.context = a.context);
            return e.makeArray(a, this)
        }, selector: "", jquery: "1.7.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return F.call(this, 0)
        }, get: function (a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d = this.constructor();
            e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
            return d
        }, each: function (a, b) {
            return e.each(this, a, b)
        }, ready: function (a) {
            e.bindReady(), A.add(a);
            return this
        }, eq: function (a) {
            a = +a;
            return a === -1 ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack(e.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: E, sort: [].sort, splice: [].splice}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++)if ((a = arguments[j]) != null)for (c in a) {
                d = i[c], f = a[c];
                if (i === f)continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        }, e.extend({noConflict: function (b) {
            a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
            return e
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0)
        }, ready: function (a) {
            if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                if (!c.body)return setTimeout(e.ready, 1);
                e.isReady = !0;
                if (a !== !0 && --e.readyWait > 0)return;
                A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
            }
        }, bindReady: function () {
            if (!A) {
                A = e.Callbacks("once memory");
                if (c.readyState === "complete")return setTimeout(e.ready, 1);
                if (c.addEventListener)c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                    c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                    var b = !1;
                    try {
                        b = a.frameElement == null
                    } catch (d) {
                    }
                    c.documentElement.doScroll && b && J()
                }
            }
        }, isFunction: function (a) {
            return e.type(a) === "function"
        }, isArray: Array.isArray || function (a) {
            return e.type(a) === "array"
        }, isWindow: function (a) {
            return a != null && a == a.window
        }, isNumeric: function (a) {
            return!isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return a == null ? String(a) : I[C.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))return!1;
            try {
                if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))return!1
            } catch (c) {
                return!1
            }
            var d;
            for (d in a);
            return d === b || D.call(a, d)
        }, isEmptyObject: function (a) {
            for (var b in a)return!1;
            return!0
        }, error: function (a) {
            throw new Error(a)
        }, parseJSON: function (b) {
            if (typeof b != "string" || !b)return null;
            b = e.trim(b);
            if (a.JSON && a.JSON.parse)return a.JSON.parse(b);
            if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))return(new Function("return " + b))();
            e.error("Invalid JSON: " + b)
        }, parseXML: function (c) {
            if (typeof c != "string" || !c)return null;
            var d, f;
            try {
                a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (g) {
                d = b
            }
            (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
            return d
        }, noop: function () {
        }, globalEval: function (b) {
            b && j.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(w, "ms-").replace(v, x)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        }, each: function (a, c, d) {
            var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
            if (d) {
                if (i) {
                    for (f in a)if (c.apply(a[f], d) === !1)break
                } else for (; g < h;)if (c.apply(a[g++], d) === !1)break
            } else if (i) {
                for (f in a)if (c.call(a[f], f, a[f]) === !1)break
            } else for (; g < h;)if (c.call(a[g], g, a[g++]) === !1)break;
            return a
        }, trim: G ? function (a) {
            return a == null ? "" : G.call(a)
        } : function (a) {
            return a == null ? "" : (a + "").replace(k, "").replace(l, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            if (a != null) {
                var d = e.type(a);
                a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
            }
            return c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (H)return H.call(b, a, c);
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++)if (c in b && b[c] === a)return c
            }
            return-1
        }, merge: function (a, c) {
            var d = a.length, e = 0;
            if (typeof c.length == "number")for (var f = c.length; e < f; e++)a[d++] = c[e]; else while (c[e] !== b)a[d++] = c[e++];
            a.length = d;
            return a
        }, grep: function (a, b, c) {
            var d = [], e;
            c = !!c;
            for (var f = 0, g = a.length; f < g; f++)e = !!b(a[f], f), c !== e && d.push(a[f]);
            return d
        }, map: function (a, c, d) {
            var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
            if (k)for (; i < j; i++)f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a)f = c(a[g], g, d), f != null && (h[h.length] = f);
            return h.concat.apply([], h)
        }, guid: 1, proxy: function (a, c) {
            if (typeof c == "string") {
                var d = a[c];
                c = a, a = d
            }
            if (!e.isFunction(a))return b;
            var f = F.call(arguments, 2), g = function () {
                return a.apply(c, f.concat(F.call(arguments)))
            };
            g.guid = a.guid = a.guid || g.guid || e.guid++;
            return g
        }, access: function (a, c, d, f, g, h, i) {
            var j, k = d == null, l = 0, m = a.length;
            if (d && typeof d == "object") {
                for (l in d)e.access(a, c, l, d[l], 1, h, f);
                g = 1
            } else if (f !== b) {
                j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                    return j.call(e(a), c)
                }) : (c.call(a, f), c = null));
                if (c)for (; l < m; l++)c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                g = 1
            }
            return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
        }, now: function () {
            return(new Date).getTime()
        }, uaMatch: function (a) {
            a = a.toLowerCase();
            var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
            return{browser: b[1] || "", version: b[2] || "0"}
        }, sub: function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                f && f instanceof e && !(f instanceof a) && (f = a(f));
                return e.fn.init.call(this, d, f, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(c);
            return a
        }, browser: {}}), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m, n = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++)g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
        }, o = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
            for (; c && m < l; m++)if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        }, p = {add: function () {
            if (c) {
                var a = c.length;
                n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
            }
            return this
        }, remove: function () {
            if (c) {
                var b = arguments, d = 0, e = b.length;
                for (; d < e; d++)for (var f = 0; f < c.length; f++)if (b[d] === c[f]) {
                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                    if (a.unique)break
                }
            }
            return this
        }, has: function (a) {
            if (c) {
                var b = 0, d = c.length;
                for (; b < d; b++)if (a === c[b])return!0
            }
            return!1
        }, empty: function () {
            c = [];
            return this
        }, disable: function () {
            c = d = e = b;
            return this
        }, disabled: function () {
            return!c
        }, lock: function () {
            d = b, (!e || e === !0) && p.disable();
            return this
        }, locked: function () {
            return!d
        }, fireWith: function (b, c) {
            d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
            return this
        }, fire: function () {
            p.fireWith(this, arguments);
            return this
        }, fired: function () {
            return!!i
        }};
        return p
    };
    var i = [].slice;
    f.extend({Deferred: function (a) {
        var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {resolve: b, reject: c, notify: d}, h = {done: b.add, fail: c.add, progress: d.add, state: function () {
            return e
        }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
            i.done(a).fail(b).progress(c);
            return this
        }, always: function () {
            i.done.apply(i, arguments).fail.apply(i, arguments);
            return this
        }, pipe: function (a, b, c) {
            return f.Deferred(function (d) {
                f.each({done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"]}, function (a, b) {
                    var c = b[0], e = b[1], g;
                    f.isFunction(c) ? i[a](function () {
                        g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                    }) : i[a](d[e])
                })
            }).promise()
        }, promise: function (a) {
            if (a == null)a = h; else for (var b in h)a[b] = h[b];
            return a
        }}, i = h.promise({}), j;
        for (j in g)i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
        i.done(function () {
            e = "resolved"
        }, c.disable, d.lock).fail(function () {
            e = "rejected"
        }, b.disable, d.lock), a && a.call(i, i);
        return i
    }, when: function (a) {
        function m(a) {
            return function (b) {
                e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
            }
        }

        function l(a) {
            return function (c) {
                b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
            }
        }

        var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
        if (d > 1) {
            for (; c < d; c++)b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
            g || j.resolveWith(j, b)
        } else j !== a && j.resolveWith(j, d ? [a] : []);
        return k
    }}), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e)return{};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(e.getAttribute("style")), hrefNormalized: e.getAttribute("href") === "/a", opacity: /^0.55/.test(e.style.opacity), cssFloat: !!e.style.cssFloat, checkOn: i.value === "on", optSelected: h.selected, getSetAttribute: p.className !== "t", enctype: !!c.createElement("form").enctype, html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, pixelMargin: !0}, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent)for (n in{submit: 1, change: 1, focusin: 1})m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {doesNotAddBorder: g.offsetTop !== 5, doesAddBorderForTableAndCells: i.offsetTop === 5}, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({cache: {}, uuid: 0, expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (a) {
        a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
        return!!a && !m(a)
    }, data: function (a, c, d, e) {
        if (!!f.acceptData(a)) {
            var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
            if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)return;
            n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
            if (typeof c == "object" || typeof c == "function")e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
            g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
            if (o && !h[c])return g.events;
            k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
            return i
        }
    }, removeData: function (a, b, c) {
        if (!!f.acceptData(a)) {
            var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
            if (!j[k])return;
            if (b) {
                d = c ? j[k] : j[k].data;
                if (d) {
                    f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, g = b.length; e < g; e++)delete d[b[e]];
                    if (!(c ? m : f.isEmptyObject)(d))return
                }
            }
            if (!c) {
                delete j[k].data;
                if (!m(j[k]))return
            }
            f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
        }
    }, _data: function (a, b, c) {
        return f.data(a, b, c, !0)
    }, acceptData: function (a) {
        if (a.nodeName) {
            var b = f.noData[a.nodeName.toLowerCase()];
            if (b)return b !== !0 && a.getAttribute("classid") === b
        }
        return!0
    }}), f.fn.extend({data: function (a, c) {
        var d, e, g, h, i, j = this[0], k = 0, m = null;
        if (a === b) {
            if (this.length) {
                m = f.data(j);
                if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                    g = j.attributes;
                    for (i = g.length; k < i; k++)h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                    f._data(j, "parsedAttrs", !0)
                }
            }
            return m
        }
        if (typeof a == "object")return this.each(function () {
            f.data(this, a)
        });
        d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
        return f.access(this, function (c) {
            if (c === b) {
                m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                return m === b && d[1] ? this.data(d[0]) : m
            }
            d[1] = c, this.each(function () {
                var b = f(this);
                b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
            })
        }, null, c, arguments.length > 1, null, !1)
    }, removeData: function (a) {
        return this.each(function () {
            f.removeData(this, a)
        })
    }}), f.extend({_mark: function (a, b) {
        a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
    }, _unmark: function (a, b, c) {
        a !== !0 && (c = b, b = a, a = !1);
        if (b) {
            c = c || "fx";
            var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
            e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
        }
    }, queue: function (a, b, c) {
        var d;
        if (a) {
            b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
            return d || []
        }
    }, dequeue: function (a, b) {
        b = b || "fx";
        var c = f.queue(a, b), d = c.shift(), e = {};
        d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
            f.dequeue(a, b)
        }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
    }}), f.fn.extend({queue: function (a, c) {
        var d = 2;
        typeof a != "string" && (c = a, a = "fx", d--);
        if (arguments.length < d)return f.queue(this[0], a);
        return c === b ? this : this.each(function () {
            var b = f.queue(this, a, c);
            a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
        })
    }, dequeue: function (a) {
        return this.each(function () {
            f.dequeue(this, a)
        })
    }, delay: function (a, b) {
        a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
        return this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
    }, promise: function (a, c) {
        function m() {
            --h || d.resolveWith(e, [e])
        }

        typeof a != "string" && (c = a, a = b), a = a || "fx";
        var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
        while (g--)if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))h++, l.add(m);
        m();
        return d.promise(c)
    }});
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({attr: function (a, b) {
        return f.access(this, f.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
        return this.each(function () {
            f.removeAttr(this, a)
        })
    }, prop: function (a, b) {
        return f.access(this, f.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
        a = f.propFix[a] || a;
        return this.each(function () {
            try {
                this[a] = b, delete this[a]
            } catch (c) {
            }
        })
    }, addClass: function (a) {
        var b, c, d, e, g, h, i;
        if (f.isFunction(a))return this.each(function (b) {
            f(this).addClass(a.call(this, b, this.className))
        });
        if (a && typeof a == "string") {
            b = a.split(p);
            for (c = 0, d = this.length; c < d; c++) {
                e = this[c];
                if (e.nodeType === 1)if (!e.className && b.length === 1)e.className = a; else {
                    g = " " + e.className + " ";
                    for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                    e.className = f.trim(g)
                }
            }
        }
        return this
    }, removeClass: function (a) {
        var c, d, e, g, h, i, j;
        if (f.isFunction(a))return this.each(function (b) {
            f(this).removeClass(a.call(this, b, this.className))
        });
        if (a && typeof a == "string" || a === b) {
            c = (a || "").split(p);
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                if (g.nodeType === 1 && g.className)if (a) {
                    h = (" " + g.className + " ").replace(o, " ");
                    for (i = 0, j = c.length; i < j; i++)h = h.replace(" " + c[i] + " ", " ");
                    g.className = f.trim(h)
                } else g.className = ""
            }
        }
        return this
    }, toggleClass: function (a, b) {
        var c = typeof a, d = typeof b == "boolean";
        if (f.isFunction(a))return this.each(function (c) {
            f(this).toggleClass(a.call(this, c, this.className, b), b)
        });
        return this.each(function () {
            if (c === "string") {
                var e, g = 0, h = f(this), i = b, j = a.split(p);
                while (e = j[g++])i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
            } else if (c === "undefined" || c === "boolean")this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
        })
    }, hasClass: function (a) {
        var b = " " + a + " ", c = 0, d = this.length;
        for (; c < d; c++)if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)return!0;
        return!1
    }, val: function (a) {
        var c, d, e, g = this[0];
        {
            if (!!arguments.length) {
                e = f.isFunction(a);
                return this.each(function (d) {
                    var g = f(this), h;
                    if (this.nodeType === 1) {
                        e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                            return a == null ? "" : a + ""
                        })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                        if (!c || !("set"in c) || c.set(this, h, "value") === b)this.value = h
                    }
                })
            }
            if (g) {
                c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                if (c && "get"in c && (d = c.get(g, "value")) !== b)return d;
                d = g.value;
                return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
            }
        }
    }}), f.extend({valHooks: {option: {get: function (a) {
        var b = a.attributes.value;
        return!b || b.specified ? a.value : a.text
    }}, select: {get: function (a) {
        var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
        if (g < 0)return null;
        c = j ? g : 0, d = j ? g + 1 : i.length;
        for (; c < d; c++) {
            e = i[c];
            if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                b = f(e).val();
                if (j)return b;
                h.push(b)
            }
        }
        if (j && !h.length && i.length)return f(i[g]).val();
        return h
    }, set: function (a, b) {
        var c = f.makeArray(b);
        f(a).find("option").each(function () {
            this.selected = f.inArray(f(this).val(), c) >= 0
        }), c.length || (a.selectedIndex = -1);
        return c
    }}}, attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0}, attr: function (a, c, d, e) {
        var g, h, i, j = a.nodeType;
        if (!!a && j !== 3 && j !== 8 && j !== 2) {
            if (e && c in f.attrFn)return f(a)[c](d);
            if (typeof a.getAttribute == "undefined")return f.prop(a, c, d);
            i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return
                }
                if (h && "set"in h && i && (g = h.set(a, d, c)) !== b)return g;
                a.setAttribute(c, "" + d);
                return d
            }
            if (h && "get"in h && i && (g = h.get(a, c)) !== null)return g;
            g = a.getAttribute(c);
            return g === null ? b : g
        }
    }, removeAttr: function (a, b) {
        var c, d, e, g, h, i = 0;
        if (b && a.nodeType === 1) {
            d = b.toLowerCase().split(p), g = d.length;
            for (; i < g; i++)e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
        }
    }, attrHooks: {type: {set: function (a, b) {
        if (r.test(a.nodeName) && a.parentNode)f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
            var c = a.value;
            a.setAttribute("type", b), c && (a.value = c);
            return b
        }
    }}, value: {get: function (a, b) {
        if (w && f.nodeName(a, "button"))return w.get(a, b);
        return b in a ? a.value : null
    }, set: function (a, b, c) {
        if (w && f.nodeName(a, "button"))return w.set(a, b, c);
        a.value = b
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (a, c, d) {
        var e, g, h, i = a.nodeType;
        if (!!a && i !== 3 && i !== 8 && i !== 2) {
            h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
            return d !== b ? g && "set"in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get"in g && (e = g.get(a, c)) !== null ? e : a[c]
        }
    }, propHooks: {tabIndex: {get: function (a) {
        var c = a.getAttributeNode("tabindex");
        return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
    }}}}), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {get: function (a, c) {
        var d, e = f.prop(a, c);
        return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
    }, set: function (a, b, c) {
        var d;
        b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
        return c
    }}, v || (y = {name: !0, id: !0, coords: !0}, w = f.valHooks.button = {get: function (a, c) {
        var d;
        d = a.getAttributeNode(c);
        return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
    }, set: function (a, b, d) {
        var e = a.getAttributeNode(d);
        e || (e = c.createAttribute(d), a.setAttributeNode(e));
        return e.nodeValue = b + ""
    }}, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {set: function (a, c) {
            if (c === "") {
                a.setAttribute(b, "auto");
                return c
            }
        }})
    }), f.attrHooks.contenteditable = {get: w.get, set: function (a, b, c) {
        b === "" && (b = "false"), w.set(a, b, c)
    }}), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d
        }})
    }), f.support.style || (f.attrHooks.style = {get: function (a) {
        return a.style.cssText.toLowerCase() || b
    }, set: function (a, b) {
        return a.style.cssText = "" + b
    }}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {get: function (a) {
        var b = a.parentNode;
        b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        return null
    }})), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value
        }}
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {set: function (a, b) {
            if (f.isArray(b))return a.checked = f.inArray(f(a).val(), b) >= 0
        }})
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    }, H = function (a, b) {
        var c = a.attributes || {};
        return(!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    }, I = function (a) {
        return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {add: function (a, c, d, e, g) {
        var h, i, j, k, l, m, n, o, p, q, r, s;
        if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
            d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
            }, i.elem = a), c = f.trim(I(c)).split(" ");
            for (k = 0; k < c.length; k++) {
                l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({type: m, origType: l[1], data: e, handler: d, guid: d.guid, selector: g, quick: g && G(g), namespace: n.join(".")}, p), r = j[m];
                if (!r) {
                    r = j[m] = [], r.delegateCount = 0;
                    if (!s.setup || s.setup.call(a, e, n, i) === !1)a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                }
                s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
            }
            a = null
        }
    }, global: {}, remove: function (a, b, c, d, e) {
        var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
        if (!!g && !!(o = g.events)) {
            b = f.trim(I(b || "")).split(" ");
            for (h = 0; h < b.length; h++) {
                i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                if (!j) {
                    for (j in o)f.event.remove(a, j + b[h], c, d, !0);
                    continue
                }
                p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (n = 0; n < r.length; n++)s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
            }
            f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
        }
    }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (c, d, e, g) {
        if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
            var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
            if (E.test(h + f.event.triggered))return;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
            if ((!e || f.event.customEvent[h]) && !f.event.global[h])return;
            c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
            if (!e) {
                j = f.cache;
                for (l in j)j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                return
            }
            c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
            if (p.trigger && p.trigger.apply(e, d) === !1)return;
            r = [
                [e, p.bindType || h]
            ];
            if (!g && !p.noBubble && !f.isWindow(e)) {
                s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                for (; m; m = m.parentNode)r.push([m, s]), n = m;
                n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
            }
            for (l = 0; l < r.length && !c.isPropagationStopped(); l++)m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
            c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
            return c.result
        }
    }, dispatch: function (c) {
        c = f.event.fix(c || a.event);
        var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u;
        g[0] = c, c.delegateTarget = this;
        if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
            if (e && (!c.button || c.type !== "click")) {
                n = f(this), n.context = this.ownerDocument || this;
                for (m = c.target; m != this; m = m.parentNode || this)if (m.disabled !== !0) {
                    p = {}, r = [], n[0] = m;
                    for (k = 0; k < e; k++)s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                    r.length && j.push({elem: m, matches: r})
                }
            }
            d.length > e && j.push({elem: this, matches: d.slice(e)});
            for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                q = j[k], c.currentTarget = q.elem;
                for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                    s = q.matches[l];
                    if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace))c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            i.postDispatch && i.postDispatch.call(this, c);
            return c.result
        }
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
        return a
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, d) {
        var e, f, g, h = d.button, i = d.fromElement;
        a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
        return a
    }}, fix: function (a) {
        if (a[f.expando])return a;
        var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
        a = f.Event(g);
        for (d = i.length; d;)e = i[--d], a[e] = g[e];
        a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
        return h.filter ? h.filter(a, g) : a
    }, special: {ready: {setup: f.bindReady}, load: {noBubble: !0}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function (a, b, c) {
        f.isWindow(this) && (this.onbeforeunload = c)
    }, teardown: function (a, b) {
        this.onbeforeunload === b && (this.onbeforeunload = null)
    }}}, simulate: function (a, b, c, d) {
        var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
        d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event))return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = K;
        var a = this.originalEvent;
        !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    }, stopPropagation: function () {
        this.isPropagationStopped = K;
        var a = this.originalEvent;
        !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = K, this.stopPropagation()
    }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J}, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
            var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
            if (!d || d !== c && !f.contains(c, d))a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
            return h
        }}
    }), f.support.submitBubbles || (f.event.special.submit = {setup: function () {
        if (f.nodeName(this, "form"))return!1;
        f.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
            d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                a._submit_bubble = !0
            }), d._submit_attached = !0)
        })
    }, postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function () {
        if (f.nodeName(this, "form"))return!1;
        f.event.remove(this, "._submit")
    }}), f.support.changeBubbles || (f.event.special.change = {setup: function () {
        if (z.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio")f.event.add(this, "propertychange._change", function (a) {
                a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), f.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
            });
            return!1
        }
        f.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
            }), b._change_attached = !0)
        })
    }, handle: function (a) {
        var b = a.target;
        if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")return a.handleObj.handler.apply(this, arguments)
    }, teardown: function () {
        f.event.remove(this, "._change");
        return z.test(this.nodeName)
    }}), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {setup: function () {
            d++ === 0 && c.addEventListener(a, e, !0)
        }, teardown: function () {
            --d === 0 && c.removeEventListener(a, e, !0)
        }}
    }), f.fn.extend({on: function (a, c, d, e, g) {
        var h, i;
        if (typeof a == "object") {
            typeof c != "string" && (d = d || c, c = b);
            for (i in a)this.on(i, c, d, a[i], g);
            return this
        }
        d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
        if (e === !1)e = J; else if (!e)return this;
        g === 1 && (h = e, e = function (a) {
            f().off(a);
            return h.apply(this, arguments)
        }, e.guid = h.guid || (h.guid = f.guid++));
        return this.each(function () {
            f.event.add(this, a, e, d, c)
        })
    }, one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }, off: function (a, c, d) {
        if (a && a.preventDefault && a.handleObj) {
            var e = a.handleObj;
            f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
            return this
        }
        if (typeof a == "object") {
            for (var g in a)this.off(g, c, a[g]);
            return this
        }
        if (c === !1 || typeof c == "function")d = c, c = b;
        d === !1 && (d = J);
        return this.each(function () {
            f.event.remove(this, a, d, c)
        })
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function (a, b) {
        return this.off(a, null, b)
    }, live: function (a, b, c) {
        f(this.context).on(a, this.selector, b, c);
        return this
    }, die: function (a, b) {
        f(this.context).off(a, this.selector || "**", b);
        return this
    }, delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
        return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
    }, trigger: function (a, b) {
        return this.each(function () {
            f.event.trigger(a, b, this)
        })
    }, triggerHandler: function (a, b) {
        if (this[0])return f.event.trigger(a, b, this[0], !0)
    }, toggle: function (a) {
        var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
            var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
            f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
            return b[e].apply(this, arguments) || !1
        };
        e.guid = c;
        while (d < b.length)b[d++].guid = c;
        return this.click(e)
    }, hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }}), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9)return[];
            if (!b || typeof b != "string")return e;
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))if (w.length === 2 && o.relative[w[0]])j = y(w[0] + w[1], d, f); else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length)b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {expr: w.pop(), set: s(f)} : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length)q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]")if (!u)e.push.apply(e, k); else if (d && d.nodeType === 1)for (t = 0; k[t] != null; t++)k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++)k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h)for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a)return[];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return{set: d, expr: a}
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\")continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f)g = i = !0; else if (f === !0)continue
                    }
                    if (f)for (n = 0; (j = s[n]) != null; n++)j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r), a = a.replace(o.match[h], "");
                        if (!g)return[];
                        break
                    }
                }
                if (a === q)if (g == null)m.error(a); else break;
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string")return a.textContent;
                    if (typeof a.innerText == "string")return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling)e += n(a)
                } else if (d === 3 || d === 4)return a.nodeValue
            } else for (b = 0; c = a[b]; b++)c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (a) {
            return a.getAttribute("href")
        }, type: function (a) {
            return a.getAttribute("type")
        }}, relative: {"+": function (a, b) {
            var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
            d && (b = b.toLowerCase());
            for (var f = 0, g = a.length, h; f < g; f++)if (h = a[f]) {
                while ((h = h.previousSibling) && h.nodeType !== 1);
                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
            }
            e && m.filter(b, a, !0)
        }, ">": function (a, b) {
            var c, d = typeof b == "string", e = 0, f = a.length;
            if (d && !l.test(b)) {
                b = b.toLowerCase();
                for (; e < f; e++) {
                    c = a[e];
                    if (c) {
                        var g = c.parentNode;
                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                    }
                }
            } else {
                for (; e < f; e++)c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                d && m.filter(b, a, !0)
            }
        }, "": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
        }, "~": function (a, b, c) {
            var d, f = e++, g = x;
            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
        }}, find: {ID: function (a, b, c) {
            if (typeof b.getElementById != "undefined" && !c) {
                var d = b.getElementById(a[1]);
                return d && d.parentNode ? [d] : []
            }
        }, NAME: function (a, b) {
            if (typeof b.getElementsByName != "undefined") {
                var c = [], d = b.getElementsByName(a[1]);
                for (var e = 0, f = d.length; e < f; e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
                return c.length === 0 ? null : c
            }
        }, TAG: function (a, b) {
            if (typeof b.getElementsByTagName != "undefined")return b.getElementsByTagName(a[1])
        }}, preFilter: {CLASS: function (a, b, c, d, e, f) {
            a = " " + a[1].replace(j, "") + " ";
            if (f)return a;
            for (var g = 0, h; (h = b[g]) != null; g++)h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
            return!1
        }, ID: function (a) {
            return a[1].replace(j, "")
        }, TAG: function (a, b) {
            return a[1].replace(j, "").toLowerCase()
        }, CHILD: function (a) {
            if (a[1] === "nth") {
                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
            } else a[2] && m.error(a[0]);
            a[0] = e++;
            return a
        }, ATTR: function (a, b, c, d, e, f) {
            var g = a[1] = a[1].replace(j, "");
            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
            return a
        }, PSEUDO: function (b, c, d, e, f) {
            if (b[1] === "not")if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))b[3] = m(b[3], null, null, c); else {
                var g = m.filter(b[3], c, d, !0 ^ f);
                d || e.push.apply(e, g);
                return!1
            } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))return!0;
            return b
        }, POS: function (a) {
            a.unshift(!0);
            return a
        }}, filters: {enabled: function (a) {
            return a.disabled === !1 && a.type !== "hidden"
        }, disabled: function (a) {
            return a.disabled === !0
        }, checked: function (a) {
            return a.checked === !0
        }, selected: function (a) {
            a.parentNode && a.parentNode.selectedIndex;
            return a.selected === !0
        }, parent: function (a) {
            return!!a.firstChild
        }, empty: function (a) {
            return!a.firstChild
        }, has: function (a, b, c) {
            return!!m(c[3], a).length
        }, header: function (a) {
            return/h\d/i.test(a.nodeName)
        }, text: function (a) {
            var b = a.getAttribute("type"), c = a.type;
            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
        }, radio: function (a) {
            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
        }, checkbox: function (a) {
            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
        }, file: function (a) {
            return a.nodeName.toLowerCase() === "input" && "file" === a.type
        }, password: function (a) {
            return a.nodeName.toLowerCase() === "input" && "password" === a.type
        }, submit: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "submit" === a.type
        }, image: function (a) {
            return a.nodeName.toLowerCase() === "input" && "image" === a.type
        }, reset: function (a) {
            var b = a.nodeName.toLowerCase();
            return(b === "input" || b === "button") && "reset" === a.type
        }, button: function (a) {
            var b = a.nodeName.toLowerCase();
            return b === "input" && "button" === a.type || b === "button"
        }, input: function (a) {
            return/input|select|textarea|button/i.test(a.nodeName)
        }, focus: function (a) {
            return a === a.ownerDocument.activeElement
        }}, setFilters: {first: function (a, b) {
            return b === 0
        }, last: function (a, b, c, d) {
            return b === d.length - 1
        }, even: function (a, b) {
            return b % 2 === 0
        }, odd: function (a, b) {
            return b % 2 === 1
        }, lt: function (a, b, c) {
            return b < c[3] - 0
        }, gt: function (a, b, c) {
            return b > c[3] - 0
        }, nth: function (a, b, c) {
            return c[3] - 0 === b
        }, eq: function (a, b, c) {
            return c[3] - 0 === b
        }}, filter: {PSEUDO: function (a, b, c, d) {
            var e = b[1], f = o.filters[e];
            if (f)return f(a, c, b, d);
            if (e === "contains")return(a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
            if (e === "not") {
                var g = b[3];
                for (var h = 0, i = g.length; h < i; h++)if (g[h] === a)return!1;
                return!0
            }
            m.error(e)
        }, CHILD: function (a, b) {
            var c, e, f, g, h, i, j, k = b[1], l = a;
            switch (k) {
                case"only":
                case"first":
                    while (l = l.previousSibling)if (l.nodeType === 1)return!1;
                    if (k === "first")return!0;
                    l = a;
                case"last":
                    while (l = l.nextSibling)if (l.nodeType === 1)return!1;
                    return!0;
                case"nth":
                    c = b[2], e = b[3];
                    if (c === 1 && e === 0)return!0;
                    f = b[0], g = a.parentNode;
                    if (g && (g[d] !== f || !a.nodeIndex)) {
                        i = 0;
                        for (l = g.firstChild; l; l = l.nextSibling)l.nodeType === 1 && (l.nodeIndex = ++i);
                        g[d] = f
                    }
                    j = a.nodeIndex - e;
                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
            }
        }, ID: function (a, b) {
            return a.nodeType === 1 && a.getAttribute("id") === b
        }, TAG: function (a, b) {
            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
        }, CLASS: function (a, b) {
            return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
        }, ATTR: function (a, b) {
            var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
        }, POS: function (a, b, c, d) {
            var e = b[2], f = o.setFilters[e];
            if (f)return f(a, c, b, d)
        }}}, p = o.match.POS, q = function (a, b) {
            return"\\" + (b - 0 + 1)
        };
        for (var r in o.match)o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]")Array.prototype.push.apply(d, a); else if (typeof a.length == "number")for (var e = a.length; c < e; c++)d.push(a[c]); else for (; a[c]; c++)d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i)return v(a, b);
            if (!g)return-1;
            if (!i)return 1;
            while (j)e.unshift(j), j = j.parentNode;
            j = i;
            while (j)f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)if (e[k] !== f[k])return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b)return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b)return-1;
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++)c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName)return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body)return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)return s([], f);
                                if (i.id === h[3])return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p)return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {
                            } finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a)m[e] = a[e];
                b = null
            }
        }(), function () {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a))try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11)return f
                        }
                    } catch (g) {
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1)return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c)return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return!!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return!1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a))f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++)m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.globalPOS, R = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({find: function (a) {
        var b = this, c, d;
        if (typeof a != "string")return f(a).filter(function () {
            for (c = 0, d = b.length; c < d; c++)if (f.contains(b[c], this))return!0
        });
        var e = this.pushStack("", "find", a), g, h, i;
        for (c = 0, d = this.length; c < d; c++) {
            g = e.length, f.find(a, this[c], e);
            if (c > 0)for (h = g; h < e.length; h++)for (i = 0; i < g; i++)if (e[i] === e[h]) {
                e.splice(h--, 1);
                break
            }
        }
        return e
    }, has: function (a) {
        var b = f(a);
        return this.filter(function () {
            for (var a = 0, c = b.length; a < c; a++)if (f.contains(this, b[a]))return!0
        })
    }, not: function (a) {
        return this.pushStack(T(this, a, !1), "not", a)
    }, filter: function (a) {
        return this.pushStack(T(this, a, !0), "filter", a)
    }, is: function (a) {
        return!!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
    }, closest: function (a, b) {
        var c = [], d, e, g = this[0];
        if (f.isArray(a)) {
            var h = 1;
            while (g && g.ownerDocument && g !== b) {
                for (d = 0; d < a.length; d++)f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h});
                g = g.parentNode, h++
            }
            return c
        }
        var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
        for (d = 0, e = this.length; d < e; d++) {
            g = this[d];
            while (g) {
                if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                    c.push(g);
                    break
                }
                g = g.parentNode;
                if (!g || !g.ownerDocument || g === b || g.nodeType === 11)break
            }
        }
        c = c.length > 1 ? f.unique(c) : c;
        return this.pushStack(c, "closest", a)
    }, index: function (a) {
        if (!a)return this[0] && this[0].parentNode ? this.prevAll().length : -1;
        if (typeof a == "string")return f.inArray(this[0], f(a));
        return f.inArray(a.jquery ? a[0] : a, this)
    }, add: function (a, b) {
        var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
        return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
    }, andSelf: function () {
        return this.add(this.prevObject)
    }}), f.each({parent: function (a) {
        var b = a.parentNode;
        return b && b.nodeType !== 11 ? b : null
    }, parents: function (a) {
        return f.dir(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
        return f.dir(a, "parentNode", c)
    }, next: function (a) {
        return f.nth(a, 2, "nextSibling")
    }, prev: function (a) {
        return f.nth(a, 2, "previousSibling")
    }, nextAll: function (a) {
        return f.dir(a, "nextSibling")
    }, prevAll: function (a) {
        return f.dir(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
        return f.dir(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
        return f.dir(a, "previousSibling", c)
    }, siblings: function (a) {
        return f.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
        return f.sibling(a.firstChild)
    }, contents: function (a) {
        return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
    }}, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({filter: function (a, b, c) {
        c && (a = ":not(" + a + ")");
        return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
    }, dir: function (a, c, d) {
        var e = [], g = a[c];
        while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))g.nodeType === 1 && e.push(g), g = g[c];
        return e
    }, nth: function (a, b, c, d) {
        b = b || 1;
        var e = 0;
        for (; a; a = a[c])if (a.nodeType === 1 && ++e === b)break;
        return a
    }, sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling)a.nodeType === 1 && a !== b && c.push(a);
        return c
    }});
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({text: function (a) {
        return f.access(this, function (a) {
            return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
        }, null, a, arguments.length)
    }, wrapAll: function (a) {
        if (f.isFunction(a))return this.each(function (b) {
            f(this).wrapAll(a.call(this, b))
        });
        if (this[0]) {
            var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1)a = a.firstChild;
                return a
            }).append(this)
        }
        return this
    }, wrapInner: function (a) {
        if (f.isFunction(a))return this.each(function (b) {
            f(this).wrapInner(a.call(this, b))
        });
        return this.each(function () {
            var b = f(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    }, wrap: function (a) {
        var b = f.isFunction(a);
        return this.each(function (c) {
            f(this).wrapAll(b ? a.call(this, c) : a)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.appendChild(a)
        })
    }, prepend: function () {
        return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.insertBefore(a, this.firstChild)
        })
    }, before: function () {
        if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this)
        });
        if (arguments.length) {
            var a = f
                .clean(arguments);
            a.push.apply(a, this.toArray());
            return this.pushStack(a, "before", arguments)
        }
    }, after: function () {
        if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling)
        });
        if (arguments.length) {
            var a = this.pushStack(this, "after", arguments);
            a.push.apply(a, f.clean(arguments));
            return a
        }
    }, remove: function (a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++)if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
        return this
    }, empty: function () {
        for (var a = 0, b; (b = this[a]) != null; a++) {
            b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
            while (b.firstChild)b.removeChild(b.firstChild)
        }
        return this
    }, clone: function (a, b) {
        a = a == null ? !1 : a, b = b == null ? a : b;
        return this.map(function () {
            return f.clone(this, a, b)
        })
    }, html: function (a) {
        return f.access(this, function (a) {
            var c = this[0] || {}, d = 0, e = this.length;
            if (a === b)return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (; d < e; d++)c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                    c = 0
                } catch (g) {
                }
            }
            c && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith: function (a) {
        if (this[0] && this[0].parentNode) {
            if (f.isFunction(a))return this.each(function (b) {
                var c = f(this), d = c.html();
                c.replaceWith(a.call(this, b, d))
            });
            typeof a != "string" && (a = f(a).detach());
            return this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                f(this).remove(), b ? f(b).before(a) : f(c).append(a)
            })
        }
        return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
    }, detach: function (a) {
        return this.remove(a, !0)
    }, domManip: function (a, c, d) {
        var e, g, h, i, j = a[0], k = [];
        if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))return this.each(function () {
            f(this).domManip(a, c, d, !0)
        });
        if (f.isFunction(j))return this.each(function (e) {
            var g = f(this);
            a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
        });
        if (this[0]) {
            i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
            if (g) {
                c = c && f.nodeName(g, "tr");
                for (var l = 0, m = this.length, n = m - 1; l < m; l++)d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
            }
            k.length && f.each(k, function (a, b) {
                b.src ? f.ajax({type: "GET", global: !1, url: b.src, async: !1, dataType: "script"}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
            })
        }
        return this
    }}), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return{fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({clone: function (a, b, c) {
        var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
        if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
            bk(a, h), d = bl(a), e = bl(h);
            for (g = 0; d[g]; ++g)e[g] && bk(d[g], e[g])
        }
        if (b) {
            bj(a, h);
            if (c) {
                d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g)bj(d[g], e[g])
            }
        }
        d = e = null;
        return h
    }, clean: function (a, b, d, e) {
        var g, h, i, j = [];
        b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
        for (var k = 0, l; (l = a[k]) != null; k++) {
            typeof l == "number" && (l += "");
            if (!l)continue;
            if (typeof l == "string")if (!_.test(l))l = b.createTextNode(l); else {
                l = l.replace(Y, "<$1></$2>");
                var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement("div"), q = bh.childNodes, r;
                b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                while (o--)p = p.lastChild;
                if (!f.support.tbody) {
                    var s = $.test(l), t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                    for (i = t.length - 1; i >= 0; --i)f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                }
                !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
            }
            var u;
            if (!f.support.appendChecked)if (l[0] && typeof (u = l.length) == "number")for (i = 0; i < u; i++)bn(l[i]); else bn(l);
            l.nodeType ? j.push(l) : j = f.merge(j, l)
        }
        if (d) {
            g = function (a) {
                return!a.type || be.test(a.type)
            };
            for (k = 0; j[k]; k++) {
                h = j[k];
                if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type)))e.push(h.parentNode ? h.parentNode.removeChild(h) : h); else {
                    if (h.nodeType === 1) {
                        var v = f.grep(h.getElementsByTagName("script"), g);
                        j.splice.apply(j, [k + 1, 0].concat(v))
                    }
                    d.appendChild(h)
                }
            }
        }
        return j
    }, cleanData: function (a) {
        var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
        for (var h = 0, i; (i = a[h]) != null; h++) {
            if (i.nodeName && f.noData[i.nodeName.toLowerCase()])continue;
            c = i[f.expando];
            if (c) {
                b = d[c];
                if (b && b.events) {
                    for (var j in b.events)e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                    b.handle && (b.handle.elem = null)
                }
                g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
            }
        }
    }});
    var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = {position: "absolute", visibility: "hidden", display: "block"}, bx = ["Top", "Right", "Bottom", "Left"], by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = by(a, "opacity");
            return c === "" ? "1" : c
        }
        return a.style.opacity
    }}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, c, d, e) {
        if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
            var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
            c = f.cssProps[i] || i;
            if (d === b) {
                if (k && "get"in k && (g = k.get(a, !1, e)) !== b)return g;
                return j[c]
            }
            h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
            if (d == null || h === "number" && isNaN(d))return;
            h === "number" && !f.cssNumber[i] && (d += "px");
            if (!k || !("set"in k) || (d = k.set(a, d)) !== b)try {
                j[c] = d
            } catch (l) {
            }
        }
    }, css: function (a, c, d) {
        var e, g;
        c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
        if (g && "get"in g && (e = g.get(a, !0, d)) !== b)return e;
        if (by)return by(a, c)
    }, swap: function (a, b, c) {
        var d = {}, e, f;
        for (f in b)d[f] = a.style[f], a.style[f] = b[f];
        e = c.call(a);
        for (f in b)a.style[f] = d[f];
        return e
    }}), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {get: function (a, c, d) {
            if (c)return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                return bB(a, b, d)
            })
        }, set: function (a, b) {
            return bs.test(b) ? b + "px" : b
        }}
    }), f.support.opacity || (f.cssHooks.opacity = {get: function (a, b) {
        return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
    }, set: function (a, b) {
        var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || "";
        c.zoom = 1;
        if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
            c.removeAttribute("filter");
            if (d && !d.filter)return
        }
        c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
    }}), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {get: function (a, b) {
            return f.swap(a, {display: "inline-block"}, function () {
                return b ? by(a, "margin-right") : a.style.marginRight
            })
        }})
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return!f.expr.filters.hidden(a)
    }), f.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        f.cssHooks[a + b] = {expand: function (c) {
            var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
            for (d = 0; d < 4; d++)f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
            return f
        }}
    });
    var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({load: function (a, c, d) {
        if (typeof a != "string" && bR)return bR.apply(this, arguments);
        if (!this.length)return this;
        var e = a.indexOf(" ");
        if (e >= 0) {
            var g = a.slice(e, a.length);
            a = a.slice(0, e)
        }
        var h = "GET";
        c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
        var i = this;
        f.ajax({url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
            c = a.responseText, a.isResolved() && (a.done(function (a) {
                c = a
            }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
        }});
        return this
    }, serialize: function () {
        return f.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ? f.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
        }).map(function (a, b) {
            var c = f(this).val();
            return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                return{name: b.name, value: a.replace(bE, "\r\n")}
            }) : {name: b.name, value: c.replace(bE, "\r\n")}
        }).get()
    }}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({getScript: function (a, c) {
        return f.get(a, b, c, "script")
    }, getJSON: function (a, b, c) {
        return f.get(a, b, c, "json")
    }, ajaxSetup: function (a, b) {
        b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
        return a
    }, ajaxSettings: {url: bU, isLocal: bI.test(bV[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": bW}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: bY(bS), ajaxTransport: bY(bT), ajax: function (a, c) {
        function w(a, c, l, m) {
            if (s !== 2) {
                s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z;
                if (a >= 200 && a < 300 || a === 304) {
                    if (d.ifModified) {
                        if (y = v.getResponseHeader("Last-Modified"))f.lastModified[k] = y;
                        if (z = v.getResponseHeader("Etag"))f.etag[k] = z
                    }
                    if (a === 304)w = "notmodified", o = !0; else try {
                        r = cb(d, x), w = "success", o = !0
                    } catch (A) {
                        w = "parsererror", u = A
                    }
                } else {
                    u = w;
                    if (!w || a)w = "error", a < 0 && (a = 0)
                }
                v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
            }
        }

        typeof a == "object" && (c = a, a = b), c = c || {};
        var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {readyState: 0, setRequestHeader: function (a, b) {
            if (!s) {
                var c = a.toLowerCase();
                a = m[c] = m[c] || a, l[a] = b
            }
            return this
        }, getAllResponseHeaders: function () {
            return s === 2 ? n : null
        }, getResponseHeader: function (a) {
            var c;
            if (s === 2) {
                if (!o) {
                    o = {};
                    while (c = bG.exec(n))o[c[1].toLowerCase()] = c[2]
                }
                c = o[a.toLowerCase()]
            }
            return c === b ? null : c
        }, overrideMimeType: function (a) {
            s || (d.mimeType = a);
            return this
        }, abort: function (a) {
            a = a || "abort", p && p.abort(a), w(0, a);
            return this
        }};
        h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
            if (a) {
                var b;
                if (s < 2)for (b in a)j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b)
            }
            return this
        }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
        if (s === 2)return!1;
        t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
        if (!d.hasContent) {
            d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
            if (d.cache === !1) {
                var x = f.now(), y = d.url.replace(bP, "$1_=" + x);
                d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
            }
        }
        (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
        for (u in d.headers)v.setRequestHeader(u, d.headers[u]);
        if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
            v.abort();
            return!1
        }
        for (u in{success: 1, error: 1, complete: 1})v[u](d[u]);
        p = bZ(bT, d, c, v);
        if (!p)w(-1, "No Transport"); else {
            v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                v.abort("timeout")
            }, d.timeout));
            try {
                s = 1, p.send(l, w)
            } catch (z) {
                if (s < 2)w(-1, z); else throw z
            }
        }
        return v
    }, param: function (a, c) {
        var d = [], e = function (a, b) {
            b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        c === b && (c = f.ajaxSettings.traditional);
        if (f.isArray(a) || a.jquery && !f.isPlainObject(a))f.each(a, function () {
            e(this.name, this.value)
        }); else for (var g in a)b_(g, a[g], c, e);
        return d.join("&").replace(bC, "+")
    }}), f.extend({active: 0, lastModified: {}, etag: {}});
    var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        return f.expando + "_" + cc++
    }}), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return"script"
        }
    }), f.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (a) {
        f.globalEval(a);
        return a
    }}}), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return{send: function (f, g) {
                d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                    if (c || !d.readyState || /loaded|complete/.test(d.readyState))d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                }, e.insertBefore(d, e.firstChild)
            }, abort: function () {
                d && d.onload(0, 1)
            }}
        }
    });
    var ce = a.ActiveXObject ? function () {
        for (var a in cg)cg[a](0, 1)
    } : !1, cf = 0, cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return!this.isLocal && ch() || ci()
    } : ch, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials"in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return{send: function (e, g) {
                var h = c.xhr(), i, j;
                c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                if (c.xhrFields)for (j in c.xhrFields)h[j] = c.xhrFields[j];
                c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (j in e)h.setRequestHeader(j, e[j])
                } catch (k) {
                }
                h.send(c.hasContent && c.data || null), d = function (a, e) {
                    var j, k, l, m, n;
                    try {
                        if (d && (e || h.readyState === 4)) {
                            d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                            if (e)h.readyState !== 4 && h.abort(); else {
                                j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                try {
                                    m.text = h.responseText
                                } catch (a) {
                                }
                                try {
                                    k = h.statusText
                                } catch (o) {
                                    k = ""
                                }
                                !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                            }
                        }
                    } catch (p) {
                        e || g(-1, p)
                    }
                    m && g(j, k, m, l)
                }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
            }, abort: function () {
                d && d(0, 1)
            }}
        }
    });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ], cq;
    f.fn.extend({show: function (a, b, c) {
        var d, e;
        if (a || a === 0)return this.animate(ct("show", 3), a, b, c);
        for (var g = 0, h = this.length; g < h; g++)d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
        for (g = 0; g < h; g++) {
            d = this[g];
            if (d.style) {
                e = d.style.display;
                if (e === "" || e === "none")d.style.display = f._data(d, "olddisplay") || ""
            }
        }
        return this
    }, hide: function (a, b, c) {
        if (a || a === 0)return this.animate(ct("hide", 3), a, b, c);
        var d, e, g = 0, h = this.length;
        for (; g < h; g++)d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
        for (g = 0; g < h; g++)this[g].style && (this[g].style.display = "none");
        return this
    }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
        var d = typeof a == "boolean";
        f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
            var b = d ? a : f(this).is(":hidden");
            f(this)[b ? "show" : "hide"]()
        }) : this.animate(ct("toggle", 3), a, b, c);
        return this
    }, fadeTo: function (a, b, c, d) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
        function g() {
            e.queue === !1 && f._mark(this);
            var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q;
            b.animatedProperties = {};
            for (i in a) {
                g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                if ((k = f.cssHooks[g]) && "expand"in k) {
                    l = k.expand(a[g]), delete a[g];
                    for (i in l)i in a || (a[i] = l[i])
                }
            }
            for (g in a) {
                h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                if (h === "hide" && d || h === "show" && !d)return b.complete.call(this);
                c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
            }
            b.overflow != null && (this.style.overflow = "hidden");
            for (i in a)j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
            return!0
        }

        var e = f.speed(b, c, d);
        if (f.isEmptyObject(a))return this.each(e.complete, [!1]);
        a = f.extend({}, a);
        return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
    }, stop: function (a, c, d) {
        typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
        return this.each(function () {
            function h(a, b, c) {
                var e = b[c];
                f.removeData(a, c, !0), e.stop(d)
            }

            var b, c = !1, e = f.timers, g = f._data(this);
            d || f._unmark(!0, this);
            if (a == null)for (b in g)g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b);
            for (b = e.length; b--;)e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
            (!d || !c) && f.dequeue(this, a)
        })
    }}), f.each({slideDown: ct("show", 1), slideUp: ct("hide", 1), slideToggle: ct("toggle", 1), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({speed: function (a, b, c) {
        var d = a && typeof a == "object" ? f.extend({}, a) : {complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b};
        d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
        if (d.queue == null || d.queue === !0)d.queue = "fx";
        d.old = d.complete, d.complete = function (a) {
            f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
        };
        return d
    }, easing: {linear: function (a) {
        return a
    }, swing: function (a) {
        return-Math.cos(a * Math.PI) / 2 + .5
    }}, timers: [], fx: function (a, b, c) {
        this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
    }}), f.fx.prototype = {update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
    }, cur: function () {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))return this.elem[this.prop];
        var a, b = f.css(this.elem, this.prop);
        return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
    }, custom: function (a, c, d) {
        function h(a) {
            return e.step(a)
        }

        var e = this, g = f.fx;
        this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
            f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
        }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
    }, show: function () {
        var a = f._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
    }, hide: function () {
        this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
    }, step: function (a) {
        var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options;
        if (a || e >= i.duration + this.startTime) {
            this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
            for (b in i.animatedProperties)i.animatedProperties[b] !== !0 && (g = !1);
            if (g) {
                i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                    h.style["overflow" + b] = i.overflow[a]
                }), i.hide && f(h).hide();
                if (i.hide || i.show)for (b in i.animatedProperties)f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                d = i.complete, d && (i.complete = !1, d.call(h))
            }
            return!1
        }
        i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
        return!0
    }}, f.extend(f.fx, {tick: function () {
        var a, b = f.timers, c = 0;
        for (; c < b.length; c++)a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || f.fx.stop()
    }, interval: 13, stop: function () {
        clearInterval(co), co = null
    }, speeds: {slow: 600, fast: 200, _default: 400}, step: {opacity: function (a) {
        f.style(a.elem, "opacity", a.now)
    }, _default: function (a) {
        a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
    }}}), f.each(cp.concat.apply([], cp), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers,function (b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect"in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a))return d ? {top: d.top, left: d.left} : {top: 0, left: 0};
        var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i, n = d.left + l - j;
        return{top: m, left: n}
    } : cv = function (a, b, c) {
        var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed")break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static")k += h.offsetTop, l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return{top: k, left: l}
    }, f.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0], d = c && c.ownerDocument;
        if (!d)return null;
        if (c === d.body)return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    }, f.offset = {bodyOffset: function (a) {
        var b = a.offsetTop, c = a.offsetLeft;
        f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
        return{top: b, left: c}
    }, setOffset: function (a, b, c) {
        var d = f.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
        j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using"in b ? b.using.call(a, k) : e.css(k)
    }}, f.fn.extend({position: function () {
        if (!this[0])return null;
        var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
        c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
        return{top: c.top - d.top, left: c.left - d.left}
    }, offsetParent: function () {
        return this.map(function () {
            var a = this.offsetParent || c.body;
            while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static")a = a.offsetParent;
            return a
        })
    }}), f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = cy(a);
                if (g === b)return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({Height: "height", Width: "width"}, function (a, c) {
        var d = "client" + a, e = "scroll" + a, g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e])return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function () {

    // Baseline setup
    // --------------

    // Establish the root object, `window` in the browser, or `exports` on the server.
    var root = this;

    // Save the previous value of the `_` variable.
    var previousUnderscore = root._;

    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};

    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var
        push = ArrayProto.push,
        slice = ArrayProto.slice,
        concat = ArrayProto.concat,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
        nativeForEach = ArrayProto.forEach,
        nativeMap = ArrayProto.map,
        nativeReduce = ArrayProto.reduce,
        nativeReduceRight = ArrayProto.reduceRight,
        nativeFilter = ArrayProto.filter,
        nativeEvery = ArrayProto.every,
        nativeSome = ArrayProto.some,
        nativeIndexOf = ArrayProto.indexOf,
        nativeLastIndexOf = ArrayProto.lastIndexOf,
        nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind;

    // Create a safe reference to the Underscore object for use below.
    var _ = function (obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };

    // Export the Underscore object for **Node.js**, with
    // backwards-compatibility for the old `require()` API. If we're in
    // the browser, add `_` as a global object via a string identifier,
    // for Closure Compiler "advanced" mode.
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }

    // Current version.
    _.VERSION = '1.5.2';

    // Collection Functions
    // --------------------

    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = _.each = _.forEach = function (obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            }
        }
    };

    // Return the results of applying the iterator to each element.
    // Delegates to **ECMAScript 5**'s native `map` if available.
    _.map = _.collect = function (obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function (value, index, list) {
            results.push(iterator.call(context, value, index, list));
        });
        return results;
    };

    var reduceError = 'Reduce of empty array with no initial value';

    // **Reduce** builds up a single result from a list of values, aka `inject`,
    // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
    _.reduce = _.foldl = _.inject = function (obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduce && obj.reduce === nativeReduce) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
        }
        each(obj, function (value, index, list) {
            if (!initial) {
                memo = value;
                initial = true;
            } else {
                memo = iterator.call(context, memo, value, index, list);
            }
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    };

    // The right-associative version of reduce, also known as `foldr`.
    // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
    _.reduceRight = _.foldr = function (obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
        }
        var length = obj.length;
        if (length !== +length) {
            var keys = _.keys(obj);
            length = keys.length;
        }
        each(obj, function (value, index, list) {
            index = keys ? keys[--length] : --length;
            if (!initial) {
                memo = obj[index];
                initial = true;
            } else {
                memo = iterator.call(context, memo, obj[index], index, list);
            }
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    };

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function (obj, iterator, context) {
        var result;
        any(obj, function (value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };

    // Return all the elements that pass a truth test.
    // Delegates to **ECMAScript 5**'s native `filter` if available.
    // Aliased as `select`.
    _.filter = _.select = function (obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
        each(obj, function (value, index, list) {
            if (iterator.call(context, value, index, list)) results.push(value);
        });
        return results;
    };

    // Return all the elements for which a truth test fails.
    _.reject = function (obj, iterator, context) {
        return _.filter(obj, function (value, index, list) {
            return !iterator.call(context, value, index, list);
        }, context);
    };

    // Determine whether all of the elements match a truth test.
    // Delegates to **ECMAScript 5**'s native `every` if available.
    // Aliased as `all`.
    _.every = _.all = function (obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = true;
        if (obj == null) return result;
        if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
        each(obj, function (value, index, list) {
            if (!(result = result && iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };

    // Determine if at least one element in the object matches a truth test.
    // Delegates to **ECMAScript 5**'s native `some` if available.
    // Aliased as `any`.
    var any = _.some = _.any = function (obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
        each(obj, function (value, index, list) {
            if (result || (result = iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };

    // Determine if the array or object contains a given value (using `===`).
    // Aliased as `include`.
    _.contains = _.include = function (obj, target) {
        if (obj == null) return false;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
        return any(obj, function (value) {
            return value === target;
        });
    };

    // Invoke a method (with arguments) on every item in a collection.
    _.invoke = function (obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function (value) {
            return (isFunc ? method : value[method]).apply(value, args);
        });
    };

    // Convenience version of a common use case of `map`: fetching a property.
    _.pluck = function (obj, key) {
        return _.map(obj, function (value) {
            return value[key];
        });
    };

    // Convenience version of a common use case of `filter`: selecting only objects
    // containing specific `key:value` pairs.
    _.where = function (obj, attrs, first) {
        if (_.isEmpty(attrs)) return first ? void 0 : [];
        return _[first ? 'find' : 'filter'](obj, function (value) {
            for (var key in attrs) {
                if (attrs[key] !== value[key]) return false;
            }
            return true;
        });
    };

    // Convenience version of a common use case of `find`: getting the first object
    // containing specific `key:value` pairs.
    _.findWhere = function (obj, attrs) {
        return _.where(obj, attrs, true);
    };

    // Return the maximum element or (element-based computation).
    // Can't optimize arrays of integers longer than 65,535 elements.
    // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
    _.max = function (obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.max.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return -Infinity;
        var result = {computed: -Infinity, value: -Infinity};
        each(obj, function (value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed > result.computed && (result = {value: value, computed: computed});
        });
        return result.value;
    };

    // Return the minimum element (or element-based computation).
    _.min = function (obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.min.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return Infinity;
        var result = {computed: Infinity, value: Infinity};
        each(obj, function (value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed < result.computed && (result = {value: value, computed: computed});
        });
        return result.value;
    };

    // Shuffle an array, using the modern version of the
    // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
    _.shuffle = function (obj) {
        var rand;
        var index = 0;
        var shuffled = [];
        each(obj, function (value) {
            rand = _.random(index++);
            shuffled[index - 1] = shuffled[rand];
            shuffled[rand] = value;
        });
        return shuffled;
    };

    // Sample **n** random values from an array.
    // If **n** is not specified, returns a single random element from the array.
    // The internal `guard` argument allows it to work with `map`.
    _.sample = function (obj, n, guard) {
        if (arguments.length < 2 || guard) {
            return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
    };

    // An internal function to generate lookup iterators.
    var lookupIterator = function (value) {
        return _.isFunction(value) ? value : function (obj) {
            return obj[value];
        };
    };

    // Sort the object's values by a criterion produced by an iterator.
    _.sortBy = function (obj, value, context) {
        var iterator = lookupIterator(value);
        return _.pluck(_.map(obj,function (value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function (left, right) {
                var a = left.criteria;
                var b = right.criteria;
                if (a !== b) {
                    if (a > b || a === void 0) return 1;
                    if (a < b || b === void 0) return -1;
                }
                return left.index - right.index;
            }), 'value');
    };

    // An internal function used for aggregate "group by" operations.
    var group = function (behavior) {
        return function (obj, value, context) {
            var result = {};
            var iterator = value == null ? _.identity : lookupIterator(value);
            each(obj, function (value, index) {
                var key = iterator.call(context, value, index, obj);
                behavior(result, key, value);
            });
            return result;
        };
    };

    // Groups the object's values by a criterion. Pass either a string attribute
    // to group by, or a function that returns the criterion.
    _.groupBy = group(function (result, key, value) {
        (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });

    // Indexes the object's values by a criterion, similar to `groupBy`, but for
    // when you know that your index values will be unique.
    _.indexBy = group(function (result, key, value) {
        result[key] = value;
    });

    // Counts instances of an object that group by a certain criterion. Pass
    // either a string attribute to count by, or a function that returns the
    // criterion.
    _.countBy = group(function (result, key) {
        _.has(result, key) ? result[key]++ : result[key] = 1;
    });

    // Use a comparator function to figure out the smallest index at which
    // an object should be inserted so as to maintain order. Uses binary search.
    _.sortedIndex = function (array, obj, iterator, context) {
        iterator = iterator == null ? _.identity : lookupIterator(iterator);
        var value = iterator.call(context, obj);
        var low = 0, high = array.length;
        while (low < high) {
            var mid = (low + high) >>> 1;
            iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
        }
        return low;
    };

    // Safely create a real, live array from anything iterable.
    _.toArray = function (obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (obj.length === +obj.length) return _.map(obj, _.identity);
        return _.values(obj);
    };

    // Return the number of elements in an object.
    _.size = function (obj) {
        if (obj == null) return 0;
        return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
    };

    // Array Functions
    // ---------------

    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    _.first = _.head = _.take = function (array, n, guard) {
        if (array == null) return void 0;
        return (n == null) || guard ? array[0] : slice.call(array, 0, n);
    };

    // Returns everything but the last entry of the array. Especially useful on
    // the arguments object. Passing **n** will return all the values in
    // the array, excluding the last N. The **guard** check allows it to work with
    // `_.map`.
    _.initial = function (array, n, guard) {
        return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
    };

    // Get the last element of an array. Passing **n** will return the last N
    // values in the array. The **guard** check allows it to work with `_.map`.
    _.last = function (array, n, guard) {
        if (array == null) return void 0;
        if ((n == null) || guard) {
            return array[array.length - 1];
        } else {
            return slice.call(array, Math.max(array.length - n, 0));
        }
    };

    // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
    // Especially useful on the arguments object. Passing an **n** will return
    // the rest N values in the array. The **guard**
    // check allows it to work with `_.map`.
    _.rest = _.tail = _.drop = function (array, n, guard) {
        return slice.call(array, (n == null) || guard ? 1 : n);
    };

    // Trim out all falsy values from an array.
    _.compact = function (array) {
        return _.filter(array, _.identity);
    };

    // Internal implementation of a recursive `flatten` function.
    var flatten = function (input, shallow, output) {
        if (shallow && _.every(input, _.isArray)) {
            return concat.apply(output, input);
        }
        each(input, function (value) {
            if (_.isArray(value) || _.isArguments(value)) {
                shallow ? push.apply(output, value) : flatten(value, shallow, output);
            } else {
                output.push(value);
            }
        });
        return output;
    };

    // Flatten out an array, either recursively (by default), or just one level.
    _.flatten = function (array, shallow) {
        return flatten(array, shallow, []);
    };

    // Return a version of the array that does not contain the specified value(s).
    _.without = function (array) {
        return _.difference(array, slice.call(arguments, 1));
    };

    // Produce a duplicate-free version of the array. If the array has already
    // been sorted, you have the option of using a faster algorithm.
    // Aliased as `unique`.
    _.uniq = _.unique = function (array, isSorted, iterator, context) {
        if (_.isFunction(isSorted)) {
            context = iterator;
            iterator = isSorted;
            isSorted = false;
        }
        var initial = iterator ? _.map(array, iterator, context) : array;
        var results = [];
        var seen = [];
        each(initial, function (value, index) {
            if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
                seen.push(value);
                results.push(array[index]);
            }
        });
        return results;
    };

    // Produce an array that contains the union: each distinct element from all of
    // the passed-in arrays.
    _.union = function () {
        return _.uniq(_.flatten(arguments, true));
    };

    // Produce an array that contains every item shared between all the
    // passed-in arrays.
    _.intersection = function (array) {
        var rest = slice.call(arguments, 1);
        return _.filter(_.uniq(array), function (item) {
            return _.every(rest, function (other) {
                return _.indexOf(other, item) >= 0;
            });
        });
    };

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function (array) {
        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
        return _.filter(array, function (value) {
            return !_.contains(rest, value);
        });
    };

    // Zip together multiple lists into a single array -- elements that share
    // an index go together.
    _.zip = function () {
        var length = _.max(_.pluck(arguments, "length").concat(0));
        var results = new Array(length);
        for (var i = 0; i < length; i++) {
            results[i] = _.pluck(arguments, '' + i);
        }
        return results;
    };

    // Converts lists into objects. Pass either a single array of `[key, value]`
    // pairs, or two parallel arrays of the same length -- one of keys, and one of
    // the corresponding values.
    _.object = function (list, values) {
        if (list == null) return {};
        var result = {};
        for (var i = 0, length = list.length; i < length; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };

    // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
    // we need this function. Return the position of the first occurrence of an
    // item in an array, or -1 if the item is not included in the array.
    // Delegates to **ECMAScript 5**'s native `indexOf` if available.
    // If the array is large and already in sort order, pass `true`
    // for **isSorted** to use binary search.
    _.indexOf = function (array, item, isSorted) {
        if (array == null) return -1;
        var i = 0, length = array.length;
        if (isSorted) {
            if (typeof isSorted == 'number') {
                i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
            } else {
                i = _.sortedIndex(array, item);
                return array[i] === item ? i : -1;
            }
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
        for (; i < length; i++) if (array[i] === item) return i;
        return -1;
    };

    // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
    _.lastIndexOf = function (array, item, from) {
        if (array == null) return -1;
        var hasIndex = from != null;
        if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
            return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
        }
        var i = (hasIndex ? from : array.length);
        while (i--) if (array[i] === item) return i;
        return -1;
    };

    // Generate an integer Array containing an arithmetic progression. A port of
    // the native Python `range()` function. See
    // [the Python documentation](http://docs.python.org/library/functions.html#range).
    _.range = function (start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var idx = 0;
        var range = new Array(length);

        while (idx < length) {
            range[idx++] = start;
            start += step;
        }

        return range;
    };

    // Function (ahem) Functions
    // ------------------

    // Reusable constructor function for prototype setting.
    var ctor = function () {
    };

    // Create a function bound to a given object (assigning `this`, and arguments,
    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
    // available.
    _.bind = function (func, context) {
        var args, bound;
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError;
        args = slice.call(arguments, 2);
        return bound = function () {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor;
            ctor.prototype = null;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return self;
        };
    };

    // Partially apply a function by creating a version that has had some of its
    // arguments pre-filled, without changing its dynamic `this` context.
    _.partial = function (func) {
        var args = slice.call(arguments, 1);
        return function () {
            return func.apply(this, args.concat(slice.call(arguments)));
        };
    };

    // Bind all of an object's methods to that object. Useful for ensuring that
    // all callbacks defined on an object belong to it.
    _.bindAll = function (obj) {
        var funcs = slice.call(arguments, 1);
        if (funcs.length === 0) throw new Error("bindAll must be passed function names");
        each(funcs, function (f) {
            obj[f] = _.bind(obj[f], obj);
        });
        return obj;
    };

    // Memoize an expensive function by storing its results.
    _.memoize = function (func, hasher) {
        var memo = {};
        hasher || (hasher = _.identity);
        return function () {
            var key = hasher.apply(this, arguments);
            return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
        };
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function (func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function () {
            return func.apply(null, args);
        }, wait);
    };

    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = function (func) {
        return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
    };

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
    _.throttle = function (func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function () {
            previous = options.leading === false ? 0 : new Date;
            timeout = null;
            result = func.apply(context, args);
        };
        return function () {
            var now = new Date;
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function (func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date();
            var later = function () {
                var last = (new Date()) - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) result = func.apply(context, args);
            return result;
        };
    };

    // Returns a function that will be executed at most one time, no matter how
    // often you call it. Useful for lazy initialization.
    _.once = function (func) {
        var ran = false, memo;
        return function () {
            if (ran) return memo;
            ran = true;
            memo = func.apply(this, arguments);
            func = null;
            return memo;
        };
    };

    // Returns the first function passed as an argument to the second,
    // allowing you to adjust arguments, run code before and after, and
    // conditionally execute the original function.
    _.wrap = function (func, wrapper) {
        return function () {
            var args = [func];
            push.apply(args, arguments);
            return wrapper.apply(this, args);
        };
    };

    // Returns a function that is the composition of a list of functions, each
    // consuming the return value of the function that follows.
    _.compose = function () {
        var funcs = arguments;
        return function () {
            var args = arguments;
            for (var i = funcs.length - 1; i >= 0; i--) {
                args = [funcs[i].apply(this, args)];
            }
            return args[0];
        };
    };

    // Returns a function that will only be executed after being called N times.
    _.after = function (times, func) {
        return function () {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    // Object Functions
    // ----------------

    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = nativeKeys || function (obj) {
        if (obj !== Object(obj)) throw new TypeError('Invalid object');
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        return keys;
    };

    // Retrieve the values of an object's properties.
    _.values = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = new Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };

    // Convert an object into a list of `[key, value]` pairs.
    _.pairs = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = new Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    };

    // Invert the keys and values of an object. The values must be serializable.
    _.invert = function (obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };

    // Return a sorted list of the function names available on the object.
    // Aliased as `methods`
    _.functions = _.methods = function (obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };

    // Extend a given object with all the properties in passed-in object(s).
    _.extend = function (obj) {
        each(slice.call(arguments, 1), function (source) {
            if (source) {
                for (var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    // Return a copy of the object only containing the whitelisted properties.
    _.pick = function (obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        each(keys, function (key) {
            if (key in obj) copy[key] = obj[key];
        });
        return copy;
    };

    // Return a copy of the object without the blacklisted properties.
    _.omit = function (obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        for (var key in obj) {
            if (!_.contains(keys, key)) copy[key] = obj[key];
        }
        return copy;
    };

    // Fill in a given object with default properties.
    _.defaults = function (obj) {
        each(slice.call(arguments, 1), function (source) {
            if (source) {
                for (var prop in source) {
                    if (obj[prop] === void 0) obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    // Create a (shallow-cloned) duplicate of an object.
    _.clone = function (obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };

    // Invokes interceptor with the obj, and then returns obj.
    // The primary purpose of this method is to "tap into" a method chain, in
    // order to perform operations on intermediate results within the chain.
    _.tap = function (obj, interceptor) {
        interceptor(obj);
        return obj;
    };

    // Internal recursive comparison function for `isEqual`.
    var eq = function (a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Unwrap any wrapped objects.
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className != toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, dates, and booleans are compared by value.
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return a == String(b);
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
                // other numeric values.
                return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a == +b;
            // RegExps are compared by their source patterns and flags.
            case '[object RegExp]':
                return a.source == b.source &&
                    a.global == b.global &&
                    a.multiline == b.multiline &&
                    a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != 'object' || typeof b != 'object') return false;
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
        var length = aStack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (aStack[length] == a) return bStack[length] == b;
        }
        // Objects with different constructors are not equivalent, but `Object`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
            _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
            return false;
        }
        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);
        var size = 0, result = true;
        // Recursively compare objects and arrays.
        if (className == '[object Array]') {
            // Compare array lengths to determine if a deep comparison is necessary.
            size = a.length;
            result = size == b.length;
            if (result) {
                // Deep compare the contents, ignoring non-numeric properties.
                while (size--) {
                    if (!(result = eq(a[size], b[size], aStack, bStack))) break;
                }
            }
        } else {
            // Deep compare objects.
            for (var key in a) {
                if (_.has(a, key)) {
                    // Count the expected number of properties.
                    size++;
                    // Deep compare each member.
                    if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
                }
            }
            // Ensure that both objects contain the same number of properties.
            if (result) {
                for (key in b) {
                    if (_.has(b, key) && !(size--)) break;
                }
                result = !size;
            }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return result;
    };

    // Perform a deep comparison to check if two objects are equal.
    _.isEqual = function (a, b) {
        return eq(a, b, [], []);
    };

    // Is a given array, string, or object empty?
    // An "empty" object has no enumerable own-properties.
    _.isEmpty = function (obj) {
        if (obj == null) return true;
        if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
        for (var key in obj) if (_.has(obj, key)) return false;
        return true;
    };

    // Is a given value a DOM element?
    _.isElement = function (obj) {
        return !!(obj && obj.nodeType === 1);
    };

    // Is a given value an array?
    // Delegates to ECMA5's native Array.isArray
    _.isArray = nativeIsArray || function (obj) {
        return toString.call(obj) == '[object Array]';
    };

    // Is a given variable an object?
    _.isObject = function (obj) {
        return obj === Object(obj);
    };

    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
    each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (name) {
        _['is' + name] = function (obj) {
            return toString.call(obj) == '[object ' + name + ']';
        };
    });

    // Define a fallback version of the method in browsers (ahem, IE), where
    // there isn't any inspectable "Arguments" type.
    if (!_.isArguments(arguments)) {
        _.isArguments = function (obj) {
            return !!(obj && _.has(obj, 'callee'));
        };
    }

    // Optimize `isFunction` if appropriate.
    if (typeof (/./) !== 'function') {
        _.isFunction = function (obj) {
            return typeof obj === 'function';
        };
    }

    // Is a given object a finite number?
    _.isFinite = function (obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };

    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
    _.isNaN = function (obj) {
        return _.isNumber(obj) && obj != +obj;
    };

    // Is a given value a boolean?
    _.isBoolean = function (obj) {
        return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
    };

    // Is a given value equal to null?
    _.isNull = function (obj) {
        return obj === null;
    };

    // Is a given variable undefined?
    _.isUndefined = function (obj) {
        return obj === void 0;
    };

    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function (obj, key) {
        return hasOwnProperty.call(obj, key);
    };

    // Utility Functions
    // -----------------

    // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
    // previous owner. Returns a reference to the Underscore object.
    _.noConflict = function () {
        root._ = previousUnderscore;
        return this;
    };

    // Keep the identity function around for default iterators.
    _.identity = function (value) {
        return value;
    };

    // Run a function **n** times.
    _.times = function (n, iterator, context) {
        var accum = Array(Math.max(0, n));
        for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
        return accum;
    };

    // Return a random integer between min and max (inclusive).
    _.random = function (min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    // List of HTML entities for escaping.
    var entityMap = {
        escape: {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        }
    };
    entityMap.unescape = _.invert(entityMap.escape);

    // Regexes containing the keys and values listed immediately above.
    var entityRegexes = {
        escape: new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
        unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
    };

    // Functions for escaping and unescaping strings to/from HTML interpolation.
    _.each(['escape', 'unescape'], function (method) {
        _[method] = function (string) {
            if (string == null) return '';
            return ('' + string).replace(entityRegexes[method], function (match) {
                return entityMap[method][match];
            });
        };
    });

    // If the value of the named `property` is a function then invoke it with the
    // `object` as context; otherwise, return it.
    _.result = function (object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    };

    // Add your own custom functions to the Underscore object.
    _.mixin = function (obj) {
        each(_.functions(obj), function (name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function () {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return result.call(this, func.apply(_, args));
            };
        });
    };

    // Generate a unique integer id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    _.uniqueId = function (prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
    };

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\t': 't',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    _.template = function (text, data, settings) {
        var render;
        settings = _.defaults({}, settings, _.templateSettings);

        // Combine delimiters into one regular expression via alternation.
        var matcher = new RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g');

        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset)
                .replace(escaper, function (match) {
                    return '\\' + escapes[match];
                });

            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            }
            if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            }
            if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }
            index = offset + match.length;
            return match;
        });
        source += "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source = "var __t,__p='',__j=Array.prototype.join," +
            "print=function(){__p+=__j.call(arguments,'');};\n" +
            source + "return __p;\n";

        try {
            render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }

        if (data) return render(data, _);
        var template = function (data) {
            return render.call(this, data, _);
        };

        // Provide the compiled function source as a convenience for precompilation.
        template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

        return template;
    };

    // Add a "chain" function, which will delegate to the wrapper.
    _.chain = function (obj) {
        return _(obj).chain();
    };

    // OOP
    // ---------------
    // If Underscore is called as a function, it returns a wrapped object that
    // can be used OO-style. This wrapper holds altered versions of all the
    // underscore functions. Wrapped objects may be chained.

    // Helper function to continue chaining intermediate results.
    var result = function (obj) {
        return this._chain ? _(obj).chain() : obj;
    };

    // Add all of the Underscore functions to the wrapper object.
    _.mixin(_);

    // Add all mutator Array functions to the wrapper.
    each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
        var method = ArrayProto[name];
        _.prototype[name] = function () {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
            return result.call(this, obj);
        };
    });

    // Add all accessor Array functions to the wrapper.
    each(['concat', 'join', 'slice'], function (name) {
        var method = ArrayProto[name];
        _.prototype[name] = function () {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    });

    _.extend(_.prototype, {

        // Start chaining a wrapped Underscore object.
        chain: function () {
            this._chain = true;
            return this;
        },

        // Extracts the result from a wrapped and chained object.
        value: function () {
            return this._wrapped;
        }

    });

}).call(this);

//     Backbone.js 1.1.0

//     (c) 2010-2011 Jeremy Ashkenas, DocumentCloud Inc.
//     (c) 2011-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function () {

    // Initial Setup
    // -------------

    // Save a reference to the global object (`window` in the browser, `exports`
    // on the server).
    var root = this;

    // Save the previous value of the `Backbone` variable, so that it can be
    // restored later on, if `noConflict` is used.
    var previousBackbone = root.Backbone;

    // Create local references to array methods we'll want to use later.
    var array = [];
    var push = array.push;
    var slice = array.slice;
    var splice = array.splice;

    // The top-level namespace. All public Backbone classes and modules will
    // be attached to this. Exported for both the browser and the server.
    var Backbone;
    if (typeof exports !== 'undefined') {
        Backbone = exports;
    } else {
        Backbone = root.Backbone = {};
    }

    // Current version of the library. Keep in sync with `package.json`.
    Backbone.VERSION = '1.1.0';

    // Require Underscore, if we're on the server, and it's not already present.
    var _ = root._;
    if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

    // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
    // the `$` variable.
    Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;

    // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
    // to its previous owner. Returns a reference to this Backbone object.
    Backbone.noConflict = function () {
        root.Backbone = previousBackbone;
        return this;
    };

    // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
    // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
    // set a `X-Http-Method-Override` header.
    Backbone.emulateHTTP = false;

    // Turn on `emulateJSON` to support legacy servers that can't deal with direct
    // `application/json` requests ... will encode the body as
    // `application/x-www-form-urlencoded` instead and will send the model in a
    // form param named `model`.
    Backbone.emulateJSON = false;

    // Backbone.Events
    // ---------------

    // A module that can be mixed in to *any object* in order to provide it with
    // custom events. You may bind with `on` or remove with `off` callback
    // functions to an event; `trigger`-ing an event fires all callbacks in
    // succession.
    //
    //     var object = {};
    //     _.extend(object, Backbone.Events);
    //     object.on('expand', function(){ alert('expanded'); });
    //     object.trigger('expand');
    //
    var Events = Backbone.Events = {

        // Bind an event to a `callback` function. Passing `"all"` will bind
        // the callback to all events fired.
        on: function (name, callback, context) {
            if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
            this._events || (this._events = {});
            var events = this._events[name] || (this._events[name] = []);
            events.push({callback: callback, context: context, ctx: context || this});
            return this;
        },

        // Bind an event to only be triggered a single time. After the first time
        // the callback is invoked, it will be removed.
        once: function (name, callback, context) {
            if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
            var self = this;
            var once = _.once(function () {
                self.off(name, once);
                callback.apply(this, arguments);
            });
            once._callback = callback;
            return this.on(name, once, context);
        },

        // Remove one or many callbacks. If `context` is null, removes all
        // callbacks with that function. If `callback` is null, removes all
        // callbacks for the event. If `name` is null, removes all bound
        // callbacks for all events.
        off: function (name, callback, context) {
            var retain, ev, events, names, i, l, j, k;
            if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
            if (!name && !callback && !context) {
                this._events = {};
                return this;
            }
            names = name ? [name] : _.keys(this._events);
            for (i = 0, l = names.length; i < l; i++) {
                name = names[i];
                if (events = this._events[name]) {
                    this._events[name] = retain = [];
                    if (callback || context) {
                        for (j = 0, k = events.length; j < k; j++) {
                            ev = events[j];
                            if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                                (context && context !== ev.context)) {
                                retain.push(ev);
                            }
                        }
                    }
                    if (!retain.length) delete this._events[name];
                }
            }

            return this;
        },

        // Trigger one or many events, firing all bound callbacks. Callbacks are
        // passed the same arguments as `trigger` is, apart from the event name
        // (unless you're listening on `"all"`, which will cause your callback to
        // receive the true name of the event as the first argument).
        trigger: function (name) {
            if (!this._events) return this;
            var args = slice.call(arguments, 1);
            if (!eventsApi(this, 'trigger', name, args)) return this;
            var events = this._events[name];
            var allEvents = this._events.all;
            if (events) triggerEvents(events, args);
            if (allEvents) triggerEvents(allEvents, arguments);
            return this;
        },

        // Tell this object to stop listening to either specific events ... or
        // to every object it's currently listening to.
        stopListening: function (obj, name, callback) {
            var listeningTo = this._listeningTo;
            if (!listeningTo) return this;
            var remove = !name && !callback;
            if (!callback && typeof name === 'object') callback = this;
            if (obj) (listeningTo = {})[obj._listenId] = obj;
            for (var id in listeningTo) {
                obj = listeningTo[id];
                obj.off(name, callback, this);
                if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
            }
            return this;
        }

    };

    // Regular expression used to split event strings.
    var eventSplitter = /\s+/;

    // Implement fancy features of the Events API such as multiple event
    // names `"change blur"` and jQuery-style event maps `{change: action}`
    // in terms of the existing API.
    var eventsApi = function (obj, action, name, rest) {
        if (!name) return true;

        // Handle event maps.
        if (typeof name === 'object') {
            for (var key in name) {
                obj[action].apply(obj, [key, name[key]].concat(rest));
            }
            return false;
        }

        // Handle space separated event names.
        if (eventSplitter.test(name)) {
            var names = name.split(eventSplitter);
            for (var i = 0, l = names.length; i < l; i++) {
                obj[action].apply(obj, [names[i]].concat(rest));
            }
            return false;
        }

        return true;
    };

    // A difficult-to-believe, but optimized internal dispatch function for
    // triggering events. Tries to keep the usual cases speedy (most internal
    // Backbone events have 3 arguments).
    var triggerEvents = function (events, args) {
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch (args.length) {
            case 0:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx);
                return;
            case 1:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1);
                return;
            case 2:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2);
                return;
            case 3:
                while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                return;
            default:
                while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
        }
    };

    var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

    // Inversion-of-control versions of `on` and `once`. Tell *this* object to
    // listen to an event in another object ... keeping track of what it's
    // listening to.
    _.each(listenMethods, function (implementation, method) {
        Events[method] = function (obj, name, callback) {
            var listeningTo = this._listeningTo || (this._listeningTo = {});
            var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
            listeningTo[id] = obj;
            if (!callback && typeof name === 'object') callback = this;
            obj[implementation](name, callback, this);
            return this;
        };
    });

    // Aliases for backwards compatibility.
    Events.bind = Events.on;
    Events.unbind = Events.off;

    // Allow the `Backbone` object to serve as a global event bus, for folks who
    // want global "pubsub" in a convenient place.
    _.extend(Backbone, Events);

    // Backbone.Model
    // --------------

    // Backbone **Models** are the basic data object in the framework --
    // frequently representing a row in a table in a database on your server.
    // A discrete chunk of data and a bunch of useful, related methods for
    // performing computations and transformations on that data.

    // Create a new model with the specified attributes. A client id (`cid`)
    // is automatically generated and assigned for you.
    var Model = Backbone.Model = function (attributes, options) {
        var attrs = attributes || {};
        options || (options = {});
        this.cid = _.uniqueId('c');
        this.attributes = {};
        if (options.collection) this.collection = options.collection;
        if (options.parse) attrs = this.parse(attrs, options) || {};
        attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments);
    };

    // Attach all inheritable methods to the Model prototype.
    _.extend(Model.prototype, Events, {

        // A hash of attributes whose current and previous value differ.
        changed: null,

        // The value returned during the last failed validation.
        validationError: null,

        // The default name for the JSON `id` attribute is `"id"`. MongoDB and
        // CouchDB users may want to set this to `"_id"`.
        idAttribute: 'id',

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // Return a copy of the model's `attributes` object.
        toJSON: function (options) {
            return _.clone(this.attributes);
        },

        // Proxy `Backbone.sync` by default -- but override this if you need
        // custom syncing semantics for *this* particular model.
        sync: function () {
            return Backbone.sync.apply(this, arguments);
        },

        // Get the value of an attribute.
        get: function (attr) {
            return this.attributes[attr];
        },

        // Get the HTML-escaped value of an attribute.
        escape: function (attr) {
            return _.escape(this.get(attr));
        },

        // Returns `true` if the attribute contains a value that is not null
        // or undefined.
        has: function (attr) {
            return this.get(attr) != null;
        },

        // Set a hash of model attributes on the object, firing `"change"`. This is
        // the core primitive operation of a model, updating the data and notifying
        // anyone who needs to know about the change in state. The heart of the beast.
        set: function (key, val, options) {
            var attr, attrs, unset, changes, silent, changing, prev, current;
            if (key == null) return this;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options || (options = {});

            // Run validation.
            if (!this._validate(attrs, options)) return false;

            // Extract attributes and options.
            unset = options.unset;
            silent = options.silent;
            changes = [];
            changing = this._changing;
            this._changing = true;

            if (!changing) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {};
            }
            current = this.attributes, prev = this._previousAttributes;

            // Check for changes of `id`.
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

            // For each `set` attribute, update or delete the current value.
            for (attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(current[attr], val)) changes.push(attr);
                if (!_.isEqual(prev[attr], val)) {
                    this.changed[attr] = val;
                } else {
                    delete this.changed[attr];
                }
                unset ? delete current[attr] : current[attr] = val;
            }

            // Trigger all relevant attribute changes.
            if (!silent) {
                if (changes.length) this._pending = true;
                for (var i = 0, l = changes.length; i < l; i++) {
                    this.trigger('change:' + changes[i], this, current[changes[i]], options);
                }
            }

            // You might be wondering why there's a `while` loop here. Changes can
            // be recursively nested within `"change"` events.
            if (changing) return this;
            if (!silent) {
                while (this._pending) {
                    this._pending = false;
                    this.trigger('change', this, options);
                }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },

        // Remove an attribute from the model, firing `"change"`. `unset` is a noop
        // if the attribute doesn't exist.
        unset: function (attr, options) {
            return this.set(attr, void 0, _.extend({}, options, {unset: true}));
        },

        // Clear all attributes on the model, firing `"change"`.
        clear: function (options) {
            var attrs = {};
            for (var key in this.attributes) attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, {unset: true}));
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged: function (attr) {
            if (attr == null) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },

        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes: function (diff) {
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
            var val, changed = false;
            var old = this._changing ? this._previousAttributes : this.attributes;
            for (var attr in diff) {
                if (_.isEqual(old[attr], (val = diff[attr]))) continue;
                (changed || (changed = {}))[attr] = val;
            }
            return changed;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous: function (attr) {
            if (attr == null || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function () {
            return _.clone(this._previousAttributes);
        },

        // Fetch the model from the server. If the server's representation of the
        // model differs from its current attributes, they will be overridden,
        // triggering a `"change"` event.
        fetch: function (options) {
            options = options ? _.clone(options) : {};
            if (options.parse === void 0) options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function (resp) {
                if (!model.set(model.parse(resp, options), options)) return false;
                if (success) success(model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },

        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save: function (key, val, options) {
            var attrs, method, xhr, attributes = this.attributes;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (key == null || typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options = _.extend({validate: true}, options);

            // If we're not waiting and attributes exist, save acts as
            // `set(attr).save(null, opts)` with validation. Otherwise, check if
            // the model will be valid when the attributes, if any, are set.
            if (attrs && !options.wait) {
                if (!this.set(attrs, options)) return false;
            } else {
                if (!this._validate(attrs, options)) return false;
            }

            // Set temporary attributes if `{wait: true}`.
            if (attrs && options.wait) {
                this.attributes = _.extend({}, attributes, attrs);
            }

            // After a successful server-side save, the client is (optionally)
            // updated with the server-side state.
            if (options.parse === void 0) options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function (resp) {
                // Ensure attributes are restored during synchronous saves.
                model.attributes = attributes;
                var serverAttrs = model.parse(resp, options);
                if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
                if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
                    return false;
                }
                if (success) success(model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);

            method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
            if (method === 'patch') options.attrs = attrs;
            xhr = this.sync(method, this, options);

            // Restore attributes.
            if (attrs && options.wait) this.attributes = attributes;

            return xhr;
        },

        // Destroy this model on the server if it was already persisted.
        // Optimistically removes the model from its collection, if it has one.
        // If `wait: true` is passed, waits for the server to respond before removal.
        destroy: function (options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;

            var destroy = function () {
                model.trigger('destroy', model, model.collection, options);
            };

            options.success = function (resp) {
                if (options.wait || model.isNew()) destroy();
                if (success) success(model, resp, options);
                if (!model.isNew()) model.trigger('sync', model, resp, options);
            };

            if (this.isNew()) {
                options.success();
                return false;
            }
            wrapError(this, options);

            var xhr = this.sync('delete', this, options);
            if (!options.wait) destroy();
            return xhr;
        },

        // Default URL for the model's representation on the server -- if you're
        // using Backbone's restful methods, override this to change the endpoint
        // that will be called.
        url: function () {
            var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
        },

        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse: function (resp, options) {
            return resp;
        },

        // Create a new model with identical attributes to this one.
        clone: function () {
            return new this.constructor(this.attributes);
        },

        // A model is new if it has never been saved to the server, and lacks an id.
        isNew: function () {
            return this.id == null;
        },

        // Check if the model is currently in a valid state.
        isValid: function (options) {
            return this._validate({}, _.extend(options || {}, { validate: true }));
        },

        // Run validation against the next complete set of model attributes,
        // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
        _validate: function (attrs, options) {
            if (!options.validate || !this.validate) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if (!error) return true;
            this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
            return false;
        }

    });

    // Underscore methods that we want to implement on the Model.
    var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

    // Mix in each Underscore method as a proxy to `Model#attributes`.
    _.each(modelMethods, function (method) {
        Model.prototype[method] = function () {
            var args = slice.call(arguments);
            args.unshift(this.attributes);
            return _[method].apply(_, args);
        };
    });

    // Backbone.Collection
    // -------------------

    // If models tend to represent a single row of data, a Backbone Collection is
    // more analagous to a table full of data ... or a small slice or page of that
    // table, or a collection of rows that belong together for a particular reason
    // -- all of the messages in this particular folder, all of the documents
    // belonging to this particular author, and so on. Collections maintain
    // indexes of their models, both in order, and for lookup by `id`.

    // Create a new **Collection**, perhaps to contain a specific type of `model`.
    // If a `comparator` is specified, the Collection will maintain
    // its models in sort order, as they're added and removed.
    var Collection = Backbone.Collection = function (models, options) {
        options || (options = {});
        if (options.model) this.model = options.model;
        if (options.comparator !== void 0) this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (models) this.reset(models, _.extend({silent: true}, options));
    };

    // Default options for `Collection#set`.
    var setOptions = {add: true, remove: true, merge: true};
    var addOptions = {add: true, remove: false};

    // Define the Collection's inheritable methods.
    _.extend(Collection.prototype, Events, {

        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        model: Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON: function (options) {
            return this.map(function (model) {
                return model.toJSON(options);
            });
        },

        // Proxy `Backbone.sync` by default.
        sync: function () {
            return Backbone.sync.apply(this, arguments);
        },

        // Add a model, or list of models to the set.
        add: function (models, options) {
            return this.set(models, _.extend({merge: false}, options, addOptions));
        },

        // Remove a model, or a list of models from the set.
        remove: function (models, options) {
            var singular = !_.isArray(models);
            models = singular ? [models] : _.clone(models);
            options || (options = {});
            var i, l, index, model;
            for (i = 0, l = models.length; i < l; i++) {
                model = models[i] = this.get(models[i]);
                if (!model) continue;
                delete this._byId[model.id];
                delete this._byId[model.cid];
                index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                if (!options.silent) {
                    options.index = index;
                    model.trigger('remove', model, this, options);
                }
                this._removeReference(model);
            }
            return singular ? models[0] : models;
        },

        // Update a collection by `set`-ing a new list of models, adding new ones,
        // removing models that are no longer present, and merging models that
        // already exist in the collection, as necessary. Similar to **Model#set**,
        // the core operation for updating the data contained by the collection.
        set: function (models, options) {
            options = _.defaults({}, options, setOptions);
            if (options.parse) models = this.parse(models, options);
            var singular = !_.isArray(models);
            models = singular ? (models ? [models] : []) : _.clone(models);
            var i, l, id, model, attrs, existing, sort;
            var at = options.at;
            var targetModel = this.model;
            var sortable = this.comparator && (at == null) && options.sort !== false;
            var sortAttr = _.isString(this.comparator) ? this.comparator : null;
            var toAdd = [], toRemove = [], modelMap = {};
            var add = options.add, merge = options.merge, remove = options.remove;
            var order = !sortable && add && remove ? [] : false;

            // Turn bare objects into model references, and prevent invalid models
            // from being added.
            for (i = 0, l = models.length; i < l; i++) {
                attrs = models[i];
                if (attrs instanceof Model) {
                    id = model = attrs;
                } else {
                    id = attrs[targetModel.prototype.idAttribute];
                }

                // If a duplicate is found, prevent it from being added and
                // optionally merge it into the existing model.
                if (existing = this.get(id)) {
                    if (remove) modelMap[existing.cid] = true;
                    if (merge) {
                        attrs = attrs === model ? model.attributes : attrs;
                        if (options.parse) attrs = existing.parse(attrs, options);
                        existing.set(attrs, options);
                        if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
                    }
                    models[i] = existing;

                    // If this is a new, valid model, push it to the `toAdd` list.
                } else if (add) {
                    model = models[i] = this._prepareModel(attrs, options);
                    if (!model) continue;
                    toAdd.push(model);

                    // Listen to added models' events, and index models for lookup by
                    // `id` and by `cid`.
                    model.on('all', this._onModelEvent, this);
                    this._byId[model.cid] = model;
                    if (model.id != null) this._byId[model.id] = model;
                }
                if (order) order.push(existing || model);
            }

            // Remove nonexistent models if appropriate.
            if (remove) {
                for (i = 0, l = this.length; i < l; ++i) {
                    if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
                }
                if (toRemove.length) this.remove(toRemove, options);
            }

            // See if sorting is needed, update `length` and splice in new models.
            if (toAdd.length || (order && order.length)) {
                if (sortable) sort = true;
                this.length += toAdd.length;
                if (at != null) {
                    for (i = 0, l = toAdd.length; i < l; i++) {
                        this.models.splice(at + i, 0, toAdd[i]);
                    }
                } else {
                    if (order) this.models.length = 0;
                    var orderedModels = order || toAdd;
                    for (i = 0, l = orderedModels.length; i < l; i++) {
                        this.models.push(orderedModels[i]);
                    }
                }
            }

            // Silently sort the collection if appropriate.
            if (sort) this.sort({silent: true});

            // Unless silenced, it's time to fire all appropriate add/sort events.
            if (!options.silent) {
                for (i = 0, l = toAdd.length; i < l; i++) {
                    (model = toAdd[i]).trigger('add', model, this, options);
                }
                if (sort || (order && order.length)) this.trigger('sort', this, options);
            }

            // Return the added (or merged) model (or models).
            return singular ? models[0] : models;
        },

        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any granular `add` or `remove` events. Fires `reset` when finished.
        // Useful for bulk operations and optimizations.
        reset: function (models, options) {
            options || (options = {});
            for (var i = 0, l = this.models.length; i < l; i++) {
                this._removeReference(this.models[i]);
            }
            options.previousModels = this.models;
            this._reset();
            models = this.add(models, _.extend({silent: true}, options));
            if (!options.silent) this.trigger('reset', this, options);
            return models;
        },

        // Add a model to the end of the collection.
        push: function (model, options) {
            return this.add(model, _.extend({at: this.length}, options));
        },

        // Remove a model from the end of the collection.
        pop: function (options) {
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model;
        },

        // Add a model to the beginning of the collection.
        unshift: function (model, options) {
            return this.add(model, _.extend({at: 0}, options));
        },

        // Remove a model from the beginning of the collection.
        shift: function (options) {
            var model = this.at(0);
            this.remove(model, options);
            return model;
        },

        // Slice out a sub-array of models from the collection.
        slice: function () {
            return slice.apply(this.models, arguments);
        },

        // Get a model from the set by id.
        get: function (obj) {
            if (obj == null) return void 0;
            return this._byId[obj.id] || this._byId[obj.cid] || this._byId[obj];
        },

        // Get the model at the given index.
        at: function (index) {
            return this.models[index];
        },

        // Return models with matching attributes. Useful for simple cases of
        // `filter`.
        where: function (attrs, first) {
            if (_.isEmpty(attrs)) return first ? void 0 : [];
            return this[first ? 'find' : 'filter'](function (model) {
                for (var key in attrs) {
                    if (attrs[key] !== model.get(key)) return false;
                }
                return true;
            });
        },

        // Return the first model with matching attributes. Useful for simple cases
        // of `find`.
        findWhere: function (attrs) {
            return this.where(attrs, true);
        },

        // Force the collection to re-sort itself. You don't need to call this under
        // normal circumstances, as the set will maintain sort order as each item
        // is added.
        sort: function (options) {
            if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
            options || (options = {});

            // Run sort based on type of `comparator`.
            if (_.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this);
            } else {
                this.models.sort(_.bind(this.comparator, this));
            }

            if (!options.silent) this.trigger('sort', this, options);
            return this;
        },

        // Pluck an attribute from each model in the collection.
        pluck: function (attr) {
            return _.invoke(this.models, 'get', attr);
        },

        // Fetch the default set of models for this collection, resetting the
        // collection when they arrive. If `reset: true` is passed, the response
        // data will be passed through the `reset` method instead of `set`.
        fetch: function (options) {
            options = options ? _.clone(options) : {};
            if (options.parse === void 0) options.parse = true;
            var success = options.success;
            var collection = this;
            options.success = function (resp) {
                var method = options.reset ? 'reset' : 'set';
                collection[method](resp, options);
                if (success) success(collection, resp, options);
                collection.trigger('sync', collection, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },

        // Create a new instance of a model in this collection. Add the model to the
        // collection immediately, unless `wait: true` is passed, in which case we
        // wait for the server to agree.
        create: function (model, options) {
            options = options ? _.clone(options) : {};
            if (!(model = this._prepareModel(model, options))) return false;
            if (!options.wait) this.add(model, options);
            var collection = this;
            var success = options.success;
            options.success = function (model, resp, options) {
                if (options.wait) collection.add(model, options);
                if (success) success(model, resp, options);
            };
            model.save(null, options);
            return model;
        },

        // **parse** converts a response into a list of models to be added to the
        // collection. The default implementation is just to pass it through.
        parse: function (resp, options) {
            return resp;
        },

        // Create a new collection with an identical list of models as this one.
        clone: function () {
            return new this.constructor(this.models);
        },

        // Private method to reset all internal state. Called when the collection
        // is first initialized or reset.
        _reset: function () {
            this.length = 0;
            this.models = [];
            this._byId = {};
        },

        // Prepare a hash of attributes (or other model) to be added to this
        // collection.
        _prepareModel: function (attrs, options) {
            if (attrs instanceof Model) {
                if (!attrs.collection) attrs.collection = this;
                return attrs;
            }
            options = options ? _.clone(options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model.validationError) return model;
            this.trigger('invalid', this, model.validationError, options);
            return false;
        },

        // Internal method to sever a model's ties to a collection.
        _removeReference: function (model) {
            if (this === model.collection) delete model.collection;
            model.off('all', this._onModelEvent, this);
        },

        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent: function (event, model, collection, options) {
            if ((event === 'add' || event === 'remove') && collection !== this) return;
            if (event === 'destroy') this.remove(model, options);
            if (model && event === 'change:' + model.idAttribute) {
                delete this._byId[model.previous(model.idAttribute)];
                if (model.id != null) this._byId[model.id] = model;
            }
            this.trigger.apply(this, arguments);
        }

    });

    // Underscore methods that we want to implement on the Collection.
    // 90% of the core usefulness of Backbone Collections is actually implemented
    // right here:
    var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
        'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
        'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
        'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
        'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
        'lastIndexOf', 'isEmpty', 'chain'];

    // Mix in each Underscore method as a proxy to `Collection#models`.
    _.each(methods, function (method) {
        Collection.prototype[method] = function () {
            var args = slice.call(arguments);
            args.unshift(this.models);
            return _[method].apply(_, args);
        };
    });

    // Underscore methods that take a property name as an argument.
    var attributeMethods = ['groupBy', 'countBy', 'sortBy'];

    // Use attributes instead of properties.
    _.each(attributeMethods, function (method) {
        Collection.prototype[method] = function (value, context) {
            var iterator = _.isFunction(value) ? value : function (model) {
                return model.get(value);
            };
            return _[method](this.models, iterator, context);
        };
    });

    // Backbone.View
    // -------------

    // Backbone Views are almost more convention than they are actual code. A View
    // is simply a JavaScript object that represents a logical chunk of UI in the
    // DOM. This might be a single item, an entire list, a sidebar or panel, or
    // even the surrounding frame which wraps your whole app. Defining a chunk of
    // UI as a **View** allows you to define your DOM events declaratively, without
    // having to worry about render order ... and makes it easy for the view to
    // react to specific changes in the state of your models.

    // Creating a Backbone.View creates its initial element outside of the DOM,
    // if an existing element is not provided...
    var View = Backbone.View = function (options) {
        this.cid = _.uniqueId('view');
        options || (options = {});
        _.extend(this, _.pick(options, viewOptions));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };

    // Cached regex to split keys for `delegate`.
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    // List of view options to be merged as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

    // Set up all inheritable **Backbone.View** properties and methods.
    _.extend(View.prototype, Events, {

        // The default `tagName` of a View's element is `"div"`.
        tagName: 'div',

        // jQuery delegate for element lookup, scoped to DOM elements within the
        // current view. This should be preferred to global lookups where possible.
        $: function (selector) {
            return this.$el.find(selector);
        },

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // **render** is the core function that your view should override, in order
        // to populate its element (`this.el`), with the appropriate HTML. The
        // convention is for **render** to always return `this`.
        render: function () {
            return this;
        },

        // Remove this view by taking the element out of the DOM, and removing any
        // applicable Backbone.Events listeners.
        remove: function () {
            this.$el.remove();
            this.stopListening();
            return this;
        },

        // Change the view's element (`this.el` property), including event
        // re-delegation.
        setElement: function (element, delegate) {
            if (this.$el) this.undelegateEvents();
            this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
            this.el = this.$el[0];
            if (delegate !== false) this.delegateEvents();
            return this;
        },

        // Set callbacks, where `this.events` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //       'mousedown .title':  'edit',
        //       'click .button':     'save',
        //       'click .open':       function(e) { ... }
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.el`.
        // This only works for delegate-able events: not `focus`, `blur`, and
        // not `change`, `submit`, and `reset` in Internet Explorer.
        delegateEvents: function (events) {
            if (!(events || (events = _.result(this, 'events')))) return this;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[events[key]];
                if (!method) continue;

                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];
                method = _.bind(method, this);
                eventName += '.delegateEvents' + this.cid;
                if (selector === '') {
                    this.$el.on(eventName, method);
                } else {
                    this.$el.on(eventName, selector, method);
                }
            }
            return this;
        },

        // Clears all callbacks previously bound to the view with `delegateEvents`.
        // You usually don't need to use this, but may wish to if you have multiple
        // Backbone views attached to the same DOM element.
        undelegateEvents: function () {
            this.$el.off('.delegateEvents' + this.cid);
            return this;
        },

        // Ensure that the View has a DOM element to render into.
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        _ensureElement: function () {
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, 'attributes'));
                if (this.id) attrs.id = _.result(this, 'id');
                if (this.className) attrs['class'] = _.result(this, 'className');
                var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
                this.setElement($el, false);
            } else {
                this.setElement(_.result(this, 'el'), false);
            }
        }

    });

    // Backbone.sync
    // -------------

    // Override this function to change the manner in which Backbone persists
    // models to the server. You will be passed the type of request, and the
    // model in question. By default, makes a RESTful Ajax request
    // to the model's `url()`. Some possible customizations could be:
    //
    // * Use `setTimeout` to batch rapid-fire updates into a single request.
    // * Send up the models as XML instead of JSON.
    // * Persist models via WebSockets instead of Ajax.
    //
    // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
    // as `POST`, with a `_method` parameter containing the true HTTP method,
    // as well as all requests with the body as `application/x-www-form-urlencoded`
    // instead of `application/json` with the model in a param named `model`.
    // Useful when interfacing with server-side languages like **PHP** that make
    // it difficult to read the body of `PUT` requests.
    Backbone.sync = function (method, model, options) {
        var type = methodMap[method];

        // Default options, unless specified.
        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });

        // Default JSON-request options.
        var params = {type: type, dataType: 'json'};

        // Ensure that we have a URL.
        if (!options.url) {
            params.url = _.result(model, 'url') || urlError();
        }

        // Ensure that we have the appropriate request data.
        if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
            params.contentType = 'application/json';
            params.data = JSON.stringify(options.attrs || model.toJSON(options));
        }

        // For older servers, emulate JSON by encoding the request into an HTML-form.
        if (options.emulateJSON) {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = params.data ? {model: params.data} : {};
        }

        // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
        // And an `X-HTTP-Method-Override` header.
        if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
            params.type = 'POST';
            if (options.emulateJSON) params.data._method = type;
            var beforeSend = options.beforeSend;
            options.beforeSend = function (xhr) {
                xhr.setRequestHeader('X-HTTP-Method-Override', type);
                if (beforeSend) return beforeSend.apply(this, arguments);
            };
        }

        // Don't process data on a non-GET request.
        if (params.type !== 'GET' && !options.emulateJSON) {
            params.processData = false;
        }

        // If we're sending a `PATCH` request, and we're in an old Internet Explorer
        // that still has ActiveX enabled by default, override jQuery to use that
        // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
        if (params.type === 'PATCH' && noXhrPatch) {
            params.xhr = function () {
                return new ActiveXObject("Microsoft.XMLHTTP");
            };
        }

        // Make the request, allowing the user to override any Ajax options.
        var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger('request', model, xhr, options);
        return xhr;
    };

    var noXhrPatch = typeof window !== 'undefined' && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

    // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
    var methodMap = {
        'create': 'POST',
        'update': 'PUT',
        'patch': 'PATCH',
        'delete': 'DELETE',
        'read': 'GET'
    };

    // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
    // Override this if you'd like to use a different library.
    Backbone.ajax = function () {
        return Backbone.$.ajax.apply(Backbone.$, arguments);
    };

    // Backbone.Router
    // ---------------

    // Routers map faux-URLs to actions, and fire events when routes are
    // matched. Creating a new one sets its `routes` hash, if not set statically.
    var Router = Backbone.Router = function (options) {
        options || (options = {});
        if (options.routes) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };

    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

    // Set up all inheritable **Backbone.Router** properties and methods.
    _.extend(Router.prototype, Events, {

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function () {
        },

        // Manually bind a single named route to a callback. For example:
        //
        //     this.route('search/:query/p:num', 'search', function(query, num) {
        //       ...
        //     });
        //
        route: function (route, name, callback) {
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            if (_.isFunction(name)) {
                callback = name;
                name = '';
            }
            if (!callback) callback = this[name];
            var router = this;
            Backbone.history.route(route, function (fragment) {
                var args = router._extractParameters(route, fragment);
                callback && callback.apply(router, args);
                router.trigger.apply(router, ['route:' + name].concat(args));
                router.trigger('route', name, args);
                Backbone.history.trigger('route', router, name, args);
            });
            return this;
        },

        // Simple proxy to `Backbone.history` to save a fragment into the history.
        navigate: function (fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this;
        },

        // Bind all defined routes to `Backbone.history`. We have to reverse the
        // order of the routes here to support behavior where the most general
        // routes can be defined at the bottom of the route map.
        _bindRoutes: function () {
            if (!this.routes) return;
            this.routes = _.result(this, 'routes');
            var route, routes = _.keys(this.routes);
            while ((route = routes.pop()) != null) {
                this.route(route, this.routes[route]);
            }
        },

        // Convert a route string into a regular expression, suitable for matching
        // against the current location hash.
        _routeToRegExp: function (route) {
            route = route.replace(escapeRegExp, '\\$&')
                .replace(optionalParam, '(?:$1)?')
                .replace(namedParam, function (match, optional) {
                    return optional ? match : '([^\/]+)';
                })
                .replace(splatParam, '(.*?)');
            return new RegExp('^' + route + '$');
        },

        // Given a route, and a URL fragment that it matches, return the array of
        // extracted decoded parameters. Empty or unmatched parameters will be
        // treated as `null` to normalize cross-browser behavior.
        _extractParameters: function (route, fragment) {
            var params = route.exec(fragment).slice(1);
            return _.map(params, function (param) {
                return param ? decodeURIComponent(param) : null;
            });
        }

    });

    // Backbone.History
    // ----------------

    // Handles cross-browser history management, based on either
    // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
    // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
    // and URL fragments. If the browser supports neither (old IE, natch),
    // falls back to polling.
    var History = Backbone.History = function () {
        this.handlers = [];
        _.bindAll(this, 'checkUrl');

        // Ensure that `History` can be used outside of the browser.
        if (typeof window !== 'undefined') {
            this.location = window.location;
            this.history = window.history;
        }
    };

    // Cached regex for stripping a leading hash/slash and trailing space.
    var routeStripper = /^[#\/]|\s+$/g;

    // Cached regex for stripping leading and trailing slashes.
    var rootStripper = /^\/+|\/+$/g;

    // Cached regex for detecting MSIE.
    var isExplorer = /msie [\w.]+/;

    // Cached regex for removing a trailing slash.
    var trailingSlash = /\/$/;

    // Cached regex for stripping urls of hash and query.
    var pathStripper = /[?#].*$/;

    // Has the history handling already been started?
    History.started = false;

    // Set up all inheritable **Backbone.History** properties and methods.
    _.extend(History.prototype, Events, {

        // The default interval to poll for hash changes, if necessary, is
        // twenty times a second.
        interval: 50,

        // Gets the true hash value. Cannot use location.hash directly due to bug
        // in Firefox where location.hash will always be decoded.
        getHash: function (window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : '';
        },

        // Get the cross-browser normalized URL fragment, either from the URL,
        // the hash, or the override.
        getFragment: function (fragment, forcePushState) {
            if (fragment == null) {
                if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                    fragment = this.location.pathname;
                    var root = this.root.replace(trailingSlash, '');
                    if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
                } else {
                    fragment = this.getHash();
                }
            }
            return fragment.replace(routeStripper, '');
        },

        // Start the hash change handling, returning `true` if the current URL matches
        // an existing route, and `false` otherwise.
        start: function (options) {
            if (History.started) throw new Error("Backbone.history has already been started");
            History.started = true;

            // Figure out the initial configuration. Do we need an iframe?
            // Is pushState desired ... is it available?
            this.options = _.extend({root: '/'}, this.options, options);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var fragment = this.getFragment();
            var docMode = document.documentMode;
            var oldIE = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

            // Normalize root to always include a leading and trailing slash.
            this.root = ('/' + this.root + '/').replace(rootStripper, '/');

            if (oldIE && this._wantsHashChange) {
                this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
                this.navigate(fragment);
            }

            // Depending on whether we're using pushState or hashes, and whether
            // 'onhashchange' is supported, determine how we check the URL state.
            if (this._hasPushState) {
                Backbone.$(window).on('popstate', this.checkUrl);
            } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
                Backbone.$(window).on('hashchange', this.checkUrl);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }

            // Determine if we need to change the base url, for a pushState link
            // opened by a non-pushState browser.
            this.fragment = fragment;
            var loc = this.location;
            var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

            // Transition from hashChange to pushState or vice versa if both are
            // requested.
            if (this._wantsHashChange && this._wantsPushState) {

                // If we've started off with a route from a `pushState`-enabled
                // browser, but we're currently in a browser that doesn't support it...
                if (!this._hasPushState && !atRoot) {
                    this.fragment = this.getFragment(null, true);
                    this.location.replace(this.root + this.location.search + '#' + this.fragment);
                    // Return immediately as browser will do redirect to new url
                    return true;

                    // Or if we've started out with a hash-based route, but we're currently
                    // in a browser where it could be `pushState`-based instead...
                } else if (this._hasPushState && atRoot && loc.hash) {
                    this.fragment = this.getHash().replace(routeStripper, '');
                    this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
                }

            }

            if (!this.options.silent) return this.loadUrl();
        },

        // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
        // but possibly useful for unit testing Routers.
        stop: function () {
            Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
            clearInterval(this._checkUrlInterval);
            History.started = false;
        },

        // Add a route to be tested when the fragment changes. Routes added later
        // may override previous routes.
        route: function (route, callback) {
            this.handlers.unshift({route: route, callback: callback});
        },

        // Checks the current URL to see if it has changed, and if it has,
        // calls `loadUrl`, normalizing across the hidden iframe.
        checkUrl: function (e) {
            var current = this.getFragment();
            if (current === this.fragment && this.iframe) {
                current = this.getFragment(this.getHash(this.iframe));
            }
            if (current === this.fragment) return false;
            if (this.iframe) this.navigate(current);
            this.loadUrl();
        },

        // Attempt to load the current URL fragment. If a route succeeds with a
        // match, returns `true`. If no defined routes matches the fragment,
        // returns `false`.
        loadUrl: function (fragment) {
            fragment = this.fragment = this.getFragment(fragment);
            return _.any(this.handlers, function (handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
        },

        // Save a fragment into the hash history, or replace the URL state if the
        // 'replace' option is passed. You are responsible for properly URL-encoding
        // the fragment in advance.
        //
        // The options object can contain `trigger: true` if you wish to have the
        // route callback be fired (not usually desirable), or `replace: true`, if
        // you wish to modify the current URL without adding an entry to the history.
        navigate: function (fragment, options) {
            if (!History.started) return false;
            if (!options || options === true) options = {trigger: !!options};

            var url = this.root + (fragment = this.getFragment(fragment || ''));

            // Strip the fragment of the query and hash for matching.
            fragment = fragment.replace(pathStripper, '');

            if (this.fragment === fragment) return;
            this.fragment = fragment;

            // Don't include a trailing slash on the root.
            if (fragment === '' && url !== '/') url = url.slice(0, -1);

            // If pushState is available, we use it to set the fragment as a real URL.
            if (this._hasPushState) {
                this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

                // If hash changes haven't been explicitly disabled, update the hash
                // fragment to store history.
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, fragment, options.replace);
                if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
                    // Opening and closing the iframe tricks IE7 and earlier to push a
                    // history entry on hash-tag change.  When replace is true, we don't
                    // want this.
                    if (!options.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, fragment, options.replace);
                }

                // If you've told us that you explicitly don't want fallback hashchange-
                // based history, then `navigate` becomes a page refresh.
            } else {
                return this.location.assign(url);
            }
            if (options.trigger) return this.loadUrl(fragment);
        },

        // Update the hash location, either replacing the current entry, or adding
        // a new one to the browser history.
        _updateHash: function (location, fragment, replace) {
            if (replace) {
                var href = location.href.replace(/(javascript:|#).*$/, '');
                location.replace(href + '#' + fragment);
            } else {
                // Some browsers require that `hash` contains a leading #.
                location.hash = '#' + fragment;
            }
        }

    });

    // Create the default Backbone.history.
    Backbone.history = new History;

    // Helpers
    // -------

    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var extend = function (protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && _.has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function () {
                return parent.apply(this, arguments);
            };
        }

        // Add static properties to the constructor function, if supplied.
        _.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function () {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) _.extend(child.prototype, protoProps);

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        return child;
    };

    // Set up inheritance for the model, collection, router, view and history.
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

    // Throw an error when a URL is needed, and none is supplied.
    var urlError = function () {
        throw new Error('A "url" property or function must be specified');
    };

    // Wrap an optional error callback with a fallback error event.
    var wrapError = function (model, options) {
        var error = options.error;
        options.error = function (resp) {
            if (error) error(model, resp, options);
            model.trigger('error', model, resp, options);
        };
    };

}).call(this);


//String formatting
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
};

//String camelize
if (!String.prototype.camelize) {
    String.prototype.camelize = function () {
        return this.substring(0, 1).toUpperCase() + this.substring(1, this.length).toLowerCase();
    };
};

//Cuts of a string after a specific character
if (!String.prototype.stripAllAfter) {
    String.prototype.stripAllAfter = function (delimiter) {
        return this.substring(0, this.lastIndexOf(delimiter));
    }
};

//Creates a contains pollyfill
// determines whether one string may be found within another string
if (!String.prototype.contains) {
    String.prototype.contains = function () {
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
};

if (!String.prototype.hashCode) {
    String.prototype.hashCode = function () {
        var hash = 0, i, chr, len;
        if (this.length == 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
            chr = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
};
//Namespacing
window.namespace = function (name, separator, container) {
    var ns = name.split(separator || '.'),
        o = container || window,
        i,
        len;
    for (i = 0, len = ns.length; i < len; i++) {
        o = o[ns[i]] = o[ns[i]] || {};
    }
    return o;
};
namespace("com.bambiHaber.position").Model = Backbone.Model.extend({
    defaults: {
        companyName: null,
        role: null,
        timeRange: null,
        description: null
    }
});
namespace("com.bambiHaber.position").Collection = Backbone.Collection.extend({
    model: com.bambiHaber.position.Model,
    url: './assets/positions/Data.js'
});
namespace("com.bambiHaber.tabs.cv").CvView = Backbone.View.extend({

    initialize: function () {

        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.positionCollection = new com.bambiHaber.position.Collection();

        this.listenTo(this.positionCollection, "sync", this.render);

        this.positionCollection.fetch();

        return this;
    },

    render: function () {

        this.positionCollection.each(function (position) {
            $('#content').append(_.template($('#positionTemplate').html(), position.toJSON()));
        });
    },

    /**
     * View events
     */
    onPhoneClick: function () {
        window.open("skype:+972523712465?call");
    },

    onAddressClick: function () {
        window.open("https://www.google.co.il/maps/place/%D7%91%D7%95%D7%A8%D7%95%D7%9B%D7%95%D7%91+35,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0711842,34.7778774,17z/data=!3m1!4b1!4m2!3m1!1s0x151d4b7f73b7f8a5:0xffb6aadd0d8f0652");
    },

    onLinkedInClick: function () {
        window.open("http://www.linkedin.com/pub/ofer-haber/18/894/694");
    },

    onEmailIconClick: function () {
        window.location.href = 'mailto:haber.ofer@gmail.com';
    },

    onCanaryMidiClick: function () {
        window.open("http://vkeyboard.ofer-haber.com");
    },

    onGithubClick: function () {
        window.open("http://www.github.com/StormCat/");
    }
});
namespace("com.bambiHaber.tabs.aboutMe").AboutMeView = Backbone.View.extend({
    template: $('#aboutMeTemplate').html(),
    initialize: function () {

        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.template = _.template($('#aboutMeTemplate').html());

        this.render();
        return this;
    },

    render: function () {

        $('#content').append(this.template({}));
    }
});
(function () {
    namespace("com.bambiHaber").PageModel = Backbone.Model.extend({
    defaults: {
        positionCollection: null
    },
    initialize: function () {

    }

});
}());
(function () {

    namespace("com.bambiHaber").PageView = Backbone.View.extend({
        events: {
            'click #phone': 'onPhoneClick',
            'click #address': 'onAddressClick',
            'click #linkedIn': 'onLinkedInClick',
            'click #emailIcon': 'onEmailIconClick',
            'click .popOption.aboutMe': 'onAboutMeClick',
            'click .popOption.cv': 'onCvClick',
            'click .popOption.canaryMidi': 'onCanaryMidiClick',
            'click .popOption.github': 'onGithubClick'
        },
        initialize: function () {
            _.bindAll.apply(_, [this].concat(_.functions(this)));

            this.$contentEl = $('#content', this.$el);
            this.render();
        },

        render: function () {

            /*
             this.currentView = new com.bambiHaber.tabs.cv.CvView();
             */
            this.currentView = new com.bambiHaber.tabs.aboutMe.AboutMeView({
                el: this.$contentEl
            });
        },


        killCurrentView: function () {

            this.currentView.undelegateEvents();
            this.$contentEl.empty();
            this.currentView.$el.removeData().unbind();
        },
        /**
         * View events
         */
        onPhoneClick: function () {
            window.open("skype:+972523712465?call");
        },

        onAddressClick: function () {
            window.open("https://www.google.co.il/maps/place/%D7%91%D7%95%D7%A8%D7%95%D7%9B%D7%95%D7%91+35,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0711842,34.7778774,17z/data=!3m1!4b1!4m2!3m1!1s0x151d4b7f73b7f8a5:0xffb6aadd0d8f0652");
        },

        onLinkedInClick: function () {
            window.open("http://www.linkedin.com/pub/ofer-haber/18/894/694");
        },

        onEmailIconClick: function () {
            window.location.href = 'mailto:haber.ofer@gmail.com';
        },

        onAboutMeClick: function () {

            this.killCurrentView();
            this.currentView = new com.bambiHaber.tabs.aboutMe.AboutMeView({
                el: this.$contentEl
            });
        },

        onCvClick: function () {

            this.killCurrentView();
            this.currentView = new com.bambiHaber.tabs.cv.CvView({
                el: this.$contentEl
            });
        },

        onCanaryMidiClick: function () {
            window.open("http://vkeyboard.ofer-haber.com");
        },

        onGithubClick: function () {
            window.open("http://www.github.com/StormCat/");
        }
    });
})();
(function () {
    namespace("com.bambiHaber").Page = Backbone.View.extend({
        initialize: function () {
            console.log("Hey there..");
            console.log("Checking me out?");
            console.log("Enjoy ;) - the more readable version in my github: http://github.com/StormCat/");

            this.model = new com.bambiHaber.PageModel();
            this.view = new com.bambiHaber.PageView({
                el: $('body'),
                model: this.model
            });
        }
    });
}());