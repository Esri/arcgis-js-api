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

define(["require","exports","dojo/i18n!../nls/Directions","../../../intl","../../../moment"],function(t,e,r,i,n){function a(t,e){return!(!v(t)||!e||-22091616e5===t.get("attributes.ETA"))}function s(t,e,n){var a=new Date(e),s=new Date(a.getTime()+60*a.getTimezoneOffset()*1e3),o=i.formatDate(s,{hour:"2-digits",minute:"2-digits",hour12:!1});if(t){var u=(e-t)/1e3/60/60,c=Math.floor(u),l=60*(u-c),m=i.formatNumber(c,{minimumIntegerDigits:2}),p=i.formatNumber(l,{minimumIntegerDigits:2});return o+" "+r.gmt+(c<0?"":"+")+m+p}return n?i.formatDate(s,{hour:"numeric",minute:"numeric"}):o}function o(t){return"esriNAUSeconds"===t||"esriNAUMinutes"===t||"esriNAUHours"===t||"esriNAUDays"===t}function u(t,e,r){var i=o(e),n=o(r),a=i?c(t,e):m(t,e);return i===n?n?l(a,r):p(a,r):t}function c(t,e,r){switch(t=t||0,e){case"esriNAUSeconds":t/=Math.pow(60,r?-1:1);break;case"esriNAUHours":t*=Math.pow(60,r?-1:1);break;case"esriNAUDays":t*=Math.pow(1440,r?-1:1)}return t}function l(t,e){return c(t,e,!0)}function m(t,e,r){switch(t=t||0,(e||"").replace("esriNAU","esri")){case"esriInches":t*=Math.pow(.0254,r?-1:1);break;case"esriFeet":t*=Math.pow(.3048,r?-1:1);break;case"esriYards":t*=Math.pow(.9144,r?-1:1);break;case"esriMiles":t*=Math.pow(1609.344,r?-1:1);break;case"esriNauticalMiles":t*=Math.pow(1851.995396854,r?-1:1);break;case"esriMillimeters":t/=Math.pow(1e3,r?-1:1);break;case"esriCentimeters":t/=Math.pow(100,r?-1:1);break;case"esriKilometers":t*=Math.pow(1e3,r?-1:1);break;case"esriDecimeters":t/=Math.pow(10,r?-1:1)}return t}function p(t,e){return m(t,e,!0)}function f(t){var e=t&&t.attributes||{};return null===(e.ArriveCurbApproach||null)&&null!==(e.DepartCurbApproach||null)}function b(t){var e=t&&t.attributes||{};return null!==(e.ArriveCurbApproach||null)&&null!==(e.DepartCurbApproach||null)}function h(t){var e=t&&t.attributes||{};return null!==(e.ArriveCurbApproach||null)&&null===(e.DepartCurbApproach||null)}function M(t){return t&&t.get("attributes.isWaypoint")}function d(t){var e=t&&t.get("attributes.Status");return!e||6===e}function v(t){return t._associatedStop}function A(t,e){void 0===e&&(e={});var r=e.unit;return D(t,void 0===r?"minutes":r)}function D(t,e){var r=n.duration(Math.round(t),e),a=r.asHours(),s=r.asMilliseconds();return a<1?i.formatDate(s,{minute:"numeric"})+"m":Math.floor(a)+":"+i.formatDate(s,{minute:"2-digit"})+"h"}function g(t,e){void 0===e&&(e={});var n=e.fromUnits,a=e.toUnits,s=u(t,n,a);if(!s)return"";var o=r.units[a],c=o?o.abbr:a.replace("esri","").toLowerCase();return i.substitute(r.distanceTemplate,{distance:s,units:c},{format:{distance:{type:"number",intlOptions:{minimumFractionDigits:2,maximumFractionDigits:2}}}})}Object.defineProperty(e,"__esModule",{value:!0}),e.useSpatiallyLocalTime=a,e.toSpatiallyLocalTimeString=s,e.isTimeUnits=o,e.convertCostValue=u,e.toMinutes=c,e.fromMinutes=l,e.toMeters=m,e.fromMeters=p,e.isFirstStop=f,e.isMiddleStop=b,e.isLastStop=h,e.isWaypoint=M,e.isStopLocated=d,e.getAssociatedStop=v,e.formatTime=A,e.formatDistance=g});