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

define(["dojo/_base/declare","esri/kernel","esri/dijit/geoenrichment/InfographicsOptions","esri/dijit/geoenrichment/Geoenrichment","esri/dijit/geoenrichment/config","esri/tasks/geoenrichment/GeometryStudyArea","esri/tasks/geoenrichment/StandardGeographyStudyArea","esri/tasks/geoenrichment/studyAreaFromJson","./ge/LocalGEInfographic"],function(e,t,r,n,i,s,o,a,c){var h=e(null,{_options:null,getTask:function(){return null},createGeoenrichment:function(e,t,r,i,s){return e&&e.calcData?new c(e,t,r,i,s):new n},getCountry:function(e){return null},getOptions:function(){return this._options||(this._options=new r),this._options}}),u=e(null,{countryID:null,reportID:null,geoenrichmentUrl:null,areaNames:null,studyAreas:null,studyArea:null,_provider:null,constructor:function(e,t){this.countryID=e.countryID,this.reportID=e.reportID,this.geoenrichmentUrl=e.geoenrichmentUrl,this.studyAreas=e.studyAreas.map(function(e){return e instanceof s||e instanceof o?e:a(e)}),this.areaNames=e.areaNames,this._provider=t,this.setCurrentAnalysisAreaIndex(0)},setCurrentAnalysisAreaIndex:function(e){this.studyArea=this.studyAreas[e]},_getGEKey:function(e){return e=e||this.studyArea,JSON.stringify(e.toJson())+this.countryID+this.reportID},_getGEKeys:function(){return this.studyAreas.map(function(e){return this._getGEKey(e)},this)},getOptions:function(){return this._provider._getFactory().getOptions()},createGeoenrichment:function(e){return this.setCurrentAnalysisAreaIndex(e.currentFeatureIndex||0),this._provider._createGE(this._getGEKey(),e.infographicJson,e.areaData,e.isMultiFeature,this.areaNames,e.currentFeatureIndex)},toJson:function(){return{countryID:this.countryID,reportID:this.reportID,geoenrichmentUrl:this.geoenrichmentUrl,geoenrichmentCache:this._provider._getGECacheJson(this._getGEKeys()),infographicsOptions:this.getOptions().toJson(),studyAreas:this.studyAreas.map(function(e){return e.toJson()}),areaNames:this.areaNames}},toJsonAt:function(e){var t=this.studyAreas[e];return{countryID:this.countryID,reportID:this.reportID,geoenrichmentUrl:this.geoenrichmentUrl,geoenrichmentCache:this._provider._getGECacheJson([this._getGEKey(t)]),infographicsOptions:this.getOptions().toJson(),studyAreas:[t.toJson()],areaNames:[this.areaNames[e]]}}});return e(null,{_infographicsFactory:null,_geoenrichmentCache:null,constructor:function(){this._geoenrichmentCache={}},_getFactory:function(){return this._infographicsFactory=this._infographicsFactory||new h},_createGE:function(e,t,r,n,i,s){var o=this._getFactory().createGeoenrichment(t,r,n,i,s),a=this._geoenrichmentCache[e];return a?o.cache=a:this._geoenrichmentCache[e]=o.cache,o},_getGECacheJson:function(e){var t={};return e.forEach(function(e){var r=this._geoenrichmentCache[e];r&&(t[e]=r.toJson())},this),t},setServerUrl:function(e){i.server=e.geoenrichmentUrl;var r=t.id.credentials[0],n=r&&r.token;i.token=n},getInfographicOptions:function(e){return new u({geoenrichmentUrl:e.geoenrichmentUrl,countryID:e.countryID,reportID:e.reportID,studyAreas:e.analysisAreas.map(function(t){return t.geographies&&t.geographies.length?new o({countryID:e.countryID,layer:t.geographies[0].levelId,ids:[t.geographies.map(function(e){return e.id}).join(",")],attributes:t.feature&&t.feature.attributes}):new s({geometry:t.feature.geometry,attributes:t.feature.attributes})}),areaNames:e.analysisAreas.map(function(e){return e.shortName||e.name})},this)},getInfographicOptionsFromJson:function(e){this.setServerUrl(e);for(var t in e.geoenrichmentCache){var n=e.geoenrichmentCache[t];this._createGE(t),this._geoenrichmentCache[t].fromJson(n)}return this._infographicsFactory&&(this._infographicsFactory._options=new r(e.infographicsOptions)),new u(e,this)}})});