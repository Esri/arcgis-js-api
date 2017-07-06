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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","../../../layers/support/ExportImageParameters","./LayerView2D","./support/ExportStrategy","../engine/BitmapSource","../engine/Canvas2DContainer"],function(e,t,r,a,i,n,o,s,p,u,h){var l=function(e){function t(){var t=e.call(this)||this;return t._handles=new n,t.container=new h,t.container.hidpi=!0,t}return r(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxWidth,a=t.imageMaxHeight,i=t.version,n=i>=10.3,s=i>=10;this.strategy=new p({container:this.container,fetchImage:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:a,imageRotationSupported:n,imageNormalizationSupported:s,hidpi:!0}),this._exportImageParameters=new o({layer:this.layer}),this._handles.add(this._exportImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}))},t.prototype.detach=function(){this.container.removeAllChildren(),this.strategy.destroy(),this._handles.removeAll(),this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.getPopupData=function(e){var t=this,r=this.view.scale,a=this.layer.allSublayers.filter(function(e){var t=0===e.minScale||r<=e.minScale,a=0===e.maxScale||r>=e.maxScale;return e.popupTemplate&&e.visible&&t&&a});return a.map(function(r){var a=r.createQuery();return a.geometry=e,a.outFields=t.getTemplateOutFields(r.popupTemplate),r.queryFeatures(a).then(function(e){return e.features})})},t.prototype.getTemplateOutFields=function(e){if(!e||!e.fieldInfos)return["*"];var t=[];return e.fieldInfos.forEach(function(e){var r=e.fieldName&&e.fieldName.toLowerCase();r&&"shape"!==r&&0!==r.indexOf("relationships/")&&t.push(e.fieldName)}),t},t.prototype.fetchImage=function(e,t,r,a){var i=this;return this._exportImageParameters.scale!==this.view.scale&&(this._exportImageParameters.scale=this.view.scale,this._exportImageVersion=this._exportImageParameters.version),this.layer.fetchImage(e,t,r,a).then(function(e){return i.notifyChange("updating"),new u(e)})},t}(i.declared(s));return l=a([i.subclass("esri.views.2d.layers.MapImageLayerView2D")],l)});