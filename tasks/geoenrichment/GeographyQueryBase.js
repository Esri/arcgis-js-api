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

define(["../../declare","../../SpatialReference"],(function(t,e){return t("esri.tasks.geoenrichment.GeographyQueryBase",null,{countryID:null,datasetID:null,outSR:null,returnGeometry:!1,returnCentroids:!1,generalizationLevel:null,useFuzzySearch:!1,featureLimit:null,constructor:function(t){t&&(this.countryID=t.countryID||t.sourceCountry,this.datasetID=t.datasetID||t.optionalCountryDataset,t.outSR&&(this.outSR=new e(t.outSR)),this.returnGeometry=!!t.returnGeometry,this.returnCentroids=!!t.returnCentroids,this.generalizationLevel=t.generalizationLevel,this.useFuzzySearch=!!t.useFuzzySearch,this.featureLimit=t.featureLimit)},toJson:function(){var t={};return this.countryID&&(t.sourceCountry=this.countryID),this.datasetID&&(t.optionalCountryDataset=this.datasetID),this.outSR&&(t.outSR=this.outSR.toJson()),this.returnGeometry&&(t.returnGeometry=this.returnGeometry),this.returnCentroids&&(t.returnCentroids=this.returnCentroids),this.generalizationLevel&&(t.generalizationLevel=this.generalizationLevel),this.useFuzzySearch&&(t.useFuzzySearch=this.useFuzzySearch),this.featureLimit&&(t.featureLimit=this.featureLimit),t}})}));