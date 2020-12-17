/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./AutoDisposable"],(function(e,t){"use strict";return function(t){function n(e){var n;return(n=t.call(this)||this).material=e.material,n.techniqueRep=e.techniqueRep,n.output=e.output,n}e._inheritsLoose(n,t);var u=n.prototype;return u.getTechnique=function(){return this.technique},u.getPipelineState=function(e,t){return this.getTechnique().pipeline},u.ensureResources=function(e){return 2},u.ensureParameters=function(e){},n}(t.AutoDisposable)}));
