// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/date/locale","esri/moment"],(function(e,t){var o={formatDate:function(t,n){return t=o.objectToDate(t),n.locale=n.locale||o.getDateNumberLocale(),t?e.format(t,n):""},formatMoment:function(e,n){var r=o.objectToTime(e);return r?t(r).format(n):""},formatDateShort:function(e){return o.formatMoment(e,"L")},formatDateTimeShort:function(e){return o.formatMoment(e,"L LT")},formatLiveTime:function(e){var t=o.formatMoment(e,"l, LT").replace(/\d\d\d\d/,(function(e){return e.substr(2)}));return t?t+" "+o.formatDate(e,{datePattern:"ZZZZ",selector:"date"}):""},formatTypicalTime:function(e){return o.formatMoment(e,"ddd LT")},parseDateShort:function(e){var o=+t(e,"L");return o?new Date(o):null},getReportFooterDate:function(t){var o=t||new Date;return e.format(o,{datePattern:"MMMM d, yyyy",selector:"date"})},getFullYear:function(){return(new Date).getFullYear()},objectToTime:function(e){return e?(e="string"==typeof e?new Date(e):e).getTime?e.getTime():Number(e)||null:null},objectToDate:function(e){return e?e.getTime?e:new Date(e):null},getDateNumberLocale:function(){return window.dojoConfig&&window.dojoConfig.extraLocale&&window.dojoConfig.extraLocale[0]||window.dojo.locale}};return o}));