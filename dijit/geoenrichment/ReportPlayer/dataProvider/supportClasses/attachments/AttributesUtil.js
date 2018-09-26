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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/layers/CodedValueDomain","esri/dijit/geoenrichment/utils/DateUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(e,a,t,i,r){r=r.geoenrichment.dijit.ReportPlayer.AreasInfoTemplateBuilder;var n={};return n.composeAttributesFromFieldInfos=function(e,a){function t(e){return e&&e.dateFormat?"esriFieldTypeDate":e&&void 0!==e.places?e.places>0?"esriFieldTypeDouble":"esriFieldTypeInteger":"esriFieldTypeString"}return e&&e.filter(function(e){return e.visible}).map(function(e){return{name:e.fieldName,alias:e.label,places:e.format&&e.format.places,digitSeparator:e.format&&e.format.digitSeparator,dateFormat:e.format&&e.format.dateFormat,value:a[e.fieldName],type:t(e.format),domain:null,length:void 0}})},n.formatAttributeValue=function(e,n){var o=n&&n.returnUnavailableDataForIncorrectValues;if(!e)return o?r.unavailableData:"";var l,d=e.domain&&"codedValue"===e.domain.type?new a(e.domain):null;if(d)void 0!==(l=d.getName(e.value))&&null!==l||(l=e.value);else if("esriFieldTypeString"===e.type)l=e.value;else if("esriFieldTypeDate"===e.type){var m=new Date;m.setTime(e.value),l=t.formatDateShort(m)}else l=i.formatNumber(e.value,{places:e.places,noSeparator:!1===e.digitSeparator});return null===l||void 0===l||"number"==typeof l&&isNaN(l)?o?r.unavailableData:"":l},n.attributeToJson=function(a){return{name:a.name,alias:a.alias,type:a.type,value:a.value,domain:a.domain&&(a.domain.toJson?a.domain.toJson():e.clone(a.domain)),places:a.places,digitSeparator:a.digitSeparator,dateFormat:a.dateFormat,length:a.length}},n.attributeFromJson=function(e){return{name:e.name,alias:e.alias,type:e.type,value:e.value,domain:e.domain,places:e.places,digitSeparator:e.digitSeparator,dateFormat:e.dateFormat,length:e.length}},n});