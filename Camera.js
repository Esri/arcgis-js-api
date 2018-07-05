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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/accessorSupport/decorators","./geometry/Point","./views/3d/support/mathUtils"],function(t,e,o,r,i,n,p,s){return function(t){function e(e,o,r,i){var n=t.call(this)||this;return n.position=null,n.heading=0,n.tilt=0,n.fov=55,n}o(e,t),i=e,e.prototype.getDefaults=function(t){if(!t.position)return{position:new p([0,0,0])}},e.prototype.normalizeCtorArgs=function(t,e,o,r){if(t&&"object"==typeof t&&("x"in t||Array.isArray(t))){var i={position:t};return null!=e&&(i.heading=e),null!=o&&(i.tilt=o),null!=r&&(i.fov=r),i}return t},e.prototype.equals=function(t){return!!t&&(this.tilt===t.tilt&&this.heading===t.heading&&this.fov===t.fov&&this.position.equals(t.position))},e.prototype.clone=function(){return new i({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})};var i;return r([n.property({type:p,json:{write:{isRequired:!0}}})],e.prototype,"position",void 0),r([n.property({type:Number,json:{write:{isRequired:!0}}}),n.cast(s.cyclicalDeg.normalize)],e.prototype,"heading",void 0),r([n.property({type:Number,json:{write:{isRequired:!0}}}),n.cast(function(t){return s.clamp(t,-180,180)})],e.prototype,"tilt",void 0),r([n.property({json:{read:!1,write:!1}})],e.prototype,"fov",void 0),e=i=r([n.subclass("esri.Camera")],e)}(n.declared(i))});