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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/assignHelper","../lib/AnimationTimer","../lib/Material","./WaterGLMaterial","./WaterTechnique","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/waterMaterialUtils","./renderers/MergedRenderer"],(function(e,t,r,a,i,n,o,s,u,p,h,l){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t,r){var a=e.call(this,r)||this;return a.animation=new i.AnimationTimer,a.techniqueConfig=new s.WaterTechniqueConfiguration,a.params=p.copyParameters(t,h.defaultWaterMaterialParameters),a}return r(t,e),t.prototype.setParameterValues=function(e){this.params=a({},this.params,e),this.parametersChanged()},t.prototype.getParameters=function(){return this.params},t.prototype.getTechniqueConfig=function(e){return this.techniqueConfig.output=e,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.receiveShadows=this.params.receiveShadows,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig},t.prototype.update=function(e){var t=Math.min(e.camera.relativeElevation,e.camera.distance);return this.animation.enabled=Math.sqrt(this.params.waveTextureRepeat/this.params.waveStrength)*t<f,this.animation.advance(e.dt),this.animation.enabled},t.prototype.intersect=function(e,t,r,a,i,n,o){p.intersectTriangleGeometry(e,t,a,i,n,void 0,o)},t.prototype.getGLMaterial=function(e){if(2===e.output)return new o.WaterGLMaterial(e);if(0===e.output){if(this.params.isDraped){var t=e;return t.output=5,new o.WaterGLMaterial(t)}return new o.WaterGLMaterial(e)}},t.prototype.createBufferWriter=function(){return new u.DefaultBufferWriter(u.PositionUVLayout)},t.prototype.createRenderer=function(e,t){return new l(e,t,this)},t}(n.Material);t.WaterMaterial=c;var f=35e3}));