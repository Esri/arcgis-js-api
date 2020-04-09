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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../../kernel"],(function(e,t,n,r){var o=!1,a=n("esri-webgl-max-contexts");a=null!=a?a:n("esri-mobile")?8:16;var s={isWebGLSupported:function(){return!!o},isWebGLEnabled:function(){return this.isWebGLSupported()&&!!n("esri-featurelayer-webgl")},createCanvas:function(e,t){var n=document.createElement("canvas");return n.style.width=e+"px",n.style.height=t+"px",n},createWebGLContext:function(e){var n;return t.some(["webgl","experimental-webgl","webkit-3d","moz-webgl"],(function(t){try{n=e.getContext?e.getContext(t):null}catch(e){n=null}return!!n})),n},_contextOwners:[],isContextAvailable:function(){return-1===a||a>0&&s._contextOwners.length<a},acquireContext:function(e){return-1!==t.indexOf(s._contextOwners,e)||!!s.isContextAvailable()&&(s._contextOwners.push(e),!0)},releaseContext:function(e){var n=t.indexOf(s._contextOwners,e);-1!==n&&s._contextOwners.splice(n,1)}};return o=s.createWebGLContext(s.createCanvas()),n("extend-esri")&&e.setObject("layers.support.webglUtils",s,r),s}));