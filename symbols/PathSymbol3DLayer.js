// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/maybe","../core/accessorSupport/decorators","./Symbol3DLayer","./support/Symbol3DMaterial"],(function(t,e,o,r,i,p,a){"use strict";return function(t){function e(e){var o=t.call(this,e)||this;return o.material=null,o.castShadows=!0,o.type="path",o.profile="circle",o.join="miter",o.cap="butt",o.width=void 0,o.height=void 0,o.anchor="center",o.profileRotation="all",o}var p;return o.__extends(e,t),p=e,Object.defineProperty(e.prototype,"size",{get:function(){return this.width&&this.height?this.width===this.height?this.width:void 0:this.width?this.width:this.height?this.height:void 0},set:function(t){this.width=t,this.height=t},enumerable:!1,configurable:!0}),e.prototype.readSize=function(t,e){return e.height||e.width?t:e.size},e.prototype.clone=function(){return new p({enabled:this.enabled,material:r.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,anchor:this.anchor})},o.__decorate([i.property({type:a.default,json:{write:!0}})],e.prototype,"material",void 0),o.__decorate([i.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],e.prototype,"castShadows",void 0),o.__decorate([i.enumeration({Path:"path"},{readOnly:!0})],e.prototype,"type",void 0),o.__decorate([i.property({type:Number})],e.prototype,"size",null),o.__decorate([i.reader("size")],e.prototype,"readSize",null),o.__decorate([i.property({type:["circle","quad"],json:{write:!0,default:"circle"}})],e.prototype,"profile",void 0),o.__decorate([i.property({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],e.prototype,"join",void 0),o.__decorate([i.property({type:["none","butt","square","round"],json:{write:!0,default:"butt"}})],e.prototype,"cap",void 0),o.__decorate([i.property({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],e.prototype,"width",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],e.prototype,"height",void 0),o.__decorate([i.property({type:["center","bottom","top"],json:{write:!0,default:"center"}})],e.prototype,"anchor",void 0),o.__decorate([i.property({type:["heading","all"],json:{write:!0,default:"all"}})],e.prototype,"profileRotation",void 0),e=p=o.__decorate([i.subclass("esri.symbols.PathSymbol3DLayer")],e)}(p)}));