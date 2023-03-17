/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./basicInterfaces"],(function(e,t){"use strict";return function(){function i(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}var n=i.prototype;return n.dispose=function(){this._techniqueRepository.release(this._technique)},n.ensureTechnique=function(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique},n.ensureResources=function(e){return t.ResourceState.LOADED},e._createClass(i,[{key:"technique",get:function(){return this._technique}},{key:"_stippleTextureRepository",get:function(){return this._techniqueRepository.constructionContext.stippleTextureRepository}}]),i}()}));
