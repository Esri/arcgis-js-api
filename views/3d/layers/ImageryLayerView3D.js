// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./DynamicLayerView3D","../../layers/ImageryLayerView"],function(e,t,r,i,a,n,s,o,u,l,c){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.updateWhenStationary=!0,t.redrawDebounced=s.debounce(function(e){return n(t,void 0,void 0,function(){var t=this;return a(this,function(r){return this.redraw(function(e,r){return t.redrawImage(e,{signal:r})},e),[2]})})},2e3),t}return r(t,e),t.prototype.initialize=function(){var e=this;this.handles.add([o.whenOnce(this.view.basemapTerrain,"ready",function(){return e.initializeMaximumDataResolution()}),this.layer.on("redraw",function(){return e.redrawDebounced()})]),this.updatingHandles.add(this.layer,"exportImageServiceParameters.version",function(t){e.updatingHandles.addPromise(e.refreshDebounced())}),this.updatingHandles.add(this,"timeExtent",function(){return e.updatingHandles.addPromise(e.refreshDebounced())})},t.prototype.initializeMaximumDataResolution=function(){var e=this.view.basemapTerrain.spatialReference,t=this.layer.fullExtent;t&&e.equals(t.spatialReference)&&(this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY})},t.prototype.getFetchOptions=function(){return{timeExtent:this.timeExtent}},t.prototype.processResult=function(e,t,r){return n(this,void 0,void 0,function(){return a(this,function(i){switch(i.label){case 0:return t.imageElement?(e.image=t.imageElement,[3,3]):[3,1];case 1:return e.image=document.createElement("canvas"),e.pixelData=t.pixelData,[4,this.redrawImage(e,{signal:r})];case 2:i.sent(),i.label=3;case 3:return[2]}})})},t.prototype.redrawImage=function(e,t){return n(this,void 0,void 0,function(){var r,i,n,o,u,l;return a(this,function(a){switch(a.label){case 0:return e.image instanceof HTMLCanvasElement&&e.pixelData?(r=e.image,i=r.getContext("2d"),[4,this.layer.applyRenderer(e.pixelData,t)]):[2,s.reject()];case 1:return n=a.sent(),o=this.layer.applyFilter(n),u=o.pixelBlock,r.width=u.width,r.height=u.height,l=i.createImageData(u.width,u.height),l.data.set(o.pixelBlock.getAsRGBA()),i.putImageData(l,0,0),[2]}})})},i([u.property()],t.prototype,"layer",void 0),t=i([u.subclass("esri.views.3d.layers.ImageryLayerView3D")],t)}(u.declared(c.ImageryLayerView(l)))});