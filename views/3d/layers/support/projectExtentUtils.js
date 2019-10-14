// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/asyncUtils","../../../../core/promiseUtils","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],function(e,r,t,o,l,n){function s(e){var r=e.view,s=r.spatialReference,c=e.layer.fullExtent,a=c&&c.spatialReference;return a?a.equals(s)?o.resolve(c.clone()):l.canProject(a,s)?o.resolve(l.project(c,s)):e.view.state.isLocal?t.safeCast(n.projectGeometry(c,s,e.layer.portalItem).then(function(r){return!e.destroyed&&r?r:void 0}).catch(function(){return null})):o.resolve(null):o.resolve(null)}Object.defineProperty(r,"__esModule",{value:!0}),r.toViewIfLocal=s});