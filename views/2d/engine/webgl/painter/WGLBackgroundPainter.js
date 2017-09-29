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

define(["require","exports","../../../../../core/libs/gl-matrix/vec4","../../../../webgl/Program","../../../../webgl/VertexArrayObject","../../../../webgl/BufferObject","../shaders/glShaderSnippets"],function(r,i,t,o,e,s,a){var n=function(){function r(){this._color=t.create(),this._initialized=!1,this._color.set([1,0,0,1])}return r.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)},r.prototype.draw=function(r,i,t){this._initialized||this._initialize(r),t&&(this._color[0]=t[0],this._color[1]=t[1],this._color[2]=t[2],this._color[3]=t[3]),r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",i.tileTransform.transform),this._solidProgram.setUniform2fv("u_normalized_origin",i.tileTransform.displayCoord),this._solidProgram.setUniform1f("u_coord_range",i.coordRange),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),r.drawArrays(5,0,4),r.bindVAO()},r.prototype._initialize=function(r){if(this._initialized)return!0;var i={a_pos:0},t=new o(r,a.backgroundVS,a.backgroundFS,i);if(!t)return!1;var n={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},l=new Int8Array([0,0,1,0,0,1,1,1]),d=s.createVertex(r,35044,l),_=new e(r,i,n,{geometry:d});return this._solidProgram=t,this._vertexAttributes=n,this._solidVertexArrayObject=_,this._initialized=!0,!0},r}();return n});