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

define(["require","exports","./utils"],(function(e,t,r){function a(e){return null!=e.__accessorMetadata__}function n(e){return a(e)&&null!=u(e).properties}function u(e){return e.__accessorMetadata__||Object.defineProperty(e,"__accessorMetadata__",{value:{},enumerable:!0,configurable:!0,writable:!0}),e.__accessorMetadata__}function o(e){var t=u(e),r=t.properties;return r||(r=t.properties={}),r}function s(e,t){var r=u(e),a=r.parameters;a||(a=r.parameters={});var n=a[t];return n||(n=[],a[t]=n),n}Object.defineProperty(t,"__esModule",{value:!0}),t.hasMetadata=a,t.hasPropertiesMetadata=n,t.hasPropertyMetadata=function(e,t){return n(e)&&null!=o(e)[t]},t.hasParametersMetadata=function(e,t){return a(e)&&null!=u(e).parameters&&null!=u(e).parameters[t]},t.getMetadata=u,t.getPropertiesMetadata=o,t.getPropertyMetadata=function(e,t){var r=o(e),a=r[t];return a||(a=r[t]={}),a},t.setPropertyMetadata=function(e,t,r){o(e)[t]=r},t.getParametersMetadata=s,t.getParameterMetadata=function(e,t,r){var a=s(e,t)[r];return a||(s(e,t)[r]=a={index:r}),a},t.merge=function(e,t){return r.merge(e,t,l)},t.mergeProperty=function(e,t){return r.merge(e,t,c)};var i=/^[^.]+\.(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function c(e){return i.test(e)?"replace":"merge"}var p=/^properties\./;function l(e){return p.test(e)?c(e.slice(11)):"merge"}}));