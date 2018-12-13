// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","./SphericalHarmonics"],function(i,t,e,n){Object.defineProperty(t,"__esModule",{value:!0});var r=e.vec3f64.create(),s=function(){function i(){this._renderLighting={main:{intensity:e.vec3f64.create(),direction:e.vec3f64.fromValues(1,0,0),castShadows:!1},sphericalHarmonics:{sh:{r:[0],g:[0],b:[0]}}},this._shOrder=2,this._oldDirection=e.vec3f64.create(),this._oldSpecular=e.vec4f64.create(),this._oldDiffuse=e.vec4f64.create(),this._oldAmbient=e.vec4f64.create()}return i.prototype.setUniforms=function(i,t){if(void 0===t&&(t=!1),t||i.getDefine("GROUND_NORMAL_SHADING")){var e=(1-this._info.groundLightingFactor)*(1-this._info.globalFactor);i.setUniform1f("lightingFixedFactor",e)}else i.setUniform1f("lightingFixedFactor",0);i.setUniform1f("lightingGlobalFactor",this._info.globalFactor),i.setUniform3fv("lightingMainDirection",this._renderLighting.main.direction),i.setUniform3fv("lightingMainIntensity",this._renderLighting.main.intensity),i.setUniform1f("ambientBoostFactor",.4);var n=this._renderLighting.sphericalHarmonics.sh;0===this._shOrder?i.setUniform3f("lightingAmbientSH0",n.r[0],n.g[0],n.b[0]):1===this._shOrder?(i.setUniform4f("lightingAmbientSH_R",n.r[0],n.r[1],n.r[2],n.r[3]),i.setUniform4f("lightingAmbientSH_G",n.g[0],n.g[1],n.g[2],n.g[3]),i.setUniform4f("lightingAmbientSH_B",n.b[0],n.b[1],n.b[2],n.b[3])):2===this._shOrder&&(i.setUniform3f("lightingAmbientSH0",n.r[0],n.g[0],n.b[0]),i.setUniform4f("lightingAmbientSH_R1",n.r[1],n.r[2],n.r[3],n.r[4]),i.setUniform4f("lightingAmbientSH_G1",n.g[1],n.g[2],n.g[3],n.g[4]),i.setUniform4f("lightingAmbientSH_B1",n.b[1],n.b[2],n.b[3],n.b[4]),i.setUniform4f("lightingAmbientSH_R2",n.r[5],n.r[6],n.r[7],n.r[8]),i.setUniform4f("lightingAmbientSH_G2",n.g[5],n.g[6],n.g[7],n.g[8]),i.setUniform4f("lightingAmbientSH_B2",n.b[5],n.b[6],n.b[7],n.b[8])),i.setUniform3fv("lightDirection",this._oldDirection)},i.prototype.set=function(i){this._info=i,n.combineLights(i.lights,this._shOrder,this._renderLighting.main,this._renderLighting.sphericalHarmonics),e.vec3.negate(this._oldDirection,this._renderLighting.main.direction);var t=1/Math.PI;this._oldAmbient[0]=.282095*this._renderLighting.sphericalHarmonics.sh.r[0]*t,this._oldAmbient[1]=.282095*this._renderLighting.sphericalHarmonics.sh.g[0]*t,this._oldAmbient[2]=.282095*this._renderLighting.sphericalHarmonics.sh.b[0]*t,this._oldAmbient[3]=1,this._oldDiffuse[0]=this._renderLighting.main.intensity[0]*t,this._oldDiffuse[1]=this._renderLighting.main.intensity[1]*t,this._oldDiffuse[2]=this._renderLighting.main.intensity[2]*t,this._oldDiffuse[3]=1;var s=e.vec3.copy(r,this._oldDiffuse);e.vec3.scale(s,s,.4*this._info.globalFactor),e.vec3.add(this._oldAmbient,this._oldAmbient,s)},Object.defineProperty(i.prototype,"globalFactor",{get:function(){return this._info.globalFactor},enumerable:!0,configurable:!0}),i.prototype.getOld=function(){return{ambient:this._oldAmbient,diffuse:this._oldDiffuse,specular:this._oldSpecular,direction:this._oldDirection,helper:this}},i}();t.SceneLighting=s});