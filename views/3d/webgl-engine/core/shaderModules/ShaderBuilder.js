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

define(["require","exports","../../../../../core/iteratorUtils","../../../../../core/Logger"],function(e,n,t,r){Object.defineProperty(n,"__esModule",{value:!0});var i=r.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder"),o=function(){function e(){this.vertex=new a,this.fragment=new a,this.attributes=new c,this.varyings=new d,this.extensions=new f,this.defines=new h,this._includedModules=new Map}return e.prototype.include=function(e,n){if(this._includedModules.has(e))return void(this._includedModules.get(e)!==n&&i.error("Trying to include shader module multiple times with different sets of options."));this._includedModules.set(e,n),"shaderModule"in e?e.shaderModule(this,n):e(this,n)},e.prototype.generateSource=function(e){var n=this.extensions.generateSource(e),t=this.attributes.generateSource(e),r=this.varyings.generateSource(),i="vertex"===e?this.vertex:this.fragment,o=i.uniforms.generateSource(),s=i.code.generateSource(),u="vertex"===e?_:p,a=this.defines.generateSource().concat(i.defines.generateSource());return"\n"+n.join("\n")+"\n\n"+a.join("\n")+"\n\n"+u+"\n\n"+o.join("\n")+"\n\n"+t.join("\n")+"\n\n"+r.join("\n")+"\n\n"+s.join("\n")},e}();n.ShaderBuilder=o;var s=function(){function e(){this._entries=new Array,this._set=new Set}return e.prototype.add=function(e,n,t){var r=e+"_"+n+"_"+t;return this._set.has(r)||(this._entries.push([e,n,t]),this._set.add(r)),this},e.prototype.generateSource=function(){var e=function(e){return e?"["+e+"]":""};return this._entries.map(function(n){return"uniform "+n[1]+" "+n[0]+e(n[2])+";"})},e}(),u=function(){function e(){this._entries=new Array}return e.prototype.add=function(e){this._entries.push(e)},e.prototype.generateSource=function(){return this._entries},e}(),a=function(){function e(){this.uniforms=new s,this.code=new u,this.defines=new h}return e}(),c=function(){function e(){this._entries=new Array}return e.prototype.add=function(e,n){this._entries.push([e,n])},e.prototype.generateSource=function(e){return"fragment"===e?[]:this._entries.map(function(e){return"attribute "+e[1]+" "+e[0]+";"})},e}(),d=function(){function e(){this._entries=new Array}return e.prototype.add=function(e,n){this._entries.push([e,n])},e.prototype.generateSource=function(){return this._entries.map(function(e){return"varying "+e[1]+" "+e[0]+";"})},e}(),f=function(){function e(){this._entries=new Set}return e.prototype.add=function(e){this._entries.add(e)},e.prototype.generateSource=function(n){var r="vertex"===n?e.WHITELIST_VERTEX:e.WHITELIST_FRAGMENT;return t.valuesOfSet(this._entries).filter(function(e){return r.indexOf(e)>=0}).map(function(e){return"#extension "+e+" : enable"})},e.WHITELIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],e.WHITELIST_VERTEX=[],e}(),h=function(){function e(){this._entries=new Map}return e.prototype.addInt=function(e,n){var t=n%1==0?n.toFixed(0):n.toString();this._entries.set(e,t)},e.prototype.addFloat=function(e,n){var t=n%1==0?n.toFixed(1):n.toString();this._entries.set(e,t)},e.prototype.generateSource=function(){return t.pairsOfMap(this._entries).map(function(e){return"#define "+e[0]+" "+e[1]})},e}(),p="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",_="precision highp float;\nprecision highp sampler2D;"});