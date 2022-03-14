// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define([],(function(){var e='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',t='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>',r=function(e){return{VERSION:e.getParameter(e.VERSION),SHADING_LANGUAGE_VERSION:e.getParameter(e.SHADING_LANGUAGE_VERSION),VENDOR:e.getParameter(e.VENDOR),RENDERER:e.getParameter(e.RENDERER),EXTENSIONS:e.getSupportedExtensions(),MAX_TEXTURE_SIZE:e.getParameter(e.MAX_TEXTURE_SIZE),MAX_RENDERBUFFER_SIZE:e.getParameter(e.MAX_RENDERBUFFER_SIZE),MAX_VERTEX_TEXTURE_IMAGE_UNITS:e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)}},n=function(e,t){for(var r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],n=null,a=0;a<r.length;++a){try{n=e.getContext(r[a],t)}catch(e){}if(n)break}return n};return{create3DContext:n,setupWebGL:function(r,a){function E(e){var t=r.parentNode;t&&(t.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+e+"</div></div></td></tr></table>")}if(!window.WebGLRenderingContext)return E(e),[null,e];var o=n(r,a);return o?[o]:(E(t),[null,t])},detectWebGL:function(){var e=function(){try{return window.WebGLRenderingContext}catch(e){return[!1,0]}}(),t=function(){try{return n(document.createElement("canvas"))}catch(e){return[!1,1]}}();return e?t?[!0,r(t)]:[!1,1]:[!1,0]}}}));