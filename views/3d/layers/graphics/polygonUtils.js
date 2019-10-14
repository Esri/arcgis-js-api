// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],function(e,t,n,r){function a(e){var t={},a={};if(a[r.VertexAttrConstants.POSITION]={size:3,data:e.vertices},t[r.VertexAttrConstants.POSITION]=e.indices,e.color){var i=new Uint32Array(e.indices.length);a[r.VertexAttrConstants.COLOR]={size:4,data:e.color},t[r.VertexAttrConstants.COLOR]=i}return e.uv0&&(a[r.VertexAttrConstants.UV0]={size:2,data:e.uv0},t[r.VertexAttrConstants.UV0]=e.indices),e.eleVertices&&(a.mapPos={size:3,data:e.eleVertices},t.mapPos=e.indices),new n.GeometryData(a,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.createPolygonGeometryData=a});