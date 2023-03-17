/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],(function(e,r,o,t){"use strict";var n;e.NoiseTextureRenderMode=void 0,(n=e.NoiseTextureRenderMode||(e.NoiseTextureRenderMode={}))[n.Full=0]="Full",n[n.WeatherMap=1]="WeatherMap",n[n.COUNT=2]="COUNT";let i=function(o){function t(){var r;return(r=o.apply(this,arguments)||this).mode=e.NoiseTextureRenderMode.Full,r}return r._inheritsLoose(t,o),t}(t.ShaderTechniqueConfiguration);o.__decorate([t.parameter({count:e.NoiseTextureRenderMode.COUNT})],i.prototype,"mode",void 0),e.NoiseTextureAtlasTechniqueConfiguration=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
