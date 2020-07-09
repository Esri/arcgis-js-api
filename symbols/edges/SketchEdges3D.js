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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./Edges3D"],(function(e,t,r,o,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.type="sketch",r}var s;return r.__extends(t,e),s=t,t.prototype.clone=function(){return new s(this.cloneProperties())},r.__decorate([o.property({type:["sketch"]})],t.prototype,"type",void 0),t=s=r.__decorate([o.subclass("esri.symbols.edges.SketchEdges3D")],t)}(s)}));