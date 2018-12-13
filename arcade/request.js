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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../request"],function(e,n,t,o){"use strict";function a(e,n,a,c,r){if(void 0===r&&(r=null),null!==r){var l=new t;return r.getToken().then(function(t){try{if(e=e+="?token="+t,"get"===c.toLowerCase())o({url:e,disableIdentityLookup:!0,handleAs:"json",callbackParamName:"callback",content:n}).then(function(e){l.resolve({data:e})},function(e){l.reject(e)});else{if(n)for(var r in n)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(r)+"="+encodeURIComponent(n[r]);o({url:e,disableIdentityLookup:!0,callbackParamName:"callback",content:a,handleAs:"json"},{usePost:!0}).then(function(e){l.resolve({data:e})},function(e){l.reject(e)})}}catch(e){l.reject(e)}},function(e){l.reject(e)}),l.promise}if("get"===c.toLowerCase()){var i=new t;return o({url:e,disableIdentityLookup:!0,callbackParamName:"callback",handleAs:"json",content:n}).then(function(e){i.resolve({data:e})},function(e){i.reject(e)}),i.promise}if(n)for(var s in n)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(s)+"="+encodeURIComponent(n[s]);var u=new t;return o({url:e,disableIdentityLookup:!0,callbackParamName:"callback",handleAs:"json",content:a},{usePost:!0}).then(function(e){u.resolve({data:e})},function(e){u.reject(e)}),u.promise}Object.defineProperty(n,"__esModule",{value:!0}),n.serviceRequest=a});