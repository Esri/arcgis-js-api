// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["dojo/_base/declare"],function(n){return n(null,{declaredClass:"esri.tasks.workflow.support.Util",_convertIdsToString:function(n){return this._join(n,",")},_join:function(n,r){var t="";if(n&&n.length>0){t+=n[0];for(var e=1;e<n.length;e++)t+=r+n[e]}return t},_convertToDate:function(n){return null!=n?new Date(n):null},_formatJobQueryCSV:function(n){var r="";if(n)if("string"==typeof n)r=n;else try{r=this.join(n,",")}catch(n){}return r},_formatDomainUsername:function(n){return n&&n.length>0&&(n=n.replace(/\\/g,"|")),n}})});