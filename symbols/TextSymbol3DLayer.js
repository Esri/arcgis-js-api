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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","../core/screenUtils","./Symbol3DLayer","../core/accessorSupport/decorators"],function(t,e,o,r,i,n,p,s){var l=function(t){function e(e){t.call(this),this.font=null,this.material=null,this.size=void 0,this.text=void 0,this.type="Text"}return o(e,t),e.prototype.writeFont=function(t,e){t&&(e.font=i.clone(t))},e.prototype.clone=function(){return new e({enabled:this.enabled,font:this.font&&i.clone(this.font),material:this.material&&this.material.clone(),size:this.size,text:this.text})},r([s.property()],e.prototype,"font",void 0),r([s.write("font")],e.prototype,"writeFont",null),r([s.property()],e.prototype,"material",void 0),r([s.property({json:{writable:!0}}),s.cast(n.toPt)],e.prototype,"size",void 0),r([s.property({json:{writable:!0}})],e.prototype,"text",void 0),r([s.property()],e.prototype,"type",void 0),e=r([s.subclass("esri.symbols.TextSymbol3DLayer")],e)}(s.declared(p));return l});