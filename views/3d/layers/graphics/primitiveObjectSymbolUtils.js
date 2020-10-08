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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/compilerUtils","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil"],(function(e,r,n,t,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.primitiveLodResources=r.primitiveGeometryData=r.isValidPrimitive=void 0,r.isValidPrimitive=function(e){switch(e){case"sphere":case"cube":case"diamond":case"cylinder":case"cone":case"inverted-cone":case"tetrahedron":return!0}return!1},r.primitiveGeometryData=function(e){switch(e){case"sphere":return i.createPolySphereGeometry(.5,2,!0);case"cube":return i.createBoxGeometry(1);case"cylinder":return i.createCylinderGeometry(1,.5,32,[0,0,1],[0,0,.5]);case"cone":return i.cgToGIS(i.createConeGeometry(1,.5,15,!1));case"inverted-cone":return i.cgToGIS(i.createConeGeometry(1,.5,15,!0));case"tetrahedron":return i.cgToGIS(i.createTetrahedronGeometry(1));case"diamond":return i.cgToGIS(i.createDiamondGeometry(1));default:return void n.neverReached(e)}},r.primitiveLodResources=function(e,r,a){var o=function(e,n,c){return void 0===c&&(c=!1),{levels:e.map((function(e,o){var s=n(e.tesselation);return c&&i.cgToGIS(s),{components:[{geometry:new t(s,a+"_lod"+o),material:r}],faceCount:s.indexCount/3,minScreenSpaceRadius:e.minScreenSpaceRadius}}))}};switch(e){case"sphere":return o([{tesselation:0,minScreenSpaceRadius:0},{tesselation:1,minScreenSpaceRadius:8},{tesselation:2,minScreenSpaceRadius:16},{tesselation:3,minScreenSpaceRadius:50},{tesselation:4,minScreenSpaceRadius:250}],(function(e){return i.createPolySphereGeometry(.5,e,!0)}));case"cube":return o([{tesselation:0,minScreenSpaceRadius:0}],(function(){return i.createBoxGeometry(1)}));case"cone":return o(c,(function(e){return i.createConeGeometry(1,.5,e,!1)}),!0);case"inverted-cone":return o(c,(function(e){return i.createConeGeometry(1,.5,e,!0)}),!0);case"cylinder":return o(c,(function(e){return i.createCylinderGeometry(1,.5,e,[0,0,1],[0,0,.5])}));case"tetrahedron":return o([{tesselation:0,minScreenSpaceRadius:0}],(function(){return i.createTetrahedronGeometry(1)}),!0);case"diamond":return o([{tesselation:0,minScreenSpaceRadius:0}],(function(){return i.createDiamondGeometry(1)}),!0);default:return void n.neverReached(e)}};var c=[{tesselation:6,minScreenSpaceRadius:0},{tesselation:18,minScreenSpaceRadius:7},{tesselation:64,minScreenSpaceRadius:65}]}));