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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../lib/Material","./WaterGLMaterial","./internal/MaterialUtil","./internal/PositionUVBufferWriter","./internal/waterMaterialUtils","./renderers/MergedRenderer"],function(t,e,r,a,n,i,o,s,p){Object.defineProperty(e,"__esModule",{value:!0});var f=function(t){function e(e,r){var a=t.call(this,r)||this;return a.animationSupported=!0,a.params=i.copyParameters(e,s.waterParameterDefaultsLocal),a}return r(e,t),e.prototype.setParameterValues=function(t){var e=this.params;console.log("setParameterValues",t);for(var r in t)e[r]=t[r];this.notifyDirty("matChanged")},e.prototype.getParameters=function(){return this.params},Object.defineProperty(e.prototype,"color",{get:function(){return this.params.color},set:function(t){this.params.color=t,this.notifyDirty("matChanged")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"waveDirection",{get:function(){return this.params.waveDirection},set:function(t){this.params.waveDirection=t,this.notifyDirty("matChanged")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"polygonOffset",{get:function(){return[this.params.polygonOffset.factor,this.params.polygonOffset.units]},set:function(t){this.params.polygonOffset=t?{factor:t[0],units:t[1]}:null,this.notifyDirty("matChanged")},enumerable:!0,configurable:!0}),e.prototype.setTransparent=function(t){this.params.transparent=t,this.notifyDirty("matChanged")},e.prototype.getTransparent=function(){return this.params.transparent},Object.defineProperty(e.prototype,"draped",{set:function(t){this.params.isDraped=t,this.notifyDirty("matChanged")},enumerable:!0,configurable:!0}),e.prototype.intersect=function(t,e,r,a,n,o,s,p,f){i.intersectTriangleGeometry(t,e,r,a,n,o,s,f)},e.prototype.getGLMaterials=function(){return{color:this.params.isDraped?n.WaterDrapedGLMaterial:n.WaterGLMaterial,depthShadowMap:void 0,normal:n.WaterNormalGLMaterial,depth:void 0,highlight:void 0}},e.prototype.createBufferWriter=function(){return new o},e.prototype.createRenderer=function(t,e){return new p(t,e,this)},e}(a);e.WaterMaterial=f});