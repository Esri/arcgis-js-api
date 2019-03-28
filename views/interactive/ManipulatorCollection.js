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

define(["require","exports","../../core/iteratorUtils","../../core/maybe","../../core/screenUtils","../../core/libs/gl-matrix-2/vec2"],function(t,o,r,n,e,i){var a=function(){function t(){this._toolManipulators=new Map,this._nextManipulatorId=0}return t.prototype.add=function(t,o,r){this._toolManipulators.has(t)||this._toolManipulators.set(t,[]);var n=this._toolManipulators.get(t),e=this._nextManipulatorId++;n.push({id:e,manipulator:o,pointerUpEventId:r})},t.prototype.remove=function(t,o){if(this._toolManipulators.has(t)){for(var r=this._toolManipulators.get(t),n=0;n<r.length;n++)if(r[n].manipulator===o){var e=r.splice(n,1)[0],i=e.id,a=e.manipulator;return a.destroy(),i}return null}},t.prototype.removeTool=function(t){if(this._toolManipulators.has(t)){this._toolManipulators.get(t).forEach(function(t){return t.manipulator.destroy()}),this._toolManipulators.delete(t)}},t.prototype.removeAll=function(){var t=this;this._toolManipulators.forEach(function(o,r){t.removeTool(r)})},t.prototype.destroy=function(){this.removeAll()},t.prototype.forEach=function(t){r.everyMap(this._toolManipulators,function(o,r){for(var n=0,e=o;n<e.length;n++){var i=e[n].manipulator;if(!1===t(i,r))return!1}return!0})},t.prototype.findClosest=function(t,o,r){void 0===r&&(r=null);var e=null,i=Number.MAX_VALUE;return this._toolManipulators.forEach(function(a,l){a.forEach(function(a){var u=a.id,s=a.manipulator;if(a.pointerUpEventId!==r){var p=s.intersectionDistance(t,o);n.isSome(p)&&p<i&&s.active&&(i=p,e={tool:l,manipulatorId:u})}})}),e},t.prototype.hasOverlappingInTool=function(t,o,r){for(var n=this._toolManipulators.get(t),a=0,s=n;a<s.length;a++){var p=s[a].manipulator;if(o!==p&&!p.allowOverlap){var c=e.screenPointObjectToArray(r,l),f=e.screenPointObjectToArray(p.screenPoint,u),h=i.vec2.squaredDistance(c,f),v=o.radius+p.radius;if(h<v*v)return!0}}return!1},t.prototype.findByKey=function(t){if(n.isNone(t))return null;for(var o=this._toolManipulators.get(t.tool),r=0,e=o;r<e.length;r++){var i=e[r],a=i.id,l=i.manipulator;if(a===t.manipulatorId)return l}return null},t}(),l=e.createScreenPointArray(),u=e.createScreenPointArray();return a});