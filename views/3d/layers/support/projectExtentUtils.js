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

define(["require","exports","../../../../core/promiseUtils","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],(function(e,r,t,o,l){Object.defineProperty(r,"__esModule",{value:!0}),r.toViewIfLocal=function(e){var r=e.view.spatialReference,n=e.layer.fullExtent,c=n&&n.spatialReference;return c?c.equals(r)?t.resolve(n.clone()):o.canProject(c,r)?t.resolve(o.project(n,r)):e.view.state.isLocal?l.projectGeometry(n,r,e.layer.portalItem).then((function(r){return!e.destroyed&&r?r:void 0})).catch((function(){return null})):t.resolve(null):t.resolve(null)}}));