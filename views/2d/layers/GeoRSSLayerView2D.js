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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Graphic","../../../PopupTemplate","../../../core/Collection","../../../core/Handles","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../renderers/SimpleRenderer","../../../renderers/support/jsonUtils","../../../tasks/support/FeatureSet","../engine","./LayerView2D","./graphics/GraphicsView2D","../../layers/RefreshableLayerView"],function(e,r,t,i,n,o,a,s,p,l,h,y,c,u,g,d,f,m){function w(e,r,t){for(var i=e.length,n=0,o=0,a=0,s=0;s<i;s++){var p=e[s],l=e[(s+1)%i],h=2;n+=p[0]*l[1]-l[0]*p[1],p.length>2&&l.length>2&&t&&(o+=p[0]*l[2]-l[0]*p[2],h=3),p.length>h&&l.length>h&&r&&(a+=p[0]*l[h]-l[0]*p[h])}return n<=0&&o<=0&&a<=0}function v(e){if("polygon"===e.geometryType)for(var r=0,t=e.features;r<t.length;r++){var i=t[r];if("rings"in i.geometry)for(var n=i.geometry.rings,o=n.length,a=0;a<o;++a){var s=n[a];w(s,i.geometry.hasM,i.geometry.hasZ)||(n[a]=s.reverse())}}}return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._handles=new s,r._graphicsViewMap={},r._popupTemplates=new Map,r.container=new g.Container,r.graphicsViews=[],r}return t(r,e),r.prototype.hitTest=function(e,r){var t=this;if(this.suspended||!this.graphicsViews.length)return p.resolve();var i=this.graphicsViews.reverse().map(function(t){return t.hitTest(e,r)});return p.all(i).then(function(e){return e.filter(function(e,r){return e&&(e.popupTemplate=t._popupTemplates.get(t.graphicsViews[r]),e.layer=t.layer,e.sourceLayer=t.layer),!!e})[0]||null})},r.prototype.update=function(e){if(this.graphicsViews)for(var r=0,t=this.graphicsViews;r<t.length;r++){var i=t[r];i.update(e)}},r.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach(function(r){var t=u.fromJSON(r.featureSet),i=new(a.ofType(n))(t.features);v(t);var s;if(e._graphicsViewMap[t.geometryType])s=e._graphicsViewMap[t.geometryType],s.graphics.addMany(i);else{var p=r.layerDefinition.drawingInfo,l=r.popupInfo?o.fromJSON(r.popupInfo):null,h=c.fromJSON(p.renderer);s=new f.default({view:e.view,graphics:i,renderer:h}),e._graphicsViewMap[t.geometryType]=s,e._popupTemplates.set(s,l),"polygon"!==t.geometryType||e.layer.polygonSymbol?"polyline"!==t.geometryType||e.layer.lineSymbol?"point"!==t.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=h.symbol):e.layer.lineSymbol=h.symbol:e.layer.polygonSymbol=h.symbol,e.graphicsViews.push(s),e.container.addChild(s.container)}}),this._handles.add(l.init(this.layer,"polygonSymbol",function(r){e._graphicsViewMap.polygon.renderer=new y({symbol:r})})),this._handles.add(l.init(this.layer,"lineSymbol",function(r){e._graphicsViewMap.polyline.renderer=new y({symbol:r})})),this._handles.add(l.init(this.layer,"pointSymbol",function(r){e._graphicsViewMap.point.renderer=new y({symbol:r})}))},r.prototype.detach=function(){this._handles.removeAll(),this.container.removeAllChildren(),this.graphicsViews.forEach(function(e){e.destroy(),e.view=null,e.renderer=null}),this.graphicsViews.length=0},r.prototype.moveStart=function(){this.requestUpdate()},r.prototype.viewChange=function(){this.requestUpdate()},r.prototype.moveEnd=function(){this.requestUpdate()},r=i([h.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],r)}(h.declared(d,m))});