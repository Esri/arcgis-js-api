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

define(["../../declare","dojo/_base/lang","./StudyAreaOptions","./studyAreaOptionsFromJson","./GeographyLevel"],(function(t,e,o,r,s){return t("esri.tasks.geoenrichment.StudyArea",null,{attributes:null,options:null,returnGeometry:!1,comparisonGeographyLevels:null,constructor:function(t){if(t){t.attributes&&(this.attributes=t.attributes),t.areaType?this.options=r(t):t.options instanceof o&&(this.options=t.options),t.returnGeometry&&(this.returnGeometry=!0);var e=t.comparisonGeographyLevels||t.comparisonLevels;this.comparisonGeographyLevels=s.fromJsonArray(e)}this.comparisonGeographyLevels||(this.comparisonGeographyLevels=[])},toJson:function(){var t={};this.attributes&&(t.attributes=this.attributes),this.options&&e.mixin(t,this.options.toJson()),this.returnGeometry&&(t.returnGeometry=!0);var o=s.toJsonArray(this.comparisonGeographyLevels);return o&&(t.comparisonLevels=o),t},getGeomType:function(){throw"Not implemented"}})}));