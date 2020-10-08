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

define(["require","exports","./Graphics3DObjectStateSet"],(function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Graphics3DObjectStates=void 0;var i=function(){function t(t){this._graphicsCore=t,this._stateSets=new Array}return t.prototype.destroy=function(){this._stateSets&&this._stateSets.forEach((function(t){return t.objectStateSet.removeAll()})),this._stateSets=null},t.prototype.acquireSet=function(t,e){var i=this,s=new a.Graphics3DObjectStateSet(t,e);this._stateSets.push(s);var r={remove:function(){return i.releaseSet(s)},pause:function(){s.objectStateSet.removeAll(),s.paused=!0},resume:function(){s.paused=!1,i.initializeSet(s)}};return{set:s,handle:r}},t.prototype.releaseSet=function(t){t.objectStateSet.removeAll();var e=this._stateSets?this._stateSets.indexOf(t):-1;-1!==e&&this._stateSets.splice(e,1)},t.prototype._addObjectStateSet=function(t,e){t.addObjectStateSet(e.stateType,e.objectStateSet)},t.prototype._removeObjectStateSet=function(t,e){t.removeObjectState(e.objectStateSet)},t.prototype.setUid=function(t,e){t.ids.add(e);var a=this._graphicsCore.graphics3DGraphics.get(e);a&&this._addObjectStateSet(a,t)},t.prototype.setUids=function(t,e){var a=this;e.forEach((function(e){return a.setUid(t,e)}))},t.prototype.setObjectIds=function(t,e){e.forEach((function(e){return t.ids.add(e)})),this.initializeSet(t)},t.prototype.addGraphic=function(t){var e=this;this._stateSets.forEach((function(a){!a.paused&&a.hasGraphic(t)&&e._addObjectStateSet(t,a)}))},t.prototype.removeGraphic=function(t){var e=this;this._stateSets.forEach((function(a){a.hasGraphic(t)&&e._removeObjectStateSet(t,a)}))},t.prototype.allGraphicsDeleted=function(){this._stateSets&&this._stateSets.forEach((function(t){return t.objectStateSet.removeAll()}))},t.prototype.initializeSet=function(t){var e=this,a=this._graphicsCore.graphics3DGraphics;t.objectIdField?a.forEach((function(a){a&&t.hasGraphic(a)&&e._addObjectStateSet(a,t)})):t.ids.forEach((function(i){var s=a.get(i);s&&e._addObjectStateSet(s,t)}))},Object.defineProperty(t.prototype,"test",{get:function(){return{states:this._stateSets}},enumerable:!1,configurable:!0}),t}();e.Graphics3DObjectStates=i}));