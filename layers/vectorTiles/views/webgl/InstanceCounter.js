// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["require","exports"],function(n,t){return function(){function n(){this._instanceCount={textureCount:0,bufferCount:0,vaoCount:0,programCount:0,framebufferCount:0,renderBufferCount:0}}return n.prototype.incrementCount=function(n){switch(n){case 0:this._instanceCount.textureCount++;break;case 1:this._instanceCount.bufferCount++;break;case 2:this._instanceCount.vaoCount++;break;case 3:this._instanceCount.programCount++;break;case 4:this._instanceCount.framebufferCount++;break;case 5:this._instanceCount.renderBufferCount++}},n.prototype.decrementCount=function(n){switch(n){case 0:this._instanceCount.textureCount--;break;case 1:this._instanceCount.bufferCount--;break;case 2:this._instanceCount.vaoCount--;break;case 3:this._instanceCount.programCount--;break;case 4:this._instanceCount.framebufferCount--;break;case 5:this._instanceCount.renderBufferCount--}},n.prototype.printResourceCount=function(){console.log("Live objects:"),console.log("Textures: "+this._instanceCount.textureCount),console.log("Buffers: "+this._instanceCount.bufferCount),console.log("VAOs: "+this._instanceCount.vaoCount),console.log("Programs: "+this._instanceCount.programCount),console.log("Framebuffers: "+this._instanceCount.framebufferCount),console.log("Renderbuffers: "+this._instanceCount.renderBufferCount)},n}()});