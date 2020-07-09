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

define(["require","exports","../../../../../core/Logger","../../../../../core/MapUtils","../../../../../core/SetUtils"],(function(e,t,n,r,i){Object.defineProperty(t,"__esModule",{value:!0});var o=n.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder"),s=function(){function e(){this.vertex=new c,this.fragment=new c,this.attributes=new d,this.varyings=new h,this.extensions=new f,this.defines=new p,this._includedModules=new Map}return e.prototype.include=function(e,t){this._includedModules.has(e)?this._includedModules.get(e)!==t&&o.error("Trying to include shader module multiple times with different sets of options."):(this._includedModules.set(e,t),"shaderModule"in e?e.shaderModule(this,t):e(this,t))},e.prototype.generateSource=function(e){var t=this.extensions.generateSource(e),n=this.attributes.generateSource(e),r=this.varyings.generateSource(),i="vertex"===e?this.vertex:this.fragment,o=i.uniforms.generateSource(),s=i.code.generateSource(),u="vertex"===e?g:_,a=this.defines.generateSource().concat(i.defines.generateSource());return"\n"+t.join("\n")+"\n\n"+a.join("\n")+"\n\n"+u+"\n\n"+o.join("\n")+"\n\n"+n.join("\n")+"\n\n"+r.join("\n")+"\n\n"+s.join("\n")},e}();t.ShaderBuilder=s;var u=function(){function e(){this._entries=new Array,this._set=new Set}return e.prototype.add=function(e,t,n){var r=e+"_"+t+"_"+n;return this._set.has(r)||(this._entries.push([e,t,n]),this._set.add(r)),this},e.prototype.generateSource=function(){return this._entries.map((function(e){return"uniform "+e[1]+" "+e[0]+((t=e[2])?"["+t+"]":"")+";";var t}))},e}(),a=function(){function e(){this._entries=new Array}return e.prototype.add=function(e){this._entries.push(e)},e.prototype.generateSource=function(){return this._entries},e}(),c=function(){this.uniforms=new u,this.code=new a,this.defines=new p},d=function(){function e(){this._entries=new Array}return e.prototype.add=function(e,t){this._entries.push([e,t])},e.prototype.generateSource=function(e){return"fragment"===e?[]:this._entries.map((function(e){return"attribute "+e[1]+" "+e[0]+";"}))},e}(),h=function(){function e(){this._entries=new Array}return e.prototype.add=function(e,t){this._entries.push([e,t])},e.prototype.generateSource=function(){return this._entries.map((function(e){return"varying "+e[1]+" "+e[0]+";"}))},e}(),f=function(){function e(){this._entries=new Set}return e.prototype.add=function(e){this._entries.add(e)},e.prototype.generateSource=function(t){var n="vertex"===t?e.WHITELIST_VERTEX:e.WHITELIST_FRAGMENT;return i.valuesOfSet(this._entries).filter((function(e){return n.indexOf(e)>=0})).map((function(e){return"#extension "+e+" : enable"}))},e.WHITELIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],e.WHITELIST_VERTEX=[],e}(),p=function(){function e(){this._entries=new Map}return e.prototype.addInt=function(e,t){var n=t%1==0?t.toFixed(0):t.toString();this._entries.set(e,n)},e.prototype.addFloat=function(e,t){var n=t%1==0?t.toFixed(1):t.toString();this._entries.set(e,n)},e.prototype.generateSource=function(){return r.pairsOfMap(this._entries).map((function(e){return"#define "+e[0]+" "+e[1]}))},e}(),_="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",g="precision highp float;\nprecision highp sampler2D;"}));