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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Logger","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../layers/support/ExportImageParameters","./BitmapLayerView2D","./LayerView2D","./support/ExportStrategy","../../layers/LayerView","../../layers/MapImageLayerView","../../layers/RefreshableLayerView","../../support/drapedUtils"],(function(e,t,r,a,i,o,s,p,n,u,h,m,y,c,d,g,l,f,w){var x=p.getLogger("esri.views.2d.layers.MapImageLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageParameters=null,t._exportImageVersion=-1,t}return a(t,e),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch((function(e){n.isAbortError(e)||x.error(e)}))},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxWidth,a=t.imageMaxHeight,i=t.version,o=i>=10.3,s=i>=10;this.strategy=new d({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:a,imageRotationSupported:o,imageNormalizationSupported:s,hidpi:!0}),this._exportImageParameters=new m.ExportImageParameters({view:this.view,layer:this.layer}),this.handles.add(u.init(this._exportImageParameters,"version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),"mapimagelayerview-update")},t.prototype.detach=function(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null,this._exportImageVersion=-1,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return w.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){return s(this,void 0,void 0,(function(){return o(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,a,i){return this.layer.fetchImage(e,t,a,r({timeExtent:this._exportImageParameters.timeExtent,timestamp:this.refreshTimestamp},i))},i([h.property()],t.prototype,"strategy",void 0),i([h.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),t=i([h.subclass("esri.views.2d.layers.MapImageLayerView2D")],t)}(h.declared(l.MapImageLayerView(f.RefreshableLayerView(y.BitmapLayerView2D(c.LayerView2D(g))))))}));