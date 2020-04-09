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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(e,t,r,o,p,i){var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minTotalNumberOfFeatures=2e3,t.maxTotalNumberOfFeatures=5e4,t.maxTotalNumberOfPrimitives=17e5,t.polygonLodFactor=1,t.polylineLodFactor=1,t}return r(t,e),o([i.property()],t.prototype,"minTotalNumberOfFeatures",void 0),o([i.property()],t.prototype,"maxTotalNumberOfFeatures",void 0),o([i.property()],t.prototype,"maxTotalNumberOfPrimitives",void 0),o([i.property()],t.prototype,"polygonLodFactor",void 0),o([i.property()],t.prototype,"polylineLodFactor",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.Graphics3DSettings")],t)}(i.declared(p)),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lodFactor=1,t}return r(t,e),o([i.property()],t.prototype,"lodFactor",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.LoDFactorSettings")],t)}(i.declared(p)),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t["3dObject"]=new a,t.point=new a,t.integratedMesh=new a,t.pointCloud=new a,t.uncompressedTextureDownsamplingEnabled=!1,t}return r(t,e),o([i.property({type:a})],t.prototype,"3dObject",void 0),o([i.property({type:a})],t.prototype,"point",void 0),o([i.property({type:a})],t.prototype,"integratedMesh",void 0),o([i.property({type:a})],t.prototype,"pointCloud",void 0),o([i.property()],t.prototype,"uncompressedTextureDownsamplingEnabled",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.SceneServiceSettings")],t)}(i.declared(p)),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lodBias=0,t.angledSplitBias=1,t.reduceTileLevelDifferences=!0,t.textureFadeDuration=500,t}return r(t,e),o([i.property()],t.prototype,"lodBias",void 0),o([i.property()],t.prototype,"angledSplitBias",void 0),o([i.property()],t.prototype,"reduceTileLevelDifferences",void 0),o([i.property()],t.prototype,"textureFadeDuration",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.TiledSurfaceSettings")],t)}(i.declared(p));return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.graphics3D=new n,t.sceneService=new s,t.tiledSurface=new d,t.antialiasingEnabled=!0,t}return r(t,e),o([i.property({type:n})],t.prototype,"graphics3D",void 0),o([i.property({type:s})],t.prototype,"sceneService",void 0),o([i.property({type:d})],t.prototype,"tiledSurface",void 0),o([i.property()],t.prototype,"antialiasingEnabled",void 0),o([i.property()],t.prototype,"physicallyBasedRenderingEnabled",void 0),o([i.property()],t.prototype,"memoryLimit",void 0),o([i.property()],t.prototype,"additionalCacheMemory",void 0),o([i.property()],t.prototype,"frameRate",void 0),o([i.property()],t.prototype,"maximumRenderResolution",void 0),o([i.property()],t.prototype,"maximumPixelRatio",void 0),t=o([i.subclass("esri.views.3d.support.QualitySettings.QualitySettings")],t)}(i.declared(p))}));