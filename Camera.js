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

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/mathUtils","./core/accessorSupport/decorators","./core/accessorSupport/ensureType","./geometry/Point","./views/3d/support/mathUtils"],function(e,t,r,o,i,n,s,u,p,l){return function(e){function t(t,r,o,i){var n=e.call(this)||this;return n.position=new p([0,0,0]),n.heading=0,n.tilt=0,n.fov=55,n}r(t,e),i=t,t.prototype.normalizeCtorArgs=function(e,t,r,o){if(e&&"object"==typeof e&&("x"in e||Array.isArray(e))){var i={position:e};return null!=t&&(i.heading=t),null!=r&&(i.tilt=r),null!=o&&(i.fov=o),i}return e},t.prototype.writePosition=function(e,t,r,o){var i=e.clone();i.x=u.ensureNumber(e.x||0),i.y=u.ensureNumber(e.y||0),i.z=e.hasZ?u.ensureNumber(e.z||0):e.z,t[r]=i.write(null,o)},t.prototype.readPosition=function(e,t){var r=new p;return r.read(e,t),r.x=u.ensureNumber(r.x||0),r.y=u.ensureNumber(r.y||0),r.z=r.hasZ?u.ensureNumber(r.z||0):r.z,r},t.prototype.equals=function(e){return!!e&&(this.tilt===e.tilt&&this.heading===e.heading&&this.fov===e.fov&&this.position.equals(e.position))},t.prototype.clone=function(){return new i({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})};var i;return o([s.property({type:p,json:{write:{isRequired:!0}}})],t.prototype,"position",void 0),o([s.writer("position")],t.prototype,"writePosition",null),o([s.reader("position")],t.prototype,"readPosition",null),o([s.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),s.cast(function(e){return l.cyclicalDeg.normalize(u.ensureNumber(e))})],t.prototype,"heading",void 0),o([s.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),s.cast(function(e){return n.clamp(u.ensureNumber(e),-180,180)})],t.prototype,"tilt",void 0),o([s.property({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"fov",void 0),t=i=o([s.subclass("esri.Camera")],t)}(s.declared(i))});