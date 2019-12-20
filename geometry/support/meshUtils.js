// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/promiseUtils","../Mesh","./meshUtils/georeference","./meshUtils/merge"],function(e,r,t,n,i,o,c,u){function s(r,o,c){return n(this,void 0,void 0,function(){var n;return t(this,function(t){switch(t.label){case 0:return[4,i.create(function(r){return e(["./meshUtils/elevation"],r)})];case 1:return n=t.sent(),[2,n.create(r,o,c)]}})})}function a(r,o){return n(this,void 0,void 0,function(){var n;return t(this,function(t){switch(t.label){case 0:return[4,i.create(function(r){return e(["./meshUtils/elevationSampler"],r)})];case 1:return n=t.sent(),[2,n.create(r,o)]}})})}function f(e,r,t){return c.georeference(e,r,t)}function l(e,r,t){return c.ungeoreference(e,r,t)}function h(e){return new o(u.merge(e))}Object.defineProperty(r,"__esModule",{value:!0}),r.createFromElevation=s,r.createElevationSampler=a,r.georeference=f,r.ungeoreference=l,r.merge=h});