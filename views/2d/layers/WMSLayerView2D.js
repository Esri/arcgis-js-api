// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Error","../../../core/Logger","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","../engine/BitmapContainer","./LayerView2D","./support/ExportStrategy","../../layers/LayerView","../../layers/RefreshableLayerView","../../layers/WMSLayerView"],(function(e,t,r,i,a,n,o,s,p,h,u,m,c,y,d){"use strict";var l=a.getLogger("esri.views.2d.layers.WMSLayerView2D");return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.initialize=function(){var e=this.layer,t=this.view;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(n.reject(new i("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))},t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){n.isAbortError(e)||l.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,r=this.view,i=t.imageMaxHeight,a=t.imageMaxWidth;this._bitmapContainer=new h.BitmapContainer,this.container.addChild(this._bitmapContainer),this.strategy=new m({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:i,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new p({layer:t,view:r}),this.handles.add(this._exportWMSImageParameters.watch("version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"wms")},t.prototype.detach=function(){this.handles.remove("wms"),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=this.view,r=this._bitmapContainer,i=e.x,a=e.y,n=t.spatialReference,o=null,p=0,h=0;r.children.some((function(e){var t=e.width,r=e.height,u=e.resolution,m=e.x,c=e.y,y=m+u*t,d=c-u*r;return i>=m&&i<=y&&a<=c&&a>=d&&(o=new s({xmin:m,ymin:d,xmax:y,ymax:c,spatialReference:n}),p=t,h=r,!0)}));var u=o.width/p,m=Math.round((i-o.xmin)/u),c=Math.round((o.ymax-a)/u);return{extent:o,width:p,height:h,x:m,y:c}},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.fetchImage=function(e,t,i,a){return this.layer.fetchImage(e,t,i,r.__assign({timeExtent:this._exportWMSImageParameters.timeExtent,timestamp:this.refreshTimestamp},a))},r.__decorate([o.property()],t.prototype,"strategy",void 0),r.__decorate([o.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),t=r.__decorate([o.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(d.WMSLayerView(y.RefreshableLayerView(u.LayerView2DMixin(c))))}));