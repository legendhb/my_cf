/*! base-1.0.0 2014-09-19 17:46:02 */
define("pandora/base/1.0.0/base",["pandora/class/1.0.0/class","pandora/events/1.0.0/events","$","./aspect"],function(a,b,c){"use strict";function d(a){return"[object Array]"===Object.prototype.toString.call(a)}function e(a){return!!(a&&"[object Object]"===Object.prototype.toString.call(a)&&a.constructor&&a.constructor.prototype.hasOwnProperty&&a.constructor.prototype.hasOwnProperty("isPrototypeOf"))}function f(a,b,c){var g,h,i,j,k;for(g in b)h=b[g],a!==h&&(i=a[g],c||!(j=d(h))&&!e(h)?"undefined"!=typeof h&&(a[g]=h):(k=j?i&&d(i)?i:[]:i&&e(i)?i:{},a[g]=f(k,h,!1)));return a}function g(a,b){var c,d={},e=[],g=a.constructor.prototype;for(b&&e.push(b);g;)g.defaults&&e.push(g.defaults),g=g.constructor.superclass;for(;c=e.pop();)f(d,c);return d}function h(a,b){var c;for(c in a)b.call(null,c,a[c])}var i=a("pandora/class/1.0.0/class"),j=a("pandora/events/1.0.0/events"),k=a("./aspect"),l=i.create({initialize:function(a){l.superclass.initialize.apply(this,arguments),this.__options=g(this,a),this.initEvents()},mixins:[j.prototype,k.prototype],defaults:{},state:function(a){return"undefined"==typeof a?this.__state:(this.__state=a,this.fire("state",a),this)},option:function(a,b,c,d){function g(){for(var b=a.split("/");a=b.shift();){if(!i.hasOwnProperty(a))return;i=i[a]}return i}function h(){function c(d,e){return a=e.shift(),a?(d[a]=c({},e),d):b}var e={};c(e,a.split("/")),f(i,e,d)}var i=c?this.__options[c]:this.__options;if("undefined"==typeof a)return i;if(e(a))f(i,a,d);else{if("undefined"==typeof b)return g();h()}return this},initEvents:function(a){var b=this;return a||(a=b.option("events")),a?(h(a,function(a,c){var d;return"string"==typeof c&&(c=b[c]),"function"!=typeof c?!0:(d=/^(before|after):(\w+)$/.exec(a),d?b[d[1]](d[2],c):b.on(a,c),void 0)}),b):b},destroy:function(){var a;this.off();for(a in this)this.hasOwnProperty(a)&&delete this[a];this.destroy=function(){}}});c.exports=l}),define("pandora/base/1.0.0/aspect",[],function(a,b,c){"use strict";function d(a,b,c){var d=this[b];return d&&(d.__aspected||e.call(this,b),this.on(a+":"+b,c)),this}function e(a){var b=this[a];this[a]=function(){var c,d=Array.prototype.slice.call(arguments);if(this.fire.apply(this,["before:"+a].concat(d))!==!1)return c=b.apply(this,arguments),this.fire.apply(this,["after:"+a,c].concat(d)),c},this[a].__aspected=!0}var f=function(){};f.prototype={before:function(a,b){return d.call(this,"before",a,b)},after:function(a,b){return d.call(this,"after",a,b)}},c.exports=f});