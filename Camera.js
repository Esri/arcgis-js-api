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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","./core/JSONSupporter","./core/lang","./geometry/Point","./views/3d/support/mathUtils"],function(i,t,e,n,o){var s=t.createSubclass({declaredClass:"esri.Camera",classMetadata:{reader:{exclude:["fov"]}},getDefaults:function(i){return i.position?void 0:{position:new n([0,0,0])}},normalizeCtorArgs:function(t,o,s,r){var a={};return i.isObject(t)&&e.isDefined(t)&&(e.isDefined(t.position)||e.isDefined(t.tilt)||e.isDefined(t.heading)||e.isDefined(t.fov)?(e.isDefined(t.position)&&(a.position=new n(t.position)),e.isDefined(t.heading)&&(a.heading=t.heading),e.isDefined(t.tilt)&&(a.tilt=t.tilt),e.isDefined(t.fov)&&(a.fov=t.fov)):e.isDefined(t)&&(e.isDefined(t.x)||Array.isArray(t))&&(a.position=new n(t))),e.isDefined(o)&&(a.heading=o),e.isDefined(s)&&(a.tilt=s),e.isDefined(r)&&(a.fov=r),a},position:null,_positionReader:function(i){return n.fromJSON(i)},heading:0,_headingSetter:function(i){return o.cyclicalDeg.normalize(i)},tilt:0,_tiltSetter:function(i){return Math.min(180,Math.max(-180,i))},fov:55,equals:function(i){return i?this.tilt===i.tilt&&this.heading===i.heading&&this.fov===i.fov&&this.position.equals(i.position):!1},clone:function(){return new s({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})},toJSON:function(){var i={position:this.position.toJSON(),heading:this.heading,tilt:this.tilt};return e.fixJson(i)}});return s});