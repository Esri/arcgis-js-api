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

define(["require","exports","tslib","../../../Graphic","../../../PopupTemplate","../../../core/Collection","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../renderers/SimpleRenderer","../../../renderers/support/jsonUtils","../../../tasks/support/FeatureSet","./LayerView2D","./graphics/GraphicsView2D","../../layers/LayerView"],(function(e,r,i,t,o,n,p,a,s,l,y,c,h,u,g){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._graphicsViewMap={},r._popupTemplates=new Map,r.graphicsViews=[],r}return i.__extends(r,e),r.prototype.hitTest=function(e,r){var i=this;if(this.suspended||!this.graphicsViews.length)return p.resolve();var t=this.graphicsViews.reverse().map((function(i){return i.hitTest(e,r)}));return p.all(t).then((function(e){return e.filter((function(e,r){return e&&(e.popupTemplate=i._popupTemplates.get(i.graphicsViews[r]),e.layer=i.layer,e.sourceLayer=i.layer),!!e}))[0]||null}))},r.prototype.update=function(e){if(this.graphicsViews)for(var r=0,i=this.graphicsViews;r<i.length;r++){i[r].processUpdate(e)}},r.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach((function(r){var i,p=c.fromJSON(r.featureSet),a=new(n.ofType(t))(p.features);if(e._graphicsViewMap[p.geometryType])(i=e._graphicsViewMap[p.geometryType]).graphics.addMany(a);else{var s=r.layerDefinition.drawingInfo,l=r.popupInfo?o.fromJSON(r.popupInfo):null,h=y.fromJSON(s.renderer);i=new u.default({requestUpdateCallback:function(){return e.requestUpdate()},view:e.view,graphics:a,renderer:h}),e._graphicsViewMap[p.geometryType]=i,e._popupTemplates.set(i,l),"polygon"!==p.geometryType||e.layer.polygonSymbol?"polyline"!==p.geometryType||e.layer.lineSymbol?"point"!==p.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=h.symbol):e.layer.lineSymbol=h.symbol:e.layer.polygonSymbol=h.symbol,e.graphicsViews.push(i),e.container.addChild(i.container)}})),this.handles.add([a.init(this.layer,"polygonSymbol",(function(r){e._graphicsViewMap.polygon.renderer=new l({symbol:r})})),a.init(this.layer,"lineSymbol",(function(r){e._graphicsViewMap.polyline.renderer=new l({symbol:r})})),a.init(this.layer,"pointSymbol",(function(r){e._graphicsViewMap.point.renderer=new l({symbol:r})}))])},r.prototype.detach=function(){this.container.removeAllChildren();for(var e=0,r=this.graphicsViews;e<r.length;e++){var i=r[e];i.destroy(),i.view=null,i.renderer=null}this.graphicsViews.length=0},r.prototype.moveStart=function(){},r.prototype.moveEnd=function(){},r.prototype.viewChange=function(){for(var e=0,r=this.graphicsViews;e<r.length;e++){r[e].viewChange()}},r=i.__decorate([s.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],r)}(h.LayerView2DMixin(g))}));