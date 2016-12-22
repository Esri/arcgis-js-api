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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Symbol3DLayer","./support/Symbol3DOutline","../core/accessorSupport/decorators"],function(e,t,r,o,l,i,n){var p=function(e){function t(t){e.call(this),this.type="Fill",this.material=null,this.outline=null}return r(t,e),t.prototype.clone=function(){return new t({enabled:this.enabled,material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone()})},o([n.property()],t.prototype,"type",void 0),o([n.property()],t.prototype,"material",void 0),o([n.property({type:i["default"],json:{writable:!0}})],t.prototype,"outline",void 0),t=o([n.subclass("esri.symbols.FillSymbol3DLayer")],t)}(n.declared(l));return p});