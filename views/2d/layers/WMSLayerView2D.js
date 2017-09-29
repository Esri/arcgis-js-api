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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","./LayerView2D","./support/ExportStrategy","../engine/BitmapSource","../engine/Canvas2DContainer","../../layers/RefreshableLayerView"],function(e,t,r,a,i,n,o,s,p,h,u,l,d){var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new n,t.container=new l,t}return r(t,e),t.prototype.hitTest=function(e,t){var r=this;if(!this.layer.popupEnabled)return null;var a=this.view.toMap(e,t),i=a.x,n=a.y,s=null,p=0,h=0;if(this.container.children.some(function(e){var t=e.width,a=e.height,u=e.resolution,l=e.coords,d=l[0],c=l[1],m=d+u*t,g=c-u*a;return i>=d&&m>=i&&c>=n&&n>=g?(s=new o({xmin:d,ymin:g,xmax:m,ymax:c,spatialReference:r.view.spatialReference}),p=t,h=a,!0):!1}),s&&p&&h){var u=s.width/p,l=Math.round((i-s.xmin)/u),d=Math.round((s.ymax-n)/u);return this.layer.fetchFeatureInfo(s,p,h,l,d)}return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxHeight,a=t.imageMaxWidth;this.strategy=new h({container:this.container,fetchImage:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new s({layer:this.layer}),this._handles.add(this._exportWMSImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e._exportWMSImageParameters.layers?e.requestUpdate():e.container.removeAllChildren())}))},t.prototype.detach=function(){this.container.removeAllChildren(),this.strategy.destroy(),this._handles.removeAll(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,r,a){var i=this;return this.layer.fetchImage(e,t,r,a).then(function(e){return i.notifyChange("updating"),new u(e)})},t=a([i.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(i.declared(p,d));return c});