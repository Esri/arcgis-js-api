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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!../nls/Directions","dojo/number","dojo/_base/kernel","../../../moment","../../../core/lang"],function(e,t,r,a,i,o,n){function s(e,t){return!(!w(e)||!t||-22091616e5===e.get("attributes.ETA"))}function u(e,t,o){var n=new Date(t),s=new Date(n.getTime()+60*n.getTimezoneOffset()*1e3),u=i.date.locale.format(s,{selector:"time"}),c="";if(e){var l=(t-e)/1e3/60/60,p=Math.floor(l),f=60*(l-p);c=u+" "+(r.gmt+(p<0?"":"+")+a.format(p,{pattern:"00"})+a.format(f,{pattern:"00"}))}else c=o?i.date.locale.format(n,{selector:"time"}):u;return c}function c(e){return"esriNAUSeconds"===e||"esriNAUMinutes"===e||"esriNAUHours"===e||"esriNAUDays"===e}function l(e,t,r){var a=c(t),i=c(r),o=a?p(e,t):m(e,t);return a===i?i?f(o,r):b(o,r):e}function p(e,t,r){switch(e=e||0,t){case"esriNAUSeconds":e/=Math.pow(60,r?-1:1);break;case"esriNAUHours":e*=Math.pow(60,r?-1:1);break;case"esriNAUDays":e*=Math.pow(1440,r?-1:1)}return e}function f(e,t){return p(e,t,!0)}function m(e,t,r){switch(e=e||0,(t||"").replace("esriNAU","esri")){case"esriInches":e*=Math.pow(.0254,r?-1:1);break;case"esriFeet":e*=Math.pow(.3048,r?-1:1);break;case"esriYards":e*=Math.pow(.9144,r?-1:1);break;case"esriMiles":e*=Math.pow(1609.344,r?-1:1);break;case"esriNauticalMiles":e*=Math.pow(1851.995396854,r?-1:1);break;case"esriMillimeters":e/=Math.pow(1e3,r?-1:1);break;case"esriCentimeters":e/=Math.pow(100,r?-1:1);break;case"esriKilometers":e*=Math.pow(1e3,r?-1:1);break;case"esriDecimeters":e/=Math.pow(10,r?-1:1)}return e}function b(e,t){return m(e,t,!0)}function M(e){var t=e&&e.attributes||{};return null===(t.ArriveCurbApproach||null)&&null!==(t.DepartCurbApproach||null)}function h(e){var t=e&&e.attributes||{};return null!==(t.ArriveCurbApproach||null)&&null!==(t.DepartCurbApproach||null)}function d(e){var t=e&&e.attributes||{};return null!==(t.ArriveCurbApproach||null)&&null===(t.DepartCurbApproach||null)}function v(e){return e&&e.get("attributes.isWaypoint")}function A(e){var t=e&&e.get("attributes.Status");return!t||6===t}function w(e){return e._associatedStop}function S(e,t){void 0===t&&(t={});var r=t.unit;return k(e,void 0===r?"minutes":r)}function k(e,t){var r=o.duration(Math.round(e),t),a=r.asHours(),i=r.asMilliseconds();return a<1?o.utc(i).format("m[m]"):Math.floor(a)+o.utc(i).format(":mm[h]")}function U(e,t){void 0===t&&(t={});var i=t.fromUnits,o=t.toUnits,s=l(e,i,o);if(!s)return"";var u=r.units[o],c=u?u.abbr:o.replace("esri","").toLowerCase(),p=a.format(s,{locale:"root",places:2});return n.substitute({distance:p,units:c},r.distanceTemplate)}Object.defineProperty(t,"__esModule",{value:!0}),t.useSpatiallyLocalTime=s,t.toSpatiallyLocalTimeString=u,t.isTimeUnits=c,t.convertCostValue=l,t.toMinutes=p,t.fromMinutes=f,t.toMeters=m,t.fromMeters=b,t.isFirstStop=M,t.isMiddleStop=h,t.isLastStop=d,t.isWaypoint=v,t.isStopLocated=A,t.getAssociatedStop=w,t.formatTime=S,t.formatDistance=U});