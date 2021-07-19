/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../candidates/EdgeSnappingCandidate","../candidates/VertexSnappingCandidate"],(function(e,t,n){"use strict";function a(e,a){switch(e.type){case"edge":return new t.EdgeSnappingCandidate({coordinateHelper:a,edgeStart:a.fromPoint(e.start),edgeEnd:a.fromPoint(e.end),targetPoint:a.fromPoint(e.target),objectId:e.objectId});case"vertex":return new n.VertexSnappingCandidate({coordinateHelper:a,targetPoint:a.fromPoint(e.target),objectId:e.objectId})}}e.convertSnappingCandidate=a,Object.defineProperty(e,"__esModule",{value:!0})}));
