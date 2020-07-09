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

define(["require","exports","tslib","../../../../../assets","../../../../../core/Accessor","../../../../../core/Logger","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators","../../../support/imageUtils","../../../../webgl/Texture"],(function(e,t,r,a,o,i,n,s,l,p){Object.defineProperty(t,"__esModule",{value:!0});var u=i.getLogger("esri.views.3d.webgl-engine.materials.internal.waterMaterialUtils");t.waveAndPertubationTextureUrls=[a.getAssetUrl("esri/images/materials/water/normals.jpg"),a.getAssetUrl("esri/images/materials/water/perturbation.jpg")];var d=function(e){function a(){var t=null!==e&&e.apply(this,arguments)||this;return t.data=[],t.loadingState=0,t}return r.__extends(a,e),a.prototype.dispose=function(){this.loadingState=0,this.data.forEach((function(e){e.dispose(),e=null})),this.data=null},a.prototype.getTextureProps=function(e,t,r){return void 0===r&&(r=!1),{target:3553,pixelFormat:6408,dataType:5121,wrapMode:10497,samplingMode:9987,hasMipmap:r,maxAnisotropy:8,width:e,height:t}},Object.defineProperty(a.prototype,"updating",{get:function(){return 1===this.loadingState},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"ready",{get:function(){return 2===this.loadingState},enumerable:!0,configurable:!0}),a.prototype.loadTextures=function(e){var r=this;this.loadingState=1,n.all(t.waveAndPertubationTextureUrls.map((function(e){return l.requestImage(e)}))).then((function(t){t.forEach((function(t,a){r.data[a]=new p(e,r.getTextureProps(t.width,t.height,!0),t)})),r.loadingState=2})).catch((function(e){u.error("Failed to load textures for water material.",e),r.loadingState=0}))},a.prototype.bindRepo=function(e){for(var t=0;t<this.data.length;t++)e.bindTexture(this.data[t],t)},r.__decorate([s.property()],a.prototype,"loadingState",void 0),r.__decorate([s.property({type:Boolean,readOnly:!0,dependsOn:["loadingState"]})],a.prototype,"updating",null),a=r.__decorate([s.subclass("esri.views.3d.webgl-engine.materials.internal.WaterTextureRepository")],a)}(o);t.WaterTextureRepository=d}));