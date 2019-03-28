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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../support/utils","./utils"],function(e,n,a,t){function r(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function i(e){return null!=e&&!isNaN(e)&&isFinite(e)}function u(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function l(e,n){var a=n||u(e),t=e.valueUnit||"unknown";return"unknown"===a?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===t?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}function s(e,n,a){return null==e?null:r(e)?e.getSize(n,a):i(e)?e:null}function o(e,n,a){return i(a)&&e>a?a:i(n)&&e<n?n:e}function c(e,n,a,t){return e+(s(n.minSize,a,t)||n.minDataValue)}function m(e,n,a){var t=e.stops,r=t&&t.length&&t[0].size;return null==r&&(r=e.minSize),s(r,n,a)}function p(e,n,a,t){var r=(e-n.minDataValue)/(n.maxDataValue-n.minDataValue),i=s(n.minSize,a,t),u=s(n.maxSize,a,t),l=t&&t.shape;if(e<=n.minDataValue)return i;if(e>=n.maxDataValue)return u;if("area"===n.scaleBy&&l){var o="circle"===l,c=o?S*Math.pow(i/2,2):i*i,m=o?S*Math.pow(u/2,2):u*u,p=c+r*(m-c);return o?2*Math.sqrt(p/S):Math.sqrt(p)}return i+r*(u-i)}function f(e,n,a,t){var r=t&&t.shape,i=e/n.minDataValue,u=s(n.minSize,a,t),l=s(n.maxSize,a,t),c=null;return c="circle"===r?2*Math.sqrt(i*Math.pow(u/2,2)):"square"===r||"diamond"===r||"image"===r?Math.sqrt(i*Math.pow(u,2)):i*u,o(c,u,l)}function d(e,n,a,r,i){var u=t.lookupData(e,i),l=u[0],o=u[1],c=u[2];if(l===o)return s(n.stops[l].size,a,r);var m=s(n.stops[l].size,a,r);return m+(s(n.stops[o].size,a,r)-m)*c}function z(e,n,t,r){var i=r&&r.resolution?r.resolution:1,u=i*a.meterIn[n.valueUnit],l=s(n.minSize,t,r),c=s(n.maxSize,t,r),m=n.valueRepresentation,p=null;return p="area"===m?2*Math.sqrt(e/S)/u:"radius"===m||"distance"===m?2*e/u:e/u,o(p,l,c)}function V(e){return e}function v(e,n,a,t,r){switch(n.transformationType){case"additive":return c(e,n,a,t);case"constant":return m(n,a,t);case"clamped-linear":return p(e,n,a,t);case"proportional":return f(e,n,a,t);case"stops":return d(e,n,a,t,r);case"real-world-size":return z(e,n,a,t);case"identity":return V(e);case"unknown":return null}}Object.defineProperty(n,"__esModule",{value:!0});var S=Math.PI;n.isSizeVariable=r,n.isValidNumber=i,n.getInputValueType=u,n.getTransformationType=l,n.getSizeFromNumberOrVariable=s,n.getSizeForValue=v});