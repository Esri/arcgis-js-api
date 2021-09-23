/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,a,i,o){"use strict";const n=e=>a.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:5120},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:5123},{location:5,name:"a_tlbr",count:4,type:5123},{location:6,name:"a_segmentDirection",count:4,type:5120},{location:7,name:"a_aux",count:2,type:5123},{location:8,name:"a_zoomRange",count:2,type:5123}]});let r=function(a){function i(){return a.apply(this,arguments)||this}e._inheritsLoose(i,a);var r=i.prototype;return r.dispose=function(){},r.getGeometryType=function(){return t.WGLGeometryType.LINE},r.drawGeometry=function(e,t,a,i){const{context:r,painter:l,rendererInfo:s,displayLevel:u}=e,v=o.LineMaterialKey.load(a.materialKey),{bufferLayouts:c,attributes:m}=n(v),f=l.materialManager.getMaterialProgram(e,v,"materials/line",m,i),p=1/e.pixelRatio,y=0;r.useProgram(f),this._setSharedUniforms(f,e,t),v.textureBinding&&l.textureManager.bindTextures(r,f,v);const S=2**(u-t.key.level)/e.pixelRatio;if(f.setUniform1f("u_zoomFactor",S),f.setUniform1f("u_blur",y+p),f.setUniform1f("u_antialiasing",p),v.vvSizeMinMaxValue&&f.setUniform4fv("u_vvSizeMinMaxValue",s.vvSizeMinMaxValue),v.vvSizeScaleStops&&f.setUniform1f("u_vvSizeScaleStopsValue",s.vvSizeScaleStopsValue),v.vvSizeFieldStops){const e=s.getSizeVVFieldStops(t.key.level);f.setUniform1fv("u_vvSizeFieldStopsValues",e.values),f.setUniform1fv("u_vvSizeFieldStopsSizes",e.sizes)}v.vvSizeUnitValue&&f.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",s.vvSizeUnitValueToPixelsRatio),v.vvColor&&(f.setUniform1fv("u_vvColorValues",s.vvColorValues),f.setUniform4fv("u_vvColors",s.vvColors)),v.vvOpacity&&(f.setUniform1fv("u_vvOpacityValues",s.vvOpacityValues),f.setUniform1fv("u_vvOpacities",s.vvOpacities)),r.setFaceCullingEnabled(!1),a.draw(r,c,m)},i}(i);return r}));
