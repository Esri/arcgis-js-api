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

define(["./AreaDataUtil","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","./tasks/parsers/FeatureSetParser"],function(e,a,A){return{addFeatureAttributesCalculator:function(A,t,r){for(var E in A.attributes){var T=E;e.setAreaDataObjectValue(T,A.attributes[E],t,r||a.AREA_ATTRIBUTES_CALCULATOR_NAME)}},addAreaInfoCalculator:function(A,t){e.setAreaDataObjectValue("SITE_NAME",A.locationName||A.name,t,a.AREA_ATTRIBUTES_CALCULATOR_NAME),e.setAreaDataObjectValue("STORE_NAME",A.locationName||A.name,t,a.AREA_ATTRIBUTES_CALCULATOR_NAME),e.setAreaDataObjectValue("AREA_DESC",A.shortName||A.name,t,a.AREA_ATTRIBUTES_CALCULATOR_NAME),e.setAreaDataObjectValue("AREA_DESC2",A.description||A.name,t,a.AREA_ATTRIBUTES_CALCULATOR_NAME),e.setAreaDataObjectValue("AREA_DESC3",A.description||A.name,t,a.AREA_ATTRIBUTES_CALCULATOR_NAME),e.setAreaDataObjectValue("STORE_ADDR",A.address||"",t,a.AREA_ATTRIBUTES_CALCULATOR_NAME),e.setAreaDataObjectValue("STORE_LAT",A.latitude||"",t,a.AREA_ATTRIBUTES_CALCULATOR_NAME),e.setAreaDataObjectValue("STORE_LONG",A.longitude||"",t,a.AREA_ATTRIBUTES_CALCULATOR_NAME)},addEnrichFeatures:function(t,r,E,T){var _={},R={};for(var s in r)_[s.toLowerCase()]=r[s],R[s.toUpperCase()]=r[s];var n=A.parse(t,E||a.ENRICHED_DATA_NO_LEVELS,function(e){return r[e]||_[e.toLowerCase()]||R[e.toUpperCase()]});e.mergeAreaData(n,T)}}});