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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./Edges3D"],function(e,r,t,o,s,c){return function(e){function r(r){var t=e.call(this)||this;return t.type="sketch",t}t(r,e),c=r,r.prototype.clone=function(){return new c(this.cloneProperties())};var c;return o([s.property({type:["sketch"]})],r.prototype,"type",void 0),r=c=o([s.subclass("esri.symbols.edges.SketchEdges3D")],r)}(s.declared(c))});