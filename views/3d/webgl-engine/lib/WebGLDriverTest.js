// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/vec3f64","../../../webgl","./doublePrecisionUtils","./Util","../shaders/sources/shaderRepository"],function(e,n,o,t,r,i,a,s){function u(e){return(o.isNone(f)||f.context!==e)&&(f=new c(e)),f}function l(e,n){var o=new r.FramebufferObject(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),u=r.BufferObject.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),l=new r.VertexArrayObject(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:u}),c=t.vec3f64.fromValues(5633261.287538229,2626832.878767164,1434988.0495278358),f=t.vec3f64.fromValues(5633271.46742708,2626873.6381334523,1434963.231608387);e.bindFramebuffer(o);var d=function(o,t){var a=s.util["doublePrecision.glsl"],u=n?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":"",l="\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  "+u+"\n\n  "+a+"\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ",c=new r.Program(e,l,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),f=new Float32Array(6);i.encodeDoubleArray(o,f,3);var d=new Float32Array(6);return i.encodeDoubleArray(t,d,3),e.bindProgram(c),c.setUniform3f("u_highA",f[0],f[2],f[4]),c.setUniform3f("u_lowA",f[1],f[3],f[5]),c.setUniform3f("u_highB",d[0],d[2],d[4]),c.setUniform3f("u_lowB",d[1],d[3],d[5]),c}(c,f),p=e.getViewport(),v=p.x,h=p.y,_=p.width,b=p.height;e.setViewport(0,0,1,1),e.bindVAO(l),e.drawArrays(5,0,4),e.setViewport(v,h,_,b);var m=new Uint8Array(4);o.readPixels(0,0,1,1,6408,5121,m),d.dispose(),l.dispose(!1),u.dispose(),o.dispose();var g=(c[2]-f[2])/25,A=a.unpackFloatRGBA(m);return Math.abs(g-A)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e){this.context=e,this._doublePrecisionRequiresObfuscation=null}return Object.defineProperty(e.prototype,"doublePrecisionRequiresObfuscation",{get:function(){if(o.isNone(this._doublePrecisionRequiresObfuscation)){var e=l(this.context,!1),n=l(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===n||e/n>5)}return this._doublePrecisionRequiresObfuscation},enumerable:!0,configurable:!0}),e}(),f=null;n.testWebGLDriver=u});