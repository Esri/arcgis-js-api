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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Symbol3DLayer","../core/accessorSupport/decorators"],function(e,r,t,o,i,s){var p=function(e){function r(r){e.call(this),this.type="Extrude",this.size=void 0,this.material=null}return t(r,e),r.prototype.clone=function(){return new r({enabled:this.enabled,material:this.material&&this.material.clone(),size:this.size})},o([s.property()],r.prototype,"type",void 0),o([s.property({json:{writable:!0}})],r.prototype,"size",void 0),o([s.property()],r.prototype,"material",void 0),r=o([s.subclass("esri.symbols.ExtrudeSymbol3DLayer")],r)}(s.declared(i));return p});