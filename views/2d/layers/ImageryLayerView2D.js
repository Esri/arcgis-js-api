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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Graphic","../../../core/Handles","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../engine/BitmapContainer","./LayerView2D","./support/ExportStrategy","../../layers/ImageryLayerView"],function(e,t,r,a,i,n,o,s,p,u,c,l,h){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new n,t.container=new u.BitmapContainer,t}return r(t,e),t.prototype.hitTest=function(e,t){if(this.suspended)return o.resolve(null);var r=this.view.toMap(e,t);return o.resolve(new i({attributes:{},geometry:r}))},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this.strategy=new l({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}}),this._handles.add([s.watch(this,"layer.exportImageServiceParameters.version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),this.layer.on("redraw",function(){e.strategy.updateExports(function(t){var r=t.source,a=r.getContext("2d");return e.pixelData=e.layer.applyFilter(e._rawPixelData),e._drawPixelData(a,e.pixelData,0,0),null})})])},t.prototype.detach=function(){this.strategy.destroy(),this._handles.removeAll(),this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,r,a){var i=this;return this._exportImageVersion=this.get("layer.exportImageServiceParameters.version"),this.layer.fetchImage(e,t,r,a).then(function(e){i._rawPixelData=e.pixelData,i.pixelData=i.layer.applyFilter(i._rawPixelData);var a=document.createElement("canvas");a.width=t,a.height=r;var n=a.getContext("2d");return i._drawPixelData(n,i.pixelData,0,0),i.notifyChange("updating"),a})},t.prototype._drawPixelData=function(e,t,r,a){if(t.pixelBlock){var i=t.pixelBlock,n=e.createImageData(i.width,i.height),o=i.getAsRGBA();n.data.set(o),e.putImageData(n,r,a)}},t=a([p.subclass("esri.views.2d.layers.ImageryLayerView2D")],t)}(p.declared(c,h))});