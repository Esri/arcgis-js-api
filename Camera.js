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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","dojo/_base/lang","./core/JSONSupport","./core/lang","./geometry/Point","./views/3d/support/mathUtils","./core/accessorSupport/decorators"],function(i,t,e,o,n,r,s,p,a,d){var f=function(i){function t(t){i.call(this),this.position=null,this.heading=0,this.tilt=0,this.fov=55}return e(t,i),t.prototype.getDefaults=function(i){return i.position?void 0:{position:new p([0,0,0])}},t.prototype.normalizeCtorArgs=function(i,t,e,o){var r={};return n.isObject(i)&&s.isDefined(i)&&(s.isDefined(i.position)||s.isDefined(i.tilt)||s.isDefined(i.heading)||s.isDefined(i.fov)?(s.isDefined(i.position)&&(r.position=new p(i.position)),s.isDefined(i.heading)&&(r.heading=i.heading),s.isDefined(i.tilt)&&(r.tilt=i.tilt),s.isDefined(i.fov)&&(r.fov=i.fov)):s.isDefined(i)&&(s.isDefined(i.x)||Array.isArray(i))&&(r.position=new p(i))),s.isDefined(t)&&(r.heading=t),s.isDefined(e)&&(r.tilt=e),s.isDefined(o)&&(r.fov=o),r},t.prototype.equals=function(i){return i?this.tilt===i.tilt&&this.heading===i.heading&&this.fov===i.fov&&this.position.equals(i.position):!1},t.prototype.clone=function(){return new t({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})},t.prototype.toJSON=function(){var i={position:this.position.toJSON(),heading:this.heading,tilt:this.tilt};return s.fixJson(i)},o([d.property({type:p})],t.prototype,"position",void 0),o([d.property(),d.cast(a.cyclicalDeg.normalize)],t.prototype,"heading",void 0),o([d.property(),d.cast(function(i){return a.clamp(i,-180,180)})],t.prototype,"tilt",void 0),o([d.property({json:{readable:!1,writable:!1}})],t.prototype,"fov",void 0),t=o([d.subclass("esri.Camera")],t)}(d.declared(r));return f});