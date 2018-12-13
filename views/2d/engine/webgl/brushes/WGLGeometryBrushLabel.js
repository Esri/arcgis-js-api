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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../enums","../Utils","./WGLGeometryBrush","../shaders/MaterialPrograms","../../../../webgl/VertexArrayObject"],function(e,t,i,r,b,s,a,l,f){Object.defineProperty(t,"__esModule",{value:!0});var o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._vertexAttributeLayout={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:24,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:8,stride:24,normalized:!1,divisor:0},{name:"a_texAndSize",count:4,type:5121,offset:12,stride:24,normalized:!1,divisor:0},{name:"a_refSymbolAndPlacementOffset",count:4,type:5121,offset:16,stride:24,normalized:!1,divisor:0},{name:"a_vvSize",count:1,type:5126,offset:20,stride:24,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}],visibilityRange:[{name:"a_visibilityRange",count:2,type:5121,offset:0,stride:2,normalized:!1,divisor:0}]},e._glyphsTextureSize=r.vec2f32.create(),e}return i(e,t),e.prototype.dispose=function(){},e.prototype.drawGeometry=function(e,t,i,r){var a=e.context,o=e.painter,n=e.drawPhase,s=e.state,l=e.rendererInfo,f=i.materialInfo,v=i.indexCount,u=i.indexFrom,d=f.materialKeyInfo,m=d.isMapAligned()?1:0;if(e.requiredLevel===t.key.level||m){var p=e.drawPhase===b.WGLDrawPhase.LABEL_ALPHA,y=f.materialKey;p&&(y|=8);var S=o.materialManager.getProgram(y,n);if(S){a.setStencilTestEnabled(!1),a.bindProgram(S);var _=this._getVAO(a,t);if(a.bindVAO(_),p)a.setBlendingEnabled(!1),S.setUniform1f("u_fadeStep",t.fader.value);else{var c=f.texBindingInfo[0],x=c.pageId;o.textureManager.bindGlyphsPage(a,x,c.unit),S.setUniform1i(c.semantic,c.unit)}var z=o.textureManager.glyphs;this._glyphsTextureSize[0]=z.width/4,this._glyphsTextureSize[1]=z.height/4;var g=1===m?s.displayViewMat3:s.displayMat3;d.vvSizeMinMaxValue&&S.setUniform4fv("u_vvSizeMinMaxValue",l.vvSizeMinMaxValue),d.vvSizeScaleStops&&S.setUniform1f("u_vvSizeScaleStopsValue",l.vvSizeScaleStopsValue),d.vvSizeFieldStops&&(S.setUniform1fv("u_vvSizeFieldStopsValues",l.vvSizeFieldStopsValues),S.setUniform1fv("u_vvSizeFieldStopsSizes",l.vvSizeFieldStopsSizes)),d.vvSizeUnitValue&&S.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",l.vvSizeUnitValueToPixelsRatio),a.bindTexture(e.labelFBO.colorTexture,3),S.setUniform1i("u_referenceTex",3),S.setUniform1f("u_mapRotation",Math.floor(s.rotation/360*254)),S.setUniform1f("u_mapAligned",m),S.setUniformMatrix3fv("u_displayMat3",g),S.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),S.setUniform2fv("u_mosaicSize",this._glyphsTextureSize),S.setUniform1f("u_pixelRatio",e.pixelRatio),S.setUniform1f("u_opacity",1),S.setUniform1f("u_zoomLevel",Math.round(10*e.displayLevel)),S.setUniform2fv("u_screenSize",e.state.size),a.drawElements(4,v,5125,4*u),a.bindVAO(null),a.setStencilTestEnabled(!0),a.setBlendingEnabled(!0)}}},e.prototype.getGeometryType=function(){return b.WGLGeometryType.LABEL},e.prototype._getVAO=function(e,t){var i=t.labelGeometry;if(i&&i.vao)return i.vao;var r=i.vertexBufferMap[s.C_VBO_GEOMETRY],a=i.vertexBufferMap[s.C_VBO_VISIBILITY],o=i.vertexBufferMap[s.C_VBO_VISIBILITY_RANGE],n=i.indexBuffer;return r&&n&&o?(i.vao=new f(e,l.label.attributes,this._vertexAttributeLayout,{geometry:r,visibility:a,visibilityRange:o},n),i.vao):null},e}(a.default);t.default=o});