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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","@dojo/framework/shim/WeakMap","../core/jsonMap","./locale"],function(t,o,e,r,a,n){function h(t){var o=t||S;if(!T.has(o)){var e=n.getLocale(),r=D[n.getLocale()]||e;T.set(o,new Intl.DateTimeFormat(r,o))}return T.get(o)}function m(t){return c[t]||null}function i(t,o){return h(o).format(t)}Object.defineProperty(o,"__esModule",{value:!0});var l={year:"numeric",month:"numeric",day:"numeric"},s={year:"numeric",month:"long",day:"numeric"},d={year:"numeric",month:"short",day:"numeric"},y={year:"numeric",month:"long",weekday:"long",day:"numeric"},g={hour:"numeric",minute:"numeric"},u=e({},g,{second:"numeric"}),c={"short-date":l,"short-date-short-time":e({},l,g),"short-date-short-time-24":e({},l,g,{hour12:!1}),"short-date-long-time":e({},l,u),"short-date-long-time-24":e({},l,u,{hour12:!1}),"short-date-le":l,"short-date-le-short-time":e({},l,g),"short-date-le-short-time-24":e({},l,g,{hour12:!1}),"short-date-le-long-time":e({},l,u),"short-date-le-long-time-24":e({},l,u,{hour12:!1}),"long-month-day-year":s,"long-month-day-year-short-time":e({},s,g),"long-month-day-year-short-time-24":e({},s,g,{hour12:!1}),"long-month-day-year-long-time":e({},s,u),"long-month-day-year-long-time-24":e({},s,u,{hour12:!1}),"day-short-month-year":d,"day-short-month-year-short-time":e({},d,g),"day-short-month-year-short-time-24":e({},d,g,{hour12:!1}),"day-short-month-year-long-time":e({},d,u),"day-short-month-year-long-time-24":e({},d,u,{hour12:!1}),"long-date":y,"long-date-short-time":e({},y,g),"long-date-short-time-24":e({},y,g,{hour12:!1}),"long-date-long-time":e({},y,u),"long-date-long-time-24":e({},y,u,{hour12:!1}),"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":g,"long-time":u};o.dictionary=a.strict()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),o.dateFormats=o.dictionary.apiValues,o.toJSON=o.dictionary.toJSON.bind(o.dictionary),o.fromJSON=o.dictionary.fromJSON.bind(o.dictionary);var D={ar:"ar-u-nu-latn-ca-gregory"},T=new r.default,S=c["short-date-short-time"];n.onLocaleChange(function(){T=new r.default,S=c["short-date-short-time"]}),o.getDateTimeFormatter=h,o.convertDateFormatToIntlOptions=m,o.formatDate=i});