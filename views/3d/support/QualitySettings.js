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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(e,t,o,r,p){var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minTotalNumberOfFeatures=2e3,t.maxTotalNumberOfFeatures=5e4,t.maxTotalNumberOfPrimitives=17e5,t.polygonLodFactor=1,t.polylineLodFactor=1,t}return o.__extends(t,e),o.__decorate([p.property()],t.prototype,"minTotalNumberOfFeatures",void 0),o.__decorate([p.property()],t.prototype,"maxTotalNumberOfFeatures",void 0),o.__decorate([p.property()],t.prototype,"maxTotalNumberOfPrimitives",void 0),o.__decorate([p.property()],t.prototype,"polygonLodFactor",void 0),o.__decorate([p.property()],t.prototype,"polylineLodFactor",void 0),t=o.__decorate([p.subclass("esri.views.3d.support.QualitySettings.Graphics3DSettings")],t)}(r),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lodFactor=1,t}return o.__extends(t,e),o.__decorate([p.property()],t.prototype,"lodFactor",void 0),t=o.__decorate([p.subclass("esri.views.3d.support.QualitySettings.LoDFactorSettings")],t)}(r),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t["3dObject"]=new a,t.point=new a,t.integratedMesh=new a,t.pointCloud=new a,t.uncompressedTextureDownsamplingEnabled=!1,t}return o.__extends(t,e),o.__decorate([p.property({type:a})],t.prototype,"3dObject",void 0),o.__decorate([p.property({type:a})],t.prototype,"point",void 0),o.__decorate([p.property({type:a})],t.prototype,"integratedMesh",void 0),o.__decorate([p.property({type:a})],t.prototype,"pointCloud",void 0),o.__decorate([p.property()],t.prototype,"uncompressedTextureDownsamplingEnabled",void 0),t=o.__decorate([p.subclass("esri.views.3d.support.QualitySettings.SceneServiceSettings")],t)}(r),n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lodBias=0,t.angledSplitBias=1,t.reduceTileLevelDifferences=!0,t.textureFadeDuration=500,t}return o.__extends(t,e),o.__decorate([p.property()],t.prototype,"lodBias",void 0),o.__decorate([p.property()],t.prototype,"angledSplitBias",void 0),o.__decorate([p.property()],t.prototype,"reduceTileLevelDifferences",void 0),o.__decorate([p.property()],t.prototype,"textureFadeDuration",void 0),t=o.__decorate([p.subclass("esri.views.3d.support.QualitySettings.TiledSurfaceSettings")],t)}(r);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.graphics3D=new i,t.sceneService=new d,t.tiledSurface=new n,t.antialiasingEnabled=!0,t}return o.__extends(t,e),o.__decorate([p.property({type:i})],t.prototype,"graphics3D",void 0),o.__decorate([p.property({type:d})],t.prototype,"sceneService",void 0),o.__decorate([p.property({type:n})],t.prototype,"tiledSurface",void 0),o.__decorate([p.property()],t.prototype,"antialiasingEnabled",void 0),o.__decorate([p.property()],t.prototype,"physicallyBasedRenderingEnabled",void 0),o.__decorate([p.property()],t.prototype,"memoryLimit",void 0),o.__decorate([p.property()],t.prototype,"additionalCacheMemory",void 0),o.__decorate([p.property()],t.prototype,"frameRate",void 0),o.__decorate([p.property()],t.prototype,"maximumRenderResolution",void 0),o.__decorate([p.property()],t.prototype,"maximumPixelRatio",void 0),t=o.__decorate([p.subclass("esri.views.3d.support.QualitySettings.QualitySettings")],t)}(r)}));