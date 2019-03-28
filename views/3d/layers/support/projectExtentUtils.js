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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/promiseUtils","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],function(e,r,t,o,l){function n(e){var r=e.view,n=r.spatialReference,c=e.layer.fullExtent,i=c&&c.spatialReference;return i?i.equals(n)?t.resolve(c.clone()):o.canProject(i,n)?t.resolve(o.project(c,n)):e.view.state.isLocal?l.projectGeometry(c,n,e.layer.portalItem).then(function(r){if(!e.destroyed&&r)return r}).catch(function(){return null}):t.resolve(null):t.resolve(null)}Object.defineProperty(r,"__esModule",{value:!0}),r.toViewIfLocal=n});