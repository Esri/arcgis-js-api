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

define(["require","exports","dojo/i18n!../nls/Directions","../../../intl","../../../moment"],(function(t,e,r,i,n){function a(t){return"esriNAUSeconds"===t||"esriNAUMinutes"===t||"esriNAUHours"===t||"esriNAUDays"===t}function s(t,e,r){var i=a(e),n=a(r),s=i?u(t,e):c(t,e);return i===n?n?o(s,r):l(s,r):t}function u(t,e,r){switch(t=t||0,e){case"esriNAUSeconds":t/=Math.pow(60,r?-1:1);break;case"esriNAUHours":t*=Math.pow(60,r?-1:1);break;case"esriNAUDays":t*=Math.pow(1440,r?-1:1)}return t}function o(t,e){return u(t,e,!0)}function c(t,e,r){switch(t=t||0,(e||"").replace("esriNAU","esri")){case"esriInches":t*=Math.pow(.0254,r?-1:1);break;case"esriFeet":t*=Math.pow(.3048,r?-1:1);break;case"esriYards":t*=Math.pow(.9144,r?-1:1);break;case"esriMiles":t*=Math.pow(1609.344,r?-1:1);break;case"esriNauticalMiles":t*=Math.pow(1851.995396854,r?-1:1);break;case"esriMillimeters":t/=Math.pow(1e3,r?-1:1);break;case"esriCentimeters":t/=Math.pow(100,r?-1:1);break;case"esriKilometers":t*=Math.pow(1e3,r?-1:1);break;case"esriDecimeters":t/=Math.pow(10,r?-1:1)}return t}function l(t,e){return c(t,e,!0)}function m(t){return t._associatedStop}Object.defineProperty(e,"__esModule",{value:!0}),e.useSpatiallyLocalTime=function(t,e){return!(!m(t)||!e||-22091616e5===t.get("attributes.ETA"))},e.toSpatiallyLocalTimeString=function(t,e,n){var a=new Date(e),s=new Date(a.getTime()+60*a.getTimezoneOffset()*1e3),u=i.formatDate(s,{hour:"2-digits",minute:"2-digits",hour12:!1});if(t){var o=(e-t)/1e3/60/60,c=Math.floor(o),l=60*(o-c),m=i.formatNumber(c,{minimumIntegerDigits:2}),p=i.formatNumber(l,{minimumIntegerDigits:2});return u+" "+r.gmt+(c<0?"":"+")+m+p}return n?i.formatDate(s,{hour:"numeric",minute:"numeric"}):u},e.isTimeUnits=a,e.convertCostValue=s,e.toMinutes=u,e.fromMinutes=o,e.toMeters=c,e.fromMeters=l,e.isFirstStop=function(t){var e=t&&t.attributes||{};return null===(e.ArriveCurbApproach||null)&&null!==(e.DepartCurbApproach||null)},e.isMiddleStop=function(t){var e=t&&t.attributes||{};return null!==(e.ArriveCurbApproach||null)&&null!==(e.DepartCurbApproach||null)},e.isLastStop=function(t){var e=t&&t.attributes||{};return null!==(e.ArriveCurbApproach||null)&&null===(e.DepartCurbApproach||null)},e.isWaypoint=function(t){return t&&t.get("attributes.isWaypoint")},e.isStopLocated=function(t){var e=t&&t.get("attributes.Status");return!e||6===e},e.getAssociatedStop=m,e.formatTime=function(t,e){void 0===e&&(e={});var r=e.unit;return function(t,e){var r=n.duration(Math.round(t),e),a=r.asHours(),s=r.asMilliseconds();if(a<1)return i.formatDate(s,{minute:"numeric"})+"m";return Math.floor(a)+":"+i.formatDate(s,{minute:"2-digit"})+"h"}(t,void 0===r?"minutes":r)},e.formatDistance=function(t,e){void 0===e&&(e={});var n=e.fromUnits,a=e.toUnits,u=s(t,n,a);if(!u)return"";var o=r.units[a],c=o?o.abbr:a.replace("esri","").toLowerCase();return i.substitute(r.distanceTemplate,{distance:u,units:c},{format:{distance:{type:"number",intlOptions:{minimumFractionDigits:2,maximumFractionDigits:2}}}})}}));