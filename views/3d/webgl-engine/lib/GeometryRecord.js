// COPYRIGHT © 2016 Esri
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

define(["require","exports","./IdGen"],function(t,n,r){var i=function(){function t(n,r,i,o,e,a){this.id=t._idGen.gen(n.getId()),this.geometry=n,this.materials=r,this.transformation=i,this.instanceParameters=o,this.origin=e,this.customTransformation=a}return t.prototype.getId=function(){return this.id},t.prototype.getStaticTransformation=function(){return this.transformation},t.prototype.getShaderTransformation=function(){return this.customTransformation?this.customTransformation(this.transformation):this.transformation},t.replaceGeometry=function(n,r){return new t(r,n.materials,n.transformation,n.instanceParameters,n.origin,n.customTransformation)},t.replaceMaterials=function(n,r){return new t(n.geometry,r.slice(0),n.transformation,n.instanceParameters,n.origin,n.customTransformation)},t._idGen=new r,t}();return i});