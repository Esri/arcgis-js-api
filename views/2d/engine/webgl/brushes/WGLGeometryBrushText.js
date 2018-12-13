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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../enums","../Utils","./WGLGeometryBrush","../shaders/MaterialPrograms","../../../../webgl/VertexArrayObject"],function(e,t,i,o,r,n,a,l,u){Object.defineProperty(t,"__esModule",{value:!0});var s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._vertexAttributeLayout={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:20,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:20,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:12,stride:20,normalized:!1,divisor:0},{name:"a_texFontSize",count:4,type:5120,offset:16,stride:20,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]},e._vertexAttributeLayoutVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:36,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:36,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:36,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:12,stride:36,normalized:!1,divisor:0},{name:"a_texFontSize",count:4,type:5120,offset:16,stride:36,normalized:!1,divisor:0},{name:"a_vv",count:4,type:5126,offset:20,stride:36,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]},e._glyphsTextureSize=o.vec2f32.create(),e}return i(e,t),e.prototype.dispose=function(){},e.prototype.getGeometryType=function(){return r.WGLGeometryType.TEXT},e.prototype.drawGeometry=function(e,t,i,o){var r=e.context,a=e.painter,s=e.rendererInfo,v=e.drawPhase,n=e.state,l=i.materialInfo,u=i.indexCount,f=i.indexFrom,d=l.materialKeyInfo,p=d.vvSizeMinMaxValue||d.vvSizeScaleStops||d.vvSizeFieldStops||d.vvSizeUnitValue||d.vvColor||d.vvRotation||d.vvOpacity,m=a.materialManager.getProgram(l.materialKey,v);if(m){r.bindProgram(m);var y=this._getVAO(r,t,p,this.getGeometryType());r.bindVAO(y);var S=l.texBindingInfo[0],_=S.pageId;a.textureManager.bindGlyphsPage(r,_,S.unit),m.setUniform1i(S.semantic,S.unit);var c=a.textureManager.glyphs;this._glyphsTextureSize[0]=c.width/4,this._glyphsTextureSize[1]=c.height/4,m.setUniformMatrix3fv("u_displayMat3",n.displayMat3),m.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),m.setUniform2fv("u_mosaicSize",this._glyphsTextureSize),m.setUniform1f("u_pixelRatio",1),d.vvSizeMinMaxValue&&m.setUniform4fv("u_vvSizeMinMaxValue",s.vvSizeMinMaxValue),d.vvSizeScaleStops&&m.setUniform1f("u_vvSizeScaleStopsValue",s.vvSizeScaleStopsValue),d.vvSizeFieldStops&&(m.setUniform1fv("u_vvSizeFieldStopsValues",s.vvSizeFieldStopsValues),m.setUniform1fv("u_vvSizeFieldStopsSizes",s.vvSizeFieldStopsSizes)),d.vvSizeUnitValue&&m.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",s.vvSizeUnitValueToPixelsRatio),d.vvColor&&(m.setUniform1fv("u_vvColorValues",s.vvColorValues),m.setUniform4fv("u_vvColors",s.vvColors)),d.vvOpacity&&(m.setUniform1fv("u_vvOpacityValues",s.vvOpacityValues),m.setUniform1fv("u_vvOpacities",s.vvOpacities)),d.vvRotation&&m.setUniform1f("u_vvRotationType","geographic"===s.vvMaterialParameters.vvRotationType?0:1),r.drawElements(4,u,5125,4*f),r.bindVAO(null)}},e.prototype._getVAO=function(e,t,i,o){var r=t.getGeometry(o);if(r&&r.vao)return r.vao;var a=r.vertexBufferMap[n.C_VBO_GEOMETRY],s=r.vertexBufferMap[n.C_VBO_VISIBILITY],v=r.indexBuffer;return a&&v?(r.vao=new u(e,l.text.attributes,i?this._vertexAttributeLayoutVV:this._vertexAttributeLayout,{geometry:a,visibility:s},v),r.vao):null},e}(a.default);t.default=s});