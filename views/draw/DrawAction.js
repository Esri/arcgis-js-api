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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Evented","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators"],(function(e,t,o,r,n,i,s,p){var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._hasZ=null,t.interactiveUndoDisabled=!1,t.history=[],t.redoHistory=[],t.snapToScene=null,t.view=null,t.elevationInfo=null,t.defaultZ=0,t}return o(t,e),Object.defineProperty(t.prototype,"hasZ",{get:function(){return i.isSome(this._hasZ)?this._hasZ:"3d"===this.view.type},set:function(e){this._hasZ=e,this.notifyChange("hasZ")},enumerable:!0,configurable:!0}),t.prototype.canUndo=function(){return this.history.length>0},t.prototype.canRedo=function(){return this.redoHistory.length>0},t.prototype.undo=function(){if(this.canUndo()){var e=this.history.pop();e.undo(),this.redoHistory.push(e)}},t.prototype.redo=function(){if(this.canRedo()){var e=this.redoHistory.pop();e.redo(),this.history.push(e)}},t.prototype.getCoordsFromScreenPoint=function(e){var t=this.screenToMap(e);return i.isSome(t)?t.hasZ?[t.x,t.y,t.z]:[t.x,t.y]:null},t.prototype.getCoordsAndPointFromScreenPoint=function(e){var t=this.screenToMap(e);return i.isSome(t)?t.hasZ?{vertex:[t.x,t.y,t.z],mapPoint:t}:{vertex:[t.x,t.y],mapPoint:t}:null},t.prototype.isDuplicateVertex=function(e,t){if(e.length){var o=e[e.length-1],r=o[0],n=o[1];return r===t[0]&&n===t[1]}return!1},t.prototype.getGeometryZValue=function(){return this.defaultZ},t.prototype.isSnapToSceneEnabled=function(e){return!("on-the-ground"===e.mode)},t.prototype.screenToMap=function(e){var t=null;if("3d"===this.view.type)if(this.hasZ){var o=i.unwrapOr(this.elevationInfo,c),r=this.isSnapToSceneEnabled(o)&&i.isSome(this.snapToScene)?this.snapToScene:null;t=i.isSome(r)?r(e,o):this.view.sceneIntersectionHelper.intersectElevationFromScreen(s.createScreenPointArray(e.x,e.y),o,this.getGeometryZValue())}else{o=i.unwrapOr(this.elevationInfo,l);t=this.view.sceneIntersectionHelper.intersectElevationFromScreen(s.createScreenPointArray(e.x,e.y),o,0),i.isSome(t)&&(t.z=void 0)}else t=this.view.toMap(e),i.isSome(t)&&(t.z=this.hasZ?this.getGeometryZValue():void 0);return t},r([p.property({type:Boolean,nonNullable:!0})],t.prototype,"interactiveUndoDisabled",void 0),r([p.property({readOnly:!0})],t.prototype,"history",void 0),r([p.property({readOnly:!0})],t.prototype,"redoHistory",void 0),r([p.property()],t.prototype,"snapToScene",void 0),r([p.property()],t.prototype,"view",void 0),r([p.property()],t.prototype,"elevationInfo",void 0),r([p.property({nonNullable:!0})],t.prototype,"defaultZ",void 0),r([p.property({dependsOn:["view"]})],t.prototype,"hasZ",null),t=r([p.subclass("esri.views.draw.DrawAction")],t)}(p.declared(n.EventedAccessor)),c={mode:"absolute-height",offset:0},l={mode:"on-the-ground",offset:0};return a}));