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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/text!./bitblit.vs.glsl","dojo/text!./bitblit.fs.glsl","../../../webgl/Program","../../../webgl/VertexArrayObject","../../../webgl/BufferObject"],function(t,e,i,r,n,o,a){var s=function(){function t(){this._initialized=!1}return t.prototype.render=function(t,e,i,r){t&&e&&(this._initialized||this._initialize(t),t.setBlendFunctionSeparate(1,771,1,771),t.bindVAO(this._vertexArrayObject),t.bindProgram(this._program),e.setSamplingMode(i),t.bindTexture(e,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",r),t.drawArrays(5,0,4),t.bindVAO())},t.prototype._initialize=function(t){if(this._initialized)return!0;var e={a_pos:0,a_tex:1},s=new n(t,i,r,e);if(!s)return!1;var d={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},l=new Int8Array(16);l[0]=-1,l[1]=-1,l[2]=0,l[3]=0,l[4]=1,l[5]=-1,l[6]=1,l[7]=0,l[8]=-1,l[9]=1,l[10]=0,l[11]=1,l[12]=1,l[13]=1,l[14]=1,l[15]=1;var f=new o(t,e,d,{geometry:a.createVertex(t,35044,l)});return this._program=s,this._vertexArrayObject=f,this._initialized=!0,!0},t}();return s});