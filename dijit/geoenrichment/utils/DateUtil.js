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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/date/locale","esri/moment","./ObjectUtil"],function(t,e,r){var n={formatDate:function(e,n){return e=r.objectToDate(e),e?t.format(e,n):""},formatMoment:function(t,n){var o=r.objectToTime(t);return o?e(o).format(n):""},formatDateShort:function(t){return n.formatMoment(t,"L")},formatDateTimeShort:function(t){return n.formatMoment(t,"L LT")},formatLiveTime:function(t){var e=n.formatMoment(t,"l, LT").replace(/\d\d\d\d/,function(t){return t.substr(2)});return e?e+" "+n.formatDate(t,{datePattern:"ZZZZ",selector:"date"}):""},formatTypicalTime:function(t){return n.formatMoment(t,"ddd LT")},parseDateShort:function(t){var r=+e(t,"L");return r?new Date(r):null},getReportFooterDate:function(e){var r=e||new Date;return t.format(r,{datePattern:"MMMM d, yyyy",selector:"date"})},getFullYear:function(){return(new Date).getFullYear()}};return n});