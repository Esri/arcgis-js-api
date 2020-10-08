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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../PopupTemplate","../layers/support/fieldUtils","../popup/content","../popup/FieldInfo","../popup/support/FieldInfoFormat"],(function(e,i,t,n,o,r,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.createFieldInfos=i.createFieldsContent=i.createPopupTemplate=void 0;var l=["oid","global-id"],d=["oid","global-id","guid"];i.createPopupTemplate=function(e,i){var r=e.displayField,a=e.editFieldsInfo,l=e.fields,d=e.objectIdField,s=e.title;if(!l)return null;var u=m({editFieldsInfo:a,fields:l,objectIdField:d},i);if(!u.length)return null;var c=function(e){var i=n.getDisplayFieldName(e),t=e.titleBase;return i?t+": {"+i.trim()+"}":t}({titleBase:s,fields:l,displayField:r}),f=[new o.FieldsContent,new o.AttachmentsContent];return new t({title:c,content:f,fieldInfos:u})};var s=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],u=function(e,i){var t=i.editFieldsInfo,n=i.objectIdField,o=i.visibleFieldNames;return o?o.has(e.name):!f(e.name,t)&&((!n||e.name!==n)&&(!(l.indexOf(e.type)>-1)&&!s.some((function(i){return i.test(e.name)}))))};function c(e,i){return"oid"===e.type?-1:"oid"===i.type?1:b(e)?-1:b(i)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((i.alias||i.name).toLocaleLowerCase())}function f(e,i){if(!e||!i)return!1;var t=i.creationDateField,n=i.creatorField,o=i.editDateField,r=i.editorField;return-1!==[t&&t.toLowerCase(),n&&n.toLowerCase(),o&&o.toLowerCase(),r&&r.toLowerCase()].indexOf(e.toLowerCase())}function p(e,i){return e.editable&&-1===d.indexOf(e.type)&&!f(e.name,i)}function m(e,i){var t=e.editFieldsInfo,n=e.fields,o=e.objectIdField;return function(e,i){var t=e;return i&&(e=e.filter((function(e){return-1===i.indexOf(e.type)}))),e===t&&(e=e.slice()),e.sort(c),e}(n,(null==i?void 0:i.ignoreFieldTypes)||v).map((function(e){return new r({fieldName:e.name,isEditable:p(e,t),label:e.alias,format:F(e),visible:u(e,{editFieldsInfo:t,objectIdField:o,visibleFieldNames:null==i?void 0:i.visibleFieldNames})})}))}function F(e){switch(e.type){case"small-integer":case"integer":case"single":return new a({digitSeparator:!0,places:0});case"double":return new a({digitSeparator:!0,places:2});case"date":return new a({dateFormat:"long-month-day-year"});default:return null}}function b(e){return"name"===(e.name&&e.name.toLowerCase())||("name"===(e.alias&&e.alias.toLowerCase())||void 0)}i.createFieldsContent=function(e,i){return new o.FieldsContent({fieldInfos:m(e,i).filter((function(e){return e.visible}))})},i.createFieldInfos=m;var v=["geometry","blob","raster","guid","xml"]}));