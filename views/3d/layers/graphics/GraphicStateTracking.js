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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/arrayUtils","../../../../core/maybe","../../../../layers/graphics/dehydratedFeatures"],(function(t,i,e,r,a){Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t){var i=this;this.graphicsCore=t,this.idToState=new Map,this.states=new Set;var e=t.owner.layer&&t.owner.layer.objectIdField;e?(this.getGraphicId=function(t){return a.getObjectId(t,e)},this.getGraphics3DGraphicById=function(t){return i.graphicsCore.getGraphics3DGraphicByObjectId(t)}):(this.getGraphicId=function(t){return t.uid},this.getGraphics3DGraphicById=function(t){return i.graphicsCore.getGraphics3DGraphicById(t)})}return t.prototype.destroy=function(){var t=this;this.idToState.clear(),this.states.forEach((function(i,e){return t.remove(e)}))},t.prototype.add=function(t){var i=this,e={remove:function(){return i.remove(t)}};if(this.states.has(t))return e;var a=this.getGraphicId(t.graphic),s=this.getGraphics3DGraphicById(a);return this.states.has(t)||this.states.add(t),this.ensureStateList(a).push(t),t.displaying=!!r.isSome(s)&&s.isVisible(),t.isDraped=!!r.isSome(s)&&s.isDraped,t.tracking=!0,e},t.prototype.remove=function(t){if(this.states.has(t)){if(this.idToState.size){var i=this.getGraphicId(t.graphic),r=this.idToState.get(i);r&&(e.remove(r,t),0===r.length&&this.idToState.delete(i))}this.states.delete(t),t.tracking=!1,t.displaying=!1}},t.prototype.addGraphic=function(t){this.forEachState(t,(function(i){i.displaying=t.isVisible(),i.isDraped=t.isDraped,i.emit("changed",{})}))},t.prototype.removeGraphic=function(t){this.forEachState(t,(function(t){t.displaying=!1,t.isDraped=!1}))},t.prototype.updateGraphicGeometry=function(t){this.forEachState(t,(function(t){t.emit("changed",{})}))},t.prototype.updateGraphicVisibility=function(t){this.forEachState(t,(function(i){i.displaying=t.isVisible()}))},t.prototype.allGraphicsDeleted=function(){this.states.forEach((function(t){t.displaying=!1}))},t.prototype.ensureStateList=function(t){var i=this.idToState.get(t);if(i)return i;var e=new Array;return this.idToState.set(t,e),e},t.prototype.forEachState=function(t,i){if(0!==this.states.size&&0!==this.idToState.size){var e=this.getGraphicId(t.graphic),r=this.idToState.get(e);null!=r&&r.forEach(i)}},t}();i.GraphicStateTracking=s}));