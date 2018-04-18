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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/accessorSupport/decorators","./Symbol3DLayer","./support/materialUtils","./support/Symbol3DHalo"],function(t,e,o,r,n,i,p,l,a){return function(t){function e(e){var o=t.call(this)||this;return o.font=null,o.halo=null,o.material=null,o.size=void 0,o.text=void 0,o.type="text",o}return o(e,t),p=e,e.prototype.writeFont=function(t,e){t&&(e.font=n.clone(t))},e.prototype.clone=function(){return new p({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),font:this.font&&n.clone(this.font),halo:this.halo&&n.clone(this.halo),material:this.material&&this.material.clone(),size:this.size,text:this.text})},r([i.property()],e.prototype,"font",void 0),r([i.writer("font",{"font.family":{type:String},"font.weight":{type:String},"font.style":{type:String},"font.decoration":{type:String},"font.size":{type:Number}})],e.prototype,"writeFont",null),r([i.property({type:a.default,json:{write:!0}})],e.prototype,"halo",void 0),r([i.property()],e.prototype,"material",void 0),r([i.property(l.screenSizeProperty)],e.prototype,"size",void 0),r([i.property({type:String,json:{write:!0}})],e.prototype,"text",void 0),r([i.property()],e.prototype,"type",void 0),e=p=r([i.subclass("esri.symbols.TextSymbol3DLayer")],e);var p}(i.declared(p))});