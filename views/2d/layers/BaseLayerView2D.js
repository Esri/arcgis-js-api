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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Error","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../engine/BitmapContainer","../engine/BitmapSource","../engine/Canvas2DContainer","./LayerView2D","./support/ExportStrategy","../tiling/TileInfoView","../tiling/TileQueue","../tiling/TileStrategy","../../layers/RefreshableLayerView"],function(e,t,r,n,i,o,a,s,u,p,c,d,l,f,h,g){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportStrategies=[],t._tileStrategies=[],t._updates=new Set,t.container=new p,t}return r(t,e),t.prototype.startExportRendering=function(e){var t=this;if(!e)throw new i("base-layer-view-2d:startExportRendering","renderingOptions parameter missing");var r=this.container,n=this._exportStrategies,a=new s,p=new d({container:a,imageRotationSupported:!1,imageNormalizationSupported:!1,imageDataAccessRequired:!0,hidpi:!0,requestUpdate:function(){t._requestUpdate(p)},disposeSource:function(t){e.disposeExport&&e.disposeExport(t.data)},fetchSource:function(t,r,n,i){var a=t.xmin,s=t.ymax,p=t.width/r,c=function(e,t,r){return e[0]=(t-a)/p,e[1]=(s-r)/p,e};return o.resolve().then(function(){return e.createExport(t,r,n,{pixelRatio:i.pixelRatio,toScreen:c})}).then(function(e){return new u.default(e)})}});return n.push(p),r.addChild(a),{requestUpdate:function(){t._requestUpdate(p)},requestRender:function(e){for(var t=0,r=a.children;t<r.length;t++){var n=r[t];n.source.data===e&&n.requestRender()}},stop:function(){n.splice(n.indexOf(p),1),r.removeChild(a),a.removeAllChildren(),p.destroy(),p=a=null}}},t.prototype.startTileRendering=function(e){var t=this;if(!e)throw new i("base-layer-view-2d:startTileRendering","renderingOptions parameter missing");var r=this.container,n=this._tileStrategies,o=new l(this.layer.tileInfo,this.layer.fullExtent),a=new f({tileInfoView:o,process:function(e){}}),u=new h({cachePolicy:"keep",acquireTile:function(e){return null},releaseTile:function(e){},tileInfoView:o}),p=new s;return n.push(u),r.addChild(p),{requestUpdate:function(){t._requestUpdate(u)},requestRender:function(e){for(var t=0,r=p.children;t<r.length;t++){var n=r[t];n.source.data===e&&n.requestRender()}},stop:function(){n.splice(n.indexOf(u),1),r.removeChild(p),p.removeAllChildren(),u.destroy(),a.clear(),u=p=a=o=null}}},t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){var t=[];this._updates.forEach(function(e){t.push(e)}),this._updates.clear();for(var r=0,n=t;r<n.length;r++){n[r].update(e)}},t.prototype.attach=function(){},t.prototype.detach=function(){},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){for(var e=0,t=this._exportStrategies;e<t.length;e++){var r=t[e];this._requestUpdate(r)}},t.prototype._requestUpdate=function(e){e&&(this._updates.has(e)||(this._updates.add(e),this.requestUpdate()))},t=n([a.subclass("esri.views.2d.layers.BaseLayerView2D")],t)}(a.declared(c,g))});