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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/HandleOwner","../../core/throttle","../../core/accessorSupport/decorators","./engine/webgl/collisions/CollisionEngine","./engine/webgl/collisions/LayerViewSorter"],function(e,t,i,r,o,s,n,l,a,p){Object.defineProperty(t,"__esModule",{value:!0});var u=64,d=function(e){function t(t){var i=e.call(this)||this;return i._applyVisivilityPassThrottled=n.throttle(i._applyVisivilityPass,u,i),i._previousResolution=Number.POSITIVE_INFINITY,i.lastUpdateId=-1,i.updateRequested=!1,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.collisionEngine=new a.default(this.view.featuresTilingScheme),this._layerViewSorter=new p.default(function(t,i){e.collisionEngine.registerLayer(t.layer,i);var r=t.tileRenderer;r&&r.forEachTile(function(i){i.isDirty=!0,e.addTile(t.layer.uid,i)}),e.requestUpdate()},function(t){e.collisionEngine.unregisterLayer(t.layer),e.requestUpdate()}),this.handles.add(this.view.allLayerViews.on("change",function(t){e._layerViewSorter.update(t)}))},t.prototype.destroy=function(){this._layerViewSorter.destroy(),this._layerViewSorter=null,this.collisionEngine=null,this._applyVisivilityPassThrottled.remove()},Object.defineProperty(t.prototype,"updating",{get:function(){return this.updateRequested},enumerable:!0,configurable:!0}),t.prototype.update=function(e){var t=this._previousResolution,i=e.state.resolution;this._previousResolution=i,i===t&&this._applyVisivilityPassThrottled(e)},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate(this))},t.prototype.processUpdate=function(e){this._set("updateParameters",e),this.updateRequested&&(this.update(e),this.updateRequested=!1)},t.prototype.addTile=function(e,t){this.collisionEngine.addTile(e,t)},t.prototype.removeTile=function(e,t){this.collisionEngine.removeTile(e,t)},t.prototype._applyVisivilityPass=function(e){var t=this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;this.collisionEngine.run(e.state,t)},r([l.property()],t.prototype,"updateRequested",void 0),r([l.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([l.property({dependsOn:["updateRequested"]})],t.prototype,"updating",null),r([l.property()],t.prototype,"view",void 0),t=r([l.subclass("esri.views.2d.layers.labels.LabelManager")],t)}(l.declared(o,s));t.default=d});