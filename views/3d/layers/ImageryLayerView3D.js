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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/watchUtils","../../../core/accessorSupport/decorators","./DynamicLayerView3D","../../layers/ImageryLayerView"],function(e,t,r,a,i,n,o,s,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.updateWhenStationary=!0,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.handles.add([n.whenOnce(this.view.basemapTerrain,"ready",function(){return e.initializeMaximumDataResolution()}),this.layer.watch("exportImageServiceParameters.version",function(t){e.refreshDebounced()}),this.watch("timeExtent",function(){return e.refreshDebounced()}),this.layer.on("redraw",function(){return e.redraw(function(t){return e.redrawImage(t)})})])},t.prototype.initializeMaximumDataResolution=function(){var e=this.view.basemapTerrain.spatialReference,t=this.layer.fullExtent;t&&e.equals(t.spatialReference)&&(this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY})},t.prototype.getFetchOptions=function(){return{timeExtent:this.timeExtent}},t.prototype.processResult=function(e,t){t.imageElement?e.image=t.imageElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,this.redrawImage(e))},t.prototype.redrawImage=function(e){if(!(e.image instanceof HTMLCanvasElement&&e.pixelData))return!1;var t=e.image,r=t.getContext("2d"),a=this.layer.applyFilter(e.pixelData),i=a.pixelBlock,n=r.createImageData(i.width,i.height),o=i.getAsRGBA();return t.width=i.width,t.height=i.height,n.data.set(o),r.putImageData(n,0,0),!0},a([o.property()],t.prototype,"layer",void 0),t=a([o.subclass("esri.views.3d.layers.ImageryLayerView3D")],t)}(o.declared(s,l))});