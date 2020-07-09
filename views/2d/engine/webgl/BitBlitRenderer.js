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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../webgl","./shaders/BitBlitPrograms"],(function(e,t,r,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this._initialized=!1}return e.prototype.dispose=function(){this._program&&(this._program.dispose(),this._program=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)},e.prototype.render=function(e,t,r,i){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(1,771,1,771),e.bindVAO(this._vertexArrayObject),e.bindProgram(this._program),t.setSamplingMode(r),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),e.drawArrays(5,0,4),e.bindTexture(null,0),e.bindVAO())},e.prototype._initialize=function(e){if(this._initialized)return!0;var t=i.bitBlit.attributes,n=r.createProgram(e,i.bitBlit);if(!n)return!1;var a=new Int8Array(16);a[0]=-1,a[1]=-1,a[2]=0,a[3]=0,a[4]=1,a[5]=-1,a[6]=1,a[7]=0,a[8]=-1,a[9]=1,a[10]=0,a[11]=1,a[12]=1,a[13]=1,a[14]=1,a[15]=1;var o=new r.VertexArrayObject(e,t,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},{geometry:r.BufferObject.createVertex(e,35044,a)});return this._program=n,this._vertexArrayObject=o,this._initialized=!0,!0},e}();t.BitBlitRenderer=n}));