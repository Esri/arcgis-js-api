// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../enums","../Utils","./WGLGeometryBrush","../../../../webgl/VertexArrayObject"],(function(e,t,i,r,a,o,n){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._attributeLocations={a_pos:0,a_color:1,a_vertexOffset:2,a_texAndSize:3,a_refSymbolAndPlacementOffset:4,a_visible:5,a_visibilityRange:6},t._vertexAttributeLayout={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:20,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:8,stride:20,normalized:!1,divisor:0},{name:"a_texAndSize",count:4,type:5120,offset:12,stride:20,normalized:!1,divisor:0},{name:"a_refSymbolAndPlacementOffset",count:4,type:5120,offset:16,stride:20,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}],visibilityRange:[{name:"a_visibilityRange",count:2,type:5121,offset:0,stride:2,normalized:!1,divisor:0}]},t._glyphsTextureSize=new Float32Array(2),t}return i(t,e),t.prototype.dispose=function(){},t.prototype.drawGeometry=function(e,t,i,a){if(e.requiredLevel===t.key.level){var o=e.context,n=e.painter,s=e.drawPhase,f=i.materialInfo,l=i.indexCount,u=i.indexFrom,d=this._attributeLocations,m=e.drawPhase===r.WGLDrawPhase.LABEL_ALPHA,_=f.materialKey;m&&(_|=8);var p=n.materialManager.getProgram(_,s,d);if(p){o.setStencilTestEnabled(!1),o.bindProgram(p);var v=this._getVAO(o,t);if(o.bindVAO(v),m)o.setBlendingEnabled(!1),p.setUniform1f("u_fadeStep",e.labelStep);else{var y=f.texBindingInfo[0],x=y.pageId;n.textureManager.bindGlyphsPage(o,x,y.unit),p.setUniform1i(y.semantic,y.unit)}var c=n.textureManager.glyphs;this._glyphsTextureSize[0]=c.width/4,this._glyphsTextureSize[1]=c.height/4;var b=n.extrudeNoRotationMatrix;o.bindTexture(e.labelFBO.colorTexture,3),p.setUniform1i("u_referenceTex",3),p.setUniformMatrix4fv("u_transformMatrix",t.tileTransform.transform),p.setUniformMatrix4fv("u_extrudeMatrix",b),p.setUniform2fv("u_normalized_origin",t.tileTransform.displayCoord),p.setUniform2fv("u_mosaicSize",this._glyphsTextureSize),p.setUniform1f("u_pixelRatio",e.pixelRatio),p.setUniform1f("u_opacity",1),p.setUniform1f("u_zoomLevel",10*e.displayLevel),p.setUniform1f("u_mapRotation",e.state.rotation),p.setUniform1f("u_mapAligned",0),p.setUniform2fv("u_screenSize",e.state.size),o.drawElements(4,l,5125,4*u),o.bindVAO(null),o.setStencilTestEnabled(!0),o.setBlendingEnabled(!0)}}},t.prototype.getGeometryType=function(){return r.WGLGeometryType.LABEL},t.prototype._getVAO=function(e,t){var i=t.labelGeometry;if(i&&i.vao)return i.vao;var r=i.vertexBufferMap[a.C_VBO_GEOMETRY],o=i.vertexBufferMap[a.C_VBO_VISIBILITY],s=i.vertexBufferMap[a.C_VBO_VISIBILITY_RANGE],f=i.indexBuffer;return r&&f&&s?(i.vao=new n(e,this._attributeLocations,this._vertexAttributeLayout,{geometry:r,visibility:o,visibilityRange:s},f),i.vao):null},t}(o.default);t.default=s}));