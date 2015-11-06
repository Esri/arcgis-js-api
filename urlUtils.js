// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/url","dojo/io-query","./kernel","./config","./sniff","dojo/i18n!./nls/jsapi"],function(e,r,t,o,n,i,a,l){var s={},u=i.defaults.io,h=window.location.protocol;return"file:"===h&&(h="http:"),s.urlToObject=function(e){var r={},n=new t(e),i=e.indexOf("?");return null===n.query?r={path:e,query:null}:(r.path=e.substring(0,i),r.query=o.queryToObject(n.query)),n.fragment&&(r.hash=n.fragment,null===n.query&&(r.path=r.path.substring(0,r.path.length-(n.fragment.length+1)))),r},s.getProxyUrl=function(r,t){var o,n,i,a,h=e.isString(r)?0===e.trim(r).toLowerCase().indexOf("https:"):r,f=u.proxyUrl,p=l.io.proxyNotSet;if(e.isString(r)&&(a=s.getProxyRule(r),a&&(f=a.proxyUrl)),!f)throw console.log(p),new Error(p);return h&&t!==!1&&0!==window.location.href.toLowerCase().indexOf("https:")&&(n=f,0!==n.toLowerCase().indexOf("http")&&(n=s.getAbsoluteUrl(n)),n=n.replace(/^http:/i,"https:"),s.canUseXhr(n)&&(f=n,i=1)),o=s.urlToObject(f),o._xo=i,o},s.addProxy=function(r){var t,n,i,a=s.getProxyRule(r);return a?t=s.urlToObject(a.proxyUrl):u.alwaysUseProxy&&(t=s.getProxyUrl()),t&&(n=s.urlToObject(r),r=t.path+"?"+n.path,i=o.objectToQuery(e.mixin(t.query||{},n.query)),i&&(r+="?"+i)),r},s.addProxyRule=function(e){var r,t,o=e.urlPrefix=s.urlToObject(e.urlPrefix).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase(),n=u.proxyRules,i=n.length,a=i;for(r=0;i>r;r++){if(t=n[r].urlPrefix,0===o.indexOf(t)){if(o.length===t)return-1;a=r;break}0===t.indexOf(o)&&(a=r+1)}return n.splice(a,0,e),a},s.getProxyRule=function(e){var r,t,o=u.proxyRules,n=o.length,i=s.urlToObject(e).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase();for(r=0;n>r;r++)if(0===i.indexOf(o[r].urlPrefix)){t=o[r];break}return t},s.hasSameOrigin=function(r,o,n){r=r.toLowerCase(),o=o.toLowerCase();var i=window.location.href.toLowerCase();return r=0===r.indexOf("http")?new t(r):i=new t(i),o=0===o.indexOf("http")?new t(o):e.isString(i)?new t(i):i,(n||r.scheme===o.scheme)&&r.host===o.host&&r.port===o.port},s.canUseXhr=function(t,o){var n,i=a("esri-phonegap")?!0:!1,l=s.hasSameOrigin,h=u.corsEnabledServers,f=-1;return!i&&a("esri-cors")&&h&&h.length&&(i=r.some(h,function(r,o){var i="object"==typeof r?r.host:r;return n=0!==e.trim(i).toLowerCase().indexOf("http"),l(t,n?"http://"+i:i)||n&&l(t,"https://"+i)?(f=o,!0):!1})),o?f:i},s.getAbsoluteUrl=function(r){return e.isString(r)&&!/^https?:\/\//i.test(r)?0===r.indexOf("//")?h+r:0===r.indexOf("/")?h+"//"+window.location.host+r:n._appBaseUrl+r:r},s.fixUrl=function(e){return/^\/\//i.test(e)&&(e=h+e),e=e.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")},a("extend-esri")&&(e.mixin(n,s),n._getProxyUrl=s.getProxyUrl,n._getProxiedUrl=s.addProxy,n._hasSameOrigin=s.hasSameOrigin,n._canDoXOXHR=s.canUseXhr,n._getAbsoluteUrl=s.getAbsoluteUrl,n.fixUrl=s.fixUrl),s});