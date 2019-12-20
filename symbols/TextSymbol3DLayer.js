// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/lang","../core/maybe","../core/accessorSupport/decorators","./Font","./Symbol3DLayer","./support/materialUtils","./support/Symbol3DHalo","./support/Symbol3DMaterial"],function(e,t,o,r,n,i,l,s,p,a,u,c,f){function y(e,t){return e&&t>0?{color:i.clone(e),size:t}:null}return function(e){function t(t){var o=e.call(this,t)||this;return o._userSize=void 0,o.halo=null,o.material=null,o.text=void 0,o.type="text",o}o(t,e),a=t,Object.defineProperty(t.prototype,"font",{get:function(){return this._get("font")||null},set:function(e){e&&this._userSize&&(e.size=this._userSize),this._set("font",e)},enumerable:!0,configurable:!0}),t.prototype.writeFont=function(e,t,o,r){var i=n({},r,{textSymbol3D:!0});t.font=e.write({},i),delete t.font.size},Object.defineProperty(t.prototype,"size",{get:function(){return null!=this._userSize?this._userSize:this.font&&null!=this.font.size?this.font.size:9},set:function(e){this._userSize=e,this.font&&(this.font.size=this._userSize),this.notifyChange("size")},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new a({enabled:this.enabled,font:this.font&&i.clone(this.font),halo:this.halo&&i.clone(this.halo),material:l.isSome(this.material)?this.material.clone():null,size:this.size,text:this.text})},t.fromTextSymbol=function(e){var t=y(e.haloColor,e.haloSize),o=e.font?e.font.clone():new p;return new a({size:o.size,font:o,halo:t,material:e.color?{color:e.color.clone()}:null,text:e.text})};var a;return r([s.property({type:p,json:{write:!0}})],t.prototype,"font",null),r([s.writer("font")],t.prototype,"writeFont",null),r([s.property({type:c.default,json:{write:!0}})],t.prototype,"halo",void 0),r([s.property({type:f.default,json:{write:!0}})],t.prototype,"material",void 0),r([s.property(u.screenSizeProperty),s.property({dependsOn:["font.size"]})],t.prototype,"size",null),r([s.property({type:String,json:{write:!0}})],t.prototype,"text",void 0),r([s.enumeration.serializable()({Text:"text"})],t.prototype,"type",void 0),t=a=r([s.subclass("esri.symbols.TextSymbol3DLayer")],t)}(s.declared(a))});