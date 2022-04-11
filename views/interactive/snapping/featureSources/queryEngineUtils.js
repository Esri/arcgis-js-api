/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../candidates/EdgeSnappingCandidate","../candidates/VertexSnappingCandidate"],(function(e,t,n){"use strict";function a(e,a){switch(e.type){case"edge":return new t.EdgeSnappingCandidate({coordinateHelper:a,edgeStart:a.pointToVector(e.start),edgeEnd:a.pointToVector(e.end),targetPoint:a.pointToVector(e.target),objectId:e.objectId});case"vertex":return new n.VertexSnappingCandidate({coordinateHelper:a,targetPoint:a.pointToVector(e.target),objectId:e.objectId})}}e.convertSnappingCandidate=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
