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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports","./shaders/glShaderSnippets","../../../webgl/BufferObject","../../../webgl/Program","../../../webgl/VertexArrayObject"],(function(e,t,r,i,n,a){return function(){function e(){this._initialized=!1}return e.prototype.dispose=function(){this._program&&(this._program.dispose(),this._program=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)},e.prototype.render=function(e,t,r,i){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(1,771,1,771),e.bindVAO(this._vertexArrayObject),e.bindProgram(this._program),t.setSamplingMode(r),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),e.drawArrays(5,0,4),e.bindVAO())},e.prototype._initialize=function(e){if(this._initialized)return!0;var t={a_pos:0,a_tex:1},o=new n(e,r.bitblitVS,r.bitblitFS,t);if(!o)return!1;var s=new Int8Array(16);s[0]=-1,s[1]=-1,s[2]=0,s[3]=0,s[4]=1,s[5]=-1,s[6]=1,s[7]=0,s[8]=-1,s[9]=1,s[10]=0,s[11]=1,s[12]=1,s[13]=1,s[14]=1,s[15]=1;var p=new a(e,t,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},{geometry:i.createVertex(e,35044,s)});return this._program=o,this._vertexArrayObject=p,this._initialized=!0,!0},e}()}));