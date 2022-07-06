/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../../chunks/tslib.es6.js";import{parameter as t,ShaderTechniqueConfiguration as r}from"../core/shaderTechnique/ShaderTechniqueConfiguration.js";var u;!function(o){o[o.SSAO=0]="SSAO",o[o.Blur=1]="Blur",o[o.COUNT=2]="COUNT"}(u||(u={}));class e extends r{constructor(){super(...arguments),this.output=u.SSAO}}o([t({count:u.COUNT})],e.prototype,"output",void 0);export{u as SSAOOutput,e as SSAOTechniqueConfiguration};
