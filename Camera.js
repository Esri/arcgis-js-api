// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/lang","./geometry/Point","./views/3d/support/mathUtils","./core/accessorSupport/decorators"],function(t,o,i,e,r,n,p,s,a){var l=function(t){function o(o){t.call(this),this.position=null,this.heading=0,this.tilt=0,this.fov=55}return i(o,t),o.prototype.getDefaults=function(t){return t.position?void 0:{position:new p([0,0,0])}},o.prototype.normalizeCtorArgs=function(t,o,i,e){var r=t&&"object"==typeof t&&("x"in t||Array.isArray(t));if(r){var n={position:t};return null!=o&&(n.heading=o),null!=i&&(n.tilt=i),null!=e&&(n.fov=e),n}return t},o.prototype.equals=function(t){return t?this.tilt===t.tilt&&this.heading===t.heading&&this.fov===t.fov&&this.position.equals(t.position):!1},o.prototype.clone=function(){return new o({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})},o.prototype.toJSON=function(){var t={position:this.position.toJSON(),heading:this.heading,tilt:this.tilt};return n.fixJson(t)},e([a.property({type:p})],o.prototype,"position",void 0),e([a.property(),a.cast(s.cyclicalDeg.normalize)],o.prototype,"heading",void 0),e([a.property(),a.cast(function(t){return s.clamp(t,-180,180)})],o.prototype,"tilt",void 0),e([a.property({json:{readable:!1,writable:!1}})],o.prototype,"fov",void 0),o=e([a.subclass("esri.Camera")],o)}(a.declared(r));return l});