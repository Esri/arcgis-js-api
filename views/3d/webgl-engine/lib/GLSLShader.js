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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports"],function(){function e(e){return 1e3>e?("  "+e).slice(-3):""+e}function t(t){function i(){return"\n"+e(r++)+":"}var r=2;return t.replace(/\n/g,i)}var i=function(){function e(e,t,i,r){this.glName=void 0,this.defines=r,this.gl=i,this.type=e,this.source=t}return e.prototype.init=function(){void 0===this.glName&&(this.glName=this.gl.createShader(this.type),this.loadShader())},e.prototype.loadShader=function(){var e=this.source,i=this.defines,r=this.gl;if(void 0!==i){for(var n="",o=0;o<i.length;o++)n+="#define "+i[o]+"\n";e=n+e}r.shaderSource(this.glName,e),r.compileShader(this.glName),r.getShaderParameter(this.glName,r.COMPILE_STATUS)||(console.error(r.getShaderInfoLog(this.glName)),console.error(t(e)))},e.prototype.changeDefines=function(e){return JSON.stringify(this.defines)===JSON.stringify(e)?!1:(this.defines=e,void 0!==this.glName&&this.loadShader(),console.log("updating shader"),!0)},e.prototype.getGLName=function(){return this.init(),this.glName},e}();return i});