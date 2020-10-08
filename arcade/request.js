// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../request"],(function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.serviceRequest=void 0,n.serviceRequest=function(e,n,r,t,s){if(void 0===s&&(s=null),null!==s)return s.getToken().then((function(s){if(e=e+="?token="+s,"get"===t.toLowerCase())return o(e,{responseType:"json",query:n});if(n)for(var u in n)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(u)+"="+encodeURIComponent(n[u]);return o(e,{method:"post",query:r,responseType:"json"})}));if("get"===t.toLowerCase())return o(e,{responseType:"json",query:n});if(n)for(var u in n)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(u)+"="+encodeURIComponent(n[u]);return o(e,{method:"post",responseType:"json",query:r})}}));