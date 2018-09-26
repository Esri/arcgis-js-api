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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../enums","../Utils","./WGLGeometryBrush","../shaders/MaterialPrograms","../../../../webgl/VertexArrayObject"],function(e,t,i,r,o,a,n,v){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._vertexAttributeLayout={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:20,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:20,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:12,stride:20,normalized:!1,divisor:0},{name:"a_texFontSize",count:4,type:5120,offset:16,stride:20,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]},t._vertexAttributeLayoutVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:36,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:36,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:36,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:12,stride:36,normalized:!1,divisor:0},{name:"a_texFontSize",count:4,type:5120,offset:16,stride:36,normalized:!1,divisor:0},{name:"a_vv",count:4,type:5126,offset:20,stride:36,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]},t._glyphsTextureSize=new Float32Array(2),t}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return r.WGLGeometryType.TEXT},t.prototype.drawGeometry=function(e,t,i,r){var o=e.context,a=e.painter,n=e.rendererInfo,v=e.drawPhase,s=i.materialInfo,u=i.indexCount,l=i.indexFrom,f=s.materialKeyInfo,d=f.vvSizeMinMaxValue||f.vvSizeScaleStops||f.vvSizeFieldStops||f.vvSizeUnitValue||f.vvColor||f.vvRotation||f.vvOpacity,m=a.materialManager.getProgram(s.materialKey,v);if(m){o.bindProgram(m);var p=this._getVAO(o,t,d,this.getGeometryType());o.bindVAO(p);var y=s.texBindingInfo[0],_=y.pageId;a.textureManager.bindGlyphsPage(o,_,y.unit),m.setUniform1i(y.semantic,y.unit);var S=a.textureManager.glyphs;this._glyphsTextureSize[0]=S.width/4,this._glyphsTextureSize[1]=S.height/4;var x=n.vvMaterialParameters.vvRotationEnabled&&"geographic"===n.vvMaterialParameters.vvRotationType?a.extrudeMatrix:a.extrudeNoRotationMatrix;m.setUniformMatrix4fv("u_transformMatrix",t.tileTransform.transform),m.setUniformMatrix4fv("u_extrudeMatrix",x),m.setUniform2fv("u_normalized_origin",t.tileTransform.displayCoord),m.setUniform2fv("u_mosaicSize",this._glyphsTextureSize),m.setUniform1f("u_pixelRatio",1),m.setUniform1f("u_opacity",1),f.vvSizeMinMaxValue&&m.setUniform4fv("u_vvSizeMinMaxValue",n.vvSizeMinMaxValue),f.vvSizeScaleStops&&m.setUniform1f("u_vvSizeScaleStopsValue",n.vvSizeScaleStopsValue),f.vvSizeFieldStops&&(m.setUniform1fv("u_vvSizeFieldStopsValues",n.vvSizeFieldStopsValues),m.setUniform1fv("u_vvSizeFieldStopsSizes",n.vvSizeFieldStopsSizes)),f.vvSizeUnitValue&&m.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",n.vvSizeUnitValueToPixelsRatio),f.vvColor&&(m.setUniform1fv("u_vvColorValues",n.vvColorValues),m.setUniform4fv("u_vvColors",n.vvColors)),f.vvOpacity&&(m.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),m.setUniform1fv("u_vvOpacities",n.vvOpacities)),f.vvRotation&&m.setUniform1f("u_vvRotationType","geographic"===n.vvMaterialParameters.vvRotationType?0:1),o.drawElements(4,u,5125,4*l),o.bindVAO(null)}},t.prototype._getVAO=function(e,t,i,r){var a=t.getGeometry(r);if(a&&a.vao)return a.vao;var s=a.vertexBufferMap[o.C_VBO_GEOMETRY],u=a.vertexBufferMap[o.C_VBO_VISIBILITY],l=a.indexBuffer;return s&&l?(a.vao=i?new v(e,n.text.attributes,this._vertexAttributeLayoutVV,{geometry:s,visibility:u},l):new v(e,n.text.attributes,this._vertexAttributeLayout,{geometry:s,visibility:u},l),a.vao):null},t}(a.default);t.default=s});