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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix/mat3","../../../core/libs/gl-matrix/vec4","../../webgl/Program","../../webgl/VertexArrayObject","../../webgl/BufferObject","./vtShaderSnippets"],function(r,t,i,e,o,a,s,n){var _=function(){function r(){this._patternMatrix=i.create(),this._color=e.create(),this._initialized=!1}return r.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._patternProgram&&(this._patternProgram.dispose(),this._patternProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null),this._patternVertexArrayObject&&(this._patternVertexArrayObject.dispose(),this._patternVertexArrayObject=null)},r.prototype.renderSolidColor=function(r,t){this._initialized||this._initialize(r),r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",t.u_matrix),this._solidProgram.setUniform2fv("u_normalized_origin",t.u_normalized_origin),this._solidProgram.setUniform1f("u_coord_range",t.u_coord_range||4096),this._solidProgram.setUniform1f("u_depth",t.u_depth||0),this._solidProgram.setUniform4fv("u_color",t.u_color||new Float32Array([1,0,0,1])),r.drawArrays(5,0,4),r.bindVAO()},r.prototype.render=function(r,t,e,o,a,s,n,_){this._initialized||this._initialize(r);var l=a.getPaintValue("background-color",t),d=_*a.getPaintValue("background-opacity",t),m=a.getPaintValue("background-pattern",t),h=void 0!==m,f=l[3]*d,g=h||1>f;if((!g||0!==e)&&(g||1!==e)){if(h){r.bindVAO(this._patternVertexArrayObject),r.bindProgram(this._patternProgram);var p=s.getMosaicItemPosition(m,!0);if(!p)return;var u=512,c=o.coordRange/u,P=c/Math.pow(2,Math.floor(t)-o.key.level)/n;i.identity(this._patternMatrix);var b=1/(p.size[0]*P),y=1/(p.size[1]*P);this._patternMatrix[0]=b,this._patternMatrix[4]=y,s.bind(r,9729,0),this._patternProgram.setUniformMatrix4fv("u_transformMatrix",o.tileTransform.transform),this._patternProgram.setUniform2fv("u_normalized_origin",o.tileTransform.displayCoord),this._patternProgram.setUniform1f("u_depth",a.z),this._patternProgram.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),this._patternProgram.setUniform1f("u_opacity",d),this._patternProgram.setUniform2f("u_pattern_tl",p.tl[0],p.tl[1]),this._patternProgram.setUniform2f("u_pattern_br",p.br[0],p.br[1]),this._patternProgram.setUniform1i("u_texture",0),r.drawArrays(5,0,4)}else this._color[0]=f*l[0],this._color[1]=f*l[1],this._color[2]=f*l[2],this._color[3]=f,r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",o.tileTransform.transform),this._solidProgram.setUniform2fv("u_normalized_origin",o.tileTransform.displayCoord),this._solidProgram.setUniform1f("u_coord_range",o.coordRange),this._solidProgram.setUniform1f("u_depth",a.z||0),this._solidProgram.setUniform4fv("u_color",this._color),r.drawArrays(5,0,4);r.bindVAO()}},r.prototype._initialize=function(r){if(this._initialized)return!0;var t={a_pos:0},i=new o(r,n.backgroundVS,n.backgroundFS,t);if(!i)return!1;var e=new o(r,n.patternFillShaderVS,n.patternFillShaderFS,t);if(!e)return!1;var _={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},l=new Int8Array([0,0,1,0,0,1,1,1]),d=s.createVertex(r,35044,l),m=new a(r,t,_,{geometry:d}),h={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]};l=new Int16Array([0,0,4096,0,0,4096,4096,4096]);var f=s.createVertex(r,35044,l),g=new a(r,t,h,{geometry:f});return this._solidProgram=i,this._patternProgram=e,this._vertexAttributes=_,this._solidVertexArrayObject=m,this._patternVertexArrayObject=g,this._initialized=!0,!0},r}();return _});