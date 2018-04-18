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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../layers/CSVLayer","../../../layers/FeatureLayer","../../../layers/PointCloudLayer","../../../layers/SceneLayer","./adapters/CSVLayerAdapter","./adapters/FeatureLayerAdapter","./adapters/LayerAdapter","./adapters/PointCloudLayerAdapter","./adapters/SceneLayerAdapter","../../../support/arcadeUtils"],function(e,a,r,t,n,l,i,o,u,d,y,p){function s(e){return e.map(function(e){return v[e].label})}function c(e,a){if(e instanceof u)return e;var r=null;return a.some(function(a){var t=e.constructor===v[a].layer;if(t){var n=v[a].adapter;r=new n({layer:e})}return t}),r}function L(e){var a=e.field,r=e.normalizationField,t=e.valueExpression,n=[];return t&&(n=p.extractFieldNames(t)),a&&n.push(a),r&&n.push(r),n}function f(e){var a=e.normalizationType;return a||(e.normalizationField?a=b:null!=e.normalizationTotal&&(a=m)),a}Object.defineProperty(a,"__esModule",{value:!0});var v=(F={},F[0]={adapter:i,layer:r,label:"CSVLayer"},F[1]={adapter:o,layer:t,label:"FeatureLayer"},F[2]={adapter:y,layer:l,label:"SceneLayer"},F[3]={adapter:d,layer:n,label:"PointCloudLayer"},F),m="percent-of-total",b="field";a.getLayerTypeLabels=s,a.createLayerAdapter=c,a.getFieldsList=L,a.getNormalizationType=f;var F});