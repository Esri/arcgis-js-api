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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/gl-matrix","./viewUtils"],function(i,t,e,r){return function(){function i(){this.origin=e.vec3f64.create(),this.start=e.vec3f64.create(),this.end=e.vec3f64.create()}return i.prototype.update=function(i,t,c){if(e.vec3.copy(this.start,i),e.vec3.copy(this.end,t),c)switch(c){case"start":e.vec3.copy(this.origin,this.start);break;case"center":r.midpoint([i,t],this.origin);break;case"end":e.vec3.copy(this.origin,this.end);break;default:e.vec3.copy(this.origin,c)}else r.midpoint([i,t],this.origin)},i}()});