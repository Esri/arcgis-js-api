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

define(["require","exports","./core/jsonMap","./core/accessorSupport/ensureType","./geometry/Extent","./geometry/Geometry","./geometry/Multipoint","./geometry/Point","./geometry/Polygon","./geometry/Polyline","./geometry/SpatialReference","./geometry/support/jsonUtils"],(function(e,o,t,r,i,n,y,p,l,m,s,u){Object.defineProperty(o,"__esModule",{value:!0}),o.Extent=i,o.BaseGeometry=n,o.Multipoint=y,o.Point=p,o.Polygon=l,o.Polyline=m,o.SpatialReference=s,o.isGeometry=function(e){return e instanceof n},o.fromJSON=u.fromJSON,o.typeKebabDictionary=t.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),o.isFeatureGeometryType=function(e){return"point"===e||"multipoint"===e||"polyline"===e||"polygon"===e},o.featureGeometryTypeKebabDictionary=t.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),o.geometryTypes={base:n,key:"type",typeMap:{extent:i,multipoint:y,point:p,polyline:m,polygon:l}},o.ensureType=r.ensureOneOfType(o.geometryTypes)}));