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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/layers/CodedValueDomain","esri/dijit/geoenrichment/utils/DateUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(e,a,t,i,r){r=r.geoenrichment.dijit.ReportPlayer.AreasInfoTemplateBuilder;var l={};return l.composeAttributesFromFieldInfos=function(e,a){function t(e){return e&&e.dateFormat?"esriFieldTypeDate":e&&void 0!==e.places?e.places>0?"esriFieldTypeDouble":"esriFieldTypeInteger":"esriFieldTypeString"}return e&&e.filter(function(e){return e.visible}).map(function(e){return{name:e.fieldName,alias:e.label,places:e.format&&e.format.places,digitSeparator:e.format&&e.format.digitSeparator,dateFormat:e.format&&e.format.dateFormat,value:a[e.fieldName],type:t(e.format),domain:null,length:void 0}})},l.formatAttributeValue=function(e,l){var o=l&&l.returnUnavailableDataForIncorrectValues?r.unavailableData:"";if(!e||null===e.value||void 0===e.value)return o;if(e.formattedValue&&e.formattedValue!==r.unavailableData)return e.formattedValue;var n,u=e.domain&&"codedValue"===e.domain.type?new a(e.domain):null;if(u)(n=u.getName(e.value))||(n=e.value+"");else if("esriFieldTypeString"===e.type)n=e.value;else if("esriFieldTypeDate"===e.type){var d=new Date;d.setTime(e.value),n=t.formatDateShort(d)}else n=i.formatNumber(e.value,{places:e.places,noSeparator:!1===e.digitSeparator});return null===n||void 0===n?o:n},l.attributeToJson=function(a){return{name:a.name,alias:a.alias,type:a.type,value:a.value,domain:a.domain&&(a.domain.toJson?a.domain.toJson():e.clone(a.domain)),places:a.places,digitSeparator:a.digitSeparator,dateFormat:a.dateFormat,length:a.length}},l.attributeFromJson=function(e){return{name:e.name,alias:e.alias,type:e.type,value:e.value,domain:e.domain,places:e.places,digitSeparator:e.digitSeparator,dateFormat:e.dateFormat,length:e.length}},l});