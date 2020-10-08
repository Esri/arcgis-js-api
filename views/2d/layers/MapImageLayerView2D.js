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

define(["require","exports","tslib","../../../core/Logger","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../layers/support/ExportImageParameters","../engine/BitmapContainer","./LayerView2D","./support/ExportStrategy","../../layers/LayerView","../../layers/MapImageLayerView","../../layers/RefreshableLayerView","../../support/drapedUtils"],(function(e,t,r,i,a,o,s,n,p,h,u,m,d,y,g){"use strict";var c=i.getLogger("esri.views.2d.layers.MapImageLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageVersion=-1,t}return r.__extends(t,e),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){a.isAbortError(e)||c.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxWidth,i=t.imageMaxHeight,a=t.version,s=a>=10.3,h=a>=10;this._bitmapContainer=new p.BitmapContainer,this.container.addChild(this._bitmapContainer),this.strategy=new u({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:i,imageRotationSupported:s,imageNormalizationSupported:h,hidpi:!0}),this.imageParameters=new n.ExportImageParameters({view:this.view,layer:this.layer}),this.handles.add(o.init(this.imageParameters,"version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"mapimagelayerview-update")},t.prototype.detach=function(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this.imageParameters.destroy(),this.imageParameters=null,this._exportImageVersion=-1,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return g.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},t.prototype.fetchImage=function(e,t,i,a){return this.layer.fetchImage(e,t,i,r.__assign({timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp},a))},r.__decorate([s.property()],t.prototype,"strategy",void 0),r.__decorate([s.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),t=r.__decorate([s.subclass("esri.views.2d.layers.MapImageLayerView2D")],t)}(d.MapImageLayerView(y.RefreshableLayerView(h.LayerView2DMixin(m))))}));