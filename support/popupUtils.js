// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../PopupTemplate","../layers/support/fieldUtils","../popup/content","../popup/FieldInfo","../popup/support/FieldInfoFormat"],(function(e,t,i,n,r,a,l,o){Object.defineProperty(t,"__esModule",{value:!0});var s=["oid","global-id","guid"];function d(e,t){return"oid"===e.type?-1:"oid"===t.type?1:f(e)?-1:f(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function u(e,t){return e.editable&&-1===s.indexOf(e.type)&&!function(e,t){if(!e||!t)return!1;var i=t.creationDateField,n=t.creatorField,r=t.editDateField,a=t.editorField;return-1!==[i&&i.toLowerCase(),n&&n.toLowerCase(),r&&r.toLowerCase(),a&&a.toLowerCase()].indexOf(e.toLowerCase())}(e.name,t)}function p(e){switch(e.type){case"small-integer":case"integer":case"single":return new o({digitSeparator:!0,places:0});case"double":return new o({digitSeparator:!0,places:2});case"date":return new o({dateFormat:"long-month-day-year"});default:return null}}function f(e){return"name"===(e.name&&e.name.toLowerCase())||("name"===(e.alias&&e.alias.toLowerCase())||void 0)}t.createPopupTemplate=function(e,t){var o=e.displayField,s=e.fields,f=e.title,m=e.visibleFieldNames,F=e.editFieldsInfo;if(!s)return null;var w=function(e,t){var i=e;t.ignoreFieldTypes&&(e=e.filter((function(e){return-1===t.ignoreFieldTypes.indexOf(e.type)})));if(0===e.length)return null;e===i&&(e=e.slice());return e.sort(d),{fields:e}}(s,i({},c,t));if(!w)return null;var g=function(e){var t=r.getDisplayFieldName(e),i=e.titleBase;return t?i+": {"+t.trim()+"}":i}({titleBase:f,fields:w.fields,displayField:o}),y=[new a.FieldsContent,new a.AttachmentsContent],v=function(e){var t=e.fields,i=e.visibleFieldNames,n=e.editFieldsInfo;return t.map((function(e){return new l({fieldName:e.name,isEditable:u(e,n),label:e.alias,format:p(e),visible:!i||i.has(e.name)})}))}({fields:w.fields,visibleFieldNames:m,editFieldsInfo:F});return new n({title:g,content:y,fieldInfos:v})};var c={ignoreFieldTypes:["geometry","blob","raster","guid","xml"]}}));