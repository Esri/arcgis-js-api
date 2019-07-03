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

define(["require","exports","./utils"],function(e,t,r){function a(e){return null!=e.__accessorMetadata__}function n(e){return a(e)&&null!=s(e).properties}function u(e,t){return n(e)&&null!=i(e)[t]}function o(e,t){return a(e)&&null!=s(e).parameters&&null!=s(e).parameters[t]}function s(e){return e.__accessorMetadata__||Object.defineProperty(e,"__accessorMetadata__",{value:{},enumerable:!0,configurable:!0,writable:!0}),e.__accessorMetadata__}function i(e){var t=s(e),r=t.properties;return r||(r=t.properties={}),r}function c(e,t){var r=i(e),a=r[t];return a||(a=r[t]={}),a}function p(e,t,r){i(e)[t]=r}function l(e,t){var r=s(e),a=r.parameters;a||(a=r.parameters={});var n=a[t];return n||(n=[],a[t]=n),n}function d(e,t,r){var a=l(e,t)[r];return a||(l(e,t)[r]=a={index:r}),a}function f(e,t){return r.merge(e,t,m)}function _(e,t){return r.merge(e,t,M)}function M(e){return g.test(e)?"replace":"merge"}function m(e){return P.test(e)?M(e.slice(11)):"merge"}Object.defineProperty(t,"__esModule",{value:!0}),t.hasMetadata=a,t.hasPropertiesMetadata=n,t.hasPropertyMetadata=u,t.hasParametersMetadata=o,t.getMetadata=s,t.getPropertiesMetadata=i,t.getPropertyMetadata=c,t.setPropertyMetadata=p,t.getParametersMetadata=l,t.getParameterMetadata=d,t.merge=f,t.mergeProperty=_;var g=/^[^.]+\.(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/,P=/^properties\./});