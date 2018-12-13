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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/watchUtils","../../../core/accessorSupport/decorators","./DynamicLayerView3D","../../layers/ImageryLayerView"],function(e,t,a,i,r,l,n,s){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.initialize=function(){var e=this;this.handles.add([r.whenOnce(this.view.basemapTerrain,"ready",function(){return e.initializeMaximumDataResolution()}),this.layer.watch("exportImageServiceParameters.version",function(t){e.doRefresh()})])},t.prototype.initializeMaximumDataResolution=function(){var e=this.view.basemapTerrain.spatialReference,t=this.layer.fullExtent;t&&e.equals(t.spatialReference)&&(this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY})},t.prototype.processResult=function(e,t){if(t.imageElement)e.image=t.imageElement;else{e.image=document.createElement("canvas"),e.pixelData=t.pixelData;var a=e.image,i=a.getContext("2d"),r=this.layer.applyFilter(e.pixelData),l=r.pixelBlock;a.width=l.width,a.height=l.height;var n=i.createImageData(l.width,l.height),s=l.getAsRGBA();n.data.set(s),i.putImageData(n,0,0)}},t.prototype.updateImage=function(e){if(e&&e.pixelData){var t=e.image,a=t.getContext("2d"),i=this.layer.applyFilter(e.pixelData),r=i.pixelBlock,l=a.createImageData(r.width,r.height),n=r.getAsRGBA();return t.width=r.width,t.height=r.height,l.data.set(n),a.putImageData(l,0,0),!0}return!1},i([l.property()],t.prototype,"layer",void 0),t=i([l.subclass("esri.views.3d.layers.ImageryLayerView3D")],t)}(l.declared(n,s))});