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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["./AreaDataUtil","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","./tasks/parsers/FeatureSetParser"],function(a,e,A){return{addFeatureAttributesCalculator:function(A,t){for(var E in A.attributes){var T=E;a.setAreaDataObjectValue(T,A.attributes[E],t,e.AREA_ATTRIBUTES_CALCULATOR_NAME)}},addAreaInfoCalculator:function(A,t){a.setAreaDataObjectValue("SITE_NAME",A.locationName||A.name,t,e.AREA_ATTRIBUTES_CALCULATOR_NAME),a.setAreaDataObjectValue("STORE_NAME",A.locationName||A.name,t,e.AREA_ATTRIBUTES_CALCULATOR_NAME),a.setAreaDataObjectValue("AREA_DESC",A.shortName||A.name,t,e.AREA_ATTRIBUTES_CALCULATOR_NAME),a.setAreaDataObjectValue("AREA_DESC2",A.description||A.name,t,e.AREA_ATTRIBUTES_CALCULATOR_NAME),a.setAreaDataObjectValue("AREA_DESC3",A.description||A.name,t,e.AREA_ATTRIBUTES_CALCULATOR_NAME),a.setAreaDataObjectValue("STORE_ADDR",A.address||"",t,e.AREA_ATTRIBUTES_CALCULATOR_NAME),a.setAreaDataObjectValue("STORE_LAT",A.latitude||"",t,e.AREA_ATTRIBUTES_CALCULATOR_NAME),a.setAreaDataObjectValue("STORE_LONG",A.longitude||"",t,e.AREA_ATTRIBUTES_CALCULATOR_NAME)},addEnrichFeatureSet:function(t,E,T,r){var _=A.parse(t,T||e.ENRICHED_DATA_NO_LEVELS,function(a){return E[a]||a});a.mergeAreaData(_,r.fieldData.areaData)}}});