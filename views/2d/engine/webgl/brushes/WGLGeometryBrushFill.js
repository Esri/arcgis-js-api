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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../enums","../Utils","./WGLGeometryBrush","../shaders/MaterialPrograms","../../../../webgl/VertexArrayObject"],function(e,t,i,r,o,a,n,s){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._isInitialized=!1,t._spritesTextureSize=new Float32Array(2),t}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return r.WGLGeometryType.FILL},t.prototype.drawGeometry=function(e,t,i,r){var o=e.context,a=e.painter,n=e.rendererInfo,s=e.requiredLevel,l=e.stationary,f=i.indexCount,u=i.indexFrom;this._initialize();var m=i.materialInfo.materialKeyInfo,d=e.painter.materialManager.getProgram(i.materialInfo.materialKey,e.drawPhase);if(d){o.bindProgram(d);var v=this._getVAO(o,t,m.hasVV());if(o.bindVAO(v),i.materialInfo.texBindingInfo.length>0){var p=i.materialInfo.texBindingInfo[0],y=p.pageId,_=e.painter.textureManager.sprites;this._spritesTextureSize[0]=_.getWidth(y),this._spritesTextureSize[1]=_.getHeight(y);var c=1/Math.pow(2,s-t.key.level)/e.pixelRatio;d.setUniform1f("u_zoomFactor",c);var x=l?9728:9729;a.textureManager.bindSpritePage(o,y,p.unit,x),d.setUniform1i(p.semantic,p.unit),d.setUniform2fv("u_mosaicSize",this._spritesTextureSize)}d.setUniformMatrix4fv("u_transformMatrix",t.tileTransform.transform),d.setUniform2fv("u_normalized_origin",t.tileTransform.displayCoord),d.setUniform1f("u_opacity",1),m.vvColor&&(d.setUniform1fv("u_vvColorValues",n.vvColorValues),d.setUniform4fv("u_vvColors",n.vvColors)),m.vvOpacity&&(d.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),d.setUniform1fv("u_vvOpacities",n.vvOpacities)),o.drawElements(4,f,5125,4*u),o.bindVAO(null)}},t.prototype._initialize=function(){if(this._isInitialized)return!0;var e={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:24,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:24,normalized:!0,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:12,stride:24,normalized:!1,divisor:0},{name:"a_aux",count:4,type:5121,offset:20,stride:24,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]},t={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:32,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:32,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:32,normalized:!0,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:12,stride:32,normalized:!1,divisor:0},{name:"a_aux",count:4,type:5121,offset:20,stride:32,normalized:!1,divisor:0},{name:"a_vv",count:2,type:5126,offset:24,stride:32,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]};this._fillVertexAttributeLayout=e,this._fillVertexAttributeLayoutVV=t,this._isInitialized=!0},t.prototype._getVAO=function(e,t,i){if(t.fillGeometry.vao)return t.fillGeometry.vao;var r=t.fillGeometry.vertexBufferMap[o.C_VBO_GEOMETRY],a=t.fillGeometry.vertexBufferMap[o.C_VBO_VISIBILITY],l=t.fillGeometry.indexBuffer;return r&&l?(t.fillGeometry.vao=i?new s(e,n.fill.attributes,this._fillVertexAttributeLayoutVV,{geometry:r,visibility:a},l):new s(e,n.fill.attributes,this._fillVertexAttributeLayout,{geometry:r,visibility:a},l),t.fillGeometry.vao):null},t}(a.default);t.default=l});