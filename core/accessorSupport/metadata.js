// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(e,a){function t(e){return null!=e.__accessorMetadata__}function r(e){return t(e)&&null!=o(e).properties}function n(e,a){return r(e)&&null!=s(e)[a]}function u(e,a){return t(e)&&null!=o(e).parameters&&null!=o(e).parameters[a]}function o(e){return e.__accessorMetadata__||Object.defineProperty(e,"__accessorMetadata__",{value:{},enumerable:!0,configurable:!0,writable:!0}),e.__accessorMetadata__}function s(e){var a=o(e),t=a.properties;return t||(t=a.properties={}),t}function i(e,a){var t=s(e),r=t[a];return r||(r=t[a]={}),r}function c(e,a,t){var r=s(e);r[a]=t}function d(e,a){var t=o(e),r=t.parameters;r||(r=t.parameters={});var n=r[a];return n||(n=[],r[a]=n),n}function p(e,a,t){var r=d(e,a)[t];return r||(d(e,a)[t]=r={index:t}),r}a.hasMetadata=t,a.hasPropertiesMetadata=r,a.hasPropertyMetadata=n,a.hasParametersMetadata=u,a.getMetadata=o,a.getPropertiesMetadata=s,a.getPropertyMetadata=i,a.setPropertyMetadata=c,a.getParametersMetadata=d,a.getParameterMetadata=p});