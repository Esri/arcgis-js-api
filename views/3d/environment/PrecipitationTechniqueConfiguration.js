/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{parameter as n,ShaderTechniqueConfiguration as o}from"../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js";var t;!function(e){e[e.Rain=0]="Rain",e[e.Snow=1]="Snow",e[e.COUNT=2]="COUNT"}(t||(t={}));class i extends o{constructor(){super(...arguments),this.type=t.Rain}}e([n({count:t.COUNT})],i.prototype,"type",void 0);export{i as PrecipitationTechniqueConfiguration,t as PrecipitationType};
