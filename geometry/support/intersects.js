/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./intersectsBase"],(function(e,t){"use strict";function n(e){return"mesh"===e?t.extentIntersectsExtent:t.getFeatureExtentIntersector(e)}e.extentIntersectsExtent=t.extentIntersectsExtent,e.extentIntersectsMultipoint=t.extentIntersectsMultipoint,e.extentIntersectsPoint=t.extentIntersectsPoint,e.extentIntersectsPolygon=t.extentIntersectsPolygon,e.extentIntersectsPolyline=t.extentIntersectsPolyline,e.extentIntersectsRings=t.extentIntersectsRings,e.getFeatureExtentIntersector=t.getFeatureExtentIntersector,e.isSelfIntersecting=t.isSelfIntersecting,e.segmentIntersects=t.segmentIntersects,e.getExtentIntersector=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
