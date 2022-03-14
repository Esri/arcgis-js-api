// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/Deferred","dojo/json","../../request","../../extend"],(function(n,e,r,t,o){var i={invokeMethod:function(n,r,o,i,s,c){var u=null,a=null;function l(e){a&&a.reject(e),n[c](e)}a=new e((function(){u&&(u.cancel(),u=null)}));try{var f=o?o():{};f.f="json",n.token&&(f.token=n.token),(u=t({url:n.url+r,content:f,handleAs:"json"})).then((function(e){var r;try{r=i(e)}catch(n){return void l(n)}a&&a.resolve(r),n[s](r)}),l)}catch(n){l(n)}return a.promise},jsonToRest:function(e,t){for(var o in t=n.mixin({},t),e)n.isString(e[o])?t[o]=e[o]:t[o]=r.stringify(e[o]);return t},throwEmptyResponse:function(){throw new Error("Geoenrichment service returned empty response")}};return o("esri.tasks.geoenrichment.taskHelper",i),i}));