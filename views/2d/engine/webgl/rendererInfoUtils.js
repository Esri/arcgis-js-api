// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../support/arcadeUtils","../../../../arcade/Feature","./visualVariablesUtils"],function(e,r,n,t,i,u){function a(e,r){var n=l(e,r)||{renderer:null,normalizingFunctions:null,getSymbolFunction:null},t=n&&n.normalizingFunctions,i=n&&n.getSymbolFunction;e=n&&n.renderer||e;var a=null;if("heatmap"===e.type){var o=e.field,s=e.offset,f=Math.round(e.blurRadius),c=9*f+1;a={getIntensity:function(e){if("function"==typeof e)return e;if(e){if("abs"===s)return function(r){return Math.abs(r.attributes[e])};var r=s;return function(n){return n.attributes[e]+r}}return function(e){return 1}}(o),kernelSize:c,radius:e.blurRadius}}var v=u.convertVisualVariables(e.visualVariables),d=v.vvFields,b=v.vvRanges;return{renderer:e,vvFields:d,vvRanges:b,heatmapInfo:a,getValue:function(e,r){var n=t[r];return n?n(e):e.attributes[r]},getSymbol:function(e){return i?i(this.renderer,e):this.renderer.getSymbol?this.renderer.getSymbol(e):null}}}function l(e,r){if(!e)return null;var i=0,u={},a=e.clone(),l=a.field,o=a.valueExpression,f=a.visualVariables,c=null;if(!l&&o){var v="$$fake"+i++,d=t.createFunction(o);u[v]=function(e,n){return s.attributes=e.attributes,t.executeFunction(d,{vars:{$feature:s,$view:t.getViewInfo(n)},spatialReference:r})},a.field=v,a.valueExpression=null,c=function(e,r){return r.attributes[v]=u[v](r),e.getSymbol(r)}}return f&&(a.visualVariables=f.map(function(e){if(e.normalizationField){var a=e.field,l=e.normalizationField,o="$$fake"+i++;u[o]=function(e,r){return e.attributes[a]/e.attributes[l]};var f=n({},e);return f.field=o,delete f.normalizationField,f}if(e.valueExpression&&"$view.scale"!==e.valueExpression){var c=e.valueExpression,o="$$fake"+i++,v=t.createFunction(c);u[o]=function(e,n){return s.attributes=e.attributes,t.executeFunction(v,{vars:{$feature:s,$view:t.getViewInfo(n)},spatialReference:r})};var f=n({},e);return f.field=o,delete f.valueExpression,f}return e})),{renderer:a,normalizingFunctions:u,getSymbolFunction:c}}function o(e,r){return e.getSymbol(r)}Object.defineProperty(r,"__esModule",{value:!0});var s=new i(null);r.createRendererInfo=a,r.getSymbol=o});