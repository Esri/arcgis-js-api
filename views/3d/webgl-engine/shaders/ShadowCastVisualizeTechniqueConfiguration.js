/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../../chunks/tslib.es6.js";import{parameter as e,ShaderTechniqueConfiguration as i}from"../core/shaderTechnique/ShaderTechniqueConfiguration.js";var t;!function(o){o[o.Gradient=0]="Gradient",o[o.Threshold=1]="Threshold",o[o.COUNT=2]="COUNT"}(t||(t={}));class r extends i{constructor(){super(...arguments),this.visualization=t.Gradient,this.bandsEnabled=!1}}o([e({count:t.COUNT})],r.prototype,"visualization",void 0),o([e()],r.prototype,"bandsEnabled",void 0);export{t as ShadowCastVisualization,r as ShadowCastVisualizeTechniqueConfiguration};
