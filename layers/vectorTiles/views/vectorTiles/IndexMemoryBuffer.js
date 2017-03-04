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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./MemoryBuffer"],function(r,e,t,n,o){var u=function(r){function e(){return r.call(this,12)||this}return t(e,r),e.prototype.add=function(r,e,t){var n=this.array;n.push(r),n.push(e),n.push(t)},e}(o);e.TriangleElementMemoryBuffer=u;var i=function(r){function e(){return r.call(this,4)||this}return t(e,r),e.prototype.add=function(r){this.array.push(r)},e}(o);e.PointElementMemoryBuffer=i});