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

define(["require","exports","../../../../core/mathUtils","./TextRenderer","./Texture","../../../webgl/Texture","../../../webgl/capabilities/isWebGL2Context"],function(e,t,r,i,n,o,u){var d={canvas:null};return function(){function e(e,t,r,n){this._idHint=n,this._requiresPowerOfTwo=!u.default(e.gl),this._renderer=new i.default(t,r)}return Object.defineProperty(e.prototype,"id",{get:function(){return null==this._id&&(this._id=n.idGen.gen(this._idHint)),this._id},enumerable:!0,configurable:!0}),e.prototype.deferredLoading=function(){return!1},e.prototype.getWidth=function(){return this._renderer.renderedWidth},e.prototype.getHeight=function(){return this._renderer.renderedHeight},Object.defineProperty(e.prototype,"textureWidth",{get:function(){var e=this.getWidth();return this._requiresPowerOfTwo?r.nextHighestPowerOfTwo(e):e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textureHeight",{get:function(){var e=this.getHeight();return this._requiresPowerOfTwo?r.nextHighestPowerOfTwo(e):e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayWidth",{get:function(){return this._renderer.displayWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayHeight",{get:function(){return this._renderer.displayHeight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"texcoordScale",{get:function(){return[this._renderer.renderedWidth/this.textureWidth,this._renderer.renderedHeight/this.textureHeight]},enumerable:!0,configurable:!0}),e.prototype.initializeThroughRender=function(e,t){var r=i.getTextHelperCanvas(d,this.textureWidth,this.textureHeight),n=r.getContext("2d");n.save(),t.samplingMode=9987,t.wrapMode=33071,t.flipped=!0,t.preMultiplyAlpha=!0,t.hasMipmap=!0,this._renderer.render(n,0,this.textureHeight-this._renderer.renderedHeight);var u=new o(e,t,r);return n.restore(),u},e.prototype.setUnloadFunc=function(e){this._unloadFunc=e},e.prototype.unload=function(){this._unloadFunc&&(this._unloadFunc(this._id),this._unloadFunc=null)},e}()});