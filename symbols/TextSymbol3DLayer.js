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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/lang","../core/accessorSupport/decorators","./Font","./Symbol3DLayer","./support/materialUtils","./support/Symbol3DHalo"],function(t,e,o,r,i,n,p,l,a,s,y){return function(t){function e(e){var o=t.call(this)||this;return o.font=null,o.halo=null,o.material=null,o.size=9,o.text=void 0,o.type="text",o}o(e,t),a=e,e.prototype.writeFont=function(t,e,o,r){var n=i({},r,{textSymbol3D:!0});e.font=t.write({},n)},e.prototype.clone=function(){return new a({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),font:this.font&&n.clone(this.font),halo:this.halo&&n.clone(this.halo),material:this.material&&this.material.clone(),size:this.size,text:this.text})};var a;return r([p.property({type:l,json:{write:!0}})],e.prototype,"font",void 0),r([p.writer("font")],e.prototype,"writeFont",null),r([p.property({type:y.default,json:{write:!0}})],e.prototype,"halo",void 0),r([p.property()],e.prototype,"material",void 0),r([p.property(s.screenSizeProperty)],e.prototype,"size",void 0),r([p.property({type:String,json:{write:!0}})],e.prototype,"text",void 0),r([p.enumeration.serializable()({Text:"text"})],e.prototype,"type",void 0),e=a=r([p.subclass("esri.symbols.TextSymbol3DLayer")],e)}(p.declared(a))});