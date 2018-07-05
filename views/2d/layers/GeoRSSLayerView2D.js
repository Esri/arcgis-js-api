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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Graphic","../../../PopupTemplate","../../../core/Collection","../../../core/Handles","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../renderers/SimpleRenderer","../../../renderers/support/jsonUtils","../../../tasks/support/FeatureSet","../engine/DOMContainer","./LayerView2D","./support/FeaturesView2D","../../layers/RefreshableLayerView"],function(e,r,t,o,n,a,i,p,s,l,u,y,f,c,d,m,h,w){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._handles=new p,r._featuresViewMap={},r._popupTemplates=new Map,r.container=new d,r.featuresViews=[],r}return t(r,e),r.prototype.hitTest=function(e,r){var t=this;if(this.suspended||!this.featuresViews.length)return s.resolve();var o=this.featuresViews.reverse().map(function(t){return t.hitTest(e,r)});return s.all(o).then(function(e){return e.filter(function(e,r){return e&&(e.popupTemplate=t._popupTemplates.get(t.featuresViews[r]),e.layer=t.layer,e.sourceLayer=t.layer),!!e})[0]||null})},r.prototype.update=function(e){},r.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach(function(r){var t,o=c.fromJSON(r.featureSet),p=new(i.ofType(n))(o.features);if(e._featuresViewMap[o.geometryType])t=e._featuresViewMap[o.geometryType],t.graphics.addMany(p);else{var s=r.layerDefinition.drawingInfo,l=r.popupInfo?a.fromJSON(r.popupInfo):null,u=f.fromJSON(s.renderer);t=new h,t.graphics=p,t.mapView=e.view,t.renderer=u,e._featuresViewMap[o.geometryType]=t,e._popupTemplates.set(t,l),"polygon"!==o.geometryType||e.layer.polygonSymbol?"polyline"!==o.geometryType||e.layer.lineSymbol?"point"!==o.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=u.symbol):e.layer.lineSymbol=u.symbol:e.layer.polygonSymbol=u.symbol,e.featuresViews.push(t),e.container.addChild(t.container)}}),this._handles.add(l.init(this.layer,"polygonSymbol",function(r){e._featuresViewMap.polygon.renderer=new y({symbol:r})})),this._handles.add(l.init(this.layer,"lineSymbol",function(r){e._featuresViewMap.polyline.renderer=new y({symbol:r})})),this._handles.add(l.init(this.layer,"pointSymbol",function(r){e._featuresViewMap.point.renderer=new y({symbol:r})}))},r.prototype.detach=function(){this._handles.removeAll()},r.prototype.moveStart=function(){},r.prototype.viewChange=function(){},r.prototype.moveEnd=function(){},r=o([u.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],r)}(u.declared(m,w))});