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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../geometry","../../../../core/maybe","../../../../core/unitUtils","../../../../renderers/support/clickToleranceUtils"],function(e,r,t,a,n,i,s,l){function o(e,r,t){var a=t.get("basemapTerrain"),i=t.get("basemapTerrain.overlayManager"),l=i?i.overlayPixelSizeInMapUnits(e):1,o=a&&!a.spatialReference.equals(t.spatialReference)?s.getMetersPerUnitForSR(a.spatialReference)/s.getMetersPerUnitForSR(t.spatialReference):r*l,c=e.x-o,p=e.y-o,u=e.x+o,m=e.y+o,x=t.spatialReference;return new n.Extent({xmin:Math.min(c,u),ymin:Math.min(p,m),xmax:Math.max(c,u),ymax:Math.max(p,m),spatialReference:x})}function c(e,r,t){var a=t.toMap(e);return i.isNone(a)?null:o(a,l.calculateTolerance(),t).intersects(r)?a:null}Object.defineProperty(r,"__esModule",{value:!0}),r.createQueryGeometry=o,r.intersectsDrapedGeometry=c});