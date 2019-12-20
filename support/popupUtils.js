// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","dojo/i18n!../widgets/Popup/nls/Popup","../PopupTemplate","../popup/content","../popup/FieldInfo","../popup/support/FieldInfoFormat"],function(e,t,i,n,r,a,l,o){function s(e,t){var n=e.displayField,a=e.fields,l=e.title,o=e.visibleFieldNames,s=e.editFieldsInfo;if(!a)return null;var u=i({},b,t),f=d(a,u);if(!f)return null;var m=y({titleBase:l,fields:f.fields,displayField:n}),c=F(f.limitExceeded),v=p({fields:f.fields,visibleFieldNames:o,editFieldsInfo:s});return new r({title:m,content:c,fieldInfos:v})}function d(e,t){var i=e;if(t.ignoreFieldTypes&&(e=e.filter(function(e){return-1===t.ignoreFieldTypes.indexOf(e.type)})),0===e.length)return null;var n=t.maximumFields&&e.length>t.maximumFields;return n&&(e=e.slice(0,t.maximumFields)),e===i&&(e=e.slice()),e.sort(u),{fields:e,limitExceeded:n}}function u(e,t){return"oid"===e.type?-1:"oid"===t.type?1:x(e)?-1:x(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function f(e,t){if(!e||!t)return!1;var i=t.creationDateField,n=t.creatorField,r=t.editDateField,a=t.editorField;return-1!==[i&&i.toLowerCase(),n&&n.toLowerCase(),r&&r.toLowerCase(),a&&a.toLowerCase()].indexOf(e.toLowerCase())}function m(e,t){return e.editable&&-1===C.indexOf(e.type)&&!f(e.name,t)}function p(e){var t=e.fields,i=e.visibleFieldNames,n=e.editFieldsInfo;return t.map(function(e){return new l({fieldName:e.name,isEditable:m(e,n),label:e.alias,format:c(e),visible:!i||i.has(e.name)})})}function c(e){switch(e.type){case"small-integer":case"integer":case"single":return new o({digitSeparator:!0,places:0});case"double":return new o({digitSeparator:!0,places:2});case"date":return new o({dateFormat:"long-month-day-year"});default:return null}}function F(e){var t=[new a.FieldsContent,new a.AttachmentsContent];return e&&t.push(new a.TextContent({text:"<small>"+n.tooManyFields+"</small>"})),t}function v(e,t){for(var i=0,n=e;i<n.length;i++){var r=n[i];if(r&&r.valueType&&r.valueType===t)return r.name}return null}function g(e){for(var t=0,i=e;t<i.length;t++){var n=i[t];if(n&&n.name){var r=n.name.toLowerCase();if(r.indexOf("name")>-1||r.indexOf("title")>-1)return n.name}}return null}function w(e){return e&&e.length?v(e,"name-or-title")||v(e,"unique-identifier")||v(e,"type-or-category")||g(e):null}function y(e){var t=e.titleBase,i=e.fields,n=e.displayField,r=n||w(i);return r?t+": {"+r.trim()+"}":t}function x(e){return"name"===(e.name&&e.name.toLowerCase())||("name"===(e.alias&&e.alias.toLowerCase())||void 0)}Object.defineProperty(t,"__esModule",{value:!0});var C=["oid","global-id","guid"];t.createPopupTemplate=s;var b={ignoreFieldTypes:["geometry","blob","raster","guid","xml"],maximumFields:75}});