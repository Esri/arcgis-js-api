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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/promiseUtils","../Mesh","./meshUtils/georeference","./meshUtils/merge"],function(e,r,n,t,o,i,c,u){function s(r,i,c){return t(this,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return[4,o.create(function(r){return e(["./meshUtils/elevation"],r)})];case 1:return t=n.sent(),[2,t.create(r,i,c)]}})})}function f(e,r,n){return c.georeference(e,r,n)}function a(e,r,n){return c.ungeoreference(e,r,n)}function l(e){return new i(u.merge(e))}Object.defineProperty(r,"__esModule",{value:!0}),r.createFromElevation=s,r.georeference=f,r.ungeoreference=a,r.merge=l});