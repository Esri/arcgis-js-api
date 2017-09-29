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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","../../../core/promiseUtils","../../../request","../../../geometry/Extent","../../../geometry/support/webMercatorUtils","../engine/DOMContainer","../engine/Canvas2DContainer","../engine/Bitmap","../engine/BitmapSource","./LayerView2D","../../layers/RefreshableLayerView","./support/GraphicsView2D"],function(e,i,t,n,r,o,a,s,l,h,p,c,d,u,w,m,y){var g=function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i._handles=new o,i._bitmapIndex=new Map,i._mapImageContainer=new c,i.container=new p,i}return t(i,e),i.prototype.hitTest=function(e,i){var t=this;if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return a.resolve();var n=[this._pointsView.hitTest(e,i),this._polylinesView.hitTest(e,i),this._polygonsView.hitTest(e,i)];return a.all(n).then(function(e){var i=e.filter(function(e){return e&&(e.layer=t.layer),!!e});return i[0]||null})},i.prototype.update=function(e){},i.prototype.attach=function(){var e=this;this.layer.allVisibleMapImages.forEach(function(i){return e._addMapImage(i)}),this._handles.add(this.layer.allVisibleMapImages.on("change",function(i){i.added.forEach(function(i){return e._addMapImage(i)}),i.removed.forEach(function(i){return e._removeMapImage(i)})})),this.container.addChild(this._mapImageContainer),this._polygonsView=new y({view:this.view,graphics:this.layer.allVisiblePolygons}),this.container.addChild(this._polygonsView.container),this._polylinesView=new y({view:this.view,graphics:this.layer.allVisiblePolylines}),this.container.addChild(this._polylinesView.container),this._pointsView=new y({view:this.view,graphics:this.layer.allVisiblePoints}),this.container.addChild(this._pointsView.container)},i.prototype.detach=function(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView.graphics=null,this._pointsView.graphics=null,this._polylinesView.graphics=null,this._pointsView=null,this._polylinesView=null,this._polygonsView=null},i.prototype.moveStart=function(){},i.prototype.viewChange=function(){},i.prototype.moveEnd=function(){},i.prototype._addMapImage=function(e){var i=this;this.view.spatialReference.isWGS84&&s(e.href,{responseType:"image"}).then(function(t){var n=l.fromJSON(e.extent);h.canProject(n,i.view.spatialReference)&&(n=h.project(n,i.view.spatialReference));var r=new u(t.data);r.coords[0]=n.xmin,r.coords[1]=n.ymax,r.resolution=n.width/r.width,r.rotation=e.rotation;var o=new d(r);o.coords=[r.coords[0],r.coords[1]],o.resolution=r.resolution,o.width=r.width,o.height=r.height,i._mapImageContainer.addChild(o),i._bitmapIndex.set(e,o)})},i.prototype._removeMapImage=function(e){var i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex["delete"](e))},i=n([r.subclass("esri.views.2d.layers.KMLLayerView2D")],i)}(r.declared(w,m));return g});