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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","./shaders/glShaderSnippets","../../../webgl/BufferObject","../../../webgl/Program","../../../webgl/VertexArrayObject"],function(e,t,i,r,n,a){return function(){function e(){this._initialized=!1}return e.prototype.render=function(e,t,i,r){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(1,771,1,771),e.bindVAO(this._vertexArrayObject),e.bindProgram(this._program),t.setSamplingMode(i),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",r),e.drawArrays(5,0,4),e.bindVAO())},e.prototype._initialize=function(e){if(this._initialized)return!0;var t={a_pos:0,a_tex:1},o=new n(e,i.bitblitVS,i.bitblitFS,t);if(!o)return!1;var s={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},d=new Int8Array(16);d[0]=-1,d[1]=-1,d[2]=0,d[3]=0,d[4]=1,d[5]=-1,d[6]=1,d[7]=0,d[8]=-1,d[9]=1,d[10]=0,d[11]=1,d[12]=1,d[13]=1,d[14]=1,d[15]=1;var p=new a(e,t,s,{geometry:r.createVertex(e,35044,d)});return this._program=o,this._vertexArrayObject=p,this._initialized=!0,!0},e}()});