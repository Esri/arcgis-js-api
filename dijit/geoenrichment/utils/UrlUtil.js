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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/url","esri/config","esri/urlUtils"],function(r,t,e){var n={};return n.getDomain=function(r){if("string"!=typeof r)return null;r=r.replace(/^(http:\/\/|https:\/\/)/i,"");var t=r.indexOf("/");return t<0?r:r.substr(0,t)},n.getProxyUrl=function(r){var o=t.defaults.io.proxyUrl;return o&&!/^http/i.test(o)&&(o=e.getAbsoluteUrl(o)),o&&r&&(o=n.toHttpsUrl(o)),o},n.registerCORS=function(r){var e=n.getDomain(r);e&&-1==t.defaults.io.corsEnabledServers.indexOf(e)&&t.defaults.io.corsEnabledServers.push(e)},n.indexOfQuery=function(r){var t=r.indexOf("?");if(t>=0){var e=r.substr(t+1);if(/^(http:\/\/|https:\/\/)/i.test(e)){var n=e.indexOf("?");t=n>=0?t+1+n:-1}}return t},n.removeQuery=function(r){var t=n.indexOfQuery(r);return t<0?r:r.substr(0,t)},n.addQueryPart=function(r,t){return r+(n.indexOfQuery(r)<0?"?":"&")+t},n.getVariableValue=function(r,t){if(r&&"string"==typeof t){var n=e.urlToObject(r);if(n.query){var o={};return Object.keys(n.query).forEach(function(r){o[r.toLowerCase()]=n.query[r]}),o[t.toLowerCase()]}}},n.addUrlVariable=function(r,t,e){return t=encodeURIComponent(t),e=encodeURIComponent(e),n.addQueryPart(r,t+"="+e)},n.securePortsMap={80:"443",8080:"8443"},n.toHttpUrl=function(r){return!r||/^http/i.test(r)?r:"http://"+r},n.toHttpsUrl=function(t){if(t&&(t=n.toHttpUrl(t)),!t||!/^http:\/\//i.test(t))return t;var e=new r(t);t=t.replace(/^http/i,"https");var o=n.securePortsMap[e.port];return o&&(t=t.replace(":"+e.port,":"+o)),t},n.combine=function(r,t){if("number"==typeof t&&(t+=""),t){if(/^(http:\/\/|https:\/\/)/i.test(t)||!r)return t;if("/"!=t.charAt(0)&&(t="/"+t),1==t.length)return r;var o=r.length-1;"/"==r.charAt(o)&&(r=r.substr(0,o));var u=e.urlToObject(r);r=n.removeQuery(r),o=r.length-t.length,o>=0&&r.substr(o).toLowerCase()==t.toLowerCase()&&(r=r.substr(0,o)),r+=t;for(var i in u.query)n.addQueryPart(r,u.query[i])}return r},n.openUrl=function(r,t){if(t)return window.open(r,"_blank");var e=window.open();return e.opener=null,e.referrer=null,e.location=r,e},n.isPageRunOnWebService=function(){return/^http/i.test(window.location.protocol)},n});