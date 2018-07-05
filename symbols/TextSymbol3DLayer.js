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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/lang","../core/accessorSupport/decorators","./Font","./Symbol3DLayer","./support/materialUtils","./support/Symbol3DHalo"],function(t,e,o,r,i,p,n,l,s,a,y){return function(t){function e(e){var o=t.call(this)||this;return o.font=null,o.halo=null,o.material=null,o.size=9,o.text=void 0,o.type="text",o}o(e,t),s=e,e.prototype.writeFont=function(t,e,o,r){var p=i({},r,{textSymbol3D:!0});e.font=t.write({},p)},e.prototype.clone=function(){return new s({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),font:this.font&&p.clone(this.font),halo:this.halo&&p.clone(this.halo),material:this.material&&this.material.clone(),size:this.size,text:this.text})};var s;return r([n.property({type:l,json:{write:!0}})],e.prototype,"font",void 0),r([n.writer("font")],e.prototype,"writeFont",null),r([n.property({type:y.default,json:{write:!0}})],e.prototype,"halo",void 0),r([n.property()],e.prototype,"material",void 0),r([n.property(a.screenSizeProperty)],e.prototype,"size",void 0),r([n.property({type:String,json:{write:!0}})],e.prototype,"text",void 0),r([n.property()],e.prototype,"type",void 0),e=s=r([n.subclass("esri.symbols.TextSymbol3DLayer")],e)}(n.declared(s))});