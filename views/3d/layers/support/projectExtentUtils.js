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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../portal/support/geometryServiceUtils","../../../../core/promiseUtils","../../../../tasks/support/ProjectParameters","../../../../geometry/support/webMercatorUtils"],function(e,r,t,l,o,n){function a(e){var r=e.view.spatialReference,a=e.layer.fullExtent&&e.layer.fullExtent.spatialReference;return!a||a.equals(r)||"local"!==e.view.viewingMode?l.resolve(null):n.canProject(a,r)?l.resolve(n.project(e.layer.fullExtent,r)):t.create(e.layer.portalItem).then(function(t){var l=new o;return l.geometries=[e.layer.fullExtent],l.outSR=r,t.project(l)}).then(function(r){return!e.destroyed&&r&&Array.isArray(r)&&1===r.length?r[0]:void 0}).otherwise(function(){return null})}Object.defineProperty(r,"__esModule",{value:!0}),r.toView=a});