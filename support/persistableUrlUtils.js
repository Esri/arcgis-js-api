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

define(["require","exports","../core/maybe","../core/urlUtils"],(function(e,r,t,a){"use strict";function o(e,r){var t=r&&r.url&&r.url.path;if(e&&t&&(e=a.makeAbsolute(e,t,{preserveProtocolRelative:!0}),r.portalItem&&r.readResourcePaths)){var o=a.makeRelative(e,r.portalItem.itemUrl);s.test(o)&&r.readResourcePaths.push(r.portalItem.resourceFromPath(o).path)}return u(e,r&&r.portal)}function l(e,r){if(!e)return e;!a.isAbsolute(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);var t=a.makeAbsolute(e);if(r){var o=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;if(o){var l=u(o,r.portal);(t=a.makeRelative(u(t,r.portal),l,l))!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(t)}}return t=function(e,r){if(r&&!r.isPortal&&r.urlKey&&r.customBaseUrl)return a.changeDomain(e,r.urlKey+"."+r.customBaseUrl,r.portalHostname);return e}(t,r&&r.portal),a.isAbsolute(t)&&(t=a.normalize(t)),t}Object.defineProperty(r,"__esModule",{value:!0}),r.itemIdFromResourceUrl=r.write=r.read=r.toJSON=r.fromJSON=void 0,r.fromJSON=o,r.toJSON=l,r.read=function(e,r,t){return o(e,t)},r.write=function(e,r,t,a){var o=l(e,a);void 0!==o&&(r[t]=o)};var i=/\/items\/([^\/]+)\/resources\//,s=/^\.\/resources\//;function u(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;var t=r.urlKey+"."+r.customBaseUrl;return a.hasSameOrigin(a.appUrl,a.appUrl.scheme+"://"+t)?a.changeDomain(e,r.portalHostname,t):a.changeDomain(e,t,r.portalHostname)}r.itemIdFromResourceUrl=function(e){var r=t.isSome(e)?e.match(i):null;return t.isSome(r)?r[1]:null}}));