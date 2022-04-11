// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){function a(e){return null!=e.__accessorMetadata__}function r(e){return a(e)&&null!=n(e).properties}function n(e){return e.__accessorMetadata__||Object.defineProperty(e,"__accessorMetadata__",{value:{},enumerable:!0,configurable:!0,writable:!0}),e.__accessorMetadata__}function u(e){var t=n(e),a=t.properties;return a||(a=t.properties={}),a}function o(e,t){var a=n(e),r=a.parameters;r||(r=a.parameters={});var u=r[t];return u||(u=[],r[t]=u),u}Object.defineProperty(t,"__esModule",{value:!0}),t.hasMetadata=a,t.hasPropertiesMetadata=r,t.hasPropertyMetadata=function(e,t){return r(e)&&null!=u(e)[t]},t.hasParametersMetadata=function(e,t){return a(e)&&null!=n(e).parameters&&null!=n(e).parameters[t]},t.getMetadata=n,t.getPropertiesMetadata=u,t.getPropertyMetadata=function(e,t){var a=u(e),r=a[t];return r||(r=a[t]={}),r},t.setPropertyMetadata=function(e,t,a){u(e)[t]=a},t.getParametersMetadata=o,t.getParameterMetadata=function(e,t,a){var r=o(e,t)[a];return r||(o(e,t)[a]=r={index:a}),r}}));