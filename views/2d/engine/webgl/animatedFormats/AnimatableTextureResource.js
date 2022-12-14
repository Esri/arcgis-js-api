/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../definitions","./utils"],(function(t,e,i,a){"use strict";let n=function(){function t(t,e,i,n){this._animation=t,this._frameData=null;const s=t=>{this._frameData=t,e.requestRender()};this.frameCount=this._animation.frameDurations.length,this.width=this._animation.width,this.height=this._animation.height,this._playHandle=a.play(this._animation,i,n,s)}var n=t.prototype;return n.destroy=function(){this._playHandle.remove()},n.bindFrame=function(t,a,n){t.bindTexture(a,n),e.isNone(this._frameData)||(a.updateData(0,i.SPRITE_PADDING,i.SPRITE_PADDING,this._frameData.width,this._frameData.height,this._frameData),this._frameData=null)},t}();t.AnimatableTextureResource=n,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
