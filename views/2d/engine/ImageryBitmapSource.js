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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}return Object.defineProperty(e.prototype,"width",{get:function(){return this.pixelBlock?this.pixelBlock.width:0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.pixelBlock?this.pixelBlock.height:0},enumerable:!0,configurable:!0}),e.prototype.render=function(e){var t=this.pixelBlock;if(t){var i=this.filter({pixelBlock:t}),l=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(l),e.putImageData(r,0,0)}},e.prototype.getRenderedRasterPixels=function(){var e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}},e}();t.default=i});