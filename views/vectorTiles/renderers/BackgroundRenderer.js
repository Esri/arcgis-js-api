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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix/mat3","../../../core/libs/gl-matrix/vec4","../../webgl/Program","../../webgl/VertexArrayObject","../../webgl/BufferObject","./vtShaderSnippets"],function(r,t,i,e,o,a,n,s){var _=function(){function r(){this._patternMatrix=i.create(),this._color=e.create(),this._initialized=!1}return r.prototype.renderSolidColor=function(r,t){this._initialized||this._initialize(r),r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",t.u_matrix),this._solidProgram.setUniform2fv("u_normalized_origin",t.u_normalized_origin),this._solidProgram.setUniform1f("u_coord_range",t.u_coord_range||4096),this._solidProgram.setUniform1f("u_depth",t.u_depth||0),this._solidProgram.setUniform4fv("u_color",t.u_color||new Float32Array([1,0,0,1])),r.drawArrays(5,0,4),r.bindVAO()},r.prototype.render=function(r,t,e,o,a,n,s,_){this._initialized||this._initialize(r);var m=a.getPaintValue("background-color",t),d=_*a.getPaintValue("background-opacity",t),l=a.getPaintValue("background-pattern",t),f=void 0!==l,h=m[3]*d,g=f||1>h;if((!g||0!==e)&&(g||1!==e)){if(f){r.bindVAO(this._patternVertexArrayObject),r.bindProgram(this._patternProgram);var u=n.getMosaicItemPosition(l,!0);if(!u)return;var p=512,c=o.coordRange/p,P=c/Math.pow(2,Math.floor(t)-o.key.level)/s;i.identity(this._patternMatrix);var b=1/(u.size[0]*P),x=1/(u.size[1]*P);this._patternMatrix[0]=b,this._patternMatrix[4]=x,n.bind(r,9729,0),this._patternProgram.setUniformMatrix4fv("u_transformMatrix",o.tileTransform.transform),this._patternProgram.setUniform2fv("u_normalized_origin",o.tileTransform.displayCoord),this._patternProgram.setUniform1f("u_depth",a.z),this._patternProgram.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),this._patternProgram.setUniform1f("u_opacity",d),this._patternProgram.setUniform2f("u_pattern_tl",u.tl[0],u.tl[1]),this._patternProgram.setUniform2f("u_pattern_br",u.br[0],u.br[1]),this._patternProgram.setUniform1i("u_texture",0),r.drawArrays(5,0,4)}else this._color[0]=h*m[0],this._color[1]=h*m[1],this._color[2]=h*m[2],this._color[3]=h,r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",o.tileTransform.transform),this._solidProgram.setUniform2fv("u_normalized_origin",o.tileTransform.displayCoord),this._solidProgram.setUniform1f("u_coord_range",o.coordRange),this._solidProgram.setUniform1f("u_depth",a.z||0),this._solidProgram.setUniform4fv("u_color",this._color),r.drawArrays(5,0,4);r.bindVAO()}},r.prototype._initialize=function(r){if(this._initialized)return!0;var t={a_pos:0},i=new o(r,s.backgroundVS,s.backgroundFS,t);if(!i)return!1;var e=new o(r,s.patternFillShaderVS,s.patternFillShaderFS,t);if(!e)return!1;var _={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},m=new Int8Array([0,0,1,0,0,1,1,1]),d=n.createVertex(r,35044,m),l=new a(r,t,_,{geometry:d}),f={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]};m=new Int16Array([0,0,4096,0,0,4096,4096,4096]);var h=n.createVertex(r,35044,m),g=new a(r,t,f,{geometry:h});return this._solidProgram=i,this._patternProgram=e,this._vertexAttributes=_,this._solidVertexArrayObject=l,this._patternVertexArrayObject=g,this._initialized=!0,!0},r}();return _});