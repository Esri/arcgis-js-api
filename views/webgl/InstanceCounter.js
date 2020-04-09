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

define(["require","exports"],(function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this._current=new s,this._max=new s}return e.prototype.incrementCount=function(e){switch(e){case 0:this._current.textures++,this._max.textures=Math.max(this._max.textures,this._current.textures);break;case 1:this._current.buffers++,this._max.buffers=Math.max(this._max.buffers,this._current.buffers);break;case 2:this._current.vaos++,this._max.vaos=Math.max(this._max.vaos,this._current.vaos);break;case 3:this._current.programs++,this._max.programs=Math.max(this._max.programs,this._current.programs);break;case 4:this._current.frameBuffers++,this._max.frameBuffers=Math.max(this._max.frameBuffers,this._current.frameBuffers);break;case 5:this._current.renderBuffers++,this._max.renderBuffers=Math.max(this._max.renderBuffers,this._current.renderBuffers)}},e.prototype.decrementCount=function(e){switch(e){case 0:this._current.textures--;break;case 1:this._current.buffers--;break;case 2:this._current.vaos--;break;case 3:this._current.programs--;break;case 4:this._current.frameBuffers--;break;case 5:this._current.renderBuffers--}},Object.defineProperty(e.prototype,"max",{get:function(){return this._max},enumerable:!0,configurable:!0}),e.prototype.printResourceCount=function(){console.log("Live objects:"),console.log("Textures: "+this._current.textures),console.log("Buffers: "+this._current.buffers),console.log("VAOs: "+this._current.vaos),console.log("Programs: "+this._current.programs),console.log("Framebuffers: "+this._current.frameBuffers),console.log("Renderbuffers: "+this._current.renderBuffers)},e}();r.InstanceCounter=t;var s=function(){this.textures=0,this.buffers=0,this.vaos=0,this.programs=0,this.frameBuffers=0,this.renderBuffers=0}}));