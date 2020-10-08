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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../lang","../maybe","./utils"],(function(e,t,r,a,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mergeProperty=t.merge=t.setPropertyMetadata=t.getOwnPropertyMetadata=t.getOwnPropertiesMetadata=t.getOwnClassMetadata=t.ClassMetadata=void 0;var n=function(e){this.autoDestroy=!1,this.properties=e};function s(e){var t=e.constructor.__accessorMetadata__,o=Object.prototype.hasOwnProperty.call(e.constructor,"__accessorMetadata__");if(t){if(!o){var s=Object.create(t.properties),c=t.autoDestroy;for(var u in s)s[u]=r.clone(s[u]);(t=new n(s)).autoDestroy=c,Object.defineProperty(e.constructor,"__accessorMetadata__",{value:t,enumerable:!1,configurable:!0,writable:!0})}}else t=new n({}),Object.defineProperty(e.constructor,"__accessorMetadata__",{value:t,enumerable:!1,configurable:!0,writable:!0});return a.assumeNonNull(e.constructor.__accessorMetadata__)}function c(e){return s(e).properties}t.ClassMetadata=n,t.getOwnClassMetadata=s,t.getOwnPropertiesMetadata=c,t.getOwnPropertyMetadata=function(e,t){var r=c(e),a=r[t];return a||(a=r[t]={}),a},t.setPropertyMetadata=function(e,t,r){c(e)[t]=r},t.merge=function(e,t){return o.merge(e,t,l)},t.mergeProperty=function(e,t){return o.merge(e,t,i)};var u=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function i(e){return u.test(e)?"replace":"merge"}var p=/^properties\./;function l(e){return p.test(e)?i(e.slice(11)):"merge"}}));