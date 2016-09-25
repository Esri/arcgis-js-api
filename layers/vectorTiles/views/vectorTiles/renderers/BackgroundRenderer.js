// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","exports","dojo/text!./shaders/background.vs.glsl","dojo/text!./shaders/background.fs.glsl","dojo/text!./shaders/patternFillShader.vs.glsl","dojo/text!./shaders/patternFillShader.fs.glsl","../../../core/libs/gl-matrix/mat3","../../../core/libs/gl-matrix/vec4","../../webgl/Program","../../webgl/VertexArrayObject","../../webgl/BufferObject"],function(r,t,i,e,o,a,s,n,_,l,d){var m=function(){function r(){this._patternMatrix=s.create(),this._color=n.create(),this._initialized=!1}return r.prototype.renderSolidColor=function(r,t){this._initialized||this._initialize(r),r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",t.u_matrix),this._solidProgram.setUniform2fv("u_normalized_origin",t.u_normalized_origin),this._solidProgram.setUniform1f("u_coord_range",t.u_coord_range||4096),this._solidProgram.setUniform1f("u_depth",t.u_depth||0),this._solidProgram.setUniform4fv("u_color",t.u_color||new Float32Array([1,0,0,1])),r.drawArrays(5,0,4),r.bindVAO()},r.prototype.render=function(r,t,i,e,o,a,n){this._initialized||this._initialize(r);var _=o.getPaintValue("background-color",t),l=o.getPaintValue("background-opacity",t),d=o.getPaintValue("background-pattern",t),m=void 0!==d,f=_[3]*l,h=m||1>f;if((!h||0!==i)&&(h||1!==i)){if(m){r.bindVAO(this._patternVertexArrayObject),r.bindProgram(this._patternProgram);var g=a.getMosaicItemPosition(d,!0);if(!g)return;var u=512,c=e.coordRange/u,p=c/Math.pow(2,Math.floor(t)-e.key.level)/n;s.identity(this._patternMatrix);var x=1/(g.size[0]*p),P=1/(g.size[1]*p);this._patternMatrix[0]=x,this._patternMatrix[4]=P,a.bind(r,9729,0),this._patternProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._patternProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._patternProgram.setUniform1f("u_depth",o.z),this._patternProgram.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),this._patternProgram.setUniform1f("u_opacity",l),this._patternProgram.setUniform2f("u_pattern_tl",g.tl[0],g.tl[1]),this._patternProgram.setUniform2f("u_pattern_br",g.br[0],g.br[1]),this._patternProgram.setUniform1i("u_texture",0),r.drawArrays(5,0,4)}else this._color[0]=_[0],this._color[1]=_[1],this._color[2]=_[2],this._color[3]=f,r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._solidProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._solidProgram.setUniform1f("u_coord_range",e.coordRange),this._solidProgram.setUniform1f("u_depth",o.z||0),this._solidProgram.setUniform4fv("u_color",this._color),r.drawArrays(5,0,4);r.bindVAO()}},r.prototype._initialize=function(r){if(this._initialized)return!0;var t={a_pos:0},s=new _(r,i,e,t);if(!s)return!1;var n=new _(r,o,a,t);if(!n)return!1;var m={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},f=new Int8Array([0,0,1,0,0,1,1,1]),h=d.createVertex(r,35044,f),g=new l(r,t,m,{geometry:h}),u={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]};f=new Int16Array([0,0,4096,0,0,4096,4096,4096]);var c=d.createVertex(r,35044,f),p=new l(r,t,u,{geometry:c});return this._solidProgram=s,this._patternProgram=n,this._vertexAttributes=m,this._solidVertexArrayObject=g,this._patternVertexArrayObject=p,this._initialized=!0,!0},r}();return m});