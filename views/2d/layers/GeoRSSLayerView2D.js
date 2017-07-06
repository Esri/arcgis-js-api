// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/watchUtils","../../../core/Collection","../../../core/HandleRegistry","../../../Graphic","../../../PopupTemplate","../../../tasks/support/FeatureSet","../../../renderers/support/jsonUtils","../../../renderers/SimpleRenderer","../engine/DOMContainer","./LayerView2D","./support/FeaturesView2D"],function(e,t,r,o,n,a,i,p,s,l,u,y,c,f,d,m){var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new p,t._featuresViewMap={},t._targetFeaturesView=null,t._popupTemplates=new Map,t.container=new f,t.featuresViews=[],t}return r(t,e),t.prototype.hitTest=function(e,t){var r,o=this;return this.featuresViews.forEach(function(n){n.hitTest(e,t)&&(r=n.hitTest(e,t),o._targetFeaturesView=n)}),r?r.then(function(e){return e.popupTemplate=o._popupTemplates.get(o._targetFeaturesView),e}):null},t.prototype.update=function(e){},t.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach(function(t){var r,o=u.fromJSON(t.featureSet),n=new(i.ofType(s))(o.features);if(e._featuresViewMap[o.geometryType])r=e._featuresViewMap[o.geometryType],r.graphics.addMany(n);else{var a=t.layerDefinition.drawingInfo,p=t.popupInfo?l.fromJSON(t.popupInfo):null,c=y.fromJSON(a.renderer);r=new m,r.graphics=n,r.mapView=e.view,r.renderer=c,e._featuresViewMap[o.geometryType]=r,e._popupTemplates.set(r,p),"polygon"!==o.geometryType||e.layer.polygonSymbol?"polyline"!==o.geometryType||e.layer.lineSymbol?"point"!==o.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=c.symbol):e.layer.lineSymbol=c.symbol:e.layer.polygonSymbol=c.symbol,e.featuresViews.push(r),e.container.addChild(r.container)}}),this._handles.add(a.init(this.layer,"polygonSymbol",function(t){e._featuresViewMap.polygon.renderer=new c({symbol:t})})),this._handles.add(a.init(this.layer,"lineSymbol",function(t){e._featuresViewMap.polyline.renderer=new c({symbol:t})})),this._handles.add(a.init(this.layer,"pointSymbol",function(t){e._featuresViewMap.point.renderer=new c({symbol:t})}))},t.prototype.detach=function(){this._handles.removeAll()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},t}(n.declared(d));return h=o([n.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],h)});