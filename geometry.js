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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./geometry/Extent","./geometry/Geometry","./geometry/Mesh","./geometry/Multipoint","./geometry/Point","./geometry/Polygon","./geometry/Polyline","./geometry/ScreenPoint","./geometry/SpatialReference","./geometry/support/jsonUtils"],function(e,t,o,n,i,r,y,l,m,p,g,s){function P(e){return e instanceof t.BaseGeometry}Object.defineProperty(t,"__esModule",{value:!0}),t.Extent=o,t.BaseGeometry=n,t.Mesh=i,t.Multipoint=r,t.Point=y,t.Polygon=l,t.Polyline=m,t.ScreenPoint=p,t.SpatialReference=g,t.isGeometry=P,t.fromJSON=s.fromJSON,t.typeMap={point:t.Point,extent:t.Extent,polyline:t.Polyline,polygon:t.Polygon,multipoint:t.Multipoint,mesh:t.Mesh},t.typeMap});