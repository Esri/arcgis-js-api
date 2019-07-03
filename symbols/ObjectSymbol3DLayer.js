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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/maybe","../core/accessorSupport/decorators","./Symbol3DLayer","./support/ObjectSymbol3DLayerResource","./support/Symbol3DAnchorPosition3D","./support/Symbol3DMaterial"],function(e,o,t,r,i,n,p,s,a,l){return function(e){function o(o){var t=e.call(this)||this;return t.material=null,t.castShadows=!0,t.resource=null,t.type="object",t.width=void 0,t.height=void 0,t.depth=void 0,t.anchor=void 0,t.anchorPosition=void 0,t.heading=void 0,t.tilt=void 0,t.roll=void 0,t}t(o,e),p=o,o.prototype.clone=function(){return new p({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),height:this.height,material:i.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),width:this.width})},Object.defineProperty(o.prototype,"isPrimitive",{get:function(){return!this.resource||"string"!=typeof this.resource.href},enumerable:!0,configurable:!0});var p;return r([n.property({type:l.default,json:{write:!0}})],o.prototype,"material",void 0),r([n.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],o.prototype,"castShadows",void 0),r([n.property({type:s.default,json:{write:!0}})],o.prototype,"resource",void 0),r([n.enumeration.serializable()({Object:"object"})],o.prototype,"type",void 0),r([n.property({type:Number,json:{write:!0}})],o.prototype,"width",void 0),r([n.property({type:Number,json:{write:!0}})],o.prototype,"height",void 0),r([n.property({type:Number,json:{write:!0}})],o.prototype,"depth",void 0),r([n.enumeration.serializable()({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),n.property({json:{default:"origin"}})],o.prototype,"anchor",void 0),r([n.property({type:a.Symbol3DAnchorPosition3D,json:{type:[Number],read:{reader:function(e){return new a.Symbol3DAnchorPosition3D({x:e[0],y:e[1],z:e[2]})}},write:{writer:function(e,o){o.anchorPosition=[e.x,e.y,e.z]},overridePolicy:function(){return{enabled:"relative"===this.anchor}}}}})],o.prototype,"anchorPosition",void 0),r([n.property({type:Number,json:{write:!0}})],o.prototype,"heading",void 0),r([n.property({type:Number,json:{write:!0}})],o.prototype,"tilt",void 0),r([n.property({type:Number,json:{write:!0}})],o.prototype,"roll",void 0),r([n.property({readOnly:!0,dependsOn:["resource","resource.href"]})],o.prototype,"isPrimitive",null),o=p=r([n.subclass("esri.symbols.ObjectSymbol3DLayer")],o)}(n.declared(p))});