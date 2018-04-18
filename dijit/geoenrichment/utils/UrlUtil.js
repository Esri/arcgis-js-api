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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/url","esri/config","esri/urlUtils"],function(t,r,e){var n={};return n.getDomain=function(t){if("string"!=typeof t)return null;t=t.replace(/^(http:\/\/|https:\/\/)/i,"");var r=t.indexOf("/");return r<0?t:t.substr(0,r)},n.getProxyUrl=function(t){var o=r.defaults.io.proxyUrl;return o&&!/^http/i.test(o)&&(o=e.getAbsoluteUrl(o)),o&&t&&(o=n.toHttpsUrl(o)),o},n.registerCORS=function(t){var e=n.getDomain(t);e&&-1==r.defaults.io.corsEnabledServers.indexOf(e)&&r.defaults.io.corsEnabledServers.push(e)},n.indexOfQuery=function(t){var r=t.indexOf("?");if(r>=0){var e=t.substr(r+1);if(/^(http:\/\/|https:\/\/)/i.test(e)){var n=e.indexOf("?");r=n>=0?r+1+n:-1}}return r},n.removeQuery=function(t){var r=n.indexOfQuery(t);return r<0?t:t.substr(0,r)},n.addQueryPart=function(t,r){return t+(n.indexOfQuery(t)<0?"?":"&")+r},n.getVariableValue=function(t,r){if(t&&"string"==typeof r){var n=e.urlToObject(t);if(n.query){var o={};return Object.keys(n.query).forEach(function(t){o[t.toLowerCase()]=n.query[t]}),o[r.toLowerCase()]}}},n.addUrlVariable=function(t,r,e){return r=encodeURIComponent(r),e=encodeURIComponent(e),n.addQueryPart(t,r+"="+e)},n.securePortsMap={80:"443",8080:"8443"},n.toHttpUrl=function(t){return!t||/^http/i.test(t)?t:"http://"+t},n.toHttpsUrl=function(r){if(r&&(r=n.toHttpUrl(r)),!r||!/^http:\/\//i.test(r))return r;var e=new t(r);r=r.replace(/^http/i,"https");var o=n.securePortsMap[e.port];return o&&(r=r.replace(":"+e.port,":"+o)),r},n.combine=function(t,r){if("number"==typeof r&&(r+=""),r){if(/^(http:\/\/|https:\/\/)/i.test(r)||!t)return r;if("/"!=r.charAt(0)&&(r="/"+r),1==r.length)return t;var o=t.length-1;"/"==t.charAt(o)&&(t=t.substr(0,o));var u=e.urlToObject(t);t=n.removeQuery(t),o=t.length-r.length,o>=0&&t.substr(o).toLowerCase()==r.toLowerCase()&&(t=t.substr(0,o)),t+=r;for(var i in u.query)n.addQueryPart(t,u.query[i])}return t},n.openUrl=function(t){window.open(t,"_blank")},n.isPageRunOnWebService=function(){return/^http/i.test(window.location.protocol)},n});