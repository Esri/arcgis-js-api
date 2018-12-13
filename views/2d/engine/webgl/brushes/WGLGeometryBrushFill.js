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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../enums","../Utils","./WGLGeometryBrush","../shaders/MaterialPrograms","../../../../webgl/VertexArrayObject"],function(e,t,i,r,o,n,a,s,l){Object.defineProperty(t,"__esModule",{value:!0});var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isInitialized=!1,e._spritesTextureSize=r.vec2f32.create(),e}return i(e,t),e.prototype.dispose=function(){},e.prototype.getGeometryType=function(){return o.WGLGeometryType.FILL},e.prototype.drawGeometry=function(e,t,i,r){var o=e.context,a=e.painter,n=e.rendererInfo,s=e.requiredLevel,l=i.indexCount,f=i.indexFrom;this._initialize();var u=i.materialInfo.materialKeyInfo,d=e.painter.materialManager.getProgram(i.materialInfo.materialKey,e.drawPhase);if(d){o.bindProgram(d);var m=this._getVAO(o,t,u.hasVV());if(o.bindVAO(m),0<i.materialInfo.texBindingInfo.length){var v=i.materialInfo.texBindingInfo[0],p=v.pageId,y=e.painter.textureManager.sprites;this._spritesTextureSize[0]=y.getWidth(p),this._spritesTextureSize[1]=y.getHeight(p);var _=1/Math.pow(2,s-t.key.level)/e.pixelRatio;d.setUniform1f("u_zoomFactor",_),a.textureManager.bindSpritePage(o,p,v.unit,9729),d.setUniform1i(v.semantic,v.unit),d.setUniform2fv("u_mosaicSize",this._spritesTextureSize)}d.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),u.vvColor&&(d.setUniform1fv("u_vvColorValues",n.vvColorValues),d.setUniform4fv("u_vvColors",n.vvColors)),u.vvOpacity&&(d.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),d.setUniform1fv("u_vvOpacities",n.vvOpacities)),o.drawElements(4,l,5125,4*f),o.bindVAO(null)}},e.prototype._initialize=function(){if(this._isInitialized)return!0;this._fillVertexAttributeLayout={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:28,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:28,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:28,normalized:!0,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:12,stride:28,normalized:!1,divisor:0},{name:"a_aux1",count:4,type:5121,offset:20,stride:28,normalized:!1,divisor:0},{name:"a_aux2",count:2,type:5123,offset:24,stride:28,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]},this._fillVertexAttributeLayoutVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:36,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:36,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:36,normalized:!0,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:12,stride:36,normalized:!1,divisor:0},{name:"a_aux1",count:4,type:5121,offset:20,stride:36,normalized:!1,divisor:0},{name:"a_aux2",count:2,type:5123,offset:24,stride:36,normalized:!1,divisor:0},{name:"a_vv",count:2,type:5126,offset:28,stride:36,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]},this._isInitialized=!0},e.prototype._getVAO=function(e,t,i){if(t.fillGeometry.vao)return t.fillGeometry.vao;var r=t.fillGeometry.vertexBufferMap[n.C_VBO_GEOMETRY],o=t.fillGeometry.vertexBufferMap[n.C_VBO_VISIBILITY],a=t.fillGeometry.indexBuffer;return r&&a?(t.fillGeometry.vao=new l(e,s.fill.attributes,i?this._fillVertexAttributeLayoutVV:this._fillVertexAttributeLayout,{geometry:r,visibility:o},a),t.fillGeometry.vao):null},e}(a.default);t.default=f});