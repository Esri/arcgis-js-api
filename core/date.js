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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./kebabDictionary"],function(t,e,a){function r(t){return o[t]}Object.defineProperty(e,"__esModule",{value:!0});var o={"short-date":"(datePattern: 'M/d/y', selector: 'date')","short-date-le":"(datePattern: 'd/M/y', selector: 'date')","long-month-day-year":"(datePattern: 'MMMM d, y', selector: 'date')","day-short-month-year":"(datePattern: 'd MMM y', selector: 'date')","long-date":"(datePattern: 'EEEE, MMMM d, y', selector: 'date')","short-date-short-time":"(datePattern: 'M/d/y', timePattern: 'h:mm a', selector: 'date and time')","short-date-le-short-time":"(datePattern: 'd/M/y', timePattern: 'h:mm a', selector: 'date and time')","short-date-short-time-24":"(datePattern: 'M/d/y', timePattern: 'H:mm', selector: 'date and time')","short-date-le-short-time-24":"(datePattern: 'd/M/y', timePattern: 'H:mm', selector: 'date and time')","short-date-long-time":"(datePattern: 'M/d/y', timePattern: 'h:mm:ss a', selector: 'date and time')","short-date-le-long-time":"(datePattern: 'd/M/y', timePattern: 'h:mm:ss a', selector: 'date and time')","short-date-long-time-24":"(datePattern: 'M/d/y', timePattern: 'H:mm:ss', selector: 'date and time')","short-date-le-long-time-24":"(datePattern: 'd/M/y', timePattern: 'H:mm:ss', selector: 'date and time')","long-month-year":"(datePattern: 'MMMM y', selector: 'date')","short-month-year":"(datePattern: 'MMM y', selector: 'date')",year:"(datePattern: 'y', selector: 'date')"},d=a({shortDate:"short-date",shortDateLE:"short-date-le",longDate:"long-date",dayShortMonthYear:"day-short-month-year",longMonthDayYear:"long-month-day-year",shortDateLongTime:"short-date-long-time",shortDateLELongTime:"short-date-le-long-time",shortDateShortTime:"short-date-short-time",shortDateLEShortTime:"short-date-le-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLongTime24:"short-date-long-time-24",shortDateLELongTime24:"short-date-le-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year"});e.toJSON=d.toJSON,e.fromJSON=d.fromJSON,e.getFormat=r});