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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../intl","../../../core/string"],(function(t,e,r,i){function a(t){return"esriNAUSeconds"===t||"esriNAUMinutes"===t||"esriNAUHours"===t||"esriNAUDays"===t}function n(t,e,r){var i=a(e),n=a(r),l=i?s(t,e):u(t,e);return i===n?n?o(l,r):c(l,r):t}function s(t,e,r){switch(t=t||0,e){case"esriNAUSeconds":t/=Math.pow(60,r?-1:1);break;case"esriNAUHours":t*=Math.pow(60,r?-1:1);break;case"esriNAUDays":t*=Math.pow(1440,r?-1:1)}return t}function o(t,e){return s(t,e,!0)}function u(t,e,r){switch(t=t||0,(e||"").replace("esriNAU","esri")){case"esriInches":t*=Math.pow(.0254,r?-1:1);break;case"esriFeet":t*=Math.pow(.3048,r?-1:1);break;case"esriYards":t*=Math.pow(.9144,r?-1:1);break;case"esriMiles":t*=Math.pow(1609.344,r?-1:1);break;case"esriNauticalMiles":t*=Math.pow(1851.995396854,r?-1:1);break;case"esriMillimeters":t/=Math.pow(1e3,r?-1:1);break;case"esriCentimeters":t/=Math.pow(100,r?-1:1);break;case"esriKilometers":t*=Math.pow(1e3,r?-1:1);break;case"esriDecimeters":t/=Math.pow(10,r?-1:1)}return t}function c(t,e){return u(t,e,!0)}function l(t){return t._associatedStop}Object.defineProperty(e,"__esModule",{value:!0}),e.useSpatiallyLocalTime=function(t,e){return!(!l(t)||!e||-22091616e5===t.get("attributes.ETA"))},e.toSpatiallyLocalTimeString=function(t,e,i,a){var n=new Date(i),s=new Date(n.getTime()+60*n.getTimezoneOffset()*1e3),o=r.formatDate(s,{hour:"2-digits",minute:"2-digits",hour12:!1});if(e){var u=(i-e)/1e3/60/60,c=Math.floor(u),l=60*(u-c),p=r.formatNumber(c,{minimumIntegerDigits:2}),m=r.formatNumber(l,{minimumIntegerDigits:2});return o+" "+t.gmt+(c<0?"":"+")+p+m}return a?r.formatDate(s,{hour:"numeric",minute:"numeric"}):o},e.isTimeUnits=a,e.convertCostValue=n,e.toMinutes=s,e.fromMinutes=o,e.toMeters=u,e.fromMeters=c,e.isFirstStop=function(t){var e=t&&t.attributes||{};return null===(e.ArriveCurbApproach||null)&&null!==(e.DepartCurbApproach||null)},e.isMiddleStop=function(t){var e=t&&t.attributes||{};return null!==(e.ArriveCurbApproach||null)&&null!==(e.DepartCurbApproach||null)},e.isLastStop=function(t){var e=t&&t.attributes||{};return null!==(e.ArriveCurbApproach||null)&&null===(e.DepartCurbApproach||null)},e.isWaypoint=function(t){return t&&t.get("attributes.isWaypoint")},e.isStopLocated=function(t){var e=t&&t.get("attributes.Status");return!e||6===e},e.getAssociatedStop=l,e.formatTime=function(t,e){void 0===e&&(e={});var r=e.unit;return function(t,e){e=e.toLowerCase();var r="days"===e?24*t:"hours"===e?t:"minutes"===e?t/60:t/60/60;if(r<1)return Math.floor(60*r)+"m";var a=r%1*60;return Math.floor(r)+":"+i.padStart(""+Math.floor(a),2,"0")+"h"}(t,void 0===r?"minutes":r)},e.formatDistance=function(t,e,i){void 0===i&&(i={});var a=i.fromUnits,s=i.toUnits,o=n(e,a,s);if(!o)return"";var u=t.units[s],c=u?u.abbr:s.replace("esri","").toLowerCase();return r.substitute(t.distanceTemplate,{distance:o,units:c},{format:{distance:{type:"number",intlOptions:{minimumFractionDigits:2,maximumFractionDigits:2}}}})}}));