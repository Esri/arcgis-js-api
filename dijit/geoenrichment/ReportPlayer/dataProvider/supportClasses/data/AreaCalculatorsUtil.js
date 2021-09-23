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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["./AreaDataUtil","../../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../tasks/parsers/FeatureSetParser"],(function(e,a,t){return{addFeatureAttributesCalculator:function(t,r,A){for(var s in A=A||a.AREA_ATTRIBUTES_CALCULATOR_NAME,t.attributes){var n=s;e.setAreaDataObjectValue(n,t.attributes[s],r,A)}},addAreaInfoCalculator:function(t,r,A){A=A||a.AREA_ATTRIBUTES_CALCULATOR_NAME,e.setAreaDataObjectValue("SITE_NAME",t.locationName||t.name,r,A),e.setAreaDataObjectValue("STORE_NAME",t.locationName||t.name,r,A),e.setAreaDataObjectValue("AREA_DESC",t.shortName||t.name,r,A),e.setAreaDataObjectValue("AREA_DESC2",t.description||t.name,r,A),e.setAreaDataObjectValue("AREA_DESC3",t.description||t.name,r,A),e.setAreaDataObjectValue("STORE_ADDR",t.address||"",r,A),e.setAreaDataObjectValue("STORE_LAT",t.latitude||"",r,A),e.setAreaDataObjectValue("STORE_LONG",t.longitude||"",r,A)},addEnrichFeatures:function(r,A,s,n){var o={},u={};for(var i in A)o[i.toLowerCase()]=A[i],u[i.toUpperCase()]=A[i];var l=t.parse(r,s||a.ENRICHED_DATA_NO_LEVELS,(function(e){return A[e]||o[e.toLowerCase()]||u[e.toUpperCase()]}));e.mergeAreaData(l,n)}}}));