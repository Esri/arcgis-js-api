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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","./shaders/glShaderSnippets","../../../webgl/BufferObject","../../../webgl/Program","../../../webgl/VertexArrayObject"],function(e,t,r,i,n,a){return function(){function e(){this._initialized=!1}return e.prototype.dispose=function(){this._program&&(this._program.dispose(),this._program=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)},e.prototype.render=function(e,t,r,i){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(1,771,1,771),e.bindVAO(this._vertexArrayObject),e.bindProgram(this._program),t.setSamplingMode(r),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),e.drawArrays(5,0,4),e.bindVAO())},e.prototype._initialize=function(e){if(this._initialized)return!0;var t={a_pos:0,a_tex:1},o=new n(e,r.bitblitVS,r.bitblitFS,t);if(!o)return!1;var s={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},p=new Int8Array(16);p[0]=-1,p[1]=-1,p[2]=0,p[3]=0,p[4]=1,p[5]=-1,p[6]=1,p[7]=0,p[8]=-1,p[9]=1,p[10]=0,p[11]=1,p[12]=1,p[13]=1,p[14]=1,p[15]=1;var d=new a(e,t,s,{geometry:i.createVertex(e,35044,p)});return this._program=o,this._vertexArrayObject=d,this._initialized=!0,!0},e}()});