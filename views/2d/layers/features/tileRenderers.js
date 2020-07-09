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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","@dojo/framework/shim/Promise"],(function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0}),r.createOrReuseTileRenderer=function(r,t){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){switch(n.label){case 0:if(!r)return[2,null];switch(r.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return[3,1];case"heatmap":return[3,3]}return[3,5];case 1:return[4,new Promise((function(r,n){e(["./tileRenderers/SymbolTileRenderer"],r,n)}))];case 2:return[2,new(n.sent().default)(t)];case 3:return[4,new Promise((function(r,n){e(["./tileRenderers/HeatmapTileRenderer"],r,n)}))];case 4:return[2,new(n.sent().default)(t)];case 5:return[2]}}))}))}}));