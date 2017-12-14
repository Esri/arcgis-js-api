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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","../../../core/promiseUtils","../../../core/watchUtils","../../../Graphic","./LayerView2D","./support/ExportStrategy","../engine/BitmapSource","../engine/Canvas2DContainer","../engine/BitmapContainer","../../layers/RefreshableLayerView"],function(e,t,a,r,i,n,o,s,p,h,c,u,l,d,g){var y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new n,t.container=new l,t}return a(t,e),t.prototype.hitTest=function(e,t){var a=this.view.toMap(e,t);return o.resolve(new p({attributes:{},geometry:a}))},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this._tileContainer=new d,this.container.addChild(this._tileContainer),this.strategy=new c({container:this._tileContainer,fetchImage:this.fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}}),this._handles.add([s.watch(this,"layer.exportImageServiceParameters.version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),this.layer.on("redraw",function(){e.strategy.updateExports(function(t){var a=t.source.data,r=a.getContext("2d");return e.pixelData=e.layer.applyFilter(e._rawPixelData),e._drawPixelData(r,e.pixelData,0,0),null})})])},t.prototype.detach=function(){this.container.removeChild(this._tileContainer),this.strategy.destroy(),this._handles.removeAll()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,a,r){var i=this;return this._exportImageVersion=this.get("layer.exportImageServiceParameters.version"),this.layer.fetchImage(e,t,a,r).then(function(e){i._rawPixelData=e.pixelData,i.pixelData=i.layer.applyFilter(i._rawPixelData);var r=document.createElement("canvas");r.width=t,r.height=a;var n=r.getContext("2d");return i._drawPixelData(n,i.pixelData,0,0),i.notifyChange("updating"),new u(r)})},t.prototype._drawPixelData=function(e,t,a,r){if(t.pixelBlock){var i=t.pixelBlock,n=e.createImageData(i.width,i.height),o=i.getAsRGBA();n.data.set(o),e.putImageData(n,a,r)}},t=r([i.subclass("esri.views.2d.layers.ImageryLayerView2D")],t)}(i.declared(h,g));return y});