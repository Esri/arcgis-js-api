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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/arrayUtils","../../../../core/maybe","../../../../layers/graphics/dehydratedFeatures"],(function(t,e,i,r,a,s,o){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){var e=this;this.graphicsCore=t,this.idToState=new Map,this.states=new Set;var i=t.owner.layer&&t.owner.layer.objectIdField;i?(this.getGraphicId=function(t){return o.getObjectId(t,i)},this.getGraphics3DGraphicById=function(t){return e.graphicsCore.getGraphics3DGraphicByObjectId(t)}):(this.getGraphicId=function(t){return t.uid},this.getGraphics3DGraphicById=function(t){return e.graphicsCore.getGraphics3DGraphicById(t)})}return t.prototype.destroy=function(){var t=this;this.idToState.clear(),this.states.forEach((function(e,i){return t.remove(i)}))},t.prototype.add=function(t){var e=this,i={remove:function(){return e.remove(t)}};if(this.states.has(t))return i;var r=this.getGraphicId(t.graphic),a=this.getGraphics3DGraphicById(r);return this.states.has(t)||this.states.add(t),this.ensureStateList(r).push(t),t.displaying=!!s.isSome(a)&&a.isVisible(),t.isDraped=!!s.isSome(a)&&a.isDraped,t.tracking=!0,i},t.prototype.remove=function(t){if(this.states.has(t)){if(this.idToState.size){var e=this.getGraphicId(t.graphic),i=this.idToState.get(e);i&&(a.remove(i,t),0===i.length&&this.idToState.delete(e))}this.states.delete(t),t.tracking=!1,t.displaying=!1}},t.prototype.addGraphic=function(t){this.forEachState(t,(function(e){e.displaying=t.isVisible(),e.isDraped=t.isDraped,e.emit("changed",{})}))},t.prototype.removeGraphic=function(t){this.forEachState(t,(function(t){t.displaying=!1,t.isDraped=!1}))},t.prototype.updateGraphicGeometry=function(t){this.forEachState(t,(function(t){t.emit("changed",{})}))},t.prototype.updateGraphicVisibility=function(t){this.forEachState(t,(function(e){e.displaying=t.isVisible()}))},t.prototype.allGraphicsDeleted=function(){this.states.forEach((function(t){t.displaying=!1}))},t.prototype.ensureStateList=function(t){var e=this.idToState.get(t);if(e)return e;var i=new Array;return this.idToState.set(t,i),i},t.prototype.forEachState=function(t,e){if(0!==this.states.size&&0!==this.idToState.size){var i=this.getGraphicId(t.graphic),r=this.idToState.get(i);null!=r&&r.forEach(e)}},t}();e.GraphicStateTracking=n}));