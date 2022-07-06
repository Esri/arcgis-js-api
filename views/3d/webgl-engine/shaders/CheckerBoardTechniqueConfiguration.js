/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../../../chunks/tslib.es6.js";import{parameter as o}from"../core/shaderTechnique/ShaderTechniqueConfiguration.js";import{TransparencyPassType as r}from"../lib/basicInterfaces.js";import{DefaultTechniqueConfiguration as e}from"../materials/DefaultTechniqueConfiguration.js";class s extends e{constructor(){super(...arguments),this.transparencyPassType=r.NONE,this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}t([o({count:r.COUNT})],s.prototype,"transparencyPassType",void 0),t([o()],s.prototype,"transparent",void 0),t([o()],s.prototype,"writeDepth",void 0),t([o()],s.prototype,"polygonOffset",void 0),t([o()],s.prototype,"hasMultipassTerrain",void 0),t([o()],s.prototype,"cullAboveGround",void 0);export{s as CheckerBoardTechniqueConfiguration};
