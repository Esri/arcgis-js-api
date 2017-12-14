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

define(["require","exports","dojo/i18n!./nls/Units","dojo/number"],function(e,n,i,t){function r(e,n,i){return e*l[i].units[n].inBaseUnits}function s(e,n,i){return e/l[i].units[n].inBaseUnits}var a,u={millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1853.184},"us-feet":{inBaseUnits:1200/3937}},o=function(e){return e*e},c={"square-millimeters":{inBaseUnits:o(.001)},"square-centimeters":{inBaseUnits:o(.01)},"square-decimeters":{inBaseUnits:o(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:o(1e3)},"square-inches":{inBaseUnits:o(.0254)},"square-feet":{inBaseUnits:o(.3048)},"square-yards":{inBaseUnits:o(.9144)},"square-miles":{inBaseUnits:o(1609.344)},acres:{inBaseUnits:.0015625*o(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}},U=function(e){return e*e*e},f={liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*U(.001)},"cubic-centimeters":{inBaseUnits:1e3*U(.01)},"cubic-decimeters":{inBaseUnits:1e3*U(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*U(1e3)},"cubic-inches":{inBaseUnits:1e3*U(.0254)},"cubic-feet":{inBaseUnits:1e3*U(.3048)},"cubic-yards":{inBaseUnits:1e3*U(.9144)},"cubic-miles":{inBaseUnits:1e3*U(1609.344)}},m={radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}},l={length:{baseUnit:"meters",units:u},area:{baseUnit:"square-meters",units:c},volume:{baseUnit:"liters",units:f},angle:{baseUnit:"radians",units:m}},B=function(){var e={};for(var n in l)for(var i in l[n].units)e[i]=n;return e}();return function(e){function n(e){var n=B[e];if(n)return n;throw new Error("unknown measure")}function a(e){return l[e].baseUnit}function u(e){return a(n(e))}function o(e,i){return void 0===i&&(i=null),i=i||n(e),l[i].baseUnit===e}function c(e,i,t){if(i===t)return e;var a=n(i);if(a!==n(t))throw new Error("incompatible units");var u=o(i,a)?e:r(e,i,a);return o(t,a)?u:s(u,t,a)}function U(e,n){return i.units[e][n]}function f(e,n,i,r){void 0===i&&(i=2),void 0===r&&(r="abbr");var s=t.format(e,{places:i});return s+" "+U(n,r)}function m(e,n){var i=c(e,n,"meters");return 3e3>i?"meters":"kilometers"}function v(e,n){var i=c(e,n,"meters");return 1e5>i?"meters":"kilometers"}function d(e,n,i,t){void 0===i&&(i=2),void 0===t&&(t="abbr");var r=m(e,n);return f(c(e,n,r),r,i,t)}function b(e,n,i,t){void 0===i&&(i=2),void 0===t&&(t="abbr");var r=v(e,n);return f(c(e,n,r),r,i,t)}function h(e,n){var i=c(e,n,"feet");return 1e3>i?"feet":"miles"}function g(e,n){var i=c(e,n,"feet");return 1e5>i?"feet":"miles"}function p(e,n,i,t){void 0===i&&(i=2),void 0===t&&(t="abbr");var r=h(e,n);return f(c(e,n,r),r,i,t)}function q(e,n,i,t){void 0===i&&(i=2),void 0===t&&(t="abbr");var r=g(e,n);return f(c(e,n,r),r,i,t)}function M(n,i,t){void 0===t&&(t=2);var r=e.convertUnit(n,i,"degrees"),s=r-Math.floor(r);r-=s,s*=60;var a=s-Math.floor(s);return s-=a,a*=60,r.toFixed()+"° "+s.toFixed()+"' "+a.toFixed(t)+'"'}e.measureForUnit=n,e.baseUnitForMeasure=a,e.baseUnitForUnit=u,e.isBaseUnit=o,e.convertUnit=c,e.unitName=U,e.formatDecimal=f,e.preferredMetricLengthUnit=m,e.preferredMetricVerticalLengthUnit=v,e.formatMetricLength=d,e.formatMetricVerticalLength=b,e.preferredImperialLengthUnit=h,e.preferredImperialVerticalLengthUnit=g,e.formatImperialLength=p,e.formatImperialVerticalLength=q,e.formatDMS=M}(a||(a={})),a});