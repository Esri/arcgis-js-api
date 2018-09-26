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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/HandleOwner","../../core/throttle","../../core/accessorSupport/decorators","../../layers/support/TileInfo","./engine/webgl/definitions","./engine/webgl/collisions/CollisionEngine","./engine/webgl/collisions/LayerViewSorter","./tiling/TileInfoView"],function(e,t,i,r,o,s,n,l,a,p,u,d,c){Object.defineProperty(t,"__esModule",{value:!0});var y=64,h=function(e){function t(t){var i=e.call(this)||this;return i._applyVisivilityPassThrottled=n.throttle(i._applyVisivilityPass,y,i),i._previousResolution=Number.POSITIVE_INFINITY,i.lastUpdateId=-1,i.updateRequested=!1,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this,t=a.create({spatialReference:this.view.spatialReference,size:p.TILE_SIZE});this._tileInfoView=new c(t),this._collisionEngine=new u.default(t),this._layerViewSorter=new d.default(function(t,i){e._collisionEngine.registerLayer(t.layer,i);var r=t.tileRenderer;r&&r.forEachTile(function(i){i.isDirty=!0,e.addTile(t.layer.uid,i)}),e.requestUpdate()},function(t){e._collisionEngine.unregisterLayer(t.layer),e.requestUpdate()},function(e){var t=e.get("tileRenderer.featuresView");t&&t.fadeInLabels()}),this.handles.add(this.view.allLayerViews.on("change",function(t){e._layerViewSorter.update(t)}))},t.prototype.destroy=function(){this._layerViewSorter.destroy(),this._layerViewSorter=null,this._collisionEngine=null,this._applyVisivilityPassThrottled.remove()},Object.defineProperty(t.prototype,"updating",{get:function(){return this.updateRequested},enumerable:!0,configurable:!0}),t.prototype.update=function(e){var t=this._previousResolution,i=e.state.resolution;this._previousResolution=i,i===t&&this._applyVisivilityPassThrottled(e)},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate(this))},t.prototype.processUpdate=function(e){this._set("updateParameters",e),this.updateRequested&&(this.update(e),this.updateRequested=!1)},t.prototype.addTile=function(e,t){this._collisionEngine.addTile(e,t)},t.prototype.removeTile=function(e,t){this._collisionEngine.removeTile(e,t)},t.prototype._applyVisivilityPass=function(e){var t=this._tileInfoView.getClosestInfoForScale(e.state.scale).level;this._collisionEngine.run(e,t)},r([l.property()],t.prototype,"updateRequested",void 0),r([l.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([l.property({dependsOn:["updateRequested"]})],t.prototype,"updating",null),r([l.property()],t.prototype,"view",void 0),t=r([l.subclass("esri.views.2d.layers.labels.LabelManager")],t)}(l.declared(o,s));t.default=h});