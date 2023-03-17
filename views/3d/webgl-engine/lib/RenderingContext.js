/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../webgl/RenderingContext"],(function(e,t,n){"use strict";let r=function(e){function n(t,n,r){var i;return(i=e.call(this,t,n)||this).newCache=r,i._refCount=1,i}t._inheritsLoose(n,e);var r=n.prototype;return r.destroy=function(){--this._refCount>0||this.dispose()},r.ref=function(){++this._refCount},r.bindTechnique=function(e,t,n,r){return this.useProgram(e.program),e.bindPipelineState(this,n?.slot,!!r),e.program.bindPass(t,n),e.program},t._createClass(n,[{key:"test",get:function(){return this.programCache.test}}]),n}(n.RenderingContext);e.RenderingContext=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
