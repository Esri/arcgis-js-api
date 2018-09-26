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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./viewUtils","../../../lib/gl-matrix"],function(t,e,i,s){return function(){function t(){this.origin=s.vec3d.create(),this.start=s.vec3d.create(),this.end=s.vec3d.create()}return t.prototype.update=function(t,e,r){if(s.vec3d.set(t,this.start),s.vec3d.set(e,this.end),r)switch(r){case"start":s.vec3d.set(this.start,this.origin);break;case"center":i.midpoint([t,e],this.origin);break;case"end":s.vec3d.set(this.end,this.origin);break;default:s.vec3d.set(r,this.origin)}else i.midpoint([t,e],this.origin)},t}()});