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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/compilerUtils","../../../../geometry/support/aaBoundingBox","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil"],function(e,r,n,t,c,a){function i(e){switch(e){case"sphere":case"cube":case"diamond":case"cylinder":case"cone":case"inverted-cone":case"tetrahedron":return!0}return!1}function o(e){switch(e){case"sphere":case"cube":case"diamond":return d;case"cylinder":case"cone":case"inverted-cone":return m;case"tetrahedron":return l;default:n.neverReached(e)}}function s(e){switch(e){case"sphere":return a.createPolySphereGeometry(.5,2,!0);case"cube":return a.createBoxGeometry(1);case"cylinder":return a.createCylinderGeometry(1,.5,32,[0,0,1],[0,0,.5]);case"cone":return a.cgToGIS(a.createConeGeometry(1,.5,15,!1));case"inverted-cone":return a.cgToGIS(a.createConeGeometry(1,.5,15,!0));case"tetrahedron":return a.cgToGIS(a.createTetrahedronGeometry(1));case"diamond":return a.cgToGIS(a.createDiamondGeometry(1));default:n.neverReached(e)}}function u(e,r,t){var i=function(e,n,i){return void 0===i&&(i=!1),{levels:e.map(function(e,o){var s=n(e.tesselation);return i&&a.cgToGIS(s),{components:[{geometry:new c(s,t+"_lod"+o),material:r}],faceCount:s.indexCount/3,minScreenSpaceRadius:e.minScreenSpaceRadius}})}};switch(e){case"sphere":return i([{tesselation:0,minScreenSpaceRadius:0},{tesselation:1,minScreenSpaceRadius:8},{tesselation:2,minScreenSpaceRadius:16},{tesselation:3,minScreenSpaceRadius:50},{tesselation:4,minScreenSpaceRadius:250}],function(e){return a.createPolySphereGeometry(.5,e,!0)});case"cube":return i([{tesselation:0,minScreenSpaceRadius:0}],function(e){return a.createBoxGeometry(1)});case"cone":return i(S,function(e){return a.createConeGeometry(1,.5,e,!1)},!0);case"inverted-cone":return i(S,function(e){return a.createConeGeometry(1,.5,e,!0)},!0);case"cylinder":return i(S,function(e){return a.createCylinderGeometry(1,.5,e,[0,0,1],[0,0,.5])});case"tetrahedron":return i([{tesselation:0,minScreenSpaceRadius:0}],function(e){return a.createTetrahedronGeometry(1)},!0);case"diamond":return i([{tesselation:0,minScreenSpaceRadius:0}],function(e){return a.createDiamondGeometry(1)},!0);default:n.neverReached(e)}}Object.defineProperty(r,"__esModule",{value:!0});var d=t.fromValues(-.5,-.5,-.5,.5,.5,.5),m=t.fromValues(-.5,-.5,0,.5,.5,1),l=t.fromValues(-.5,-.5,0,.5,.5,.5);r.isValidPrimitive=i,r.primitiveBoundingBox=o,r.primitiveGeometryData=s,r.primitiveLodResources=u;var S=[{tesselation:6,minScreenSpaceRadius:0},{tesselation:18,minScreenSpaceRadius:7},{tesselation:64,minScreenSpaceRadius:65}]});