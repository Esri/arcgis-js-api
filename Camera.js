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

define(["require","exports","tslib","./core/JSONSupport","./core/mathUtils","./core/accessorSupport/decorators","./core/accessorSupport/ensureType","./geometry/Point","./views/3d/support/mathUtils"],(function(e,t,r,o,i,n,s,u,p){"use strict";return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.position=new u([0,0,0]),o.heading=0,o.tilt=0,o.fov=55,o}var o;return r.__extends(t,e),o=t,t.prototype.normalizeCtorArgs=function(e,t,r,o){if(e&&"object"==typeof e&&("x"in e||Array.isArray(e))){var i={position:e};return null!=t&&(i.heading=t),null!=r&&(i.tilt=r),null!=o&&(i.fov=o),i}return e},t.prototype.writePosition=function(e,t,r,o){var i=e.clone();i.x=s.ensureNumber(e.x||0),i.y=s.ensureNumber(e.y||0),i.z=e.hasZ?s.ensureNumber(e.z||0):e.z,t[r]=i.write(null,o)},t.prototype.readPosition=function(e,t){var r=new u;return r.read(e,t),r.x=s.ensureNumber(r.x||0),r.y=s.ensureNumber(r.y||0),r.z=r.hasZ?s.ensureNumber(r.z||0):r.z,r},t.prototype.equals=function(e){return!!e&&(this.tilt===e.tilt&&this.heading===e.heading&&this.fov===e.fov&&this.position.equals(e.position))},t.prototype.clone=function(){return new o({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})},r.__decorate([n.property({type:u,json:{write:{isRequired:!0}}})],t.prototype,"position",void 0),r.__decorate([n.writer("position")],t.prototype,"writePosition",null),r.__decorate([n.reader("position")],t.prototype,"readPosition",null),r.__decorate([n.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),n.cast((function(e){return p.cyclicalDeg.normalize(s.ensureNumber(e))}))],t.prototype,"heading",void 0),r.__decorate([n.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),n.cast((function(e){return i.clamp(s.ensureNumber(e),-180,180)}))],t.prototype,"tilt",void 0),r.__decorate([n.property({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"fov",void 0),t=o=r.__decorate([n.subclass("esri.Camera")],t)}(o.JSONSupport)}));