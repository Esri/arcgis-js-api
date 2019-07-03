// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function a(e){return null!=e.__accessorMetadata__}function r(e){return a(e)&&null!=o(e).properties}function n(e,t){return r(e)&&null!=s(e)[t]}function u(e,t){return a(e)&&null!=o(e).parameters&&null!=o(e).parameters[t]}function o(e){return e.__accessorMetadata__||Object.defineProperty(e,"__accessorMetadata__",{value:{},enumerable:!0,configurable:!0,writable:!0}),e.__accessorMetadata__}function s(e){var t=o(e),a=t.properties;return a||(a=t.properties={}),a}function i(e,t){var a=s(e),r=a[t];return r||(r=a[t]={}),r}function c(e,t,a){s(e)[t]=a}function d(e,t){var a=o(e),r=a.parameters;r||(r=a.parameters={});var n=r[t];return n||(n=[],r[t]=n),n}function p(e,t,a){var r=d(e,t)[a];return r||(d(e,t)[a]=r={index:a}),r}Object.defineProperty(t,"__esModule",{value:!0}),t.hasMetadata=a,t.hasPropertiesMetadata=r,t.hasPropertyMetadata=n,t.hasParametersMetadata=u,t.getMetadata=o,t.getPropertiesMetadata=s,t.getPropertyMetadata=i,t.setPropertyMetadata=c,t.getParametersMetadata=d,t.getParameterMetadata=p});