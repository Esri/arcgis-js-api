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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["../../declare","../../SpatialReference","./StudyAreaOptions","./studyAreaFromJson","./studyAreaOptionsFromJson"],function(t,s,e,a,r){return t("esri.tasks.geoenrichment.EnrichParametersBase",null,{studyAreaOptions:null,studyAreas:null,countryID:null,datasetID:null,constructor:function(t){if(this.studyAreas=[],t){if(t.studyAreas){var n;t.inSR&&(n=t.inSR);for(var u=t.studyAreas,o=0;o<u.length;o++){var i=a(u[o]);n&&i.geometry&&i.geometry.setSpatialReference(new s(n)),this.studyAreas.push(i)}}t.studyAreasOptions?this.studyAreaOptions=r(t.studyAreasOptions):t.studyAreaOptions&&(this.studyAreaOptions=t.studyAreaOptions instanceof e?t.studyAreaOptions:r(t.studyAreaOptions));var d=t.useData;d?(d.sourceCountry&&(this.countryID=d.sourceCountry),d.dataset&&(this.datasetID=d.dataset)):(t.countryID&&(this.countryID=t.countryID),t.datasetID&&(this.datasetID=t.datasetID))}},toJson:function(){for(var t={},s=[],e=0;e<this.studyAreas.length;e++){var a=this.studyAreas[e];s.push(a.toJson())}if(s.length>0&&(t.studyAreas=s),this.studyAreaOptions&&(t.studyAreasOptions=this.studyAreaOptions.toJson()),this.countryID||this.datasetID){var r={};this.countryID&&(r.sourceCountry=this.countryID),this.datasetID&&(r.dataset=this.datasetID),t.useData=r}return t}})});