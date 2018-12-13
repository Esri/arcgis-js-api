// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../request"],function(e,n,o,t){function r(e,n,r,s,i){if(void 0===i&&(i=null),null!==i){var u=new o;return i.getToken().then(function(o){try{if(e=e+="?token="+o,"get"===s.toLowerCase())t(e,{responseType:"json",query:n}).then(function(e){u.resolve(e)},function(e){u.reject(e)});else{if(n)for(var i in n)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(i)+"="+encodeURIComponent(n[i]);t(e,{method:"post",query:r,responseType:"json"}).then(function(e){u.resolve(e)},function(e){u.reject(e)})}}catch(e){u.reject(e)}},function(e){u.reject(e)}),u.promise}if("get"===s.toLowerCase())return t(e,{responseType:"json",query:n});if(n)for(var c in n)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(c)+"="+encodeURIComponent(n[c]);return t(e,{method:"post",responseType:"json",query:r})}Object.defineProperty(n,"__esModule",{value:!0}),n.serviceRequest=r});