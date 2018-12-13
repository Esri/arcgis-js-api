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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../geometry/Extent","../../../../geometry/support/scaleUtils","../../../../layers/graphics/dehydratedFeatures","../../../../renderers/support/clickToleranceUtils"],function(e,r,a,t,n,i,p,s){function c(e,r,a){var t=a.get("basemapTerrain"),p=a.get("basemapTerrain.overlayManager"),s=p?p.overlayPixelSizeInMapUnits(e):1,c=t&&!t.spatialReference.equals(a.spatialReference)?i.getMetersPerUnitForSR(t.spatialReference)/i.getMetersPerUnitForSR(a.spatialReference):r*s,o=e.clone().offset(-c,-c),l=e.clone().offset(c,c),u=a.spatialReference;return new n({xmin:Math.min(o.x,l.x),ymin:Math.min(o.y,l.y),xmax:Math.max(o.x,l.x),ymax:Math.max(o.y,l.y),spatialReference:u})}function o(e){var r=e.area,a=e.view,t=e.loadedGraphics,n=e.popupTemplate,i=e.layer,o=e.clientGraphics,l=s.calculateTolerance(),u=c(r,l,a),y=[];return t.forEach(function(e){e.visible&&u.intersects(e.geometry)&&(n||p.isHydratedGraphic(e)&&e.popupTemplate)&&y.push(p.hydrateGraphic(e,i))}),o&&o.length?o.concat(y):y}Object.defineProperty(r,"__esModule",{value:!0}),r.createQueryGeometry=c,r.queryDrapedGraphics=o});