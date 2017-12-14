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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./geometry/Point","./views/3d/support/mathUtils","./core/accessorSupport/decorators"],function(t,o,e,r,i,n,p,s){var u=function(t){function o(o,e,r,i){var n=t.call(this)||this;return n.position=null,n.heading=0,n.tilt=0,n.fov=55,n}return e(o,t),i=o,o.prototype.getDefaults=function(t){return t.position?void 0:{position:new n([0,0,0])}},o.prototype.normalizeCtorArgs=function(t,o,e,r){var i=t&&"object"==typeof t&&("x"in t||Array.isArray(t));if(i){var n={position:t};return null!=o&&(n.heading=o),null!=e&&(n.tilt=e),null!=r&&(n.fov=r),n}return t},o.prototype.equals=function(t){return t?this.tilt===t.tilt&&this.heading===t.heading&&this.fov===t.fov&&this.position.equals(t.position):!1},o.prototype.clone=function(){return new i({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})},r([s.property({type:n,json:{write:{isRequired:!0}}})],o.prototype,"position",void 0),r([s.property({type:Number,json:{write:{isRequired:!0}}}),s.cast(p.cyclicalDeg.normalize)],o.prototype,"heading",void 0),r([s.property({type:Number,json:{write:{isRequired:!0}}}),s.cast(function(t){return p.clamp(t,-180,180)})],o.prototype,"tilt",void 0),r([s.property({json:{read:!1,write:!1}})],o.prototype,"fov",void 0),o=i=r([s.subclass("esri.Camera")],o);var i}(s.declared(i));return u});