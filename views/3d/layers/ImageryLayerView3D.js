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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./DynamicLayerView3D","../../layers/ImageryLayerView"],(function(e,t,a,i,r,n,s,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.updateWhenStationary=!0,t.redrawDebounced=i.debounce((function(e){return a.__awaiter(t,void 0,void 0,(function(){var t=this;return a.__generator(this,(function(a){return this.redraw((function(e,a){return t.redrawImage(e,{signal:a})}),e),[2]}))}))}),2e3),t}return a.__extends(t,e),t.prototype.initialize=function(){var e=this;this.handles.add([r.whenOnce(this.view.basemapTerrain,"ready",(function(){return e.initializeMaximumDataResolution()})),this.layer.on("redraw",(function(){return e.redrawDebounced()}))]),this.updatingHandles.add(this.layer,"exportImageServiceParameters.version",(function(){e.updatingHandles.addPromise(e.refreshDebounced())})),this.updatingHandles.add(this,"timeExtent",(function(){return e.updatingHandles.addPromise(e.refreshDebounced())}))},t.prototype.initializeMaximumDataResolution=function(){var e=this.view.basemapTerrain.spatialReference,t=this.layer.fullExtent;t&&e.equals(t.spatialReference)&&(this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY})},t.prototype.getFetchOptions=function(){return{timeExtent:this.timeExtent}},t.prototype.processResult=function(e,t,i){return a.__awaiter(this,void 0,void 0,(function(){return a.__generator(this,(function(a){switch(a.label){case 0:return t.imageElement?(e.image=t.imageElement,[3,3]):[3,1];case 1:return e.image=document.createElement("canvas"),e.pixelData=t.pixelData,[4,this.redrawImage(e,{signal:i})];case 2:a.sent(),a.label=3;case 3:return[2]}}))}))},t.prototype.redrawImage=function(e,t){return a.__awaiter(this,void 0,void 0,(function(){var r,n,s,o,u,l;return a.__generator(this,(function(a){switch(a.label){case 0:return e.image instanceof HTMLCanvasElement&&e.pixelData?(r=e.image,n=r.getContext("2d"),[4,this.layer.applyRenderer(e.pixelData,t)]):[2,i.reject()];case 1:return s=a.sent(),o=this.layer.applyFilter(s),u=o.pixelBlock,r.width=u.width,r.height=u.height,(l=n.createImageData(u.width,u.height)).data.set(o.pixelBlock.getAsRGBA()),n.putImageData(l,0,0),[2]}}))}))},t=a.__decorate([n.subclass("esri.views.3d.layers.ImageryLayerView3D")],t)}(o.ImageryLayerView(s))}));