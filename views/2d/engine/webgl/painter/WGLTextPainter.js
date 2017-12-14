// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../webgl/VertexArrayObject","../Utils"],function(e,t,i,o){var r=function(){function e(){this._attributeLocations={a_pos:0,a_id:1,a_color:2,a_vertexOffset:3,a_texFontSize:4,a_visible:5},this._attributeLocationsVV={a_pos:0,a_id:1,a_color:2,a_vertexOffset:3,a_texFontSize:4,a_visible:5,a_vv:6},this._vertexAttributeLayout={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:20,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:20,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:12,stride:20,normalized:!1,divisor:0},{name:"a_texFontSize",count:4,type:5120,offset:16,stride:20,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5120,offset:0,stride:1,normalized:!1,divisor:0}]},this._vertexAttributeLayoutVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:36,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:36,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:36,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:12,stride:36,normalized:!1,divisor:0},{name:"a_texFontSize",count:4,type:5120,offset:16,stride:36,normalized:!1,divisor:0},{name:"a_vv",count:4,type:5126,offset:20,stride:36,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5120,offset:0,stride:1,normalized:!1,divisor:0}]},this._glyphsTextureSize=new Float32Array(2)}return e.prototype.draw=function(e,t,i,o,r,a,s,n,v,f,l){if(i.canDisplay){var u=t.materialKeyInfo,m=u.vvSizeMinMaxValue||u.vvSizeScaleStops||u.vvSizeFieldStops||u.vvSizeUnitValue||u.vvColor||u.vvRotation||u.vvOpacity,d=m?this._attributeLocationsVV:this._attributeLocations,_=n.getProgram(t.materialKey,r,d);if(_){e.bindProgram(_);var y=this._getVAO(e,i,m);e.bindVAO(y);var p=t.texBindingInfo[0],c=p.pageId;v.bindGlyphsPage(e,c,p.unit),_.setUniform1i(p.semantic,p.unit);var x=v.glyphs;this._glyphsTextureSize[0]=x.width/4,this._glyphsTextureSize[1]=x.height/4;var z=o.vvMaterialParameters.vvRotationEnabled&&"geographic"===o.vvMaterialParameters.vvRotationType?f:l;_.setUniformMatrix4fv("u_transformMatrix",i.tileTransform.transform),_.setUniformMatrix4fv("u_extrudeMatrix",z),_.setUniform2fv("u_normalized_origin",i.tileTransform.displayCoord),_.setUniform2fv("u_mosaicSize",this._glyphsTextureSize),_.setUniform1f("u_pixelRatio",1),_.setUniform1f("u_opacity",1),u.vvSizeMinMaxValue&&_.setUniform4fv("u_vvSizeInfo",o.vvSizeMinMaxValue),u.vvSizeScaleStops,u.vvSizeFieldStops,u.vvSizeUnitValue,u.vvColor&&(_.setUniform1fv("u_vvColorValues",o.vvColorValues),_.setUniform4fv("u_vvColors",o.vvColors)),u.vvOpacity&&(_.setUniform1fv("u_vvOpacityValues",o.vvOpacityValues),_.setUniform1fv("u_vvOpacities",o.vvOpacities)),e.drawElements(4,s,5125,4*a),e.bindVAO(null)}}},e.prototype._getVAO=function(e,t,r){if(t.textGeometry.vao)return t.textGeometry.vao;var a=t.textGeometry.vertexBufferMap[o.C_VBO_GEOMETRY],s=t.textGeometry.vertexBufferMap[o.C_VBO_VISIBILITY],n=t.textGeometry.indexBuffer;return a&&n?(r?t.textGeometry.vao=new i(e,this._attributeLocationsVV,this._vertexAttributeLayoutVV,{geometry:a,visibility:s},n):t.textGeometry.vao=new i(e,this._attributeLocations,this._vertexAttributeLayout,{geometry:a,visibility:s},n),t.textGeometry.vao):null},e}();return r});