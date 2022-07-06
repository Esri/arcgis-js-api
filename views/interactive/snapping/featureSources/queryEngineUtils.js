/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{EdgeSnappingCandidate as e}from"../candidates/EdgeSnappingCandidate.js";import{VertexSnappingCandidate as t}from"../candidates/VertexSnappingCandidate.js";function o(o,n,r){switch(o.type){case"edge":return new e({coordinateHelper:n,edgeStart:n.pointToVector(o.start),edgeEnd:n.pointToVector(o.end),targetPoint:n.pointToVector(o.target),objectId:o.objectId,elevationInfo:r});case"vertex":return new t({coordinateHelper:n,targetPoint:n.pointToVector(o.target),objectId:o.objectId,elevationInfo:r})}}export{o as convertSnappingCandidate};
