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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/Handles","../../../../core/Logger","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","./QueryEngine","../../../layers/support/FeatureFilter","../../../support/Scheduler"],(function(e,t,i,r,n,s,o,u,a,l,h,c,y){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Graphics3DFilterVisibility=void 0;var d=s.getLogger("esri.views.3d.layers.graphics.Graphics3DFilterVisibility"),p=function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.apply(this,t)||this;return r.filter=null,r._dirty=!1,r._querying=!1,r._handles=new n,r}return i.__extends(t,e),Object.defineProperty(t.prototype,"updating",{get:function(){return this._dirty||this._querying||null!=this._queryResult},enumerable:!1,configurable:!0}),t.prototype.setup=function(e,t){var i=this;this._layerView=e,this._core=t,this._objectIdField=e.layer.objectIdField,this._queryEngine=new h.default({layerView:this._layerView,task:y.Task.FILTER_VISIBILITY});var r=this._layerView.view.resourceController.scheduler;this._handles.add(r.registerTask(y.Task.FILTER_VISIBILITY,(function(e){return i._update(e)}),(function(){return i._needsUpdate()}))),this._handles.add(a.on(t.owner,"loadedGraphics","after-changes",(function(e){return i._graphicsChanged(e)}),(function(){return i.dirty=!0}))),this.filterChanged()},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.clear(),this._layerView=null,this._core=null},t.prototype.clear=function(){this._queryEngine.clear()&&(this._core.modifyGraphics3DGraphicVisibilities((function(e){return e.clearVisibilityFlag(2)})),this._queryResult=null,this._querying=!1),this.dirty=!1,this.notifyChange("updating")},t.prototype._graphicsChanged=function(e){this._queryEngine&&0==(1&e.type)||(this.dirty=!0)},t.prototype.updateVisibility=function(e){this.active&&(e.hasVisibilityFlag(2,0)||e.setVisibilityFlag(2,!1,0),this.dirty=!0)},t.prototype.filterChanged=function(){var e=this.recomputeFilter();e!==this.filter&&(this.filter=e,this.dirty=!0)},Object.defineProperty(t.prototype,"active",{get:function(){return this.filter&&this._core.graphics3DGraphics.size>0},enumerable:!1,configurable:!0}),t.prototype.recomputeFilter=function(){var e="filter"in this._layerView?this._layerView.filter:null,t="timeExtent"in this._layerView?this._layerView.timeExtent:null;if(!t)return e;var i=o.isSome(e)?e.clone():new c;return i.timeExtent=i.timeExtent?i.timeExtent.intersection(t):t,i},t.prototype._needsUpdate=function(){return this._dirty&&!this._querying||null!=this._queryResult},t.prototype._update=function(e){var t=this;this.active?(!this._dirty||this._querying||e.done||(this._querying=!0,this.dirty=!1,this._queryEngine.executeQueryForIdSet(this.filter).then((function(e){t._queryResult=e,t._querying=!1})).catch((function(e){u.isAbortError(e)||(d.warn("FeatureFilter query failed: "+e,{error:e}),t._queryResult=new Set,t._core.graphics3DGraphics.forEach((function(e){return t._queryResult.add(t._getFeatureId(e.graphic))})),t._querying=!1)})),e.madeProgress()),this._queryResult&&!e.done&&(this._core.modifyGraphics3DGraphicVisibilities((function(i){if(e.done)return!1;var r=t._queryResult.has(t._getFeatureId(i.graphic));return!!i.setVisibilityFlag(2,r,0)&&(e.madeProgress(),!0)})),e.done||(this._queryResult=null)),this.notifyChange("updating")):this.clear()},t.prototype._getFeatureId=function(e){return null==e.objectId?e.attributes[this._objectIdField]:e.objectId},Object.defineProperty(t.prototype,"dirty",{set:function(e){this._dirty!==e&&(this._dirty=e,this.notifyChange("updating"))},enumerable:!1,configurable:!0}),i.__decorate([l.property({readOnly:!0})],t.prototype,"updating",null),t=i.__decorate([l.subclass("esri.views.3d.layers.graphics.Graphics3DFilterVisibility")],t)}(r);t.Graphics3DFilterVisibility=p}));