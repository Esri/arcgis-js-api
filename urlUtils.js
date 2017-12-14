// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/url","dojo/io-query","./kernel","./lang","./config","./sniff","dojo/i18n!./nls/jsapi"],function(r,e,t,o,n,i,a,s,l){var u=function(){return this}(),h={},c=a.defaults.io,f=/^[a-z][a-z0-9\+\-\.]*:/i,p=/^\s*http:/i,g=/^\s*https:/i,x=/^https?:\/\/[^\/]+\.arcgis.com\/sharing(\/|$)/i;return h.isHTTP=function(r){var e=u.location.protocol;return null==r?"http:"===e||"https:"===e:r?"https:"===e:"http:"===e},h.getProtocolForWebResource=function(r){var e;return e=h.isHTTP()?u.location.protocol:r?"https:":"http:"},h.urlToObject=function(r){var e={},n=new t(r),i=r.indexOf("?");return null===n.query?e={path:r,query:null}:(e.path=r.substring(0,i),e.query=o.queryToObject(n.query)),n.fragment&&(e.hash=n.fragment,null===n.query&&(e.path=e.path.substring(0,e.path.length-(n.fragment.length+1)))),e},h.getProxyUrl=function(e,t){var o,n,i,a,s=r.isString(e)?0===r.trim(e).toLowerCase().indexOf("https:"):e,f=c.proxyUrl,p=l.io.proxyNotSet;if(r.isString(e)&&(a=h.getProxyRule(e),a&&(f=a.proxyUrl)),!f)throw console.log(p),new Error(p);return s&&t!==!1&&0!==u.location.href.toLowerCase().indexOf("https:")&&(n=f,0!==n.toLowerCase().indexOf("http")&&(n=h.getAbsoluteUrl(n)),n=n.replace(/^http:/i,"https:"),h.canUseXhr(n)&&(f=n,i=1)),o=h.urlToObject(f),o._xo=i,o},h.addProxy=function(e){var t,n,i,a=h.getProxyRule(e);return a?t=h.urlToObject(a.proxyUrl):c.alwaysUseProxy&&(t=h.getProxyUrl()),t&&(n=h.urlToObject(e),e=t.path+"?"+n.path,i=o.objectToQuery(r.mixin(t.query||{},n.query)),i&&(e+="?"+i)),e},h.addProxyRule=function(r){var e,t,o=r.urlPrefix=h.urlToObject(r.urlPrefix).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase(),n=c.proxyRules,i=n.length,a=i;for(e=0;i>e;e++){if(t=n[e].urlPrefix,0===o.indexOf(t)){if(o.length===t)return-1;a=e;break}0===t.indexOf(o)&&(a=e+1)}return n.splice(a,0,r),a},h.getProxyRule=function(r){var e,t,o=c.proxyRules,n=o.length,i=h.urlToObject(r).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase();for(e=0;n>e;e++)if(0===i.indexOf(o[e].urlPrefix)){t=o[e];break}return t},h.hasSameOrigin=function(e,o,n){e=e.toLowerCase(),o=o.toLowerCase();var i=u.location.href.toLowerCase();return e=0===e.indexOf("http")?new t(e):i=new t(i),o=0===o.indexOf("http")?new t(o):r.isString(i)?new t(i):i,(n||e.scheme===o.scheme)&&e.host===o.host&&e.port===o.port},h.canUseXhr=function(t,o){var n,i=s("esri-phonegap")?!0:!1,a=h.hasSameOrigin,l=c.corsEnabledServers,u=-1;return!i&&s("esri-cors")&&l&&l.length&&(i=e.some(l,function(e,o){var i=e&&"object"==typeof e?e.host:e;return i&&(n=0!==r.trim(i).toLowerCase().indexOf("http"),a(t,n?"http://"+i:i)||n&&a(t,"https://"+i))?(u=o,!0):!1})),o?u:i},h.getAbsoluteUrl=function(e){var t=h.getProtocolForWebResource();return r.isString(e)&&!f.test(e)?0===e.indexOf("//")?t+e:0===e.indexOf("/")?t+"//"+u.location.host+e:n._appBaseUrl+e:e},h.fixUrl=function(e){return e=r.trim(e),e=h.getAbsoluteUrl(e),e=h.downgradeToHTTP(e),e=h.upgradeToHTTPS(e),e=e.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")},h.normalize=function(r){return h.fixUrl(r)},h.downgradeToHTTP=function(r){var e=h.isHTTP(!1);return e&&g.test(r)&&h.hasSameOrigin(u.location.href,r,!0)&&!h.canUseXhr(r)?r.replace(g,"http:"):r},h.upgradeToHTTPS=function(e){var t=a.defaults.io.httpsDomains,o=h.isHTTP(!1),n=h.isHTTP(!0);if(!p.test(e))return e;e=r.trim(e);var s,l=e.indexOf("/",7);if(s=-1===l?e:e.slice(0,l),s=s.toLowerCase().slice(7),o&&s===u.location.host&&(!x.test(e)||!h.canUseXhr(e)))return e;var c=!1;if(n&&s===u.location.host)c=!0;else if(t)for(var f=0;f<t.length;f++){var g=t[f];if(s===g||i.endsWith(s,"."+g)){c=!0;break}}return c&&(e=e.replace(p,"https:")),e},s("extend-esri")&&(r.mixin(n,h),n._getProxyUrl=h.getProxyUrl,n._getProxiedUrl=h.addProxy,n._hasSameOrigin=h.hasSameOrigin,n._canDoXOXHR=h.canUseXhr,n._getAbsoluteUrl=h.getAbsoluteUrl,n.fixUrl=h.fixUrl),h});