// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred"],(function(e,n,r){"use strict";function t(e){void 0===e&&(e=void 0);var n=new r;return n.resolve(e),n.promise}function o(e){return function(e){return e&&"function"==typeof e.then}(e)?e:t(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.when=n.resolve=n.isPromiseLike=void 0,n.isPromiseLike=function(e){return e&&"function"==typeof e.then},n.resolve=t,n.when=o,n.create=function(e,n){var t=new r(n);return e((function(e){return o(e).then(t.resolve)}),t.reject),t.promise}}));