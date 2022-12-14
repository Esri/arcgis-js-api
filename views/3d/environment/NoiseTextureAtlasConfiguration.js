/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],(function(e,o,r,t){"use strict";var i;e.NoiseTextureRenderMode=void 0,(i=e.NoiseTextureRenderMode||(e.NoiseTextureRenderMode={}))[i.Full=0]="Full",i[i.WeatherMap=1]="WeatherMap",i[i.COUNT=2]="COUNT";let n=function(r){function t(){var o;return(o=r.apply(this,arguments)||this).mode=e.NoiseTextureRenderMode.Full,o}return o._inheritsLoose(t,r),t}(t.ShaderTechniqueConfiguration);r.__decorate([t.parameter({count:e.NoiseTextureRenderMode.COUNT})],n.prototype,"mode",void 0),e.NoiseTextureAtlasTechniqueConfiguration=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
