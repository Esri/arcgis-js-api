// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/url","esri/config","esri/kernel","esri/urlUtils","esri/arcgis/utils"],(function(r,t,e,n,i){var o,u={};return u.getDomain=function(r){if("string"!=typeof r)return null;var t=(r=r.replace(/^(http:\/\/|https:\/\/)/i,"")).indexOf("/");return t<0?r:r.substr(0,t)},u.getPortalUrl=function(r){if("string"!=typeof r)return null;var t=(r=r.replace(/\?.*$/,"")).match(/^(.+)\/sharing(\/|$)/i);return t?t[1]:(t=r.match(/^(.+)\/home$/i))?t[1]:(t=r.match(/^(.+)\/portal(\/|$)/i))?t[1]+"/portal":r},u.getProxyUrl=function(r){var e=t.defaults.io.proxyUrl;return e&&!/^http/i.test(e)&&(e=n.getAbsoluteUrl(e)),e&&r&&(e=u.toHttpsUrl(e)),e},u.registerCORS=function(r){var e=u.getDomain(r);e&&-1==t.defaults.io.corsEnabledServers.indexOf(e)&&t.defaults.io.corsEnabledServers.push(e),u._fixCORS()},u._fixCORS=function(){t.defaults.io.corsEnabledServers=t.defaults.io.corsEnabledServers.filter((function(r){return!r.indexOf||0!==r.indexOf("null://")||(console.log("WARNING: incorrect CORS URL detected: "+r),!1)}))},u.indexOfQuery=function(r){var t=r.indexOf("?");if(t>=0){var e=r.substr(t+1);if(/^(http:\/\/|https:\/\/)/i.test(e)){var n=e.indexOf("?");t=n>=0?t+1+n:-1}}return t},u.removeQuery=function(r){var t=u.indexOfQuery(r);return t<0?r:r.substr(0,t)},u.addQueryPart=function(r,t){return r+(u.indexOfQuery(r)<0?"?":"&")+t},u.getVariableValue=function(r,t){if(r&&"string"==typeof t){var e=n.urlToObject(r);if(e.query){var i={};return Object.keys(e.query).forEach((function(r){i[r.toLowerCase()]=e.query[r]})),i[t.toLowerCase()]}}},u.addUrlVariable=function(r,t,e){return t=encodeURIComponent(t),e=encodeURIComponent(e),u.addQueryPart(r,t+"="+e)},u.securePortsMap={80:"443",8080:"8443"},u.toHttpUrl=function(r){return!r||/^http/i.test(r)?r:"http://"+r},u.toHttpsUrl=function(t){if(t&&(t=u.toHttpUrl(t)),!t||!/^http:\/\//i.test(t))return t;var e=new r(t);t=t.replace(/^http/i,"https");var n=u.securePortsMap[e.port];return n&&(t=t.replace(":"+e.port,":"+n)),t},u.combine=function(r,t){if("number"==typeof t&&(t+=""),t){if(/^(http:\/\/|https:\/\/)/i.test(t)||!r)return t;if("/"!=t.charAt(0)&&(t="/"+t),1==t.length)return r;var e=r.length-1;"/"==r.charAt(e)&&(r=r.substr(0,e));var i=n.urlToObject(r);for(var o in(e=(r=u.removeQuery(r)).length-t.length)>=0&&r.substr(e).toLowerCase()==t.toLowerCase()&&(r=r.substr(0,e)),r+=t,i.query)u.addQueryPart(r,i.query[o])}return r},u.combineMulti=function(r){for(var t=r[0],e=1;e<r.length;e++)t=u.combine(t,r[e]);return t},u.openUrl=function(r,t){if(t)return window.open(r,"_blank");var e=window.open();return e.opener=null,e.referrer=null,e.location=r,e},u.isPageRunOnWebService=function(){return/^http/i.test(window.location.protocol)},u.getToken=function(r){var t=r&&e.id.findCredential(r)||e.id.credentials[0];return t&&t.token},u.getArcgisUrl=function(){return o},u.setArcgisUrl=function(r){r&&(o=r,i.arcgisUrl=u.combine(r,"/sharing/rest/content/items"))},u}));