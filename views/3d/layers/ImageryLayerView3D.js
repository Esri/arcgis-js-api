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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./DynamicLayerView3D"],function(e,t,a,r,i,p){var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.processResult=function(e,t){e.image=document.createElement("canvas"),e.pixelData=t.pixelData;var a=e.image,r=a.getContext("2d"),i=this.layer.applyFilter(e.pixelData),p=i.pixelBlock;a.width=p.width,a.height=p.height;var o=r.createImageData(p.width,p.height),l=p.getAsRGBA();o.data.set(l),r.putImageData(o,0,0)},t.prototype.updateImage=function(e){if(e&&e.pixelData){var t=e.image,a=t.getContext("2d"),r=this.layer.applyFilter(e.pixelData),i=r.pixelBlock,p=a.createImageData(i.width,i.height),o=i.getAsRGBA();return t.width=i.width,t.height=i.height,p.data.set(o),a.putImageData(p,0,0),!0}return!1},r([i.property()],t.prototype,"layer",void 0),t=r([i.subclass("esri.views.3d.layers.ImageryLayerView3D")],t)}(i.declared(p));return o});