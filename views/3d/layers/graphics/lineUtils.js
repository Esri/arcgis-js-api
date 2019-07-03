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

define(["require","exports","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],function(e,t,r,n){function a(e){var t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}function i(e,t,n){var i,s,o;if(n=n&&!a(e)){for(var d=new Float32Array(e.length+3),f=0;f<e.length;f++)d[f]=e[f];var I=d.length;d[I-3]=e[0],d[I-2]=e[1],d[I-1]=e[2],s=d,i=e.length/3+1,o=new Uint32Array(2*(i-1))}else i=e.length/3,o=new Uint32Array(2*(i-1)),s=e;for(var u=0,v=0;v<i-1;v++)o[u++]=v,o[u++]=v+1;var x={},O={};return x[l.POSITION]=o,O[l.POSITION]={size:3,data:s,offsetIdx:0,strideIdx:3},t&&(x.mapPos=o,O.mapPos={size:3,data:t,offsetIdx:0,strideIdx:3}),new r(O,x,r.DefaultOffsets,"line")}function s(e,t,r,n,a){var s=i(e,t,r);s.vertexAttributes[l.COLOR]={size:4,data:n,offsetIdx:0,strideIdx:4};var o=new Float32Array(1);o[0]=a,s.vertexAttributes[l.SIZE]={size:1,data:o,offsetIdx:0,strideIdx:1};var d=new Uint32Array(s.vertexAttributes[l.POSITION].data.length);return s.indices[l.COLOR]=d,s.indices[l.SIZE]=d,s}Object.defineProperty(t,"__esModule",{value:!0});var l=n.VertexAttrConstants;t.isClosed=a,t.createPolylineGeometryData=i,t.createPolylineGeometry=s});