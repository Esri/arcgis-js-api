/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./AutoDisposable"],(function(e,t){"use strict";return function(t){function n(e){var n;return(n=t.call(this)||this)._material=e.material,n._techniqueRep=e.techniqueRep,n._output=e.output,n}e._inheritsLoose(n,t);var u=n.prototype;return u.getPipelineState=function(e,t){return this.technique.pipeline},u.ensureResources=function(e){return 2},u.ensureParameters=function(e){},e._createClass(n,[{key:"technique",get:function(){return this._technique}}]),n}(t.AutoDisposable)}));
