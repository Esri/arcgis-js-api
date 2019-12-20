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

define(["require","exports","../../../../core/ObjectPool","../../../../core/libs/gl-matrix-2/vec3","./IdGen"],function(t,r,i,n,e){return function(){function t(r,i,n,e,o,a){this.id=t._idGen.gen(r&&r.id),this.geometry=r,this.material=i,this.transformation=n,this.instanceParameters=e,this.origin=o,this.shaderTransformation=a}return t.prototype.getStaticTransformation=function(){return this.transformation},t.prototype.getShaderTransformation=function(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation},t.prototype.computeAttachmentOrigin=function(t){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(n.vec3.transformMat4(t,t,this.getStaticTransformation()),!0)},t._idGen=new e.IdGen,t.pool=new i(t,!0),t}()});