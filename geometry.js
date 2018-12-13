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

define(["require","exports","./core/kebabDictionary","./geometry/Extent","./geometry/Geometry","./geometry/Mesh","./geometry/Multipoint","./geometry/Point","./geometry/Polygon","./geometry/Polyline","./geometry/ScreenPoint","./geometry/SpatialReference","./geometry/support/jsonUtils"],function(e,o,t,r,i,n,y,l,m,s,p,g,a){function P(e){return e instanceof o.BaseGeometry}Object.defineProperty(o,"__esModule",{value:!0}),o.Extent=r,o.BaseGeometry=i,o.Mesh=n,o.Multipoint=y,o.Point=l,o.Polygon=m,o.Polyline=s,o.ScreenPoint=p,o.SpatialReference=g,o.isGeometry=P,o.fromJSON=a.fromJSON,o.typeKebabDictionary=t.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),o.featureGeometryTypeKebabDictionary=t.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"})});