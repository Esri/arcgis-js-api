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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","dojo/_base/lang","../../../core/Handles","../../../core/accessorSupport/decorators","../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","../engine/BitmapSource","../engine/Canvas2DContainer","./LayerView2D","./support/ExportStrategy","../../layers/RefreshableLayerView"],function(e,t,r,a,n,i,o,s,p,h,u,l,c,d){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new i,t.container=new u,t}return r(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.getPopupData=function(e){var t=this,r=e.center;if(!this.layer.popupEnabled)return null;var a=r.x,n=r.y,i=null,o=0,p=0;if(this.container.children.some(function(e){var r=e.width,h=e.height,u=e.resolution,l=e.x,c=e.y,d=l+u*r,m=c-u*h;return a>=l&&a<=d&&n<=c&&n>=m&&(i=new s({xmin:l,ymin:m,xmax:d,ymax:c,spatialReference:t.view.spatialReference}),o=r,p=h,!0)}),i&&o&&p){var h=i.width/o,u=Math.round((a-i.xmin)/h),l=Math.round((i.ymax-n)/h),c=this.layer.fetchFeatureInfo(i,o,p,u,l);return c&&c.then(function(e){return[e]})}return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxHeight,a=t.imageMaxWidth;this.strategy=new c({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new p({layer:this.layer}),this._handles.add(this._exportWMSImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e._exportWMSImageParameters.layers?e.requestUpdate():e.container.removeAllChildren())}))},t.prototype.detach=function(){this.container.removeAllChildren(),this.strategy.destroy(),this._handles.removeAll(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,r,a){var i=this;return a=n.mixin({timestamp:this.refreshTimestamp},a),this.layer.fetchImage(e,t,r,a).then(function(e){return i.notifyChange("updating"),new h.default(e)})},t=a([o.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(o.declared(l,d))});