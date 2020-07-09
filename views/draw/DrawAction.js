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

define(["require","exports","tslib","../../core/Evented","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators"],(function(e,t,o,r,n,i,s){var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._hasZ=null,t.interactiveUndoDisabled=!1,t.history=[],t.redoHistory=[],t.snapToScene=!1,t.view=null,t.elevationInfo=null,t.defaultZ=0,t}return o.__extends(t,e),Object.defineProperty(t.prototype,"hasZ",{get:function(){return n.isSome(this._hasZ)?this._hasZ:"3d"===this.view.type},set:function(e){this._hasZ=e,this.notifyChange("hasZ")},enumerable:!0,configurable:!0}),t.prototype.canUndo=function(){return this.history.length>0},t.prototype.canRedo=function(){return this.redoHistory.length>0},t.prototype.undo=function(){if(this.canUndo()){var e=this.history.pop();e.undo(),this.redoHistory.push(e)}},t.prototype.redo=function(){if(this.canRedo()){var e=this.redoHistory.pop();e.redo(),this.history.push(e)}},t.prototype.getCoordsFromScreenPoint=function(e){var t=this.screenToMap(e);return n.isSome(t)?t.hasZ?[t.x,t.y,t.z]:[t.x,t.y]:null},t.prototype.getCoordsAndPointFromScreenPoint=function(e){var t=this.screenToMap(e);return n.isSome(t)?t.hasZ?{vertex:[t.x,t.y,t.z],mapPoint:t}:{vertex:[t.x,t.y],mapPoint:t}:null},t.prototype.isDuplicateVertex=function(e,t){if(e.length){var o=e[e.length-1],r=o[0],n=o[1];return r===t[0]&&n===t[1]}return!1},t.prototype.getGeometryZValue=function(){return this.defaultZ},t.prototype.screenToMap=function(e){var t=null;if("3d"===this.view.type)if(this.hasZ){var o=n.unwrapOr(this.elevationInfo,a);t=this.view.sceneIntersectionHelper.intersectElevationFromScreen(i.createScreenPointArray(e.x,e.y),o,this.getGeometryZValue())}else{o=n.unwrapOr(this.elevationInfo,c);t=this.view.sceneIntersectionHelper.intersectElevationFromScreen(i.createScreenPointArray(e.x,e.y),o,0),n.isSome(t)&&(t.z=void 0)}else t=this.view.toMap(e),n.isSome(t)&&(t.z=this.hasZ?this.getGeometryZValue():void 0);return t},o.__decorate([s.property({type:Boolean,nonNullable:!0})],t.prototype,"interactiveUndoDisabled",void 0),o.__decorate([s.property({readOnly:!0})],t.prototype,"history",void 0),o.__decorate([s.property({readOnly:!0})],t.prototype,"redoHistory",void 0),o.__decorate([s.property()],t.prototype,"snapToScene",void 0),o.__decorate([s.property()],t.prototype,"view",void 0),o.__decorate([s.property()],t.prototype,"elevationInfo",void 0),o.__decorate([s.property({nonNullable:!0})],t.prototype,"defaultZ",void 0),o.__decorate([s.property({dependsOn:["view"]})],t.prototype,"hasZ",null),t=o.__decorate([s.subclass("esri.views.draw.DrawAction")],t)}(r.EventedAccessor),a={mode:"absolute-height",offset:0},c={mode:"on-the-ground",offset:0};return p}));