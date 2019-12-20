// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/assignHelper","../lib/AnimationTimer","../lib/Material","./WaterGLMaterial","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/waterMaterialUtils","./renderers/MergedRenderer"],function(e,t,r,a,i,n,o,s,l,p,u){Object.defineProperty(t,"__esModule",{value:!0});var m=function(e){function t(t,r){var a=e.call(this,r)||this;return a.animation=new i.AnimationTimer,a.params=l.copyParameters(t,p.waterParameterDefaultsLocal),a}return r(t,e),t.prototype.setParameterValues=function(e){this.params=a({},this.params,e),this.notifyDirty("matChanged")},t.prototype.getParameters=function(){return this.params},t.prototype.update=function(e){var t=Math.min(e.camera.relativeElevation,e.camera.distance);return this.animation.enabled=Math.sqrt(this.params.waveTextureRepeat/this.params.waveStrength)*t<c,this.animation.advance(e.dt),this.animation.enabled},t.prototype.intersect=function(e,t,r,a,i,n,o){l.intersectTriangleGeometry(e,t,a,i,n,void 0,o)},t.prototype.getGLMaterials=function(){return{color:this.params.isDraped?o.WaterDrapedGLMaterial:o.WaterGLMaterial,depthShadowMap:void 0,normal:o.WaterNormalGLMaterial,depth:void 0,highlight:void 0}},t.prototype.createBufferWriter=function(){return new s.DefaultBufferWriter(s.PositionUVLayout)},t.prototype.createRenderer=function(e,t){return new u(e,t,this)},t}(n.Material);t.WaterMaterial=m;var c=35e3});