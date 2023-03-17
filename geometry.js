/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./core/accessorSupport/ensureType","./geometry/Extent","./geometry/Geometry","./geometry/Multipoint","./geometry/Point","./geometry/Polygon","./geometry/Polyline","./geometry/SpatialReference","./geometry/support/typeUtils","./geometry/support/jsonUtils"],(function(e,t,o,r,y,n,i,p,a,l,m){"use strict";function s(e){return e instanceof r}const u={base:r,key:"type",typeMap:{extent:o,multipoint:y,point:n,polyline:p,polygon:i}},c=t.ensureOneOfType(u);e.Extent=o,e.BaseGeometry=r,e.Multipoint=y,e.Point=n,e.Polygon=i,e.Polyline=p,e.SpatialReference=a,e.featureGeometryTypeKebabDictionary=l.featureGeometryTypeKebabDictionary,e.typeKebabDictionary=l.typeKebabDictionary,e.fromJSON=m.fromJSON,e.ensureType=c,e.geometryTypes=u,e.isGeometry=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
