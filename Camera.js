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

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/accessorSupport/decorators","./core/accessorSupport/ensureType","./geometry/Point","./views/3d/support/mathUtils"],function(e,r,t,o,i,n,s,u,p){return function(e){function r(r,t,o,i){var n=e.call(this)||this;return n.position=new u([0,0,0]),n.heading=0,n.tilt=0,n.fov=55,n}t(r,e),i=r,r.prototype.normalizeCtorArgs=function(e,r,t,o){if(e&&"object"==typeof e&&("x"in e||Array.isArray(e))){var i={position:e};return null!=r&&(i.heading=r),null!=t&&(i.tilt=t),null!=o&&(i.fov=o),i}return e},r.prototype.writePosition=function(e,r,t,o){var i=e.clone();i.x=s.ensureNumber(e.x||0),i.y=s.ensureNumber(e.y||0),i.z=e.hasZ?s.ensureNumber(e.z||0):e.z,r[t]=i.write(null,o)},r.prototype.readPosition=function(e,r){var t=new u;return t.read(e,r),t.x=s.ensureNumber(t.x||0),t.y=s.ensureNumber(t.y||0),t.z=t.hasZ?s.ensureNumber(t.z||0):t.z,t},r.prototype.equals=function(e){return!!e&&(this.tilt===e.tilt&&this.heading===e.heading&&this.fov===e.fov&&this.position.equals(e.position))},r.prototype.clone=function(){return new i({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})};var i;return o([n.property({type:u,json:{write:{isRequired:!0}}})],r.prototype,"position",void 0),o([n.writer("position")],r.prototype,"writePosition",null),o([n.reader("position")],r.prototype,"readPosition",null),o([n.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),n.cast(function(e){return p.cyclicalDeg.normalize(s.ensureNumber(e))})],r.prototype,"heading",void 0),o([n.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),n.cast(function(e){return p.clamp(s.ensureNumber(e),-180,180)})],r.prototype,"tilt",void 0),o([n.property({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"fov",void 0),r=i=o([n.subclass("esri.Camera")],r)}(n.declared(i))});