// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","dojo/sniff","./global","../views/webgl/context-util"],function(e,r,t,a,n){function i(){if(o)return o;if(o={available:!1,version:0,majorPerformanceCaveat:!1,supportsHighPrecisionFragment:!1,supportsVertexShaderSamplers:!1,supportsElementIndexUint:!1,supportsStandardDerivatives:!1,supportsInstancedArrays:!1,supportsTextureFloat:!1,maxTextureSize:0},void 0===typeof WebGLRenderingContext)return o;var e=document.createElement("canvas");if(!e)return o;var r=n.createContext(e,{failIfMajorPerformanceCaveat:!0},"webgl");if(r||(r=n.createContext(e,{},"webgl"))&&(o.majorPerformanceCaveat=!0),!r)return o;var t=r.getParameter(r.VERSION);if(!t)return o;var a=t.match(/^WebGL\s+([\d.]*)/);if(a){o.version=parseFloat(a[1]),o.available=o.version>=.94;var i=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT);i&&(o.supportsHighPrecisionFragment=i.precision>0),o.supportsVertexShaderSamplers=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0,o.supportsElementIndexUint=null!==r.getExtension("OES_element_index_uint"),o.supportsStandardDerivatives=null!==r.getExtension("OES_standard_derivatives"),o.supportsInstancedArrays=null!==r.getExtension("ANGLE_instanced_arrays"),o.supportsTextureFloat=null!==r.getExtension("OES_texture_float")}return o.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),o}function s(){if(d)return d;if(d={available:!1,version:0},void 0===typeof WebGL2RenderingContext)return d;var e=document.createElement("canvas");if(!e)return d;var r=n.createContext(e,{},"webgl2");if(!r)return d;d.available=!0;var t=r.getParameter(r.VERSION);if(!t)return d;var a=t.match(/^WebGL\s+([\d.]*)/);return a&&(d.version=parseFloat(a[1])),d}!function(){if(!t("host-node")){var e=navigator.userAgent,r=e.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i),n=e.match(/iPhone/i);r&&t.add("esri-mobile",r),n&&t.add("esri-iPhone",n),t.add("esri-geolocation",function(){return!!navigator.geolocation}),t.add("esri-canvas-svg-support",function(){return!(t("trident")||t("ie"))}),t.add("esri-secure-context",function(){return"isSecureContext"in a?a.isSecureContext:a.location&&a.location.origin?0===a.location.origin.indexOf("https:"):void 0}),t.add("esri-wasm","WebAssembly"in a),t.add("esri-shared-array-buffer","SharedArrayBuffer"in a),t.add("esri-workers","Worker"in a),t("host-webworker")||(t.add("esri-abortable-fetch","fetch"in a&&"signal"in new Request("https://www.arcgis.com")),t.add("esri-image-decode",function(){if(!("decode"in new Image))return!1;var e=new Image;e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',e.decode().then(function(){t.add("esri-image-decode",!0,!0,!0)}).catch(function(){t.add("esri-image-decode",!1,!0,!0)})}),t.add("esri-url-encodes-apostrophe",function(){var e=a.document.createElement("a");return e.href="?'",e.href.indexOf("?%27")>-1}),t.add("esri-webgl",function(){return i().available}),t.add("esri-webgl-high-precision-fragment",function(){return i().supportsHighPrecisionFragment}),t.add("esri-webgl-vertex-shader-samplers",function(){return i().supportsVertexShaderSamplers}),t.add("esri-webgl-element-index-uint",function(){return i().supportsElementIndexUint}),t.add("esri-webgl-standard-derivatives",function(){return i().supportsStandardDerivatives}),t.add("esri-webgl-texture-float",function(){return i().supportsTextureFloat}),t.add("esri-webgl-instanced-arrays",function(){return i().supportsInstancedArrays}),t.add("esri-webgl-major-performance-caveat",function(){return i().majorPerformanceCaveat}),t.add("esri-featurelayer-webgl",!0),t.add("esri-featurelayer-webgl-labeling",!0),t.add("esri-webgl2",function(){return s().available}),t.add("esri-webgl-max-texture-size",function(){return i().maxTextureSize}))}}();var o=null,d=null;return t});