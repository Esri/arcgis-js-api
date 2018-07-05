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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/support/aaBoundingBox","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil"],function(e,n,r,t,a){function c(e){switch(e){case"sphere":case"cube":case"diamond":case"cylinder":case"cone":case"inverted-cone":case"tetrahedron":return!0}return!1}function i(e){switch(e){case"sphere":case"cube":case"diamond":return u;case"cylinder":case"cone":case"inverted-cone":return d;case"tetrahedron":return m}}function o(e){switch(e){case"sphere":return a.createPolySphereGeometry(.5,2,!0);case"cube":return a.createBoxGeometry(1);case"cylinder":return a.createCylinderGeometry(1,.5,32,[0,0,1],[0,0,.5]);case"cone":return a.cgToGIS(a.createConeGeometry(1,.5,15,!1));case"inverted-cone":return a.cgToGIS(a.createConeGeometry(1,.5,15,!0));case"tetrahedron":return a.cgToGIS(a.createTetrahedronGeometry(1));case"diamond":return a.cgToGIS(a.createDiamondGeometry(1))}}function s(e,n,r){var c=function(e,c,i){return void 0===i&&(i=!1),{levels:e.map(function(e,o){var s=c(e.tesselation);return i&&a.cgToGIS(s),{components:[{geometry:new t(s,r+"_lod"+o),material:n}],faceCount:s.indexCount/3,minScreenSpaceRadius:e.minScreenSpaceRadius}})}};switch(e){case"sphere":return c([{tesselation:0,minScreenSpaceRadius:0},{tesselation:1,minScreenSpaceRadius:5},{tesselation:2,minScreenSpaceRadius:15}],function(e){return a.createPolySphereGeometry(.5,e,!0)});case"cube":return c([{tesselation:0,minScreenSpaceRadius:0}],function(e){return a.createBoxGeometry(1)});case"cone":return c([{tesselation:4,minScreenSpaceRadius:0},{tesselation:8,minScreenSpaceRadius:10},{tesselation:16,minScreenSpaceRadius:20}],function(e){return a.createConeGeometry(1,.5,e,!1)},!0);case"inverted-cone":return c([{tesselation:4,minScreenSpaceRadius:0},{tesselation:8,minScreenSpaceRadius:10},{tesselation:16,minScreenSpaceRadius:20}],function(e){return a.createConeGeometry(1,.5,e,!0)},!0);case"cylinder":return c([{tesselation:4,minScreenSpaceRadius:0},{tesselation:8,minScreenSpaceRadius:10},{tesselation:32,minScreenSpaceRadius:20}],function(e){return a.createCylinderGeometry(1,.5,e,[0,0,1],[0,0,.5])});case"tetrahedron":return c([{tesselation:0,minScreenSpaceRadius:0}],function(e){return a.createTetrahedronGeometry(1)},!0);case"diamond":return c([{tesselation:0,minScreenSpaceRadius:0}],function(e){return a.createDiamondGeometry(1)},!0)}}Object.defineProperty(n,"__esModule",{value:!0});var u=r.fromValues(-.5,-.5,-.5,.5,.5,.5),d=r.fromValues(-.5,-.5,0,.5,.5,1),m=r.fromValues(-.5,-.5,0,.5,.5,.5);n.isValidPrimitive=c,n.primitiveBoundingBox=i,n.primitiveGeometryData=o,n.primitiveLodResources=s});