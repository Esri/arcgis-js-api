/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";return function(){function t(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}var i=t.prototype;return i.dispose=function(){this._techniqueRep.release(this._technique)},i.ensureTechnique=function(e,t,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,t),this._technique),this._technique},i.ensureResources=function(e){return 2},e._createClass(t,[{key:"technique",get:function(){return this._technique}}]),t}()}));
