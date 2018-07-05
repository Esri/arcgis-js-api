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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Handles","../../core/promiseUtils","../../core/throttle","../../core/accessorSupport/decorators","../../layers/support/TileInfo","./engine/webgl/collisions/CollisionEngine","./engine/webgl/collisions/LayerViewSorter","./tiling/TileInfoView"],function(e,t,i,o,n,r,s,l,a,p,u,d,c){Object.defineProperty(t,"__esModule",{value:!0});var h=64,y=function(e){function t(t){var i=e.call(this)||this;return i._handles=new r,i._applyVisivilityPassThrottled=l.throttle(i._applyVisivilityPass,h,i),i._previousResolution=Number.POSITIVE_INFINITY,i.lastUpdateId=-1,i.updateRequested=!1,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this._layerViewSorter=new d.default(function(t,i){e._getCollisionEngine().then(function(o){o.registerLayer(t.layer,i);var n=t.get("featuresView.tileRenderer");n&&n.forEachTile(function(i){i.isDirty=!0,e.addTile(t.layer.uid,i)}),e.requestUpdate()})},function(t){e._getCollisionEngine().then(function(i){i.unregisterLayer(t.layer),e.requestUpdate()})},function(e){var t=e.get("featuresView.tileRenderer.featuresView");t&&t.fadeInLabels()}),this._handles.add(this.view.allLayerViews.on("change",function(t){e._layerViewSorter.update(t)}))},t.prototype.destroy=function(){this._layerViewSorter.destroy(),this._layerViewSorter=null,this._collisionEngine=null,this._handles.removeAll()},Object.defineProperty(t.prototype,"updating",{get:function(){return this.updateRequested},enumerable:!0,configurable:!0}),t.prototype.update=function(e){var t=this._previousResolution,i=e.state.resolution;this._previousResolution=i,i===t&&(this._applyVisivilityPassThrottled(e),this.updateRequested=!1,this.notifyChange("updating"))},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate(this))},t.prototype.processUpdate=function(e){this._set("updateParameters",e),this.updateRequested&&(this.updateRequested=!1,this.update(e))},t.prototype.addTile=function(e,t){this._collisionEngine.addTile(e,t)},t.prototype.removeTile=function(e,t){this._collisionEngine.removeTile(e,t)},t.prototype._getCollisionEngine=function(){var e=this;return this._collisionEngine?s.resolve(this._collisionEngine):this.view.when(function(){var t=p.create({spatialReference:e.view.spatialReference,size:512});return e._tileInfoView=new c(t),e._collisionEngine=new u.default(t),e._collisionEngine})},t.prototype._applyVisivilityPass=function(e){var t=this;this._getCollisionEngine().then(function(i){var o=t._tileInfoView.getClosestInfoForScale(e.state.scale).level;i.run(e,o)})},o([a.property()],t.prototype,"updateRequested",void 0),o([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),o([a.property({dependsOn:["updateRequested"]})],t.prototype,"updating",null),o([a.property()],t.prototype,"view",void 0),t=o([a.subclass("esri.views.2d.layers.labels.LabelManager")],t)}(a.declared(n));t.default=y});