// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../layers/FeatureLayer","./adapters/FeatureLayerAdapter","../../../layers/SceneLayer","./adapters/SceneLayerAdapter","./adapters/LayerAdapter","../../support/arcadeUtils"],function(e,r,a,t,n,s,i,u){function d(e){if(e instanceof i)return e;var u=r.supportedLayerTypes.some(function(r){return e.declaredClass.toLowerCase()==="esri.layers."+r.toLowerCase()});return u?e.isInstanceOf(a)?new t({layer:e}):e.isInstanceOf(n)?new s({layer:e}):void 0:null}function l(e){var r=e.field,a=e.normalizationField,t=e.valueExpression,n=[];return t&&(n=u.extractFieldNames(t)),r&&n.push(r),a&&n.push(a),n}function o(e){var r=e.layer;return e.fields.filter(function(e){return!r.getField(e)})}r.supportedLayerTypes=["FeatureLayer","SceneLayer"],r.createLayerAdapter=d,r.getFieldsList=l,r.getUnknownFields=o});