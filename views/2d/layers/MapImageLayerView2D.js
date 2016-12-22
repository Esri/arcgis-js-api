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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","../../../layers/support/ExportImageParameters","./LayerView2D","./support/ExportStrategy","../engine/GeoBitmap","../engine/Canvas2DContainer","../engine/GeoBitmapContainer"],function(e,t,r,a,n,i,o,s,p,u,h,c){var l=function(e){function t(){e.apply(this,arguments),this._handles=new i,this.container=new h}return r(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this._imageContainer=new c,this.container.addChild(this._imageContainer),this.strategy=new p(this._imageContainer,function(t){return e._fetchImage(t)},function(){return e.requestUpdate()},0,!1,2048,2048,!1),this._exportImageParameters=new o({layer:this.layer}),this._handles.add(this._exportImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}))},t.prototype.detach=function(){this.container.removeChild(this._imageContainer),this.strategy.destroy(),this._handles.removeAll(),this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.getPopupData=function(e){var t=this,r=this.view.scale,a=this.layer.allSublayers.filter(function(e){var t=0===e.minScale||r<=e.minScale,a=0===e.maxScale||r>=e.maxScale;return e.popupTemplate&&e.visible&&t&&a});return a.map(function(r){var a=r.createQuery();return a.geometry=e,a.outFields=t.getTemplateOutFields(r.popupTemplate),r.queryFeatures(a).then(function(e){return e.features})})},t.prototype.getTemplateOutFields=function(e){if(!e||!e.fieldInfos)return["*"];var t=[];return e.fieldInfos.forEach(function(e){var r=e.fieldName&&e.fieldName.toLowerCase();r&&"shape"!==r&&0!==r.indexOf("relationships/")&&t.push(e.fieldName)}),t},t.prototype._fetchImage=function(e){var t=this;return this._exportImageParameters.scale!==this.view.scale&&(this._exportImageParameters.scale=this.view.scale,this._exportImageVersion=this._exportImageParameters.version),this.layer.fetchImage(e).then(function(e){return t.notifyChange("updating"),new u(e.img)})},t=a([n.subclass("esri.views.2d.layers.MapImageLayerView2D")],t)}(n.declared(s));return l});