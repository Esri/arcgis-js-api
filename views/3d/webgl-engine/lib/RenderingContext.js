/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../webgl/RenderingContext"],(function(e,t,n){"use strict";let r=function(e){function n(t,n,r){var i;return(i=e.call(this,t,n)||this).newCache=r,i._refCount=1,i}t._inheritsLoose(n,e);var r=n.prototype;return r.dispose=function(){--this._refCount>0||e.prototype.dispose.call(this)},r.ref=function(){++this._refCount},r.useTechnique=function(e,t=null,n){return this.useProgram(e.program),e.bindPipelineState(this,t,n),e.program},r.isTechniqueCompiled=function(e){return e.program.isCompiled},t._createClass(n,[{key:"test",get:function(){return this.programCache.test}}]),n}(n.RenderingContext);e.RenderingContext=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
