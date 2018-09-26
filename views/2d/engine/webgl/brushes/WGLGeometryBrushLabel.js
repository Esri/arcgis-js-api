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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../enums","../Utils","./WGLGeometryBrush","../shaders/MaterialPrograms","../../../../webgl/VertexArrayObject"],function(e,t,r,i,a,n,o,s){Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._vertexAttributeLayout={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:20,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:8,stride:20,normalized:!1,divisor:0},{name:"a_texAndSize",count:4,type:5121,offset:12,stride:20,normalized:!1,divisor:0},{name:"a_refSymbolAndPlacementOffset",count:4,type:5120,offset:16,stride:20,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}],visibilityRange:[{name:"a_visibilityRange",count:2,type:5121,offset:0,stride:2,normalized:!1,divisor:0}]},t._glyphsTextureSize=new Float32Array(2),t}return r(t,e),t.prototype.dispose=function(){},t.prototype.drawGeometry=function(e,t,r,a){if(e.requiredLevel===t.key.level){var n=e.context,o=e.painter,s=e.drawPhase,f=r.materialInfo,l=r.indexCount,u=r.indexFrom,d=e.drawPhase===i.WGLDrawPhase.LABEL_ALPHA,m=f.materialKey;d&&(m|=8);var p=o.materialManager.getProgram(m,s);if(p){n.setStencilTestEnabled(!1),n.bindProgram(p);var v=this._getVAO(n,t);if(n.bindVAO(v),d)n.setBlendingEnabled(!1),p.setUniform1f("u_fadeStep",e.labelStep);else{var y=f.texBindingInfo[0],_=y.pageId;o.textureManager.bindGlyphsPage(n,_,y.unit),p.setUniform1i(y.semantic,y.unit)}var x=o.textureManager.glyphs;this._glyphsTextureSize[0]=x.width/4,this._glyphsTextureSize[1]=x.height/4;var g=o.extrudeNoRotationMatrix;n.bindTexture(e.labelFBO.colorTexture,3),p.setUniform1i("u_referenceTex",3),p.setUniformMatrix4fv("u_transformMatrix",t.tileTransform.transform),p.setUniformMatrix4fv("u_extrudeMatrix",g),p.setUniform2fv("u_normalized_origin",t.tileTransform.displayCoord),p.setUniform2fv("u_mosaicSize",this._glyphsTextureSize),p.setUniform1f("u_pixelRatio",e.pixelRatio),p.setUniform1f("u_opacity",1),p.setUniform1f("u_zoomLevel",10*e.displayLevel),p.setUniform1f("u_mapRotation",e.state.rotation),p.setUniform1f("u_mapAligned",0),p.setUniform2fv("u_screenSize",e.state.size),n.drawElements(4,l,5125,4*u),n.bindVAO(null),n.setStencilTestEnabled(!0),n.setBlendingEnabled(!0)}}},t.prototype.getGeometryType=function(){return i.WGLGeometryType.LABEL},t.prototype._getVAO=function(e,t){var r=t.labelGeometry;if(r&&r.vao)return r.vao;var i=r.vertexBufferMap[a.C_VBO_GEOMETRY],n=r.vertexBufferMap[a.C_VBO_VISIBILITY],f=r.vertexBufferMap[a.C_VBO_VISIBILITY_RANGE],l=r.indexBuffer;return i&&l&&f?(r.vao=new s(e,o.label.attributes,this._vertexAttributeLayout,{geometry:i,visibility:n,visibilityRange:f},l),r.vao):null},t}(n.default);t.default=f});