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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","./reservedWordsGLSL3","./lib/glsl-tokenizer/string"],function(e,t,a,r){function n(e){return r(e)}function i(e){return e.map(function(e){return"eof"!==e.type?e.data:""}).join("")}function o(e,t,a){void 0===t&&(t="100"),void 0===a&&(a="300 es");for(var r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/,n=0,i=e;n<i.length;n++){var o=i[n];if("preprocessor"===o.type){var d=r.exec(o.data);if(d){var s=d[1].replace(/\s\s+/g," ");if(s===a)return s;if(s===t)return o.data="#version "+a,t;throw new Error("unknown glsl version: "+s)}}}return e.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"}),null}function d(e,t){for(var a=t-1;a>=0;a--){var r=e[a];if("whitespace"!==r.type&&"block-comment"!==r.type){if("keyword"!==r.type)break;if("attribute"===r.data||"in"===r.data)return!0}}return!1}function s(e,t,a,r){r=r||a;for(var n=0,i=e;n<i.length;n++){var o=i[n];if("ident"===o.type&&o.data===a){r in t?t[r]++:t[r]=0;return s(e,t,r+"_"+t[r],r)}}return a}function f(e,t,a){function r(e,t){for(var a=t;a<e.length;a++){var r=e[a];if("operator"===r.type&&";"===r.data)return a}return null}void 0===a&&(a="afterVersion");var n={data:"\n",type:"whitespace"},i=function(t){return t<e.length&&/[^\r\n]$/.test(e[t].data)},o=function(e){for(var t=-1,n=0,i=-1,o=0;o<e.length;o++){var d=e[o];if("preprocessor"===d.type&&(d.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:d.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==a&&"afterPrecision"!==a||"preprocessor"===d.type&&/^#version/.test(d.data)&&(i=Math.max(i,o)),"afterPrecision"===a&&"keyword"===d.type&&"precision"===d.data){var s=r(e,o);if(null===s)throw new Error("precision statement not followed by any semicolons!");i=Math.max(i,s)}t<i&&0===n&&(t=o)}return t+1}(e);i(o-1)&&e.splice(o++,0,n);for(var d=0,s=t;d<s.length;d++){var f=s[d];e.splice(o++,0,f)}i(o-1)&&i(o)&&e.splice(o,0,n)}function p(e,t,a,r){void 0===r&&(r="lowp"),f(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function c(e,t){var r=n(e);if("300 es"===o(r,"100","300 es"))throw new Error("shader is already glsl 300 es");for(var f=null,c=null,u={},v={},h=0;h<r.length;++h){var y=r[h];switch(y.type){case"keyword":"vertex"===t&&"attribute"===y.data?y.data="in":"varying"===y.data&&(y.data="vertex"===t?"out":"in");break;case"builtin":/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(y.data.trim())&&(y.data=y.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===t&&"gl_FragColor"===y.data?(f||(f=s(r,u,"fragColor"),p(r,f,"vec4")),y.data=f):"fragment"===t&&"gl_FragDepthEXT"===y.data&&(c||(c=s(r,u,"gl_FragDepth")),y.data=c);break;case"ident":if(a.indexOf(y.data)>=0){if("vertex"===t&&d(r,h))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");y.data in v||(v[y.data]=s(r,u,y.data)),y.data=v[y.data]}}}for(var h=r.length-1;h>=0;--h){var y=r[h];if("preprocessor"===y.type){var w=y.data.match(/\#extension\s+(.*)\:/);if(w&&w[1]&&l.indexOf(w[1].trim())>=0){var g=r[h+1];r.splice(h,g&&"whitespace"===g.type?2:1)}var m=y.data.match(/\#ifdef\s+(.*)/);m&&m[1]&&l.indexOf(m[1].trim())>=0&&(y.data="#if 1");var _=y.data.match(/\#ifndef\s+(.*)/);_&&_[1]&&l.indexOf(_[1].trim())>=0&&(y.data="#if 0")}}return i(r)}Object.defineProperty(t,"__esModule",{value:!0});var l=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];t.transpileShader=c});