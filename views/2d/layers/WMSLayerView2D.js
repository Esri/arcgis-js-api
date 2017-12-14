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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","./LayerView2D","./support/ExportStrategy","../engine/BitmapSource","../engine/Canvas2DContainer","../../layers/RefreshableLayerView","dojo/_base/lang"],function(e,t,r,a,n,i,o,s,p,h,u,l,c,d){var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new i,t.container=new l,t}return r(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.getPopupData=function(e){var t=this,r=e.center;if(!this.layer.popupEnabled)return null;var a=r.x,n=r.y,i=null,s=0,p=0;if(this.container.children.some(function(e){var r=e.width,h=e.height,u=e.resolution,l=e.coords,c=l[0],d=l[1],m=c+u*r,g=d-u*h;return a>=c&&m>=a&&d>=n&&n>=g?(i=new o({xmin:c,ymin:g,xmax:m,ymax:d,spatialReference:t.view.spatialReference}),s=r,p=h,!0):!1}),i&&s&&p){var h=i.width/s,u=Math.round((a-i.xmin)/h),l=Math.round((i.ymax-n)/h),c=this.layer.fetchFeatureInfo(i,s,p,u,l);return c.then(function(e){return[e]})}return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxHeight,a=t.imageMaxWidth;this.strategy=new h({container:this.container,fetchImage:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new s({layer:this.layer}),this._handles.add(this._exportWMSImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e._exportWMSImageParameters.layers?e.requestUpdate():e.container.removeAllChildren())}))},t.prototype.detach=function(){this.container.removeAllChildren(),this.strategy.destroy(),this._handles.removeAll(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,r,a){var n=this;return a=d.mixin({timestamp:this.refreshTimestamp},a),this.layer.fetchImage(e,t,r,a).then(function(e){return n.notifyChange("updating"),new u(e)})},t=a([n.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(n.declared(p,c));return m});