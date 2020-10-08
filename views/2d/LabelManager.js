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

define(["require","exports","tslib","../../core/Accessor","../../core/Error","../../core/HandleOwner","../../core/Logger","../../core/throttle","../../core/accessorSupport/decorators","./engine/webgl/collisions/CollisionEngine","./engine/webgl/collisions/LayerViewSorter"],(function(e,t,i,r,o,n,s,l,a,p,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=s.getLogger("esri.views.2d.layers.labels.LabelManager"),c=function(e){function t(t){var i=e.call(this,t)||this;return i._applyVisibilityPassThrottled=l.throttle(i._applyVisibilityPass,64,i),i.lastUpdateId=-1,i.updateRequested=!1,i.view=null,i}return i.__extends(t,e),t.prototype.initialize=function(){var e=this;this.collisionEngine=new p.CollisionEngine(this.view.featuresTilingScheme),this._layerViewSorter=new d.LayerViewSorter((function(t,i){e.collisionEngine.registerLayerView(t,i);var r=t.tileRenderer;r&&r.forEachTile((function(i){i.isDirty=!0,e.addTile(t,i)})),e.requestUpdate()}),(function(t){e.collisionEngine.unregisterLayerView(t),e.requestUpdate()})),this.handles.add(this.view.allLayerViews.on("change",(function(t){e._layerViewSorter.update(t)})))},t.prototype.destroy=function(){this._layerViewSorter.destroy(),this._layerViewSorter=null,this.collisionEngine=null,this._applyVisibilityPassThrottled.remove(),this._applyVisibilityPassThrottled=null},Object.defineProperty(t.prototype,"updating",{get:function(){return this.updateRequested},enumerable:!1,configurable:!0}),t.prototype.update=function(e){this._applyVisibilityPassThrottled(e)},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())},t.prototype.processUpdate=function(e){this._set("updateParameters",e),this.updateRequested&&(this.updateRequested=!1,this.update(e))},t.prototype.addTile=function(e,t){this.collisionEngine.addTile(e,t)},t.prototype.removeTile=function(e,t){this.collisionEngine.removeTile(e,t)},t.prototype._applyVisibilityPass=function(e){try{var t=this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;this.collisionEngine.run(e,t)}catch(e){u.error(new o("mapview-labeling","Encountered an error during label decluttering",e))}},i.__decorate([a.property()],t.prototype,"updateRequested",void 0),i.__decorate([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i.__decorate([a.property({dependsOn:["updateRequested"]})],t.prototype,"updating",null),i.__decorate([a.property()],t.prototype,"view",void 0),t=i.__decorate([a.subclass("esri.views.2d.layers.labels.LabelManager")],t)}(n.HandleOwnerMixin(r));t.default=c}));