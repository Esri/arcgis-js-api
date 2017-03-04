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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","../core/screenUtils","./Symbol3DLayer","../core/accessorSupport/decorators"],function(t,e,o,r,i,n,p,s){var l=a=function(t){function e(e){var o=t.call(this)||this;return o.font=null,o.material=null,o.size=void 0,o.text=void 0,o.type="Text",o}return o(e,t),e.prototype.writeFont=function(t,e){t&&(e.font=i.clone(t))},e.prototype.clone=function(){return new a({enabled:this.enabled,font:this.font&&i.clone(this.font),material:this.material&&this.material.clone(),size:this.size,text:this.text})},e}(s.declared(p));r([s.property()],l.prototype,"font",void 0),r([s.writer("font")],l.prototype,"writeFont",null),r([s.property()],l.prototype,"material",void 0),r([s.property({json:{write:!0}}),s.cast(n.toPt)],l.prototype,"size",void 0),r([s.property({json:{write:!0}})],l.prototype,"text",void 0),r([s.property()],l.prototype,"type",void 0),l=a=r([s.subclass("esri.symbols.TextSymbol3DLayer")],l);var a;return l});