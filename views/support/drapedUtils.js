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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../geometry","../../core/maybe","../../core/unitUtils","../../renderers/support/clickToleranceUtils"],(function(e,r,t,a,n,i){function l(e,r,a,i){var l;if(void 0===i&&(i=new t.Extent),"2d"===a.type)l=r*a.resolution;else if("3d"===a.type){var s=a.basemapTerrain,o=s.overlayManager,c=o?o.overlayPixelSizeInMapUnits(e):1;l=s&&!s.spatialReference.equals(a.spatialReference)?n.getMetersPerUnitForSR(s.spatialReference)/n.getMetersPerUnitForSR(a.spatialReference):r*c}var p=e.x-l,u=e.y-l,y=e.x+l,f=e.y+l,m=a.spatialReference;return i.xmin=Math.min(p,y),i.ymin=Math.min(u,f),i.xmax=Math.max(p,y),i.ymax=Math.max(u,f),i.spatialReference=m,i}Object.defineProperty(r,"__esModule",{value:!0}),r.createQueryGeometry=l,r.intersectsDrapedGeometry=function(e,r,t){var n=t.toMap(e);return a.isNone(n)?null:l(n,i.calculateTolerance(),t,s).intersects(r)?n:null};var s=new t.Extent}));