// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/url","esri/config","esri/kernel","esri/urlUtils"],(function(e,r,t,n){var o={getDomain:function(e){if("string"!=typeof e)return null;var r=(e=e.replace(/^(http:\/\/|https:\/\/)/i,"")).indexOf("/");return r<0?e:e.substr(0,r)},getPortalUrl:function(e){if("string"!=typeof e)return null;var r=e;e=e.replace(/^(http:\/\/|https:\/\/)/i,"");var t=r.substr(0,r.indexOf(e));return-1!==e.indexOf("/sharing")?t+e.substr(0,e.indexOf("/sharing")):-1!==e.indexOf("/portal")?t+e.substr(0,e.indexOf("/portal"))+"/portal":-1!==e.indexOf("/home")&&e.indexOf("/home")==e.length-5?t+e.substr(0,e.indexOf("/home")):t+e},getProxyUrl:function(e){var t=r.defaults.io.proxyUrl;return t&&!/^http/i.test(t)&&(t=n.getAbsoluteUrl(t)),t&&e&&(t=o.toHttpsUrl(t)),t},registerCORS:function(e){var t=o.getDomain(e);t&&-1==r.defaults.io.corsEnabledServers.indexOf(t)&&r.defaults.io.corsEnabledServers.push(t),o._fixCORS()},_fixCORS:function(){r.defaults.io.corsEnabledServers=r.defaults.io.corsEnabledServers.filter((function(e){return!e.indexOf||0!==e.indexOf("null://")||(console.log("WARNING: incorrect CORS URL detected: "+e),!1)}))},indexOfQuery:function(e){var r=e.indexOf("?");if(r>=0){var t=e.substr(r+1);if(/^(http:\/\/|https:\/\/)/i.test(t)){var n=t.indexOf("?");r=n>=0?r+1+n:-1}}return r},removeQuery:function(e){var r=o.indexOfQuery(e);return r<0?e:e.substr(0,r)},addQueryPart:function(e,r){return e+(o.indexOfQuery(e)<0?"?":"&")+r},getVariableValue:function(e,r){if(e&&"string"==typeof r){var t=n.urlToObject(e);if(t.query){var o={};return Object.keys(t.query).forEach((function(e){o[e.toLowerCase()]=t.query[e]})),o[r.toLowerCase()]}}},addUrlVariable:function(e,r,t){return r=encodeURIComponent(r),t=encodeURIComponent(t),o.addQueryPart(e,r+"="+t)},securePortsMap:{80:"443",8080:"8443"},toHttpUrl:function(e){return!e||/^http/i.test(e)?e:"http://"+e},toHttpsUrl:function(r){if(r&&(r=o.toHttpUrl(r)),!r||!/^http:\/\//i.test(r))return r;var t=new e(r);r=r.replace(/^http/i,"https");var n=o.securePortsMap[t.port];return n&&(r=r.replace(":"+t.port,":"+n)),r},combine:function(e,r){if("number"==typeof r&&(r+=""),r){if(/^(http:\/\/|https:\/\/)/i.test(r)||!e)return r;if("/"!=r.charAt(0)&&(r="/"+r),1==r.length)return e;var t=e.length-1;"/"==e.charAt(t)&&(e=e.substr(0,t));var i=n.urlToObject(e);for(var u in(t=(e=o.removeQuery(e)).length-r.length)>=0&&e.substr(t).toLowerCase()==r.toLowerCase()&&(e=e.substr(0,t)),e+=r,i.query)o.addQueryPart(e,i.query[u])}return e},combineMulti:function(e){for(var r=e[0],t=1;t<e.length;t++)r=o.combine(r,e[t]);return r},openUrl:function(e,r){if(r)return window.open(e,"_blank");var t=window.open();return t.opener=null,t.referrer=null,t.location=e,t},isPageRunOnWebService:function(){return/^http/i.test(window.location.protocol)},getToken:function(e){var r=e&&t.id.findCredential(e)||t.id.credentials[0];return r&&r.token}};return o}));