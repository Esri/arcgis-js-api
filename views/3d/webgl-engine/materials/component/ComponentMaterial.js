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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/maybe","../../lib/Material","./ComponentGLMaterial","./Parameters","./VertexBufferLayout","../internal/MaterialUtil","../renderers/PreinterleavedRenderer"],function(e,r,t,a,o,n,i,p,s,l,u){Object.defineProperty(r,"__esModule",{value:!0});var c=function(e){function r(r,t,a){var o=e.call(this,a)||this;return o.supportsEdges=!0,o._parameters=p.fillDefaults(r),o._geometryParameters=t,o}return t(r,e),Object.defineProperty(r.prototype,"parameters",{get:function(){return this._parameters},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"geometryParameters",{get:function(){return this._geometryParameters},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasTransparency",{get:function(){var e=this._parameters.forceTransparency;if(o.isSome(e))return e;if(this._parameters.baseColorOpacity<1||this._parameters.layerOpacity<1)return!0;var r=this._parameters.componentData;return!p.isUniformComponentData(r)||"replace"!==r.externalColorMixMode||r.externalColor[3]<1},enumerable:!0,configurable:!0}),r.prototype.isVisibleInPass=function(e){if(3!==e)return!0;var r=this._parameters.componentData;return!p.isUniformComponentData(r)||r.castShadows},r.prototype.isVisible=function(){var r=this.parameters;if(!e.prototype.isVisible.call(this))return!1;if(0===r.layerOpacity)return!1;var t=r.componentData;return!p.isUniformComponentData(t)||("replace"===t.externalColorMixMode?t.externalColor[3]>0:r.baseColorOpacity>0)},r.prototype.updateParameters=function(e){var r=!1;for(var t in e){var a=this._parameters[t],o=e[t];a!==o&&(r=!0,this._parameters[t]=o)}r&&this.notifyDirty("matChanged")},r.prototype.intersect=function(e,r,t,a,o,n,i){l.intersectTriangleGeometry(e,r,a,o,n,i)},r.prototype.getGLMaterials=function(){return{color:i.GLMaterialColor,depthShadowMap:i.GLMaterialDepthShadowMap,normal:i.GLMaterialNormal,depth:i.GLMaterialDepth,highlight:i.GLMaterialHighlight}},r.prototype.createRenderer=function(e,r){return new u(e,r,this)},r.prototype.createBufferWriter=function(){throw Error("Not supported")},r.prototype.createBufferLayout=function(){return s.createVertexBufferLayout(this.geometryParameters)},r}(n.Material);r.ComponentMaterial=c});