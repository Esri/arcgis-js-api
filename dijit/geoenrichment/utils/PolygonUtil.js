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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/geometry/Extent","esri/geometry/Polygon"],function(r,t,e){var n={getNumberOfPoints:function(r){if(!r)return 0;Array.isArray(r)||(r=[r]);var t=0;return r.forEach(function(r){t+=n.getGeometryPointCount(r.geometry||r)}),t},getGeometryPointCount:function(r){if(!r)return 0;var t=0,e=r.rings||r.paths;return!e&&r.points&&(e=[r.points]),e?e.forEach(function(r){t+=r&&r.length||0}):t+="x"in r?1:2,t}};return n});