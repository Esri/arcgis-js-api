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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/url","dojo/io-query","./kernel","./lang","./config","./sniff","dojo/i18n!./nls/jsapi"],function(e,r,t,o,n,i,a,s,l){var u=function(){return this}(),h={},c=a.defaults.io,f=/^[a-z][a-z0-9\+\-\.]*:/i,p=/^\s*http:/i,g=/^\s*https:/i;return h.isHTTP=function(e){var r=u.location.protocol;return null==e?"http:"===r||"https:"===r:e?"https:"===r:"http:"===r},h.getProtocolForWebResource=function(e){var r;return r=h.isHTTP()?u.location.protocol:e?"https:":"http:"},h.urlToObject=function(e){var r={},n=new t(e),i=e.indexOf("?");return null===n.query?r={path:e,query:null}:(r.path=e.substring(0,i),r.query=o.queryToObject(n.query)),n.fragment&&(r.hash=n.fragment,null===n.query&&(r.path=r.path.substring(0,r.path.length-(n.fragment.length+1)))),r},h.getProxyUrl=function(r,t){var o,n,i,a,s=e.isString(r)?0===e.trim(r).toLowerCase().indexOf("https:"):r,f=c.proxyUrl,p=l.io.proxyNotSet;if(e.isString(r)&&(a=h.getProxyRule(r),a&&(f=a.proxyUrl)),!f)throw console.log(p),new Error(p);return s&&t!==!1&&0!==u.location.href.toLowerCase().indexOf("https:")&&(n=f,0!==n.toLowerCase().indexOf("http")&&(n=h.getAbsoluteUrl(n)),n=n.replace(/^http:/i,"https:"),h.canUseXhr(n)&&(f=n,i=1)),o=h.urlToObject(f),o._xo=i,o},h.addProxy=function(r){var t,n,i,a=h.getProxyRule(r);return a?t=h.urlToObject(a.proxyUrl):c.alwaysUseProxy&&(t=h.getProxyUrl()),t&&(n=h.urlToObject(r),r=t.path+"?"+n.path,i=o.objectToQuery(e.mixin(t.query||{},n.query)),i&&(r+="?"+i)),r},h.addProxyRule=function(e){var r,t,o=e.urlPrefix=h.urlToObject(e.urlPrefix).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase(),n=c.proxyRules,i=n.length,a=i;for(r=0;i>r;r++){if(t=n[r].urlPrefix,0===o.indexOf(t)){if(o.length===t)return-1;a=r;break}0===t.indexOf(o)&&(a=r+1)}return n.splice(a,0,e),a},h.getProxyRule=function(e){var r,t,o=c.proxyRules,n=o.length,i=h.urlToObject(e).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase();for(r=0;n>r;r++)if(0===i.indexOf(o[r].urlPrefix)){t=o[r];break}return t},h.hasSameOrigin=function(r,o,n){r=r.toLowerCase(),o=o.toLowerCase();var i=u.location.href.toLowerCase();return r=0===r.indexOf("http")?new t(r):i=new t(i),o=0===o.indexOf("http")?new t(o):e.isString(i)?new t(i):i,(n||r.scheme===o.scheme)&&r.host===o.host&&r.port===o.port},h.canUseXhr=function(t,o){var n,i=s("esri-phonegap")?!0:!1,a=h.hasSameOrigin,l=c.corsEnabledServers,u=-1;return!i&&s("esri-cors")&&l&&l.length&&(i=r.some(l,function(r,o){var i=r&&"object"==typeof r?r.host:r;return i&&(n=0!==e.trim(i).toLowerCase().indexOf("http"),a(t,n?"http://"+i:i)||n&&a(t,"https://"+i))?(u=o,!0):!1})),o?u:i},h.getAbsoluteUrl=function(r){var t=h.getProtocolForWebResource();return e.isString(r)&&!f.test(r)?0===r.indexOf("//")?t+r:0===r.indexOf("/")?t+"//"+u.location.host+r:n._appBaseUrl+r:r},h.fixUrl=function(r){return r=e.trim(r),r=h.getAbsoluteUrl(r),r=h.downgradeToHTTP(r),r=h.upgradeToHTTPS(r),r=r.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")},h.normalize=function(e){return h.fixUrl(e)},h.downgradeToHTTP=function(e){var r=h.isHTTP(!1);return r&&g.test(e)&&h.hasSameOrigin(u.location.href,e,!0)&&!h.canUseXhr(e)?e.replace(g,"http:"):e},h.upgradeToHTTPS=function(r){var t=a.defaults.io.httpsDomains,o=h.isHTTP(!1),n=h.isHTTP(!0);if(!p.test(r))return r;r=e.trim(r);var s,l=r.indexOf("/",7);if(s=-1===l?r:r.slice(0,l),s=s.toLowerCase().slice(7),o&&s===u.location.host)return r;var c=!1;if(n&&s===u.location.host)c=!0;else if(t)for(var f=0;f<t.length;f++){var g=t[f];if(s===g||i.endsWith(s,"."+g)){c=!0;break}}return c&&(r=r.replace(p,"https:")),r},s("extend-esri")&&(e.mixin(n,h),n._getProxyUrl=h.getProxyUrl,n._getProxiedUrl=h.addProxy,n._hasSameOrigin=h.hasSameOrigin,n._canDoXOXHR=h.canUseXhr,n._getAbsoluteUrl=h.getAbsoluteUrl,n.fixUrl=h.fixUrl),h});