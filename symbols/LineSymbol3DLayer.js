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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/screenUtils","./Symbol3DLayer","../core/accessorSupport/decorators"],function(e,t,r,o,i,s,p){var a=function(e){function t(t){e.call(this),this.material=null,this.type="Line",this.size=1}return r(t,e),t.prototype.clone=function(){return new t({enabled:this.enabled,material:this.material&&this.material.clone(),size:this.size})},o([p.property()],t.prototype,"material",void 0),o([p.property()],t.prototype,"type",void 0),o([p.property({json:{writable:!0}}),p.cast(i.toPt)],t.prototype,"size",void 0),t=o([p.subclass("esri.symbols.LineSymbol3DLayer")],t)}(p.declared(s));return a});