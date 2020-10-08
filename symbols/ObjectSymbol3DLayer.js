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

define(["require","exports","tslib","../core/maybe","../core/accessorSupport/decorators","./Symbol3DLayer","./support/ObjectSymbol3DLayerResource","./support/Symbol3DAnchorPosition3D","./support/Symbol3DMaterial"],(function(e,t,o,r,i,n,p,s,a){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o.material=null,o.castShadows=!0,o.resource=null,o.type="object",o.width=void 0,o.height=void 0,o.depth=void 0,o.anchor=void 0,o.anchorPosition=void 0,o.heading=void 0,o.tilt=void 0,o.roll=void 0,o}var n;return o.__extends(t,e),n=t,t.prototype.clone=function(){return new n({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:r.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),width:this.width})},Object.defineProperty(t.prototype,"isPrimitive",{get:function(){return!this.resource||"string"!=typeof this.resource.href},enumerable:!1,configurable:!0}),o.__decorate([i.property({type:a.default,json:{write:!0}})],t.prototype,"material",void 0),o.__decorate([i.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],t.prototype,"castShadows",void 0),o.__decorate([i.property({type:p.default,json:{write:!0}})],t.prototype,"resource",void 0),o.__decorate([i.enumeration({Object:"object"},{readOnly:!0})],t.prototype,"type",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"width",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"height",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"depth",void 0),o.__decorate([i.enumeration({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),i.property({json:{default:"origin"}})],t.prototype,"anchor",void 0),o.__decorate([i.property({type:s.Symbol3DAnchorPosition3D,json:{type:[Number],read:{reader:function(e){return new s.Symbol3DAnchorPosition3D({x:e[0],y:e[1],z:e[2]})}},write:{writer:function(e,t){t.anchorPosition=[e.x,e.y,e.z]},overridePolicy:function(){return{enabled:"relative"===this.anchor}}}}})],t.prototype,"anchorPosition",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"heading",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"tilt",void 0),o.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"roll",void 0),o.__decorate([i.property({readOnly:!0,dependsOn:["resource","resource.href"]})],t.prototype,"isPrimitive",null),t=n=o.__decorate([i.subclass("esri.symbols.ObjectSymbol3DLayer")],t)}(n)}));