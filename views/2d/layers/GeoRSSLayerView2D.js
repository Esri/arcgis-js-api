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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Graphic","../../../PopupTemplate","../../../core/Collection","../../../core/Handles","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../renderers/SimpleRenderer","../../../renderers/support/jsonUtils","../../../tasks/support/FeatureSet","../engine/Container","./LayerView2D","./support/GraphicsView2D","../../layers/RefreshableLayerView"],function(e,r,t,i,o,n,p,a,s,l,y,c,h,u,d,f,g,m){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._handles=new a,r._graphicsViewMap={},r._popupTemplates=new Map,r.container=new d.Container,r.graphicsViews=[],r}return t(r,e),r.prototype.hitTest=function(e,r){var t=this;if(this.suspended||!this.graphicsViews.length)return s.resolve();var i=this.graphicsViews.reverse().map(function(t){return t.hitTest(e,r)});return s.all(i).then(function(e){return e.filter(function(e,r){return e&&(e.popupTemplate=t._popupTemplates.get(t.graphicsViews[r]),e.layer=t.layer,e.sourceLayer=t.layer),!!e})[0]||null})},r.prototype.update=function(e){if(this.graphicsViews)for(var r=0,t=this.graphicsViews;r<t.length;r++){var i=t[r];i.update(e)}},r.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach(function(r){var t,i=u.fromJSON(r.featureSet),a=new(p.ofType(o))(i.features);if(e._graphicsViewMap[i.geometryType])t=e._graphicsViewMap[i.geometryType],t.graphics.addMany(a);else{var s=r.layerDefinition.drawingInfo,l=r.popupInfo?n.fromJSON(r.popupInfo):null,y=h.fromJSON(s.renderer);t=new g.default({view:e.view,graphics:a,renderer:y}),e._graphicsViewMap[i.geometryType]=t,e._popupTemplates.set(t,l),"polygon"!==i.geometryType||e.layer.polygonSymbol?"polyline"!==i.geometryType||e.layer.lineSymbol?"point"!==i.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=y.symbol):e.layer.lineSymbol=y.symbol:e.layer.polygonSymbol=y.symbol,e.graphicsViews.push(t),e.container.addChild(t.container)}}),this._handles.add(l.init(this.layer,"polygonSymbol",function(r){e._graphicsViewMap.polygon.renderer=new c({symbol:r})})),this._handles.add(l.init(this.layer,"lineSymbol",function(r){e._graphicsViewMap.polyline.renderer=new c({symbol:r})})),this._handles.add(l.init(this.layer,"pointSymbol",function(r){e._graphicsViewMap.point.renderer=new c({symbol:r})}))},r.prototype.detach=function(){this._handles.removeAll(),this.container.removeAllChildren(),this.graphicsViews.forEach(function(e){e.destroy(),e.view=null,e.renderer=null}),this.graphicsViews.length=0},r.prototype.moveStart=function(){this.requestUpdate()},r.prototype.viewChange=function(){this.requestUpdate()},r.prototype.moveEnd=function(){this.requestUpdate()},r=i([y.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],r)}(y.declared(f,m))});