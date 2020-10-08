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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../lib/AnimationTimer","../lib/Material","./WaterGLMaterial","./WaterTechnique","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/waterMaterialUtils"],(function(e,t,a,i,r,n,s,o,u,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WaterMaterial=void 0;var p=function(e){function t(t,a){var r=e.call(this,a)||this;return r.animation=new i.AnimationTimer,r.techniqueConfig=new s.WaterTechniqueConfiguration,r.params=u.copyParameters(t,h.defaultWaterMaterialParameters),r}return a.__extends(t,e),t.prototype.setParameterValues=function(e){this.params=a.__assign(a.__assign({},this.params),e),this.parametersChanged()},t.prototype.getParameters=function(){return this.params},t.prototype.getTechniqueConfig=function(e){return this.techniqueConfig.output=e,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.receiveShadows=this.params.receiveShadows,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.useSSR=this.params.ssrEnabled,this.techniqueConfig.isDraped=this.params.isDraped,this.techniqueConfig},t.prototype.update=function(e){var t=Math.min(e.camera.relativeElevation,e.camera.distance);return this.animation.enabled=Math.sqrt(this.params.waveTextureRepeat/this.params.waveStrength)*t<c,this.animation.advance(e.dt),this.animation.enabled},t.prototype.intersect=function(e,t,a,i,r,n,s){u.intersectTriangleGeometry(e,t,i,r,n,void 0,s)},t.prototype.getGLMaterial=function(e){if(0===e.output&&this.params.isDraped){var t=e;return t.output=5,new n.WaterGLMaterial(t)}switch(e.output){case 0:case 2:case 4:return new n.WaterGLMaterial(e)}},t.prototype.createBufferWriter=function(){return new o.DefaultBufferWriter(o.PositionUVLayout)},t}(r.Material);t.WaterMaterial=p;var c=35e3}));