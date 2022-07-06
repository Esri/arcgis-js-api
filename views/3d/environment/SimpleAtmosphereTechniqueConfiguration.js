/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{parameter as o,ShaderTechniqueConfiguration as r}from"../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js";var n;!function(e){e[e.Cone=0]="Cone",e[e.Cylinder=1]="Cylinder",e[e.Underground=2]="Underground",e[e.COUNT=3]="COUNT"}(n||(n={}));class t extends r{constructor(){super(...arguments),this.geometry=n.Cone}}e([o({count:n.COUNT})],t.prototype,"geometry",void 0);export{n as SimpleAtmosphereGeometry,t as SimpleAtmosphereTechniqueConfiguration};
