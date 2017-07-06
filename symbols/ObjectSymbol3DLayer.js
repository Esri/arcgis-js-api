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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/kebabDictionary","./Symbol3DLayer","./support/Symbol3DMaterial","./support/Symbol3DResource","../core/accessorSupport/decorators"],function(e,t,r,o,i,p,n,s,l){var a=i({center:"center",bottom:"bottom",origin:"origin"},{ignoreUnknown:!0}),d=h=function(e){function t(t){var r=e.call(this)||this;return r.material=null,r.resource=null,r.type="object",r.width=void 0,r.height=void 0,r.depth=void 0,r.anchor=void 0,r.heading=void 0,r.tilt=void 0,r.roll=void 0,r}return r(t,e),t.prototype.clone=function(){return new h({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,depth:this.depth,enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),height:this.height,material:this.material&&this.material.clone(),resource:this.resource&&this.resource.clone(),width:this.width})},Object.defineProperty(t.prototype,"isPrimitive",{get:function(){return!this.resource||"string"!=typeof this.resource.href},enumerable:!0,configurable:!0}),t}(l.declared(p));o([l.property({type:n["default"]})],d.prototype,"material",void 0),o([l.property({type:s["default"],json:{write:!0}})],d.prototype,"resource",void 0),o([l.property()],d.prototype,"type",void 0),o([l.property({json:{write:!0}})],d.prototype,"width",void 0),o([l.property({json:{write:!0}})],d.prototype,"height",void 0),o([l.property({json:{write:!0}})],d.prototype,"depth",void 0),o([l.property({type:String,json:{read:a.read,write:a.write}})],d.prototype,"anchor",void 0),o([l.property({json:{write:!0}})],d.prototype,"heading",void 0),o([l.property({json:{write:!0}})],d.prototype,"tilt",void 0),o([l.property({json:{write:!0}})],d.prototype,"roll",void 0),o([l.property({readOnly:!0,dependsOn:["resource","resource.href"]})],d.prototype,"isPrimitive",null),d=h=o([l.subclass("esri.symbols.ObjectSymbol3DLayer")],d);var h;return d});