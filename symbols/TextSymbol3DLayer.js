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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/lang","../core/accessorSupport/decorators","./Font","./Symbol3DLayer","./support/materialUtils","./support/Symbol3DHalo"],function(e,t,o,r,i,n,s,l,p,a,u){return function(e){function t(t){var o=e.call(this)||this;return o._userSize=void 0,o.halo=null,o.material=null,o.text=void 0,o.type="text",o}o(t,e),p=t,Object.defineProperty(t.prototype,"font",{get:function(){return this._get("font")||null},set:function(e){e&&this._userSize&&(e.size=this._userSize),this._set("font",e)},enumerable:!0,configurable:!0}),t.prototype.writeFont=function(e,t,o,r){var n=i({},r,{textSymbol3D:!0});t.font=e.write({},n),delete t.font.size},Object.defineProperty(t.prototype,"size",{get:function(){return null!=this._userSize?this._userSize:this.font&&null!=this.font.size?this.font.size:9},set:function(e){this._userSize=e,this.font&&(this.font.size=this._userSize),this.notifyChange("size")},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new p({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),font:this.font&&n.clone(this.font),halo:this.halo&&n.clone(this.halo),material:this.material&&this.material.clone(),size:this.size,text:this.text})};var p;return r([s.property({type:l,json:{write:!0}})],t.prototype,"font",null),r([s.writer("font")],t.prototype,"writeFont",null),r([s.property({type:u.default,json:{write:!0}})],t.prototype,"halo",void 0),r([s.property()],t.prototype,"material",void 0),r([s.property(a.screenSizeProperty),s.property({dependsOn:["font.size"]})],t.prototype,"size",null),r([s.property({type:String,json:{write:!0}})],t.prototype,"text",void 0),r([s.enumeration.serializable()({Text:"text"})],t.prototype,"type",void 0),t=p=r([s.subclass("esri.symbols.TextSymbol3DLayer")],t)}(s.declared(p))});