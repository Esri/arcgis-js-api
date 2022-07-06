/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{extentIntersectsExtent as e,getFeatureExtentIntersector as t}from"./intersectsBase.js";export{extentIntersectsExtent,extentIntersectsMultipoint,extentIntersectsPoint,extentIntersectsPolygon,extentIntersectsPolyline,extentIntersectsRings,getFeatureExtentIntersector,isSelfIntersecting,segmentIntersects}from"./intersectsBase.js";function n(n){return"mesh"===n?e:t(n)}export{n as getExtentIntersector};
