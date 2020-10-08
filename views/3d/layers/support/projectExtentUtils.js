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

define(["require","exports","../../../../core/promiseUtils","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],(function(e,t,r,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toViewIfLocal=void 0,t.toViewIfLocal=function(e){var t=e.view.spatialReference,i=e.layer.fullExtent,n=i&&i.spatialReference;return n?n.equals(t)?r.resolve(i.clone()):o.canProject(n,t)?r.resolve(o.project(i,t)):e.view.state.isLocal?l.projectGeometry(i,t,e.layer.portalItem).then((function(t){return!e.destroyed&&t?t:void 0})).catch((function(){return null})):r.resolve(null):r.resolve(null)}}));