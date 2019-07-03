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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","dojo/i18n!../widgets/Popup/nls/Popup","../PopupTemplate","../popup/content","../popup/FieldInfo","../popup/support/FieldInfoFormat"],function(e,n,t,r,i,a,l,o){function u(e,n){var r=e.fields,a=e.title;if(!r)return null;var l=t({},w,n),o=s(r,l);if(!o)return null;var u=f(a,o.fields),p=c(o.limitExceeded),m=d(o.fields);return new i({title:u,content:p,fieldInfos:m})}function s(e,n){var t=e;if(n.ignoreFieldTypes&&(e=e.filter(function(e){return-1===n.ignoreFieldTypes.indexOf(e.type)})),0===e.length)return null;var r=n.maximumFields&&e.length>n.maximumFields;return r&&(e=e.slice(0,n.maximumFields)),e===t&&(e=e.slice()),e.sort(p),{fields:e,limitExceeded:r}}function p(e,n){return"oid"===e.type?-1:"oid"===n.type?1:g(e)?-1:g(n)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((n.alias||n.name).toLocaleLowerCase())}function d(e){return e.map(function(e){return new l({fieldName:e.name,label:e.alias,format:m(e),visible:!0})})}function m(e){switch(e.type){case"small-integer":case"integer":case"single":return new o({digitSeparator:!0,places:0});case"double":return new o({digitSeparator:!0,places:2});case"date":return new o({dateFormat:"long-month-day-year"});default:return null}}function c(e){var n=[new a.FieldsContent,new a.AttachmentsContent];return e&&n.push(new a.TextContent({text:"<small>"+r.tooManyFields+"</small>"})),n}function f(e,n){for(var t=0,r=n;t<r.length;t++){var i=r[t];if(g(i))return e+": {"+i.name+"}"}return e}function g(e){return"name"===(e.name&&e.name.toLowerCase())||("name"===(e.alias&&e.alias.toLowerCase())||void 0)}Object.defineProperty(n,"__esModule",{value:!0}),n.createPopupTemplate=u;var w={ignoreFieldTypes:["geometry","blob","raster","guid","xml"],maximumFields:75}});