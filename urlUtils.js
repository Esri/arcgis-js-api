// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/url","dojo/io-query","./kernel","./config","./sniff","dojo/i18n!./nls/jsapi"],function(e,r,t,o,n,i,s,a){var l=function(){return this}(),u={},c=i.defaults.io,h=/^[a-z][a-z0-9\+\-\.]*:/i;return u.isHTTP=function(e){var r=l.location.protocol;return null==e?"http:"===r||"https:"===r:e?"https:"===r:"http:"===r},u.getProtocolForWebResource=function(e){var r;return r=u.isHTTP()?l.location.protocol:e?"https:":"http:"},u.urlToObject=function(e){var r={},n=new t(e),i=e.indexOf("?");return null===n.query?r={path:e,query:null}:(r.path=e.substring(0,i),r.query=o.queryToObject(n.query)),n.fragment&&(r.hash=n.fragment,null===n.query&&(r.path=r.path.substring(0,r.path.length-(n.fragment.length+1)))),r},u.getProxyUrl=function(r,t){var o,n,i,s,h=e.isString(r)?0===e.trim(r).toLowerCase().indexOf("https:"):r,p=c.proxyUrl,f=a.io.proxyNotSet;if(e.isString(r)&&(s=u.getProxyRule(r),s&&(p=s.proxyUrl)),!p)throw console.log(f),new Error(f);return h&&t!==!1&&0!==l.location.href.toLowerCase().indexOf("https:")&&(n=p,0!==n.toLowerCase().indexOf("http")&&(n=u.getAbsoluteUrl(n)),n=n.replace(/^http:/i,"https:"),u.canUseXhr(n)&&(p=n,i=1)),o=u.urlToObject(p),o._xo=i,o},u.addProxy=function(r){var t,n,i,s=u.getProxyRule(r);return s?t=u.urlToObject(s.proxyUrl):c.alwaysUseProxy&&(t=u.getProxyUrl()),t&&(n=u.urlToObject(r),r=t.path+"?"+n.path,i=o.objectToQuery(e.mixin(t.query||{},n.query)),i&&(r+="?"+i)),r},u.addProxyRule=function(e){var r,t,o=e.urlPrefix=u.urlToObject(e.urlPrefix).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase(),n=c.proxyRules,i=n.length,s=i;for(r=0;i>r;r++){if(t=n[r].urlPrefix,0===o.indexOf(t)){if(o.length===t)return-1;s=r;break}0===t.indexOf(o)&&(s=r+1)}return n.splice(s,0,e),s},u.getProxyRule=function(e){var r,t,o=c.proxyRules,n=o.length,i=u.urlToObject(e).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase();for(r=0;n>r;r++)if(0===i.indexOf(o[r].urlPrefix)){t=o[r];break}return t},u.hasSameOrigin=function(r,o,n){r=r.toLowerCase(),o=o.toLowerCase();var i=l.location.href.toLowerCase();return r=0===r.indexOf("http")?new t(r):i=new t(i),o=0===o.indexOf("http")?new t(o):e.isString(i)?new t(i):i,(n||r.scheme===o.scheme)&&r.host===o.host&&r.port===o.port},u.canUseXhr=function(t,o){var n,i=s("esri-phonegap")?!0:!1,a=u.hasSameOrigin,l=c.corsEnabledServers,h=-1;return!i&&s("esri-cors")&&l&&l.length&&(i=r.some(l,function(r,o){var i=r&&"object"==typeof r?r.host:r;return i&&(n=0!==e.trim(i).toLowerCase().indexOf("http"),a(t,n?"http://"+i:i)||n&&a(t,"https://"+i))?(h=o,!0):!1})),o?h:i},u.getAbsoluteUrl=function(r){var t=u.getProtocolForWebResource();return e.isString(r)&&!h.test(r)?0===r.indexOf("//")?t+r:0===r.indexOf("/")?t+"//"+l.location.host+r:n._appBaseUrl+r:r},u.fixUrl=function(e){return/^\/\//i.test(e)&&(e=u.getProtocolForWebResource()+e),e=e.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")},u.normalize=function(e){return e=u._ensureProtocol(e),e=u._ensureProperProtocolForAGOResource(e)},u._ensureProtocol=function(e){return e?(/^\/\//i.test(e)&&(e=u.getProtocolForWebResource(!0)+e),e):e},u._ensureProperProtocolForAGOResource=function(e){var r=!u.isHTTP(!1)&&(/^http\:\/\/server\.arcgisonline\.com(?!:)/i.test(e)||/^http\:\/\/services\.arcgisonline\.com(?!:)/i.test(e)||/^http\:\/\/.+\.arcgis\.com(?!:)/i.test(e));return r?e.replace(/http:/i,"https:"):e},s("extend-esri")&&(e.mixin(n,u),n._getProxyUrl=u.getProxyUrl,n._getProxiedUrl=u.addProxy,n._hasSameOrigin=u.hasSameOrigin,n._canDoXOXHR=u.canUseXhr,n._getAbsoluteUrl=u.getAbsoluteUrl,n.fixUrl=u.fixUrl),u});