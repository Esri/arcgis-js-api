/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../definitions","./utils"],(function(t,i,a,e){"use strict";let n=function(){function t(t,i,a,n){this._animation=t,this._frameData=null;const r=t=>{this._frameData=t,i.requestRender()};this.frameCount=this._animation.frameDurations.length,this.width=this._animation.width,this.height=this._animation.height,this._playHandle=e.play(this._animation,a,n,r)}var n=t.prototype;return n.destroy=function(){this._playHandle.remove()},n.bindFrame=function(t,e,n){t.bindTexture(e,n),i.isNone(this._frameData)||(e.updateData(0,a.SPRITE_PADDING,a.SPRITE_PADDING,this._frameData.width,this._frameData.height,this._frameData),this._frameData=null)},t}();t.AnimatableTextureResource=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
