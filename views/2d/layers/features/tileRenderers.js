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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../../../core/nextTick","../../../../core/promiseUtils","../../engine/webgl/rendererInfoUtils"],function(e,r,n,t,i,u){function a(r,a,c){if(r&&r.supportsRenderer(a))return i.create(function(e){return t(function(){return e(r)})});var o=c.layer,s=n("esri-webgl")&&n("esri-featurelayer-webgl")&&u.isRendererWebGLCompatible(a)&&o.capabilities.query.supportsQuantization;switch(a.type){case"class-breaks":case"simple":case"unique-value":if(s)return i.create(function(r){t(function(){return e(["./tileRenderers/SymbolTileRenderer"],r)})}).then(function(e){return e.default}).then(function(e){return new e(c)});break;case"heatmap":return i.create(function(r){t(function(){return e(["./tileRenderers/HeatmapTileRenderer"],r)})}).then(function(e){return e.default}).then(function(e){return new e(c)})}return i.resolve(null)}Object.defineProperty(r,"__esModule",{value:!0}),r.createOrReuseTileRenderer=a});