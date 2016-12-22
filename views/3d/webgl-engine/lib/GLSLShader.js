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

define(["require","exports"],function(e,t){function i(e){return 1e3>e?("  "+e).slice(-3):""+e}function r(e){function t(){return"\n"+i(r++)+":"}var r=2;return e.replace(/\n/g,t)}var n=function(){function e(e,t,i,r){this.glName=void 0,this.defines=r,this.gl=i,this.type=e,this.source=t}return e.prototype.init=function(){void 0===this.glName&&(this.glName=this.gl.createShader(this.type),this.loadShader())},e.prototype.loadShader=function(){var e=this.source,t=this.defines,i=this.gl;if(void 0!==t){for(var n="",o=0;o<t.length;o++)n+="#define "+t[o]+"\n";e=n+e}i.shaderSource(this.glName,e),i.compileShader(this.glName),i.getShaderParameter(this.glName,i.COMPILE_STATUS)||(console.error(i.getShaderInfoLog(this.glName)),console.error(r(e)))},e.prototype.changeDefines=function(e){return JSON.stringify(this.defines)===JSON.stringify(e)?!1:(this.defines=e,void 0!==this.glName&&this.loadShader(),!0)},e.prototype.getGLName=function(){return this.init(),this.glName},e}();return n});