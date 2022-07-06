// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["../../declare","./GeographyQueryBase"],(function(e,r){return e("esri.tasks.geoenrichment.GeographyQuery",[r],{geographyLayerIDs:null,geographyIDs:null,where:null,constructor:function(e){e&&(this.geographyLayerIDs=e.geographyLayerIDs||e.geographyLayers.split(";"),this.geographyIDs=e.geographyIDs,this.where=e.where||e.geographyQuery)},toJson:function(){var e=this.inherited(arguments);return this.geographyLayerIDs&&(e.geographyLayers=this.geographyLayerIDs.join(";")),this.geographyIDs&&(e.geographyIDs=this.geographyIDs),this.where&&(e.geographyQuery=this.where),e}})}));