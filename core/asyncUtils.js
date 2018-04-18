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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./promiseUtils"],function(e,t,r,n,u){function i(e,t,i){return n(this,void 0,void 0,function(){return r(this,function(r){switch(r.label){case 0:return[4,u.eachAlways(e.map(function(e,r){return t.apply(i,[e,r])}))];case 1:return r.sent(),[2]}})})}function a(e,t,i){return n(this,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return[4,u.eachAlways(e.map(function(e,r){return t.apply(i,[e,r])}))];case 1:return n=r.sent(),[2,n.map(function(e){return e.value})]}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.forEach=i,t.map=a});