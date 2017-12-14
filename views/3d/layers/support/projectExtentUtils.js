// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../portal/support/geometryServiceUtils","../../../../core/promiseUtils","../../../../geometry/support/webMercatorUtils"],function(e,t,r,l,o){function n(e){var t=e.view.spatialReference,n=e.layer.fullExtent&&e.layer.fullExtent.spatialReference;return!n||n.equals(t)||"local"!==e.view.viewingMode?l.resolve(null):o.canProject(n,t)?l.resolve(o.project(e.layer.fullExtent,t)):r.projectGeometry(e.layer.fullExtent,t,e.layer.portalItem).then(function(t){return!e.destroyed&&t?t:void 0}).otherwise(function(){return null})}Object.defineProperty(t,"__esModule",{value:!0}),t.toView=n});