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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/lang","./geometry/Point","./views/3d/support/mathUtils","./core/accessorSupport/decorators"],function(t,o,i,r,e,n,p,s,a){var l=function(t){function o(o){var i=t.call(this)||this;return i.position=null,i.heading=0,i.tilt=0,i.fov=55,i}return i(o,t),e=o,o.prototype.getDefaults=function(t){return t.position?void 0:{position:new p([0,0,0])}},o.prototype.normalizeCtorArgs=function(t,o,i,r){var e=t&&"object"==typeof t&&("x"in t||Array.isArray(t));if(e){var n={position:t};return null!=o&&(n.heading=o),null!=i&&(n.tilt=i),null!=r&&(n.fov=r),n}return t},o.prototype.equals=function(t){return t?this.tilt===t.tilt&&this.heading===t.heading&&this.fov===t.fov&&this.position.equals(t.position):!1},o.prototype.clone=function(){return new e({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})},o.prototype.toJSON=function(){var t={position:this.position.toJSON(),heading:this.heading,tilt:this.tilt};return n.fixJson(t)},r([a.property({type:p})],o.prototype,"position",void 0),r([a.property(),a.cast(s.cyclicalDeg.normalize)],o.prototype,"heading",void 0),r([a.property(),a.cast(function(t){return s.clamp(t,-180,180)})],o.prototype,"tilt",void 0),r([a.property({json:{read:!1,write:!1}})],o.prototype,"fov",void 0),o=e=r([a.subclass("esri.Camera")],o);var e}(a.declared(e));return l});