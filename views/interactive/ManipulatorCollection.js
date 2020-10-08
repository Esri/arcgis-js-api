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

define(["require","exports","../../core/Collection","../../core/maybe"],(function(t,i,a,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.ManipulatorCollection=void 0;var r=function(){function t(){this._isToolEditable=!0,this._manipulators=new a,this._nextManipulatorId=0,this._resourceContexts={manipulator3D:{}},this._attached=!1}return Object.defineProperty(t.prototype,"isToolEditable",{set:function(t){this._isToolEditable=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"length",{get:function(){return this._manipulators.length},enumerable:!1,configurable:!0}),t.prototype.add=function(t,i){return void 0===i&&(i=0),this.addMany([t],i)[0]},t.prototype.addMany=function(t,i){var a=this;return void 0===i&&(i=0),t.map((function(t){var o=a._nextManipulatorId++,r={id:o,manipulator:t,visibilityPredicate:i,attached:!1};return a._manipulators.add(r),a._attached&&a._updateManipulatorAttachment(r),o}))},t.prototype.remove=function(t){if("number"==typeof t){for(var i=t,a=0;a<this._manipulators.length;a++)if(this._manipulators.getItemAt(a).id===i){var o=this._manipulators.splice(a,1)[0];return this._detachManipulator(o),o.id}return null}var r=t;for(a=0;a<this._manipulators.length;a++)if(this._manipulators.getItemAt(a).manipulator===r){o=this._manipulators.splice(a,1)[0];return this._detachManipulator(o),o.id}return null},t.prototype.removeAll=function(){var t=this;this._manipulators.forEach((function(i){t._detachManipulator(i)})),this._manipulators.removeAll()},t.prototype.attach=function(){var t=this;this._manipulators.forEach((function(i){t._updateManipulatorAttachment(i)})),this._attached=!0},t.prototype.detach=function(){var t=this;this._manipulators.forEach((function(i){t._detachManipulator(i)})),this._attached=!1},t.prototype.destroy=function(){this._manipulators.forEach((function(t){var i=t.manipulator;i.destroy&&i.destroy()})),this._manipulators.destroy(),this._resourceContexts=null},t.prototype.on=function(t,i){return this._manipulators.on(t,(function(t){i(t)}))},t.prototype.forEach=function(t){for(var i=0,a=this._manipulators.items;i<a.length;i++){t(a[i])}},t.prototype.some=function(t){return this._manipulators.items.some(t)},t.prototype.toArray=function(){var t=[];return this.forEach((function(i){return t.push(i.manipulator)})),t},t.prototype.intersect=function(t,i){var a=null,r=Number.MAX_VALUE;return this._manipulators.forEach((function(e){var n=e.id,u=e.manipulator;if(e.attached&&u.interactive){var s=u.intersectionDistance(t,i);o.isSome(s)&&s<r&&(r=s,a=n)}})),a},t.prototype.findById=function(t){if(o.isNone(t))return null;for(var i=0,a=this._manipulators.items;i<a.length;i++){var r=a[i];if(t===r.id)return r.manipulator}return null},t.prototype._updateManipulatorAttachment=function(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t)},t.prototype._attachManipulator=function(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0)},t.prototype._detachManipulator=function(t){if(t.attached){var i=t.manipulator;i.grabbing=!1,i.dragging=!1,i.hovering=!1,i.selected=!1,i.detach&&i.detach(this._resourceContexts),t.attached=!1}},t.prototype._isManipulatorItemVisible=function(t){return 2===t.visibilityPredicate||(this._isToolEditable?0===t.visibilityPredicate:1===t.visibilityPredicate)},t}();i.ManipulatorCollection=r}));