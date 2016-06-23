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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["../../declare","./GeographyQueryBase"],function(e,r){return e("esri.tasks.geoenrichment.SubGeographyQuery",[r],{filterGeographyLayerID:null,filterGeographyIDs:null,filterGeographyWhere:null,subGeographyLayerID:null,subGeographyWhere:null,constructor:function(e){e&&(this.filterGeographyLayerID=e.filterGeographyLayerID||e.geographyLayers,this.filterGeographyIDs=e.filterGeographyIDs||e.geographyIDs,this.filterGeographyWhere=e.filterGeographyWhere||e.geographyQuery,this.subGeographyLayerID=e.subGeographyLayerID||e.subGeographyLayer,this.subGeographyWhere=e.subGeographyWhere||e.subGeographyQuery)},toJson:function(){var e=this.inherited(arguments);return e.returnSubGeographyLayer=!0,this.filterGeographyLayerID&&(e.geographyLayers=this.filterGeographyLayerID),this.filterGeographyIDs&&(e.geographyIDs=this.filterGeographyIDs),this.filterGeographyWhere&&(e.geographyQuery=this.filterGeographyWhere),this.subGeographyLayerID&&(e.subGeographyLayer=this.subGeographyLayerID),this.subGeographyWhere&&(e.subGeographyQuery=this.subGeographyWhere),e}})});