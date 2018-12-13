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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../enums","../Utils","./WGLGeometryBrush","../shaders/MaterialPrograms","../../../../webgl/VertexArrayObject"],function(e,t,i,o,r,n,a,s,v){Object.defineProperty(t,"__esModule",{value:!0});var d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._iconVertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_vertexOffsetAndTex",count:4,type:5120,offset:4,stride:24,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:8,stride:24,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:24,normalized:!0,divisor:0},{name:"a_outlineColor",count:4,type:5121,offset:16,stride:24,normalized:!0,divisor:0},{name:"a_sizeAndOutlineWidth",count:4,type:5121,offset:20,stride:24,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]},e._iconVertexAttributesWithVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:40,normalized:!1,divisor:0},{name:"a_vertexOffsetAndTex",count:4,type:5120,offset:4,stride:40,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:8,stride:40,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:40,normalized:!0,divisor:0},{name:"a_outlineColor",count:4,type:5121,offset:16,stride:40,normalized:!0,divisor:0},{name:"a_sizeAndOutlineWidth",count:4,type:5121,offset:20,stride:40,normalized:!1,divisor:0},{name:"a_vv",count:4,type:5126,offset:24,stride:40,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]},e._spritesTextureSize=o.vec2f32.create(),e}return i(e,t),e.prototype.dispose=function(){},e.prototype.getGeometryType=function(){return r.WGLGeometryType.MARKER},e.prototype.drawGeometry=function(e,t,i,o){var r=e.context,a=e.painter,n=e.rendererInfo,s=e.drawPhase,v=e.state,d=i.indexCount,u=i.indexFrom,f=i.materialInfo,l=f.materialKeyInfo,m=a.materialManager.getProgram(f.materialKey,s);if(m){r.bindProgram(m);var p=this._getVAO(r,t,l.hasVV());r.bindVAO(p);var c=f.texBindingInfo[0],y=c.pageId;a.textureManager.bindSpritePage(r,y,c.unit),m.setUniform1i(c.semantic,c.unit);var _=a.textureManager.sprites;this._spritesTextureSize[0]=_.getWidth(y)/4,this._spritesTextureSize[1]=_.getHeight(y)/4;var z=l.vvRotation?v.displayViewMat3:v.displayMat3;m.setUniformMatrix3fv("u_displayMat3",z),m.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),m.setUniform2fv("u_mosaicSize",this._spritesTextureSize),l.vvSizeMinMaxValue&&m.setUniform4fv("u_vvSizeMinMaxValue",n.vvSizeMinMaxValue),l.vvSizeScaleStops&&m.setUniform1f("u_vvSizeScaleStopsValue",n.vvSizeScaleStopsValue),l.vvSizeFieldStops&&(m.setUniform1fv("u_vvSizeFieldStopsValues",n.vvSizeFieldStopsValues),m.setUniform1fv("u_vvSizeFieldStopsSizes",n.vvSizeFieldStopsSizes)),l.vvSizeUnitValue&&m.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",n.vvSizeUnitValueToPixelsRatio),l.vvColor&&(m.setUniform1fv("u_vvColorValues",n.vvColorValues),m.setUniform4fv("u_vvColors",n.vvColors)),l.vvOpacity&&(m.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),m.setUniform1fv("u_vvOpacities",n.vvOpacities)),l.vvRotation&&m.setUniform1f("u_vvRotationType","geographic"===n.vvMaterialParameters.vvRotationType?0:1),r.drawElements(4,d,5125,4*u),r.bindVAO(null)}},e.prototype._getVAO=function(e,t,i){if(t.iconGeometry.vao)return t.iconGeometry.vao;var o=t.iconGeometry.vertexBufferMap[n.C_VBO_GEOMETRY],r=t.iconGeometry.vertexBufferMap[n.C_VBO_VISIBILITY],a=t.iconGeometry.indexBuffer;return o&&a?(t.iconGeometry.vao=new v(e,s.icon.attributes,i?this._iconVertexAttributesWithVV:this._iconVertexAttributes,{geometry:o,visibility:r},a),t.iconGeometry.vao):null},e}(a.default);t.default=d});