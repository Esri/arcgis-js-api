/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./intersectsBase"],(function(t,e){"use strict";function n(t){return"mesh"===t?e.extentIntersectsExtent:e.getFeatureExtentIntersector(t)}t.extentIntersectsExtent=e.extentIntersectsExtent,t.extentIntersectsMultipoint=e.extentIntersectsMultipoint,t.extentIntersectsPoint=e.extentIntersectsPoint,t.extentIntersectsPolygon=e.extentIntersectsPolygon,t.extentIntersectsPolyline=e.extentIntersectsPolyline,t.extentIntersectsRings=e.extentIntersectsRings,t.getFeatureExtentIntersector=e.getFeatureExtentIntersector,t.isSelfIntersecting=e.isSelfIntersecting,t.segmentIntersects=e.segmentIntersects,t.getExtentIntersector=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
