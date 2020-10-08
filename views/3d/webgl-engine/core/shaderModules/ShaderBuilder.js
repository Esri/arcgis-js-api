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

define(["require","exports","tslib","../../../../../core/Logger","../../../../../core/MapUtils","../../../../../core/SetUtils"],(function(e,n,t,r,i,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Stage=n.Code=n.ShaderBuilder=n.Includes=void 0;var u=r.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder"),s=function(){function e(){this.includedModules=new Map}return e.prototype.include=function(e,n){this.includedModules.has(e)?this.includedModules.get(e)!==n&&u.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,n),e(this.builder,n))},e}();n.Includes=s;var a=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.vertex=new p,n.fragment=new p,n.attributes=new f,n.varyings=new h,n.extensions=new l,n.defines=new _,n}return t.__extends(n,e),Object.defineProperty(n.prototype,"builder",{get:function(){return this},enumerable:!1,configurable:!0}),n.prototype.generateSource=function(e){var n=this.extensions.generateSource(e),t=this.attributes.generateSource(e),r=this.varyings.generateSource(),i="vertex"===e?this.vertex:this.fragment,o=i.uniforms.generateSource(),u=i.code.generateSource(),s="vertex"===e?y:g,a=this.defines.generateSource().concat(i.defines.generateSource());return"\n"+n.join("\n")+"\n\n"+a.join("\n")+"\n\n"+s+"\n\n"+o.join("\n")+"\n\n"+t.join("\n")+"\n\n"+r.join("\n")+"\n\n"+u.join("\n")},n}(s);n.ShaderBuilder=a;var c=function(){function e(){this._entries=new Array,this._set=new Set}return e.prototype.add=function(e,n,t){var r=e+"_"+n+"_"+t;return this._set.has(r)||(this._entries.push([e,n,t]),this._set.add(r)),this},e.prototype.generateSource=function(){return this._entries.map((function(e){return"uniform "+e[1]+" "+e[0]+((n=e[2])?"["+n+"]":"")+";";var n}))},e}(),d=function(){function e(){this._entries=new Array}return e.prototype.add=function(e){this._entries.push(e)},e.prototype.generateSource=function(){return this._entries},e}();n.Code=d;var p=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.uniforms=new c,n.code=new d,n.defines=new _,n}return t.__extends(n,e),Object.defineProperty(n.prototype,"builder",{get:function(){return this},enumerable:!1,configurable:!0}),n}(s);n.Stage=p;var f=function(){function e(){this._entries=new Array}return e.prototype.add=function(e,n){this._entries.push([e,n])},e.prototype.generateSource=function(e){return"fragment"===e?[]:this._entries.map((function(e){return"attribute "+e[1]+" "+e[0]+";"}))},e}(),h=function(){function e(){this._entries=new Array}return e.prototype.add=function(e,n){this._entries.push([e,n])},e.prototype.generateSource=function(){return this._entries.map((function(e){return"varying "+e[1]+" "+e[0]+";"}))},e}(),l=function(){function e(){this._entries=new Set}return e.prototype.add=function(e){this._entries.add(e)},e.prototype.generateSource=function(n){var t="vertex"===n?e.ALLOWLIST_VERTEX:e.ALLOWLIST_FRAGMENT;return o.valuesOfSet(this._entries).filter((function(e){return t.indexOf(e)>=0})).map((function(e){return"#extension "+e+" : enable"}))},e.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],e.ALLOWLIST_VERTEX=[],e}(),_=function(){function e(){this._entries=new Map}return e.prototype.addInt=function(e,n){var t=n%1==0?n.toFixed(0):n.toString();this._entries.set(e,t)},e.prototype.addFloat=function(e,n){var t=n%1==0?n.toFixed(1):n.toString();this._entries.set(e,t)},e.prototype.generateSource=function(){return i.pairsOfMap(this._entries).map((function(e){return"#define "+e[0]+" "+e[1]}))},e}(),g="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",y="precision highp float;\nprecision highp sampler2D;"}));