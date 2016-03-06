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

define(["../../declare","./StudyArea"],function(r,t){return r("esri.tasks.geoenrichment.StandardGeographyStudyArea",[t],{countryID:null,geographyLayerID:null,ids:null,constructor:function(r){if(r){var t=r.sourceCountry||r.countryID;t&&(this.countryID=t);var e=r.layer||r.geographyLayerID;e&&(this.geographyLayerID=e),r.ids&&(this.ids=r.ids)}},toJson:function(){var r=this.inherited(arguments);return this.countryID&&(r.sourceCountry=this.countryID),this.geographyLayerID&&(r.layer=this.geographyLayerID),this.ids&&(r.ids=this.ids),r},getGeomType:function(){return"polygon"}})});