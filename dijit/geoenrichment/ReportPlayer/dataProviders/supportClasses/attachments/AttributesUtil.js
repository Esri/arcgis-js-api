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

define(["dojo/_base/lang","esri/layers/CodedValueDomain","esri/dijit/geoenrichment/utils/DateUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,a,t,r){var i={};return i.composeAttributesFromFieldInfos=function(e,a){function t(e){return e&&e.dateFormat?"esriFieldTypeDate":e&&void 0!==e.places?e.places>0?"esriFieldTypeDouble":"esriFieldTypeInteger":"esriFieldTypeString"}return e&&e.filter(function(e){return e.visible}).map(function(e){return{name:e.fieldName,alias:e.label,places:e.format&&e.format.places,digitSeparator:e.format&&e.format.digitSeparator,dateFormat:e.format&&e.format.dateFormat,value:a[e.fieldName],type:t(e.format),domain:null,length:void 0}})},i.formatAttributeValue=function(e){if(!e)return"";var i=e.domain&&"codedValue"===e.domain.type?new a(e.domain):null;if(i)attrValue=i.getName(e.value),(void 0===attrValue||null===attrValue)&&(attrValue=e.value);else if("esriFieldTypeString"===e.type)attrValue=e.value;else if("esriFieldTypeDate"===e.type){var l=new Date;l.setTime(e.value),attrValue=t.formatShortDate(l)}else attrValue=r.formatNumber(e.value,{places:e.places,noSeparator:e.digitSeparator===!1});return null===attrValue||void 0===attrValue?"":attrValue},i.attributeToJson=function(a){return{name:a.name,alias:a.alias,places:a.places,digitSeparator:a.digitSeparator,dateFormat:a.dateFormat,value:a.value,type:a.type,length:a.length,domain:a.domain&&(a.domain.toJson?a.domain.toJson():e.clone(a.domain))}},i.attributeFromJson=function(e){return{name:e.name,alias:e.alias,places:e.places,digitSeparator:e.digitSeparator,dateFormat:e.dateFormat,value:e.value,type:e.type,length:e.length,domain:e.domain}},i});