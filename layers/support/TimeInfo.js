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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/lang","../../TimeExtent","./TimeReference","./LayerTimeOptions"],function(e,i,t,n,s){var r=e(null,{declaredClass:"esri.layers.support.TimeInfo",constructor:function(e){null!==e&&(i.mixin(this,e),e.exportOptions&&(this.exportOptions=new s(e.exportOptions)),this.timeExtent=null,e.timeExtent&&2===e.timeExtent.length&&(this.timeExtent=new t(e.timeExtent)),this.timeReference=new n(e.timeReference))}});return i.mixin(r,{UNIT_CENTURIES:"esriTimeUnitsCenturies",UNIT_DAYS:"esriTimeUnitsDays",UNIT_DECADES:"esriTimeUnitsDecades",UNIT_HOURS:"esriTimeUnitsHours",UNIT_MILLISECONDS:"esriTimeUnitsMilliseconds",UNIT_MINUTES:"esriTimeUnitsMinutes",UNIT_MONTHS:"esriTimeUnitsMonths",UNIT_SECONDS:"esriTimeUnitsSeconds",UNIT_UNKNOWN:"esriTimeUnitsUnknown",UNIT_WEEKS:"esriTimeUnitsWeeks",UNIT_YEARS:"esriTimeUnitsYears"}),r});