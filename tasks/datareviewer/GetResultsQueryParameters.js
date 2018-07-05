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

define(["dojo/_base/declare","dojo/json","dojo/has","dojo/_base/lang","../../kernel"],function(e,s,t,r,n){var i=e(null,{declaredClass:"esri.tasks.datareviewer.GetResultsQueryParameters",pageSize:5,pageNumber:0,sortBy:null,sortDescending:!1,returnFields:null,constructor:function(){},toJSON:function(){var e={pageSize:this.pageSize,pageNumber:this.pageNumber};return null!==this.sortBy&&this.sortBy.length>0&&(e.sortBy=this.sortBy),!0===this.sortDescending&&(e.sortDescending=!0),null!==this.returnFields&&this.returnFields.length>0&&(e.returnFields=this.returnFields),s.stringify(e)}});return t("extend-esri")&&r.setObject("tasks.datareviewer.GetResultsQueryParameters",i,n),i});