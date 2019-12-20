// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/nextTick","../../../../core/promiseUtils"],function(e,n,r,t){function u(n,u){if(!n)return t.resolve(null);switch(n.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return t.create(function(n){r(function(){return e(["./tileRenderers/SymbolTileRenderer"],n)})}).then(function(e){return e.default}).then(function(e){return new e(u)});case"heatmap":return t.create(function(n){r(function(){return e(["./tileRenderers/HeatmapTileRenderer"],n)})}).then(function(e){return e.default}).then(function(e){return new e(u)})}return t.resolve(null)}Object.defineProperty(n,"__esModule",{value:!0}),n.createOrReuseTileRenderer=u});