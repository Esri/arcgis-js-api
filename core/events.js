// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define([],(function(){return{on:function(e,n,r){if(!function(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(n,r);if(Array.isArray(n)){for(var t=n.slice(),o=0;o<t.length;o++){var i=t[o];e.addEventListener(i,r)}return{remove:function(){for(var n=0;n<t.length;n++){var o=t[n];e.removeEventListener(o,r)}}}}return e.addEventListener(n,r),{remove:function(){e.removeEventListener(n,r)}}}}}));