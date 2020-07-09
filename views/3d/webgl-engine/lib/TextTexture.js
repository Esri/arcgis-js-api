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

define(["require","exports","../../../../core/Evented","../../../../core/mathUtils","../../../../core/maybe","./TextRenderer","./Texture","../../../webgl/Texture","../../../webgl/capabilities/isWebGL2Context"],(function(e,t,r,i,n,o,u,s,d){var h=function(){function e(e,t,i,n){this._idHint=n,this._glTexture=null,this.events=new r,this._requiresPowerOfTwo=!d.default(e.gl),this._renderer=new o.default(t,i)}return Object.defineProperty(e.prototype,"id",{get:function(){return null==this._id&&(this._id=u.idGen.gen(this._idHint)),this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._renderer.renderedWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._renderer.renderedHeight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textureWidth",{get:function(){var e=this.width;return this._requiresPowerOfTwo?i.nextHighestPowerOfTwo(e):e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textureHeight",{get:function(){var e=this.height;return this._requiresPowerOfTwo?i.nextHighestPowerOfTwo(e):e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayWidth",{get:function(){return this._renderer.displayWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayHeight",{get:function(){return this._renderer.displayHeight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"texcoordScale",{get:function(){return[this._renderer.renderedWidth/this.textureWidth,this._renderer.renderedHeight/this.textureHeight]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"requiresFrameUpdates",{get:function(){return!1},enumerable:!0,configurable:!0}),e.prototype.createDescriptor=function(e){return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,flipped:!0,samplingMode:9987,hasMipmap:!0,preMultiplyAlpha:!0,maxAnisotropy:e.parameters.maxMaxAnisotropy}},e.prototype.load=function(e){if(n.isSome(this._glTexture))return this._glTexture;var t=o.getTextHelperCanvas(a,this.textureWidth,this.textureHeight),r=t.getContext("2d");return r.save(),this._renderer.render(r,0,this.textureHeight-this._renderer.renderedHeight),this._glTexture=new s(e,this.createDescriptor(e),t),r.restore(),this._glTexture},e.prototype.unload=function(){n.isSome(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),this.events.emit("unloaded")},e}(),a={canvas:null};return h}));