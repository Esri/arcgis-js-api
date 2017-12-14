// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../declare","./EnrichParametersBase"],function(r,t){var e=r("esri.tasks.geoenrichment.ReportParameters",[t],{reportID:null,format:"pdf",fields:null,constructor:function(r){r&&(this.reportID=r.report||r.reportID||null,this.format=r.format,this.fields=r.reportFields||r.fields||null)},toJson:function(){var r=this.inherited(arguments);return this.reportID&&(r.report=this.reportID),this.format&&(r.format=this.format),this.fields&&(r.reportFields=this.fields),r}});return e});