// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang"],(function(t){var e={findNonEmptySample:function(t){return t?t.isSiteAttribute?(t.attribute.domain&&t.attribute.domain.codedValues&&t.attribute.domain.codedValues.some((function(t){if(e._isNonEmptySample(t.name))return a=t.name,!0})),a):t.isDataLayerAttribute&&t.attribute.samples&&t.attribute.samples.length?(t.attribute.samples.some((function(t){if(e._isNonEmptySample(t))return a=t,!0})),a):null:null;var a},getNonEmptySamples:function(t){if(!t)return null;if(t.isSiteAttribute){if(t.attribute.domain&&t.attribute.domain.codedValues)return t.attribute.domain.codedValues.map((function(t){return t.name})).filter(e._isNonEmptySample)}else if(t.isDataLayerAttribute&&t.attribute.samples&&t.attribute.samples.length)return t.attribute.samples.filter(e._isNonEmptySample);return null},_isNonEmptySample:function(t){return"string"==typeof t?!!t.trim():!!t},provideSamplesFromLocatorSettings:function(a,r){a&&a.isDataLayerAttribute&&r&&r.searchText&&(a.attribute=t.clone(a.attribute),a.attribute.samples=e.getSamplesFromSearchText(r,20)||a.attribute.samples)},getSamplesFromSearchText:function(t,e){if(!t||!t.searchText)return null;for(var a=[],r=t.searchText.charAt(0).toUpperCase()+t.searchText.substr(1),i=0;i<e;i++)a.push(r+" "+(i+1));return a}};return e}));