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

define(["require","exports","./adapters/CSVLayerAdapter","./adapters/FeatureLayerAdapter","./adapters/LayerAdapter","./adapters/PointCloudLayerAdapter","./adapters/SceneLayerAdapter","../../../support/arcadeUtils"],function(e,a,r,t,n,l,i,p){function o(e){return e.map(function(e){return c[e].label})}function d(e,a){if(e instanceof n)return e;var r=null;return a.some(function(a){var t=e.type===c[a].type;if(t){var n=c[a].adapter;r=new n({layer:e})}return t}),r}function u(e){var a=e.field,r=e.normalizationField,t=e.valueExpression,n=[];return t&&(n=p.extractFieldNames(t)),a&&n.push(a),r&&n.push(r),n}function y(e){var a=e.normalizationType;return a||(e.normalizationField?a=L:null!=e.normalizationTotal&&(a=f)),a}Object.defineProperty(a,"__esModule",{value:!0});var s,c=(s={},s[0]={adapter:r,type:"csv",label:"CSVLayer"},s[1]={adapter:t,type:"feature",label:"FeatureLayer"},s[2]={adapter:i,type:"scene",label:"SceneLayer"},s[3]={adapter:l,type:"point-cloud",label:"PointCloudLayer"},s),f="percent-of-total",L="field";a.getLayerTypeLabels=o,a.createLayerAdapter=d,a.getFieldsList=u,a.getNormalizationType=y});