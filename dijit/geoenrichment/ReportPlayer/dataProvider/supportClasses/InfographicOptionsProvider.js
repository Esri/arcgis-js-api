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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/kernel","esri/dijit/geoenrichment/InfographicsOptions","esri/dijit/geoenrichment/Geoenrichment","esri/dijit/geoenrichment/config","esri/tasks/geoenrichment/GeometryStudyArea","esri/tasks/geoenrichment/StandardGeographyStudyArea","esri/tasks/geoenrichment/studyAreaFromJson","./ge/LocalGEInfographic","./ge/_GEFilterSupport","esri/dijit/geoenrichment/utils/StudyAreaKeyBuilder"],(function(e,t,r,n,i,o,s,a,c,h,u){var g=e(null,{_options:null,getTask:function(){return null},createGeoenrichment:function(t,r,i,o,s){return t&&t.calcData?new c(t,r,i,o,s):new e([n,h])()},getCountry:function(e){return null},getOptions:function(){return this._options||(this._options=new r),this._options}}),l=e(null,{countryID:null,reportID:null,geoenrichmentUrl:null,areaNames:null,studyAreas:null,studyArea:null,_provider:null,constructor:function(e,t){this.countryID=e.countryID,this.reportID=e.reportID,this.geoenrichmentUrl=e.geoenrichmentUrl,this.studyAreas=e.studyAreas.map((function(e){return e instanceof o||e instanceof s?e:a(e)})),this.areaNames=e.areaNames,this._provider=t,this.setCurrentAnalysisAreaIndex(0)},setCurrentAnalysisAreaIndex:function(e){this.studyArea=this.studyAreas[e]},_getGEKey:function(e){return e=e||this.studyArea,JSON.stringify(u.studyAreaToJson(e))+this.countryID+this.reportID},_getGEKeys:function(){return this.studyAreas.map((function(e){return this._getGEKey(e)}),this)},getOptions:function(){return this._provider._getFactory().getOptions()},createGeoenrichment:function(e){return this.setCurrentAnalysisAreaIndex(e.currentFeatureIndex||0),this._provider._createGE(this._getGEKey(),e.infographicJson,e.areaData,e.isMultiFeature,this.areaNames,e.currentFeatureIndex)},toJson:function(){return{countryID:this.countryID,reportID:this.reportID,geoenrichmentUrl:this.geoenrichmentUrl,geoenrichmentCache:this._provider._getGECacheJson(this._getGEKeys()),infographicsOptions:this.getOptions().toJson(),studyAreas:this.studyAreas.map((function(e){return e.toJson()})),areaNames:this.areaNames}},toJsonAt:function(e){var t=this.studyAreas[e];return{countryID:this.countryID,reportID:this.reportID,geoenrichmentUrl:this.geoenrichmentUrl,geoenrichmentCache:this._provider._getGECacheJson([this._getGEKey(t)]),infographicsOptions:this.getOptions().toJson(),studyAreas:[t.toJson()],areaNames:[this.areaNames[e]]}}});return e(null,{_infographicsFactory:null,_geoenrichmentCache:null,constructor:function(){this._geoenrichmentCache={}},_getFactory:function(){return this._infographicsFactory=this._infographicsFactory||new g},_createGE:function(e,t,r,n,i,o){var s=this._getFactory().createGeoenrichment(t,r,n,i,o),a=this._geoenrichmentCache[e];return a?s.cache=a:this._geoenrichmentCache[e]=s.cache,s},_getGECacheJson:function(e){var t={};return e.forEach((function(e){var r=this._geoenrichmentCache[e];r&&(t[e]=r.toJson())}),this),t},setServerUrl:function(e,r){if(i.server=e,r)i.token=r;else{var n=e&&t.id.findCredential(e)||t.id.credentials[0];i.token=n&&n.token}},getInfographicOptions:function(e){return new l({geoenrichmentUrl:e.geoenrichmentUrl,countryID:e.countryID,reportID:e.reportID,studyAreas:e.analysisAreas.map((function(t){return t.geographies&&t.geographies.length?new s({countryID:e.countryID,layer:t.geographies[0].levelId,ids:[t.geographies.map((function(e){return e.id})).join(",")],attributes:{}}):new o({geometry:t.feature.geometry,attributes:{}})})),areaNames:e.analysisAreas.map((function(e){return e.shortName||e.name}))},this)},getInfographicOptionsFromJson:function(e){for(var t in this.setServerUrl(e.geoenrichmentUrl),e.geoenrichmentCache){var n=e.geoenrichmentCache[t];this._createGE(t),this._geoenrichmentCache[t].fromJson(n)}return this._infographicsFactory&&(this._infographicsFactory._options=new r(e.infographicsOptions)),new l(e,this)}})}));