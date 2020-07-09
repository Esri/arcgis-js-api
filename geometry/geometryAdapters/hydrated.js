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

define(["require","exports","../Extent","../Multipoint","../Point","../Polygon","../Polyline"],(function(e,n,t,a,r,i,o){Object.defineProperty(n,"__esModule",{value:!0}),n.hydratedAdapter={convertToGEGeometry:function(e,n){if(null==n)return null;var t="cache"in n?n.cache._geVersion:void 0;null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t));return t},exportPoint:function(e,n,t){var a=e.hasZ(n),i=e.hasM(n),o=new r({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});a&&(o.z=e.getPointZ(n));i&&(o.m=e.getPointM(n));return o.cache._geVersion=n,o},exportPolygon:function(e,n,t){var a=new i({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){var a=new o({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){var r=new a({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return r.cache._geVersion=n,r},exportExtent:function(e,n,a){var r=e.hasZ(n),i=e.hasM(n),o=new t({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:a});if(r){var s=e.getZExtent(n);o.zmin=s.vmin,o.zmax=s.vmax}if(i){var c=e.getMExtent(n);o.mmin=c.vmin,o.mmax=c.vmax}return o.cache._geVersion=n,o}}}));