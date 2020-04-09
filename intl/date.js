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

define(["require","exports","../core/tsSupport/assignHelper","@dojo/framework/shim/WeakMap","../core/jsonMap","./locale"],(function(t,o,e,r,a,n){Object.defineProperty(o,"__esModule",{value:!0});var h={year:"numeric",month:"numeric",day:"numeric"},m={year:"numeric",month:"long",day:"numeric"},i={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},s={hour:"numeric",minute:"numeric"},d=e({},s,{second:"numeric"}),y={"short-date":h,"short-date-short-time":e({},h,s),"short-date-short-time-24":e({},h,s,{hour12:!1}),"short-date-long-time":e({},h,d),"short-date-long-time-24":e({},h,d,{hour12:!1}),"short-date-le":h,"short-date-le-short-time":e({},h,s),"short-date-le-short-time-24":e({},h,s,{hour12:!1}),"short-date-le-long-time":e({},h,d),"short-date-le-long-time-24":e({},h,d,{hour12:!1}),"long-month-day-year":m,"long-month-day-year-short-time":e({},m,s),"long-month-day-year-short-time-24":e({},m,s,{hour12:!1}),"long-month-day-year-long-time":e({},m,d),"long-month-day-year-long-time-24":e({},m,d,{hour12:!1}),"day-short-month-year":i,"day-short-month-year-short-time":e({},i,s),"day-short-month-year-short-time-24":e({},i,s,{hour12:!1}),"day-short-month-year-long-time":e({},i,d),"day-short-month-year-long-time-24":e({},i,d,{hour12:!1}),"long-date":l,"long-date-short-time":e({},l,s),"long-date-short-time-24":e({},l,s,{hour12:!1}),"long-date-long-time":e({},l,d),"long-date-long-time-24":e({},l,d,{hour12:!1}),"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":s,"long-time":d};o.dictionary=a.strict()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),o.dateFormats=o.dictionary.apiValues,o.toJSON=o.dictionary.toJSON.bind(o.dictionary),o.fromJSON=o.dictionary.fromJSON.bind(o.dictionary);var g={ar:"ar-u-nu-latn-ca-gregory"},u=new r.default,c=y["short-date-short-time"];function D(t){var o=t||c;if(!u.has(o)){var e=n.getLocale(),r=g[n.getLocale()]||e;u.set(o,new Intl.DateTimeFormat(r,o))}return u.get(o)}n.onLocaleChange((function(){u=new r.default,c=y["short-date-short-time"]})),o.getDateTimeFormatter=D,o.convertDateFormatToIntlOptions=function(t){return y[t]||null},o.formatDate=function(t,o){return D(o).format(t)}}));