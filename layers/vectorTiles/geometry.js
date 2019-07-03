// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports","./geometry/Extent","./geometry/Geometry","./geometry/Mesh","./geometry/Multipoint","./geometry/Point","./geometry/Polygon","./geometry/Polyline","./geometry/ScreenPoint","./geometry/SpatialReference","./geometry/support/jsonUtils"],function(e,t,o,r,n,i,y,m,l,g,s,f){function u(e){return e instanceof t.BaseGeometry}Object.defineProperty(t,"__esModule",{value:!0}),t.Extent=o,t.BaseGeometry=r,t.Mesh=n,t.Multipoint=i,t.Point=y,t.Polygon=m,t.Polyline=l,t.ScreenPoint=g,t.SpatialReference=s,t.isGeometry=u,t.fromJSON=f.fromJSON});