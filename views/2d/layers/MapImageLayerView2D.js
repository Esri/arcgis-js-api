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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Handles","../../../core/Logger","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../layers/support/ExportImageParameters","../engine/BitmapContainer","./LayerView2D","./support/ExportStrategy","./support/popupUtils2D","../../layers/MapImageLayerView"],function(e,t,r,a,i,o,s,n,p,h,u,c,m,g,d){var l=s.getLogger("esri.views.2d.layers.MapImageLayerView2D");return function(e){function t(){var t=e.call(this)||this;return t._handles=new o,t.container=new u.BitmapContainer,t}return a(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxWidth,a=t.imageMaxHeight,i=t.version,o=i>=10.3,s=i>=10;this.strategy=new m({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:a,imageRotationSupported:o,imageNormalizationSupported:s,hidpi:!0}),this._exportImageParameters=new h.ExportImageParameters({layer:this.layer}),this._handles.add(this._exportImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}))},t.prototype.detach=function(){this.strategy.destroy(),this._handles.removeAll(),this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return g.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,a,i){var o=this;return this._exportImageParameters.scale!==this.view.scale&&(this._exportImageParameters.scale=this.view.scale,this._exportImageVersion=this._exportImageParameters.version),i=r({timestamp:this.refreshTimestamp},i),this.layer.fetchImage(e,t,a,i).then(function(e){return o.notifyChange("updating"),e}).catch(function(e){return"cancel"!==e.dojoType&&l.error(e),o.notifyChange("updating"),n.reject(e)})},t=i([p.subclass("esri.views.2d.layers.MapImageLayerView2D")],t)}(p.declared(c,d))});