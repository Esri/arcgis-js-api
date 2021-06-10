/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function e(t,e){this._context=t,this._desc=e,this._context.instanceCounter.increment(5,this);const n=this._context.gl;this.glName=n.createRenderbuffer(),this._context.bindRenderbuffer(this),n.renderbufferStorage(n.RENDERBUFFER,e.internalFormat,e.width,e.height)}var n=e.prototype;return n.resize=function(t,e){const n=this._desc;if(n.width===t&&n.height===e)return;n.width=t,n.height=e;const i=this._context.gl;this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,n.internalFormat,n.width,n.height)},n.dispose=function(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(5,this),this._context=null)},t._createClass(e,[{key:"descriptor",get:function(){return this._desc}}]),e}()}));
