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

define(["require","exports","esri/urlUtils","dojo/_base/url"],function(e,r,n,t){function i(e){return n.normalize(e)}function o(e){return U.test(e)}function s(e){return u(e)||a(e)}function u(e){return e&&"/"===e[0]&&"/"===e[1]}function a(e){return g.test(e)}function l(e){return n.urlToObject(e)}function p(e){return"string"==typeof e?new t(c(e)):(e.scheme||(e.scheme=r.appUrl.scheme),e)}function c(e,n){return void 0===n&&(n=r.appBaseUrl),u(e)?"file"===r.appUrl.scheme?"https:"+e:r.appUrl.scheme+":"+e:a(e)?e:m("/"===e[0]?f(n):n,e)}function f(e){var r=e.indexOf("//"),n=e.indexOf("/",r+2);return-1===n?e:e.slice(0,n)}function h(e,r,n){void 0===n&&(n=!1);var t=p(e),i=p(r);return n||t.scheme===i.scheme?t.host.toLowerCase()===i.host.toLowerCase()&&t.port===i.port:!1}function m(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];if(e&&e.length){var n=[];if(s(e[0])){var t=e[0],i=t.indexOf("//");n.push(t.slice(0,i+1)),o(e[0])&&(n[0]+="/"),e[0]=t.slice(i+2)}else"/"===e[0][0]&&n.push("");for(var u=e.reduce(function(e,r){return e.concat(r.split("/"))},[]),a=0;a<u.length;a++){var l=u[a];".."===l&&n.length>0?n.pop():!l||"."===l&&0!==n.length||n.push(l)}return n.join("/")}}r.normalize=i;var v=Function("return this")();r.appUrl=new t(v.location),r.appBaseUrl=function(){var e=r.appUrl.path,n=e.substring(0,e.lastIndexOf(e.split("/")[e.split("/").length-1])),t=r.appUrl.scheme+"://"+r.appUrl.host+(null!=r.appUrl.port?":"+r.appUrl.port:"");return""+t+n}();var U=/^\s*file:/i,g=/^\s*[a-z][a-z0-9-+.]*:[^0-9]/i;r.isAbsolute=s,r.urlToObject=l,r.makeAbsolute=c,r.hasSameOrigin=h,r.join=m});