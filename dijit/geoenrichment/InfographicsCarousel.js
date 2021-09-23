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

define(["esri/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","esri/tasks/geoenrichment/GeometryStudyArea","./InfographicsCarouselBase","./InfographicsFactory"],(function(t,i,e,s,r,n){return t("esri.dijit.geoenrichment.InfographicsCarousel",r,{studyAreaTitle:null,_getCountryPromise:null,_countryForStudyArea:!1,startup:function(){this._started||(this.infographicsFactory=this.infographicsFactory||new n,this.inherited(arguments))},_setStudyAreaTitleAttr:function(t){this._set("studyAreaTitle",t),this._updateSubtitle()},_setStudyAreaAttr:function(t){this._set("studyArea",t),this._started&&t&&(this._countryForStudyArea=!1,this._getCountryPromise||(this._infographic.get("countryID")?this._infographic.set("studyArea",t):this._getCountry()),this._updateSubtitle())},_getCountry:function(){var t=this.get("studyArea");this._getCountryPromise=this.infographicsFactory.getCountry(t),e(this._getCountryPromise,i.hitch(this,this._onGetCountryComplete,t),i.hitch(this,this._onDataError))},_onGetCountryComplete:function(t,i){this._getCountryPromise=null,this.studyArea===t&&(this._countryForStudyArea=!0),this._infographic.set("countryID",i),this._infographic.set("studyArea",this.studyArea),this._getReports()},_getReports:function(){this._getCountryPromise||this.inherited(arguments)},_updateSubtitle:function(){var t;t=this.studyArea instanceof s?"polygon"==this.studyArea.geometry.type?this.studyAreaTitle?this.studyAreaTitle:"${name}":this.studyAreaTitle?"<div>${address}</div><div>"+this.studyAreaTitle+" (${name})</div>":"<div>${address}</div><div>${name}</div>":"<div>${address}</div><div>${name}</div>",this.set("subtitle",t)},_onDataReady:function(t){var i=this.inherited(arguments);i||this._countryForStudyArea||(this._infographic.set("variables",null),t.stop&&(this._infographic.setGeoenrichment(this.infographicsFactory.createGeoenrichment()),t.stop(),this._getCountry()))}})}));