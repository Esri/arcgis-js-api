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

define(["require","exports","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/Handles","../../../../core/accessorSupport/decorators","./TileTree3DDebugger","../../../support/WatchUpdatingTracking"],(function(e,t,r,i,a,n,o,s){Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(t){var r=e.call(this,t)||this;return r.watchUpdatingTracking=new s.WatchUpdatingTracking,r.handles=new a,r}return i(t,e),t.prototype.initialize=function(){var e=this;this.handles.add(this.view.featureTiles.addClient()),this.watchUpdatingTracking.addOnCollectionPropertyChange(this.view.featureTiles,"tiles",(function(){return e.update()}),2)},t.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy()},t.prototype.update=function(){var e=this;if(this.clear(),this.enabled){var t=this.view.featureTiles.tiles.toArray().sort((function(e,t){return e.loadPriority-t.loadPriority}));this._update(t,(function(t){var r=t.lij,i=r[0],a=r[1],n=r[2];return e.view.featureTiles.tilingScheme.getExtentGeometry(i,a,n)}),{getLoadPriority:function(e){return e.loadPriority}})}},r([n.property({readOnly:!0})],t.prototype,"watchUpdatingTracking",void 0),r([n.property({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],t.prototype,"updating",void 0),t=r([n.subclass("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],t)}(n.declared(o.TileTree3DDebugger));t.FeatureTileTree3DDebugger=d,t.default=d}));