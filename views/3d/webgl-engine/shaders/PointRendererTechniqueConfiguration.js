/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import{ShaderOutput as o}from"../core/shaderLibrary/ShaderOutputOptions.js";import{parameter as t}from"../core/shaderTechnique/ShaderTechniqueConfiguration.js";import{DefaultTechniqueConfiguration as r}from"../materials/DefaultTechniqueConfiguration.js";class i extends r{constructor(){super(...arguments),this.output=o.Color,this.hasSlicePlane=!1,this.drawScreenSize=!1,this.hasOccludees=!1}}e([t({count:o.COUNT})],i.prototype,"output",void 0),e([t()],i.prototype,"hasSlicePlane",void 0),e([t()],i.prototype,"drawScreenSize",void 0),e([t()],i.prototype,"hasOccludees",void 0),e([t({constValue:!0})],i.prototype,"hasSliceInVertexProgram",void 0);export{i as PointRendererTechniqueConfiguration};
