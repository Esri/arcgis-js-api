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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

!function(){var e,r,t=(e=function(){try{return window.WebGLRenderingContext}catch(e){return!1}}(),r=function(){try{for(var e=document.createElement("canvas"),r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],t=null,n=0;n<r.length;++n){try{t=e.getContext(r[n])}catch(e){}if(t)break}return t}catch(e){return!1}}(),!!e&&!!r),n=["dojo/_base/lang","dojo/has","dojo/Deferred","../sniff","./layer"];t&&n.push("./VectorTileLayerImpl"),define(n,(function(e,r,n,o,a,c){var i;return(i=c||a.createSubclass({declaredClass:"esri.layers.VectorTileLayer",constructor:function(){var r=new n;r.reject(new Error("esri.layers.VectorTileLayer is not supported")),r.promise.otherwise(e.hitch(this,(function(e){this._errorHandler(e)})))}})).ACCESS_TOKEN=null,i.supported=function(){return t},r("extend-esri")&&e.setObject("layers.VectorTileLayer",i,o),i}))}();