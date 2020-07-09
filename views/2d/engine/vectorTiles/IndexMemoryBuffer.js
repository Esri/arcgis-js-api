// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","./MemoryBuffer"],(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){return e.call(this,12)||this}return r.__extends(t,e),t.prototype.add=function(e,t,r){var n=this.array;n.push(e),n.push(t),n.push(r)},t}(n);t.TriangleIndexBuffer=u;var i=function(e){function t(){return e.call(this,4)||this}return r.__extends(t,e),t.prototype.add=function(e){this.array.push(e)},t}(n);t.PointElementMemoryBuffer=i}));