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

define(["require","exports","tslib","./core/accessorSupport/ensureType","./geometry/Extent","./geometry/Geometry","./geometry/Multipoint","./geometry/Point","./geometry/Polygon","./geometry/Polyline","./geometry/SpatialReference","./geometry/support/typeUtils","./geometry/support/jsonUtils"],(function(e,t,o,r,n,y,i,p,l,s,m,u,g){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ensureType=t.geometryTypes=t.isGeometry=t.SpatialReference=t.Polyline=t.Polygon=t.Point=t.Multipoint=t.BaseGeometry=t.Extent=void 0,t.Extent=n,t.BaseGeometry=y,t.Multipoint=i,t.Point=p,t.Polygon=l,t.Polyline=s,t.SpatialReference=m,o.__exportStar(u,t),t.isGeometry=function(e){return e instanceof y},Object.defineProperty(t,"fromJSON",{enumerable:!0,get:function(){return g.fromJSON}}),t.geometryTypes={base:y,key:"type",typeMap:{extent:n,multipoint:i,point:p,polyline:s,polygon:l}},t.ensureType=r.ensureOneOfType(t.geometryTypes)}));