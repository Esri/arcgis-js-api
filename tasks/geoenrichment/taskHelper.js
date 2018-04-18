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

define(["dojo/_base/lang","dojo/Deferred","dojo/json","../../request","../../extend"],function(e,n,r,t,o){var s={invokeMethod:function(e,r,o,s,i,c){function u(){f&&(f.cancel(),f=null)}function a(n){var r;try{r=s(n)}catch(e){return void l(e)}d&&d.resolve(r),e[i](r)}function l(n){d&&d.reject(n),e[c](n)}var f=null,d=null;d=new n(u);try{var v=o?o():{};v.f="json",e.token&&(v.token=e.token),f=t({url:e.url+r,content:v,handleAs:"json"}),f.then(a,l)}catch(e){l(e)}return d.promise},jsonToRest:function(n){var t={};for(var o in n)e.isString(n[o])?t[o]=n[o]:t[o]=r.stringify(n[o]);return t},throwEmptyResponse:function(){throw new Error("Geoenrichment service returned empty response")}};return o("esri.tasks.geoenrichment.taskHelper",s),s});