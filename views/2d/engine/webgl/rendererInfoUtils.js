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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../support/arcadeUtils","../../../../arcade/Feature","./visualVariablesUtils"],function(e,r,n,t,i,u){function a(e,r){var n=o(e,r)||{renderer:null,normalizingFunctions:null,getSymbolFunction:null},t=n&&n.normalizingFunctions,i=n&&n.getSymbolFunction;e=n&&n.renderer||e;var a=null;if("heatmap"===e.type){var l=e.field,s=e.offset,f=Math.round(e.blurRadius),c=9*f+1;a={getIntensity:function(e){if("function"==typeof e)return e;if(e){if("abs"===s)return function(r){return Math.abs(r.attributes[e])};var r=s;return function(n){return n.attributes[e]+r}}return function(e){return 1}}(l),kernelSize:c,radius:e.blurRadius}}var v=u.convertVisualVariables(e.visualVariables),d=v.vvFields,b=v.vvRanges;return{renderer:e,vvFields:d,vvRanges:b,heatmapInfo:a,getValue:function(e,r){var n=t[r];return n?n(e):e.attributes[r]},getSymbol:function(e){return i?i(this.renderer,e):this.renderer.getSymbol?this.renderer.getSymbol(e):null}}}function l(e,r){var n=o(e,r)||{renderer:null,normalizingFunctions:null,getSymbolFunction:null};return n&&n.renderer||e}function o(e,r){if(!e)return null;var u=0,a={},l=e.clone(),o=l.field,s=l.valueExpression,c=l.visualVariables,v=null;if(!o&&s){f||(f=new i(null));var d="$$fake"+u++,b=t.createFunction(s);a[d]=function(e,n){return f.attributes=e.attributes,t.executeFunction(b,{vars:{$feature:f,$view:t.getViewInfo(n)},spatialReference:r})},l.field=d,l.valueExpression=null,v=function(e,r){return r.attributes[d]=a[d](r),e.getSymbol(r)}}return c&&(l.visualVariables=c.map(function(e){if(e.normalizationField){var l=e.field,o=e.normalizationField,s="$$fake"+u++;a[s]=function(e,r){return e.attributes[l]/e.attributes[o]};var c=n({},e);return c.field=s,delete c.normalizationField,c}if(e.valueExpression&&"$view.scale"!==e.valueExpression){var v=e.valueExpression,s="$$fake"+u++,d=t.createFunction(v);f||(f=new i(null)),a[s]=function(e,n){return f.attributes=e.attributes,t.executeFunction(d,{vars:{$feature:f,$view:t.getViewInfo(n)},spatialReference:r})};var c=n({},e);return c.field=s,delete c.valueExpression,c}return e})),{renderer:l,normalizingFunctions:a,getSymbolFunction:v}}function s(e,r){return e.getSymbol(r)}Object.defineProperty(r,"__esModule",{value:!0});var f;r.createRendererInfo=a,r.getNormalizedRenderer=l,r.getSymbol=s});