/*! pandora-1.0.0 2015-01-29 14:13:32 */
!function(a){"use strict";function b(b){function c(){g.addEventListener?(g.removeEventListener("DOMContentLoaded",d,!1),a.removeEventListener("load",d,!1)):(g.detachEvent("onreadystatechange",d),a.detachEvent("onload",d))}function d(){(g.addEventListener||"load"===event.type||"complete"===g.readyState)&&(c(),b())}var e=!1;if("complete"===g.readyState)a.setTimeout(b);else if(g.addEventListener)g.addEventListener("DOMContentLoaded",d,!1),a.addEventListener("load",d,!1);else{g.attachEvent("onreadystatechange",d),a.attachEvent("onload",d);var f=!1;try{f=null===a.frameElement&&g.documentElement}catch(h){}f&&f.doScroll&&!function i(){if(!e){try{f.doScroll("left")}catch(d){return a.setTimeout(i,50)}c(),b()}}()}}function c(){var c,d=[],g=[[/(?!jquery)\.js$/,".js?20150129141332"]];for(h=a.seajs,a.jQuery&&a.jQuery.fn.finish&&(define(e+f,[],function(){return a.jQuery}),g=[function(a){return/jquery\.js$/.test(a)?a:a.replace(/\.js$/,".js?20150129141332")}]),h.config({base:e,alias:{$:f,jquery:f,alert:"pandora/dialog/1.0.0/alert",article:"pandora/article/1.0.0/article",autorender:"pandora/widget/1.0.0/autorender",base:"pandora/base/1.0.0/base",changyan:"pandora/changyan/1.0.0/changyan","class":"pandora/class/1.0.0/class",confirm:"pandora/dialog/1.0.0/confirm",dialog:"pandora/dialog/1.0.0/dialog",importstyle:"pandora/importstyle/1.0.0/importstyle",locker:"pandora/locker/1.0.0/locker",mood:"pandora/mood/1.0.0/mood",overlay:"pandora/overlay/1.0.0/overlay",select:"pandora/select/1.0.0/select",share:"pandora/share/1.0.0/share",floatshare:"pandora/share/1.0.0/floatshare",attitude:"pandora/attitude/1.0.0/attitude",floating:"pandora/floating/1.0.0/floating",floatanchor:"pandora/floating/1.0.0/floatanchor",accordion:"pandora/accordion/1.0.0/accordion",multiplevote:"pandora/vote/1.0.0/multiplevote",singlevote:"pandora/vote/1.0.0/singlevote",vote:"pandora/vote/1.0.0/vote",support:"pandora/vote/1.0.0/support",supportui:"pandora/vote/1.0.0/supportui",switchable:"pandora/switchable/1.0.0/switchable",tabs:"pandora/tabs/1.0.0/tabs",tips:"pandora/dialog/1.0.0/tips",validate:"pandora/validate/1.0.0/validate",viewpoint:"pandora/viewpoint/1.0.0/viewpoint",gallery:"pandora/gallery/1.0.0/gallery",widget:"pandora/widget/1.0.0/widget",statistics:"pandora/statistics/1.0.0/statistics",messagebus:"pandora/messagebus/1.0.0/messagebus",handlebars:"gallery/handlebars/1.3.0/handlebars-runtime"},map:g});c=i.shift();)h.use(c[0],c[1]),d.push(c[0]);b(function(){h.use(["widget"],function(a){a.autoRender()})})}function d(a,b){function c(){a.onload=a.onerror=a.onreadystatechange=null,k.removeChild(a),a=null,b()}var d="onload"in a;d?a.onload=c:a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&c()}}{var e="/statics/hw/js/lib/",f="jquery/jquery/1.11.1/jquery",g=a.document,h=a.seajs,i=[];a.pandora={use:function(a,b){h?h.use(a,b):i.push([a,b])}}}if(h)c();else{var j=a.document,k=j.head||j.getElementsByTagName("head")[0]||j.documentElement,l=k.getElementsByTagName("base")[0],m=j.createElement("script");m.charset="utf-8",d(m,c),m.async=!0,m.src=e+"seajs/sea.js",l?k.insertBefore(m,l):k.appendChild(m)}}(this);