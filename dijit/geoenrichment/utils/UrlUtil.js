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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/url","esri/config","esri/kernel","esri/urlUtils"],function(r,t,e,n){var o={};return o.getDomain=function(r){if("string"!=typeof r)return null;r=r.replace(/^(http:\/\/|https:\/\/)/i,"");var t=r.indexOf("/");return t<0?r:r.substr(0,t)},o.getProxyUrl=function(r){var e=t.defaults.io.proxyUrl;return e&&!/^http/i.test(e)&&(e=n.getAbsoluteUrl(e)),e&&r&&(e=o.toHttpsUrl(e)),e},o.registerCORS=function(r){var e=o.getDomain(r);e&&-1==t.defaults.io.corsEnabledServers.indexOf(e)&&t.defaults.io.corsEnabledServers.push(e)},o.indexOfQuery=function(r){var t=r.indexOf("?");if(t>=0){var e=r.substr(t+1);if(/^(http:\/\/|https:\/\/)/i.test(e)){var n=e.indexOf("?");t=n>=0?t+1+n:-1}}return t},o.removeQuery=function(r){var t=o.indexOfQuery(r);return t<0?r:r.substr(0,t)},o.addQueryPart=function(r,t){return r+(o.indexOfQuery(r)<0?"?":"&")+t},o.getVariableValue=function(r,t){if(r&&"string"==typeof t){var e=n.urlToObject(r);if(e.query){var o={};return Object.keys(e.query).forEach(function(r){o[r.toLowerCase()]=e.query[r]}),o[t.toLowerCase()]}}},o.addUrlVariable=function(r,t,e){return t=encodeURIComponent(t),e=encodeURIComponent(e),o.addQueryPart(r,t+"="+e)},o.securePortsMap={80:"443",8080:"8443"},o.toHttpUrl=function(r){return!r||/^http/i.test(r)?r:"http://"+r},o.toHttpsUrl=function(t){if(t&&(t=o.toHttpUrl(t)),!t||!/^http:\/\//i.test(t))return t;var e=new r(t);t=t.replace(/^http/i,"https");var n=o.securePortsMap[e.port];return n&&(t=t.replace(":"+e.port,":"+n)),t},o.combine=function(r,t){if("number"==typeof t&&(t+=""),t){if(/^(http:\/\/|https:\/\/)/i.test(t)||!r)return t;if("/"!=t.charAt(0)&&(t="/"+t),1==t.length)return r;var e=r.length-1;"/"==r.charAt(e)&&(r=r.substr(0,e));var u=n.urlToObject(r);r=o.removeQuery(r),e=r.length-t.length,e>=0&&r.substr(e).toLowerCase()==t.toLowerCase()&&(r=r.substr(0,e)),r+=t;for(var i in u.query)o.addQueryPart(r,u.query[i])}return r},o.combineMulti=function(r){for(var t=r[0],e=1;e<r.length;e++)t=o.combine(t,r[e]);return t},o.openUrl=function(r,t){if(t)return window.open(r,"_blank");var e=window.open();return e.opener=null,e.referrer=null,e.location=r,e},o.isPageRunOnWebService=function(){return/^http/i.test(window.location.protocol)},o.getToken=function(){var r=e.id.credentials[0];return r&&r.token},o});