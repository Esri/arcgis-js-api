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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/kernel","esri/dijit/geoenrichment/InfographicsOptions","esri/dijit/geoenrichment/Geoenrichment","esri/dijit/geoenrichment/config","esri/tasks/geoenrichment/GeometryStudyArea","esri/tasks/geoenrichment/StandardGeographyStudyArea","esri/tasks/geoenrichment/studyAreaFromJson","./ge/LocalGEInfographic"],function(e,t,n,r,i,o,s,c,a){var h=e(null,{_options:null,getTask:function(){return null},createGeoenrichment:function(e,t){return e&&e.calcData?new a(e,t):new r},getCountry:function(e){return null},getOptions:function(){return this._options||(this._options=new n),this._options}}),u=e(null,{countryID:null,reportID:null,geoenrichmentUrl:null,studyAreas:null,studyArea:null,_provider:null,constructor:function(e,t){this.countryID=e.countryID,this.reportID=e.reportID,this.geoenrichmentUrl=e.geoenrichmentUrl,this.studyAreas=e.studyAreas.map(function(e){return e instanceof o||e instanceof s?e:c(e)}),this._provider=t,this.setCurrentAnalysisAreaIndex(0)},setCurrentAnalysisAreaIndex:function(e){this.studyArea=this.studyAreas[e]},_getGEKey:function(e){return e=e||this.studyArea,JSON.stringify(e.toJson())+this.countryID+this.reportID},_getGEKeys:function(){return this.studyAreas.map(function(e){return this._getGEKey(e)},this)},getOptions:function(){return this._provider._getFactory().getOptions()},createGeoenrichment:function(e,t){return this._provider._createGE(this._getGEKey(),e,t)},toJson:function(){return{countryID:this.countryID,reportID:this.reportID,geoenrichmentUrl:this.geoenrichmentUrl,geoenrichmentCache:this._provider._getGECacheJson(this._getGEKeys()),infographicsOptions:this.getOptions().toJson(),studyAreas:this.studyAreas.map(function(e){return e.toJson()})}}});return e(null,{_infographicsFactory:null,_geoenrichmentCache:null,constructor:function(){this._geoenrichmentCache={}},_getFactory:function(){return this._infographicsFactory=this._infographicsFactory||new h},_createGE:function(e,t,n){var r=this._getFactory().createGeoenrichment(t,n),i=this._geoenrichmentCache[e];return i?r.cache=i:this._geoenrichmentCache[e]=r.cache,r},_getGECacheJson:function(e){var t={};return e.forEach(function(e){var n=this._geoenrichmentCache[e];n&&(t[e]=n.toJson())},this),t},setServerUrl:function(e){i.server=e.geoenrichmentUrl;var n=t.id.credentials[0],r=n&&n.token;i.token=r},getInfographicOptions:function(e){return new u({geoenrichmentUrl:e.geoenrichmentUrl,countryID:e.countryID,reportID:e.reportID,studyAreas:e.analysisAreas.map(function(t){return t.geographies&&t.geographies.length?new s({countryID:e.countryID,layer:t.geographies[0].levelId,ids:[t.geographies.map(function(e){return e.id}).join(",")],attributes:t.feature&&t.feature.attributes}):new o({geometry:t.feature.geometry,attributes:t.feature.attributes})})},this)},getInfographicOptionsFromJson:function(e){this.setServerUrl(e);for(var t in e.geoenrichmentCache){var r=e.geoenrichmentCache[t];this._createGE(t),this._geoenrichmentCache[t].fromJson(r)}return this._infographicsFactory&&(this._infographicsFactory._options=new n(e.infographicsOptions)),new u(e,this)}})});