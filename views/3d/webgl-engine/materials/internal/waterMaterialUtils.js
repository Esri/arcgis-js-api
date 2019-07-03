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

define(["require","exports","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../arcade/languageUtils","../../../../../core/libs/gl-matrix-2/vec2f64","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/imageUtils","../../lib/Util","./waterMaterialData","../../../../webgl/Texture"],function(e,t,r,a,i,n,o,l,u,p,s){Object.defineProperty(t,"__esModule",{value:!0}),t.waterParameterDefaultsLocal={f0Sky:.02,f0maxSky:1,expSky:5,waveTexture:p.waterNormals,perturbationTexture:p.waterDuDv,waveStrength:.06,waveTextureRepeat:32,waveDirection:n.vec2f64.fromValues(1,0),waveVelocity:.05,flowStrength:.015,flowOffset:-.5,animationSpeed:.35,color:[0,.35686,.4,1],sky:function(){return{horizon:o.vec3f64.fromValues(.72,.92,1),zenit:o.vec3f64.fromValues(0,.6,.9)}}(),transparent:!1,writeDepth:!0,polygonOffset:null,slicePlaneEnabled:!1,dtrExponent:2.2,roughness:.06,f0maxSpec:.1,isDraped:!1},t.wavePresets={"calm-small":{waveStrength:.005,perturbationStrength:.02,textureRepeat:12,waveVelocity:.01},"rippled-small":{waveStrength:.02,perturbationStrength:.09,textureRepeat:32,waveVelocity:.07},"slight-small":{waveStrength:.05,perturbationStrength:.07,textureRepeat:28,waveVelocity:.1},"moderate-small":{waveStrength:.075,perturbationStrength:.07,textureRepeat:24,waveVelocity:.1},"calm-medium":{waveStrength:.003125,perturbationStrength:.01,textureRepeat:8,waveVelocity:.02},"rippled-medium":{waveStrength:.035,perturbationStrength:.015,textureRepeat:12,waveVelocity:.07},"slight-medium":{waveStrength:.06,perturbationStrength:.015,textureRepeat:8,waveVelocity:.12},"moderate-medium":{waveStrength:.09,perturbationStrength:.03,textureRepeat:4,waveVelocity:.12},"calm-large":{waveStrength:.01,perturbationStrength:0,textureRepeat:4,waveVelocity:.05},"rippled-large":{waveStrength:.025,perturbationStrength:.01,textureRepeat:8,waveVelocity:.11},"slight-large":{waveStrength:.06,perturbationStrength:.02,textureRepeat:3,waveVelocity:.13},"moderate-large":{waveStrength:.14,perturbationStrength:.03,textureRepeat:2,waveVelocity:.15}};var h=function(){function e(){this.loadingCount=0,this.data=[],this.loadingState=0}return e.prototype.loadTexture=function(e,t,i){return a(this,void 0,void 0,function(){var a,n;return r(this,function(r){switch(r.label){case 0:this.loadingCount++,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,l.requestImage(i)];case 2:return a=r.sent(),u.assert(a.width>=1&&a.height>=1),this.data[t]=new s(e,this.getTextureProps(a.width,a.height,!0),a),[3,4];case 3:return n=r.sent(),console.warn("Failed to load texture for water material.",n),[3,4];case 4:return this.loadingCount--,[2]}})})},e.prototype.getTextureProps=function(e,t,r){return void 0===r&&(r=!1),{target:3553,pixelFormat:6408,dataType:5121,wrapMode:10497,samplingMode:9987,hasMipmap:r,maxAnisotropy:8,width:e,height:t}},e.prototype.ready=function(){return 2===this.loadingState||1===this.loadingState&&0===this.loadingCount&&(this.loadingState=2,!0)},e.prototype.loading=function(){return 1===this.loadingState},e.prototype.initialize=function(e,t){for(var r in t)this.loadTexture(e,i.toNumber(r),t[r]);this.loadingState=1},e.prototype.bindRepo=function(e){for(var t in this.data)e.bindTexture(this.data[t],i.toNumber(t))},e}();t.waterTextureRepo=new h});