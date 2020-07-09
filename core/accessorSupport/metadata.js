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

define(["require","exports","../lang","./utils"],(function(e,t,r,a){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){this.autoDestroy=!1,this.properties=e};function n(e){var t=e.constructor.__accessorMetadata__,a=Object.getPrototypeOf(e).constructor.__accessorMetadata__;if(t){if(t===a){var n=Object.create(a.properties);for(var c in n)n[c]=r.clone(n[c]);(t=new o(n)).autoDestroy=a.autoDestroy,Object.defineProperty(e.constructor,"__accessorMetadata__",{value:t,enumerable:!1,configurable:!1,writable:!1})}}else Object.defineProperty(e.constructor,"__accessorMetadata__",{value:new o({}),enumerable:!1,configurable:!1,writable:!1});return e.constructor.__accessorMetadata__}function c(e){return n(e).properties}t.ClassMetadata=o,t.getOwnClassMetadata=n,t.getOwnPropertiesMetadata=c,t.getOwnPropertyMetadata=function(e,t){var r=c(e),a=r[t];return a||(a=r[t]={}),a},t.setPropertyMetadata=function(e,t,r){c(e)[t]=r},t.merge=function(e,t){return a.merge(e,t,_)},t.mergeProperty=function(e,t){return a.merge(e,t,u)};var s=/^[^.]+\.(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function u(e){return s.test(e)?"replace":"merge"}var i=/^properties\./;function _(e){return i.test(e)?u(e.slice(11)):"merge"}}));