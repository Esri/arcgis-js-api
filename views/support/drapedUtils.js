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

define(["require","exports","../../geometry","../../core/maybe","../../core/unitUtils","../../renderers/support/clickToleranceUtils"],(function(e,r,t,a,n,i){"use strict";function s(e,r,a,i){var s;if(void 0===i&&(i=new t.Extent),"2d"===a.type)s=r*a.resolution;else if("3d"===a.type){var o=a.basemapTerrain,l=o.overlayManager,c=l?l.overlayPixelSizeInMapUnits(e):1;s=o&&!o.spatialReference.equals(a.spatialReference)?n.getMetersPerUnitForSR(o.spatialReference)/n.getMetersPerUnitForSR(a.spatialReference):r*c}var u=e.x-s,p=e.y-s,y=e.x+s,m=e.y+s,f=a.spatialReference;return i.xmin=Math.min(u,y),i.ymin=Math.min(p,m),i.xmax=Math.max(u,y),i.ymax=Math.max(p,m),i.spatialReference=f,i}Object.defineProperty(r,"__esModule",{value:!0}),r.intersectsDrapedGeometry=r.createQueryGeometry=void 0,r.createQueryGeometry=s,r.intersectsDrapedGeometry=function(e,r,t){var n=t.toMap(e);return a.isNone(n)?null:s(n,i.calculateTolerance(),t,o).intersects(r)?n:null};var o=new t.Extent}));