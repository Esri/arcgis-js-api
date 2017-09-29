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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../webgl/VertexArrayObject","../Utils"],function(t,i,e,r){var o=function(){function t(){this._isInitialized=!1,this._fillAttributeLocations={a_pos:0,a_id:1,a_color:2,a_tlbr:3,a_aux:4},this._fillAttributeLocationsVV={a_pos:0,a_id:1,a_color:2,a_tlbr:3,a_aux:4,a_vv:5},this._spritesTextureSize=new Float32Array(2)}return t.prototype.draw=function(t,i,e,o,a,s,n,l,f,u,v,_){if(e.canDisplay){this._initialize();var d=i.materialKeyInfo,m=d.vvColor||d.vvOpacity,y=m?this._fillAttributeLocationsVV:this._fillAttributeLocations,c=v.getProgram(i.materialKey,a,y);if(c){t.bindProgram(c);var p=this._getVAO(t,e,m);if(t.bindVAO(p),i.texBindingInfo.length>0){var V=i.texBindingInfo[0],h=V.pageId,z=_.sprites;this._spritesTextureSize[0]=z.getWidth(h),this._spritesTextureSize[1]=z.getHeight(h);var b=e.coordRange/r.C_TILE_SIZE/Math.pow(2,s-e.key.level)/n;c.setUniform1f("u_zoomFactor",b);var g=l?9728:9729;_.bindSpritePage(t,h,V.unit,g),c.setUniform1i(V.semantic,V.unit),c.setUniform2fv("u_mosaicSize",this._spritesTextureSize)}c.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),c.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),c.setUniform1f("u_opacity",1),d.vvColor&&(c.setUniform1fv("u_vvColorValues",o.vvColorValues),c.setUniform4fv("u_vvColors",o.vvColors)),d.vvOpacity&&(c.setUniform1fv("u_vvOpacityValues",o.vvOpacityValues),c.setUniform1fv("u_vvOpacities",o.vvOpacities)),t.drawElements(4,u,5125,4*f),t.bindVAO(null)}}},t.prototype._initialize=function(){if(this._isInitialized)return!0;var t={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:24,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:24,normalized:!0,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:12,stride:24,normalized:!1,divisor:0},{name:"a_aux",count:4,type:5121,offset:20,stride:24,normalized:!1,divisor:0}]},i={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:32,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:32,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:32,normalized:!0,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:12,stride:32,normalized:!1,divisor:0},{name:"a_aux",count:4,type:5121,offset:20,stride:32,normalized:!1,divisor:0},{name:"a_vv",count:2,type:5126,offset:24,stride:32,normalized:!1,divisor:0}]};this._fillVertexAttributeLayout=t,this._fillVertexAttributeLayoutVV=i,this._isInitialized=!0},t.prototype._getVAO=function(t,i,o){if(i.fillGeometry.vao)return i.fillGeometry.vao;var a=i.fillGeometry.vertexBufferMap[r.C_VBO_GEOMETRY],s=i.fillGeometry.indexBuffer;return a&&s?(o?i.fillGeometry.vao=new e(t,this._fillAttributeLocationsVV,this._fillVertexAttributeLayoutVV,{geometry:a},s):i.fillGeometry.vao=new e(t,this._fillAttributeLocations,this._fillVertexAttributeLayout,{geometry:a},s),i.fillGeometry.vao):null},t}();return o});