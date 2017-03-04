// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./promiseUtils"],function(t,e,n,r,i){function u(t,e,u){return r(this,void 0,void 0,function(){return n(this,function(n){switch(n.label){case 0:return[4,i.eachAlways(t.map(function(t,n){return e.apply(u,[t,n])}))];case 1:return n.sent(),[2]}})})}function a(t,e,u){return r(this,void 0,void 0,function(){var r;return n(this,function(n){switch(n.label){case 0:return[4,i.eachAlways(t.map(function(t,n){return e.apply(u,[t,n])}))];case 1:return r=n.sent(),[2,r.map(function(t){return t.value})]}})})}e.forEach=u,e.map=a});