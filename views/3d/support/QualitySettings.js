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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(e,t,r,o,p,i){var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minTotalNumberOfFeatures=2e3,t.maxTotalNumberOfFeatures=5e4,t.maxTotalNumberOfPrimitives=17e5,t}return r(t,e),o([i.property()],t.prototype,"minTotalNumberOfFeatures",void 0),o([i.property()],t.prototype,"maxTotalNumberOfFeatures",void 0),o([i.property()],t.prototype,"maxTotalNumberOfPrimitives",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.Graphics3DSettings")],t)}(i.declared(p)),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lodFactor=1,t}return r(t,e),o([i.property()],t.prototype,"lodFactor",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.LoDFactorSettings")],t)}(i.declared(p)),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.getDefaults=function(){return{"3dObject":new s,point:new s,integratedMesh:new s,pointCloud:new s,uncompressedTextureDownsamplingEnabled:!1}},o([i.property({type:s})],t.prototype,"3dObject",void 0),o([i.property({type:s})],t.prototype,"point",void 0),o([i.property({type:s})],t.prototype,"integratedMesh",void 0),o([i.property({type:s})],t.prototype,"pointCloud",void 0),o([i.property()],t.prototype,"uncompressedTextureDownsamplingEnabled",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.SceneServiceSettings")],t)}(i.declared(p)),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lodBias=0,t.angledSplitBias=1,t}return r(t,e),o([i.property()],t.prototype,"lodBias",void 0),o([i.property()],t.prototype,"angledSplitBias",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.TiledSurfaceSettings")],t)}(i.declared(p));return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.getDefaults=function(){return{graphics3D:new n,sceneService:new a,tiledSurface:new u,antialiasingEnabled:!0}},o([i.property({type:n})],t.prototype,"graphics3D",void 0),o([i.property({type:a})],t.prototype,"sceneService",void 0),o([i.property({type:u})],t.prototype,"tiledSurface",void 0),o([i.property()],t.prototype,"antialiasingEnabled",void 0),o([i.property()],t.prototype,"gpuMemoryLimit",void 0),o([i.property()],t.prototype,"additionalCacheMemory",void 0),o([i.property()],t.prototype,"frameRate",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.QualitySettings")],t)}(i.declared(p))});