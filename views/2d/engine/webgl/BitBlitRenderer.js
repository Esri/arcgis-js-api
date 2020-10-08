// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../webgl","./shaders/BitBlitPrograms"],(function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BitBlitRenderer=void 0;var n=function(){function e(){this._initialized=!1}return e.prototype.dispose=function(){this._program&&(this._program.dispose(),this._program=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)},e.prototype.render=function(e,t,r,i){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(1,771,1,771),e.bindVAO(this._vertexArrayObject),e.bindProgram(this._program),t.setSamplingMode(r),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),e.drawArrays(5,0,4),e.bindTexture(null,0),e.bindVAO())},e.prototype._initialize=function(e){if(this._initialized)return!0;var t=i.bitBlit.attributes,n=r.createProgram(e,i.bitBlit);if(!n)return!1;var o=new Int8Array(16);o[0]=-1,o[1]=-1,o[2]=0,o[3]=0,o[4]=1,o[5]=-1,o[6]=1,o[7]=0,o[8]=-1,o[9]=1,o[10]=0,o[11]=1,o[12]=1,o[13]=1,o[14]=1,o[15]=1;var a=new r.VertexArrayObject(e,t,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},{geometry:r.BufferObject.createVertex(e,35044,o)});return this._program=n,this._vertexArrayObject=a,this._initialized=!0,!0},e}();t.BitBlitRenderer=n}));