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

define(["require","exports","../request"],function(e,n,t){"use strict";function a(e,n,a,o,r){if(void 0===r&&(r=null),null!==r)return r.getToken().then(function(r){if(e=e+="?token="+r,"get"===o.toLowerCase())return t({url:e,disableIdentityLookup:!0,handleAs:"json",callbackParamName:"callback",content:n}).then(function(e){return{data:e}});if(n)for(var c in n)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(c)+"="+encodeURIComponent(n[c]);return t({url:e,disableIdentityLookup:!0,callbackParamName:"callback",content:a,handleAs:"json"},{usePost:!0}).then(function(e){return{data:e}})});if("get"===o.toLowerCase())return t({url:e,disableIdentityLookup:!0,callbackParamName:"callback",handleAs:"json",content:n}).then(function(e){return{data:e}});if(n)for(var c in n)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(c)+"="+encodeURIComponent(n[c]);return t({url:e,disableIdentityLookup:!0,callbackParamName:"callback",handleAs:"json",content:a},{usePost:!0}).then(function(e){return{data:e}})}Object.defineProperty(n,"__esModule",{value:!0}),n.serviceRequest=a});