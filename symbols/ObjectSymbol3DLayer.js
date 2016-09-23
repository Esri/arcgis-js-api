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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Symbol3DLayer","./support/Symbol3DResource","../core/accessorSupport/decorators"],function(e,t,r,o,i,p,s){var h=function(e){function t(t){e.call(this),this.material=null,this.resource=null,this.type="Object",this.width=void 0,this.height=void 0,this.depth=void 0,this.anchor=void 0,this.heading=void 0}return r(t,e),t.prototype.clone=function(){return new t({heading:this.heading,anchor:this.anchor,depth:this.depth,enabled:this.enabled,height:this.height,material:this.material&&this.material.clone(),resource:this.resource&&this.resource.clone(),width:this.width})},o([s.property()],t.prototype,"material",void 0),o([s.property({type:p["default"],json:{writable:!0}})],t.prototype,"resource",void 0),o([s.property()],t.prototype,"type",void 0),o([s.property({json:{writable:!0}})],t.prototype,"width",void 0),o([s.property({json:{writable:!0}})],t.prototype,"height",void 0),o([s.property({json:{writable:!0}})],t.prototype,"depth",void 0),o([s.property({json:{writable:!0}})],t.prototype,"anchor",void 0),o([s.property({json:{writable:!0}})],t.prototype,"heading",void 0),t=o([s.subclass("esri.symbols.ObjectSymbol3DLayer")],t)}(s.declared(i));return h});