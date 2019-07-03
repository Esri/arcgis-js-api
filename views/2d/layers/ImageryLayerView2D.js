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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../Graphic","../../../core/Handles","../../../core/promiseUtils","../../../core/screenUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../engine","./LayerView2D","./support/ExportStrategy","../../layers/ImageryLayerView"],function(e,t,r,i,n,o,a,s,p,c,u,l,h,d,f,y){var g=function(){function e(e){this.pixelBlock=e}return Object.defineProperty(e.prototype,"width",{get:function(){return this.pixelBlock?this.pixelBlock.width:0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.pixelBlock?this.pixelBlock.height:0},enumerable:!0,configurable:!0}),e.prototype.render=function(e){if(this.pixelBlock){var t=this.filter({pixelBlock:this.pixelBlock}),r=e.createImageData(t.pixelBlock.width,t.pixelBlock.height),i=t.pixelBlock.getAsRGBA();r.data.set(i),e.putImageData(r,0,0)}},e}();return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new s,t.container=new h.BitmapContainer,t}return r(t,e),t.prototype.hitTest=function(e,t){if(this.suspended)return p.resolve(null);var r=this.view.toMap(c.createScreenPoint(e,t));return p.resolve(new a({attributes:{},geometry:r}))},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this.strategy=new f({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}}),this._handles.add([u.watch(this,"layer.exportImageServiceParameters.version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),this.watch("timeExtent",function(){return e.requestUpdate()}),this.layer.on("redraw",function(){e.strategy.updateExports(function(t){t.source.filter=e.layer.applyFilter.bind(e.layer),t.requestRender()})})])},t.prototype.detach=function(){this.strategy.destroy(),this._handles.removeAll(),this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(e){return o(this,void 0,void 0,function(){return n(this,function(e){return this.requestUpdate(),[2]})})},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,r,i){var n=this;return this._exportImageVersion=this.get("layer.exportImageServiceParameters.version"),i=i||{},i.timeExtent=this.timeExtent,this.layer.fetchImage(e,t,r,i).then(function(e){var t=new g(e.pixelData.pixelBlock);return t.filter=function(e){return n.layer.applyFilter(e)},n.notifyChange("updating"),t})},t=i([l.subclass("esri.views.2d.layers.ImageryLayerView2D")],t)}(l.declared(d,y))});