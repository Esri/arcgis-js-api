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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../Graphic","../../../../arcade/Feature","../../../../support/arcadeUtils","./enums","./visualVariablesUtils"],(function(e,r,n,t,i,a,l,u){Object.defineProperty(r,"__esModule",{value:!0});var s=new i;function o(e,r,i){if(!e)return null;var l=0,u={},o=e.clone(),c=o.visualVariables,f=null;if("simple"!==o.type){var v=o.field,p=o.valueExpression;if(!v&&p){var b="$$fake"+l++,d=a.createFunction(p);u[b]=function(e,n){return s.repurposeFromGraphicLikeObject(e.geometry,e.attributes,i),a.executeFunction(d,{vars:{$feature:s,$view:a.getViewInfo(n)},spatialReference:r})},o.field=b,o.valueExpression=null,f=function(e,r){return r.attributes[b]=u[b](r),e.valueExpression?e.getSymbol(t.fromJSON(r)):e.getSymbol(r)}}}return c&&(o.visualVariables=c.map((function(e){if(e.normalizationField){var t=e.field,o=e.normalizationField,c="$$fake"+l++;return u[c]=function(e,r){return e.attributes[t]/e.attributes[o]},(f=n({},e)).field=c,delete f.normalizationField,f}if(e.valueExpression&&"$view.scale"!==e.valueExpression){var f,v=e.valueExpression,p=(c="$$fake"+l++,a.createFunction(v));return u[c]=function(e,n){return s.repurposeFromGraphicLikeObject(e.geometry,e.attributes,i),a.executeFunction(p,{vars:{$feature:s,$view:a.getViewInfo(n)},spatialReference:r})},(f=n({},e)).field=c,delete f.valueExpression,f}return e}))),{renderer:o,normalizingFunctions:u,getSymbolFunction:f}}r.createRendererInfo=function(e,r,n){var t=o(e,r,n)||{renderer:null,normalizingFunctions:null,getSymbolFunction:null},i=t&&t.normalizingFunctions,a=t&&t.getSymbolFunction;e=t&&t.renderer||e;var l=u.convertVisualVariables(e.visualVariables);return{renderer:e,vvFields:l.vvFields,vvRanges:l.vvRanges,getValue:function(e,r){var n=i[r];return n?n(e):e.attributes[r]},getSymbol:function(e){return a?a(this.renderer,e):this.renderer.getSymbol?this.renderer.getSymbol.call(this.renderer,e):null}}},r.getNormalizedRenderer=function(e,r,n){var t=o(e,r,n)||{renderer:null,normalizingFunctions:null,getSymbolFunction:null};return t&&t.renderer||e},r.getSymbol=function(e,r){return e.getSymbol(r)},r.isRendererWebGLCompatible=function(e){if(!e)return!1;if(-1===["simple","class-breaks","unique-value","heatmap"].indexOf(e.type))return!1;if(e.visualVariables)for(var r=0,n=e.visualVariables;r<n.length;r++){var t=n[r];switch(t.type){case"color":case"opacity":if(t.stops&&t.stops.length>8)return!1;break;case"size":if(u.getTypeOfSizeVisualVariable(t)===l.WGLVVFlag.SIZE_FIELD_STOPS&&t.stops&&t.stops.length>6)return!1}}return!0}}));