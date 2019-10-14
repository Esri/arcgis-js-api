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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../Graphic","../../../../arcade/Feature","../../../../support/arcadeUtils","./enums","./visualVariablesUtils"],function(e,r,n,t,i,a,l,u){function s(e,r,n){var t=c(e,r,n)||{renderer:null,normalizingFunctions:null,getSymbolFunction:null},i=t&&t.normalizingFunctions,a=t&&t.getSymbolFunction;e=t&&t.renderer||e;var l=u.convertVisualVariables(e.visualVariables);return{renderer:e,vvFields:l.vvFields,vvRanges:l.vvRanges,getValue:function(e,r){var n=i[r];return n?n(e):e.attributes[r]},getSymbol:function(e){return a?a(this.renderer,e):this.renderer.getSymbol?this.renderer.getSymbol.call(this.renderer,e):null}}}function o(e,r,n){var t=c(e,r,n)||{renderer:null,normalizingFunctions:null,getSymbolFunction:null};return t&&t.renderer||e}function c(e,r,i){if(!e)return null;var l=0,u={},s=e.clone(),o=s.visualVariables,c=null;if("simple"!==s.type){var f=s.field,v=s.valueExpression;if(!f&&v){var b="$$fake"+l++,d=a.createFunction(v);u[b]=function(e,n){return p.repurposeFromGraphicLikeObject(e.geometry,e.attributes,i),a.executeFunction(d,{vars:{$feature:p,$view:a.getViewInfo(n)},spatialReference:r})},s.field=b,s.valueExpression=null,c=function(e,r){return r.attributes[b]=u[b](r),e.valueExpression?e.getSymbol(t.fromJSON(r)):e.getSymbol(r)}}}return o&&(s.visualVariables=o.map(function(e){if(e.normalizationField){var t=e.field,s=e.normalizationField,o="$$fake"+l++;u[o]=function(e,r){return e.attributes[t]/e.attributes[s]};var c=n({},e);return c.field=o,delete c.normalizationField,c}if(e.valueExpression&&"$view.scale"!==e.valueExpression){var f=e.valueExpression,o="$$fake"+l++,v=a.createFunction(f);u[o]=function(e,n){return p.repurposeFromGraphicLikeObject(e.geometry,e.attributes,i),a.executeFunction(v,{vars:{$feature:p,$view:a.getViewInfo(n)},spatialReference:r})};var c=n({},e);return c.field=o,delete c.valueExpression,c}return e})),{renderer:s,normalizingFunctions:u,getSymbolFunction:c}}function f(e,r){return e.getSymbol(r)}function v(e){if(!e)return!1;if(-1===["simple","class-breaks","unique-value","heatmap"].indexOf(e.type))return!1;if(e.visualVariables)for(var r=0,n=e.visualVariables;r<n.length;r++){var t=n[r];switch(t.type){case"color":case"opacity":if(t.stops&&t.stops.length>8)return!1;break;case"size":var i=u.getTypeOfSizeVisualVariable(t);if(i===l.WGLVVFlag.SIZE_FIELD_STOPS&&t.stops&&t.stops.length>6)return!1}}return!0}Object.defineProperty(r,"__esModule",{value:!0});var p=new i;r.createRendererInfo=s,r.getNormalizedRenderer=o,r.getSymbol=f,r.isRendererWebGLCompatible=v});