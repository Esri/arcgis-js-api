// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./SphericalHarmonics"],(function(i,t,n,e,r){Object.defineProperty(t,"__esModule",{value:!0});var o=e.vec3f64.create(),s=function(){function i(){this._renderLighting={main:{intensity:e.vec3f64.create(),direction:e.vec3f64.fromValues(1,0,0),castShadows:!1},sphericalHarmonics:{sh:{r:[0],g:[0],b:[0]}}},this._shOrder=2,this._oldSunlight={direction:e.vec3f64.create(),ambient:{color:e.vec3f64.create(),intensity:0},diffuse:{color:e.vec3f64.create(),intensity:0}}}return i.prototype.setLightDirectionUniform=function(i){i.setUniform3fv("lightingMainDirection",this._renderLighting.main.direction)},i.prototype.setUniforms=function(i,t){if(void 0===t&&(t=!1),t){var n=(1-this._info.groundLightingFactor)*(1-this._info.globalFactor);i.setUniform1f("lightingFixedFactor",n)}else i.setUniform1f("lightingFixedFactor",0);i.setUniform1f("lightingGlobalFactor",this._info.globalFactor),this.setLightDirectionUniform(i),i.setUniform3fv("lightingMainIntensity",this._renderLighting.main.intensity),i.setUniform1f("ambientBoostFactor",.4);var e=this._renderLighting.sphericalHarmonics.sh;0===this._shOrder?i.setUniform3f("lightingAmbientSH0",e.r[0],e.g[0],e.b[0]):1===this._shOrder?(i.setUniform4f("lightingAmbientSH_R",e.r[0],e.r[1],e.r[2],e.r[3]),i.setUniform4f("lightingAmbientSH_G",e.g[0],e.g[1],e.g[2],e.g[3]),i.setUniform4f("lightingAmbientSH_B",e.b[0],e.b[1],e.b[2],e.b[3])):2===this._shOrder&&(i.setUniform3f("lightingAmbientSH0",e.r[0],e.g[0],e.b[0]),i.setUniform4f("lightingAmbientSH_R1",e.r[1],e.r[2],e.r[3],e.r[4]),i.setUniform4f("lightingAmbientSH_G1",e.g[1],e.g[2],e.g[3],e.g[4]),i.setUniform4f("lightingAmbientSH_B1",e.b[1],e.b[2],e.b[3],e.b[4]),i.setUniform4f("lightingAmbientSH_R2",e.r[5],e.r[6],e.r[7],e.r[8]),i.setUniform4f("lightingAmbientSH_G2",e.g[5],e.g[6],e.g[7],e.g[8]),i.setUniform4f("lightingAmbientSH_B2",e.b[5],e.b[6],e.b[7],e.b[8]))},i.prototype.set=function(i){this._info=i,r.combineLights(i.lights,this._shOrder,this._renderLighting),n.vec3.negate(this._oldSunlight.direction,this._renderLighting.main.direction);var t=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._renderLighting.sphericalHarmonics.sh.r[0]*t,this._oldSunlight.ambient.color[1]=.282095*this._renderLighting.sphericalHarmonics.sh.g[0]*t,this._oldSunlight.ambient.color[2]=.282095*this._renderLighting.sphericalHarmonics.sh.b[0]*t,this._oldSunlight.ambient.intensity=1,this._oldSunlight.diffuse.color[0]=this._renderLighting.main.intensity[0]*t,this._oldSunlight.diffuse.color[1]=this._renderLighting.main.intensity[1]*t,this._oldSunlight.diffuse.color[2]=this._renderLighting.main.intensity[2]*t,this._oldSunlight.diffuse.intensity=1;var e=n.vec3.copy(o,this._oldSunlight.diffuse.color);n.vec3.scale(e,e,.4*this._info.globalFactor),n.vec3.add(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,e)},Object.defineProperty(i.prototype,"globalFactor",{get:function(){return this._info.globalFactor},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"old",{get:function(){return this._oldSunlight},enumerable:!0,configurable:!0}),i}();t.SceneLighting=s}));