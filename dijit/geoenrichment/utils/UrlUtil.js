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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/url","esri/config","esri/kernel","esri/urlUtils"],function(r,t,e,n){var i={};return i.getDomain=function(r){if("string"!=typeof r)return null;r=r.replace(/^(http:\/\/|https:\/\/)/i,"");var t=r.indexOf("/");return t<0?r:r.substr(0,t)},i.getPortalUrl=function(r){if("string"!=typeof r)return null;var t=r;r=r.replace(/^(http:\/\/|https:\/\/)/i,"");var e=t.substr(0,t.indexOf(r));if(-1!==r.indexOf("/sharing"))return e+r.substr(0,r.indexOf("/sharing"));if(-1!==r.indexOf("/portal"))return e+r.substr(0,r.indexOf("/portal"))+"/portal";var n=r.indexOf("/");return e+(n<0?r:r.substr(0,n))},i.getPortalUrlRest=function(r){var t=i.getPortalUrl(r);return t&&0===t.indexOf(".arcgis.com")?t+"/sharing":null},i.getProxyUrl=function(r){var e=t.defaults.io.proxyUrl;return e&&!/^http/i.test(e)&&(e=n.getAbsoluteUrl(e)),e&&r&&(e=i.toHttpsUrl(e)),e},i.registerCORS=function(r){var e=i.getDomain(r);e&&-1==t.defaults.io.corsEnabledServers.indexOf(e)&&t.defaults.io.corsEnabledServers.push(e),i._fixCORS()},i._fixCORS=function(){t.defaults.io.corsEnabledServers=t.defaults.io.corsEnabledServers.filter(function(r){return!r.indexOf||0!==r.indexOf("null://")||(console.log("WARNING: incorrect CORS URL detected: "+r),!1)})},i.indexOfQuery=function(r){var t=r.indexOf("?");if(t>=0){var e=r.substr(t+1);if(/^(http:\/\/|https:\/\/)/i.test(e)){var n=e.indexOf("?");t=n>=0?t+1+n:-1}}return t},i.removeQuery=function(r){var t=i.indexOfQuery(r);return t<0?r:r.substr(0,t)},i.addQueryPart=function(r,t){return r+(i.indexOfQuery(r)<0?"?":"&")+t},i.getVariableValue=function(r,t){if(r&&"string"==typeof t){var e=n.urlToObject(r);if(e.query){var i={};return Object.keys(e.query).forEach(function(r){i[r.toLowerCase()]=e.query[r]}),i[t.toLowerCase()]}}},i.addUrlVariable=function(r,t,e){return t=encodeURIComponent(t),e=encodeURIComponent(e),i.addQueryPart(r,t+"="+e)},i.securePortsMap={80:"443",8080:"8443"},i.toHttpUrl=function(r){return!r||/^http/i.test(r)?r:"http://"+r},i.toHttpsUrl=function(t){if(t&&(t=i.toHttpUrl(t)),!t||!/^http:\/\//i.test(t))return t;var e=new r(t);t=t.replace(/^http/i,"https");var n=i.securePortsMap[e.port];return n&&(t=t.replace(":"+e.port,":"+n)),t},i.combine=function(r,t){if("number"==typeof t&&(t+=""),t){if(/^(http:\/\/|https:\/\/)/i.test(t)||!r)return t;if("/"!=t.charAt(0)&&(t="/"+t),1==t.length)return r;var e=r.length-1;"/"==r.charAt(e)&&(r=r.substr(0,e));var o=n.urlToObject(r);r=i.removeQuery(r),e=r.length-t.length,e>=0&&r.substr(e).toLowerCase()==t.toLowerCase()&&(r=r.substr(0,e)),r+=t;for(var u in o.query)i.addQueryPart(r,o.query[u])}return r},i.combineMulti=function(r){for(var t=r[0],e=1;e<r.length;e++)t=i.combine(t,r[e]);return t},i.openUrl=function(r,t){if(t)return window.open(r,"_blank");var e=window.open();return e.opener=null,e.referrer=null,e.location=r,e},i.isPageRunOnWebService=function(){return/^http/i.test(window.location.protocol)},i.getToken=function(r){var t=r&&e.id.findCredential(r)||e.id.credentials[0];return t&&t.token},i});