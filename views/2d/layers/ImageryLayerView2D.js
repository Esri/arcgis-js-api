// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","../../../core/promiseUtils","../../../core/watchUtils","../../../Graphic","./LayerView2D","./support/ExportStrategy","../engine/GeoBitmap","../engine/Canvas2DContainer","../engine/GeoBitmapContainer"],function(t,e,a,r,i,n,o,s,p,h,c,u,l,d){var g=function(t){function e(){t.apply(this,arguments),this._handles=new n,this.container=new l}return a(e,t),e.prototype.hitTest=function(t,e){var a=this.view.toMap(t,e);return o.resolve(new p({attributes:{},geometry:a}))},e.prototype.update=function(t){this.strategy.update(t),this.notifyChange("updating")},e.prototype.attach=function(){var t=this;this._tileContainer=new d,this.container.addChild(this._tileContainer),this.strategy=new c(this._tileContainer,function(e){return t._fetchImage(e)},function(){return t.requestUpdate()},0,!1,2048,2048,!1),this._handles.add([s.watch(this,"layer.exportImageServiceParameters.version",function(e){t._exportImageVersion!==e&&(t._exportImageVersion=e,t.requestUpdate())}),this.layer.on("redraw",function(){t.strategy.updateExports(function(e){t.pixelData=t.layer.applyFilter(t._rawPixelData);var a=e.source,r=a.getContext("2d");return t._drawPixelData(r,t.pixelData,0,0),null})})])},e.prototype.detach=function(){this.container.removeChild(this._tileContainer),this.strategy.destroy(),this._handles.removeAll()},e.prototype.moveStart=function(){},e.prototype.viewChange=function(){},e.prototype.moveEnd=function(){this.requestUpdate()},e.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},e.prototype._fetchImage=function(t){var e=this;return this._exportImageVersion=this.get("layer.exportImageServiceParameters.version"),this.layer.fetchImage(t).then(function(a){e._rawPixelData=a.pixelData,e.pixelData=e.layer.applyFilter(e._rawPixelData);var r=document.createElement("canvas");r.width=t.width,r.height=t.height;var i=r.getContext("2d");return e._drawPixelData(i,e.pixelData,0,0),e.notifyChange("updating"),new u(r)})},e.prototype._drawPixelData=function(t,e,a,r){if(e.pixelBlock){var i=e.pixelBlock,n=t.createImageData(i.width,i.height),o=i.getAsRGBA();n.data.set(o),t.putImageData(n,a,r)}},e=r([i.subclass("esri.views.2d.layers.ImageryLayerView2D")],e)}(i.declared(h));return g});