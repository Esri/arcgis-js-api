/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{parameter as o,ShaderTechniqueConfiguration as r}from"../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js";var t;!function(e){e[e.Full=0]="Full",e[e.WeatherMap=1]="WeatherMap",e[e.COUNT=2]="COUNT"}(t||(t={}));class s extends r{constructor(){super(...arguments),this.mode=t.Full}}e([o({count:t.COUNT})],s.prototype,"mode",void 0);export{s as NoiseTextureAtlasTechniqueConfiguration,t as NoiseTextureRenderMode};
