/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../assets","../../../../../core/Accessor","../../../../../core/Logger","../../../../../core/accessorSupport/decorators/property","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass","../../../../../support/requestImageUtils","../../../../webgl/Texture"],(function(e,t,r,a,o,s,i,n,p,l,u,d){"use strict";const c=s.getLogger("esri.views.3d.webgl-engine.materials.internal.waterMaterialUtils");e.WaterTextureRepository=function(e){function r(){var t;return(t=e.apply(this,arguments)||this)._data=new Array,t.loadingState=0,t}t._inheritsLoose(r,e);var o=r.prototype;return o.dispose=function(){this.loadingState=0,this._data.forEach((e=>e.dispose())),this._data.length=0},o.loadTextures=function(e){const t=[a.getAssetUrl("esri/images/materials/water/normals.jpg"),a.getAssetUrl("esri/images/materials/water/perturbation.jpg")];this.loadingState=1,Promise.all(t.map((e=>u.requestImage(e)))).then((t=>{t.forEach((t=>this._data.push(new d(e,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:10497,samplingMode:9987,hasMipmap:!0,maxAnisotropy:8,width:t.width,height:t.height},t)))),this.loadingState=2})).catch((e=>{c.error("Failed to load textures for water material.",e),this.loadingState=0}))},o.bind=function(e){this.ready&&(e.bindTexture(this._data[0],"texWaveNormal"),e.bindTexture(this._data[1],"texWavePerturbation"))},t._createClass(r,[{key:"updating",get:function(){return 1===this.loadingState}},{key:"ready",get:function(){return 2===this.loadingState}}]),r}(o),r.__decorate([i.property()],e.WaterTextureRepository.prototype,"loadingState",void 0),r.__decorate([i.property({type:Boolean,readOnly:!0})],e.WaterTextureRepository.prototype,"updating",null),e.WaterTextureRepository=r.__decorate([l.subclass("esri.views.3d.webgl-engine.materials.internal.WaterTextureRepository")],e.WaterTextureRepository),Object.defineProperty(e,"__esModule",{value:!0})}));
