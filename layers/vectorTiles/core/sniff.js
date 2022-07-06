// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","dojo/sniff","./global","../views/webgl/context-util"],(function(e,r,a,t,n){!function(){if(!a("host-node")){var e=navigator.userAgent,r=e.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i),s=e.match(/iPhone/i);r&&a.add("esri-mobile",r),s&&a.add("esri-iPhone",s),a.add("esri-phonegap",!!t.cordova),a.add("esri-cors",a("esri-phonegap")||"XMLHttpRequest"in t&&"withCredentials"in new XMLHttpRequest),a.add("esri-geolocation",(function(){return!!navigator.geolocation})),a.add("esri-canvas-svg-support",(function(){return!(a("trident")||a("ie"))})),a.add("esri-secure-context",(function(){return"isSecureContext"in t?t.isSecureContext:t.location&&t.location.origin?0===t.location.origin.indexOf("https:"):void 0})),a.add("esri-wasm","WebAssembly"in t),a("host-webworker")||(a.add("esri-workers","Worker"in t),a.add("esri-script-sandbox",(function(){return"MessageChannel"in t&&"HTMLIFrameElement"in t&&"sandbox"in HTMLIFrameElement.prototype})),a.add("esri-url-encodes-apostrophe",(function(){var e=t.document.createElement("a");return e.href="?'",e.href.indexOf("?%27")>-1})),i||(i=function(){var e={available:!1,version:0,majorPerformanceCaveat:!1,supportsHighPrecisionFragment:!1,supportsVertexShaderSamplers:!1,supportsElementIndexUint:!1,supportsStandardDerivatives:!1};if(void 0===typeof WebGLRenderingContext)return e;var r=document.createElement("canvas");if(!r)return e;var a=n.createContext(r,{failIfMajorPerformanceCaveat:!0},"webgl");a||(a=n.createContext(r,{},"webgl"))&&(e.majorPerformanceCaveat=!0);if(!a)return e;var t=a.getParameter(a.VERSION);if(!t)return e;var i=t.match(/^WebGL\s+([\d.]*)/);if(i){e.version=parseFloat(i[1]),e.available=e.version>=.94;var o=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT);e.supportsHighPrecisionFragment=o&&o.precision>0,e.supportsVertexShaderSamplers=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0,e.supportsElementIndexUint=null!==a.getExtension("OES_element_index_uint"),e.supportsStandardDerivatives=null!==a.getExtension("OES_standard_derivatives")}return e}()),a.add("esri-webgl",i.available),a.add("esri-webgl-high-precision-fragment",i.supportsHighPrecisionFragment),a.add("esri-webgl-vertex-shader-samplers",i.supportsVertexShaderSamplers),a.add("esri-webgl-element-index-uint",i.supportsElementIndexUint),a.add("esri-webgl-standard-derivatives",i.supportsStandardDerivatives),a.add("esri-webgl-major-performance-caveat",i.majorPerformanceCaveat),a.add("esri-featurelayer-webgl-labeling",!0),o||(o=function(){var e={available:!1,version:0};if(void 0===typeof WebGL2RenderingContext)return e;var r=document.createElement("canvas");if(!r)return e;var a=n.createContext(r,{},"webgl2");if(!a)return e;e.available=!0;var t=a.getParameter(a.VERSION);if(!t)return e;var i=t.match(/^WebGL\s+([\d.]*)/);i&&(e.version=parseFloat(i[1]));return e}()),a.add("esri-webgl2",o.available))}}();var i=null,o=null;return a}));