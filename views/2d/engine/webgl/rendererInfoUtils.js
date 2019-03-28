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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../Graphic","../../../../arcade/Feature","../../../../support/arcadeUtils","./enums","./visualVariablesUtils"],function(e,r,n,v,i,p,t,u){Object.defineProperty(r,"__esModule",{value:!0});var b=new i;function s(e,s,o){if(!e)return null;var c=0,f={},r=e.clone(),n=r.visualVariables,i=null;if("simple"!==r.type&&"dot-density"!==r.type){var t=r.field,a=r.valueExpression;if(!t&&a){var l="$$fake"+c++,u=p.createFunction(a);f[l]=function(e,r){return b.repurposeFromGraphicLikeObject(e.geometry,e.attributes,o),p.executeFunction(u,{vars:{$feature:b,$view:p.getViewInfo(r)},spatialReference:s})},r.field=l,r.valueExpression=null,i=function(e,r){return r.attributes[l]=f[l](r),e.valueExpression?e.getSymbol(v.fromJSON(r)):e.getSymbol(r)}}}return n&&(r.visualVariables=n.map(function(e){var r="size"===e.type&&e.valueExpression&&"$view.scale"===e.valueExpression;if(e.normalizationField){var n=e.field,i=e.normalizationField,t="$$fake"+c++;return f[t]=function(e,r){return e.attributes[n]/e.attributes[i]},(a=e.clone()).field=t,a.normalizationField=null,a}if(!e.valueExpression||r)return e;var a,l=e.valueExpression,u=(t="$$fake"+c++,p.createFunction(l));return f[t]=function(e,r){return b.repurposeFromGraphicLikeObject(e.geometry,e.attributes,o),p.executeFunction(u,{vars:{$feature:b,$view:p.getViewInfo(r)},spatialReference:s})},(a=e.clone()).field=t,a.valueExpression=null,a})),{renderer:r,normalizingFunctions:f,getSymbolFunction:i}}r.createRendererInfo=function(e,r,n){var i=s(e,r,n)||{renderer:null,normalizingFunctions:null,getSymbolFunction:null},t=i&&i.normalizingFunctions,a=i&&i.getSymbolFunction;e=i&&i.renderer||e;var l=u.convertVisualVariables(e.visualVariables);return{renderer:e,vvFields:l.vvFields,vvRanges:l.vvRanges,getValue:function(e,r){var n=t[r];return n?n(e):e.attributes[r]},getSymbol:function(e){return a?a(this.renderer,e):this.renderer.getSymbol?this.renderer.getSymbol.call(this.renderer,e):null}}},r.getNormalizedRenderer=function(e,r,n){var i=s(e,r,n)||{renderer:null,normalizingFunctions:null,getSymbolFunction:null};return i&&i.renderer||e},r.getSymbol=function(e,r){return e.getSymbol(r)},r.isRendererWebGLCompatible=function(e){if(!e)return!1;if(-1===["simple","class-breaks","unique-value","heatmap"].indexOf(e.type))return!1;if("visualVariables"in e&&e.visualVariables)for(var r=0,n=e.visualVariables;r<n.length;r++){var i=n[r];switch(i.type){case"color":case"opacity":if(i.stops&&8<i.stops.length)return!1;break;case"size":if(u.getTypeOfSizeVisualVariable(i)===t.WGLVVFlag.SIZE_FIELD_STOPS&&i.stops&&6<i.stops.length)return!1}}return!0}});