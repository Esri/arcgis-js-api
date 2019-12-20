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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/typedArrayUtil","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],function(e,t,r,a,i){function n(e){var t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}function s(e,t,i){for(var s=n(e)&&1===i,o=e.length/3-(s?1:0),l=new Uint32Array(2*(o-1)),f=s&&e?r.slice(e,0,e.length-3):e,I=s&&t?r.slice(t,0,t.length-3):t,u=0,x=0;x<o-1;x++)l[u++]=x,l[u++]=x+1;var y={},c={};return y[d.POSITION]=l,c[d.POSITION]={size:3,data:f,offsetIdx:0,strideIdx:3},t&&(y.mapPos=l,c.mapPos={size:3,data:I,offsetIdx:0,strideIdx:3}),new a.GeometryData(c,y,a.GeometryData.DefaultOffsets,"line")}function o(e,t,r,a,i){var n=s(e,t,i);n.vertexAttributes[d.COLOR]={size:4,data:r,offsetIdx:0,strideIdx:4};var o=new Float32Array(1);o[0]=a,n.vertexAttributes[d.SIZE]={size:1,data:o,offsetIdx:0,strideIdx:1};var l=new Uint32Array(n.vertexAttributes[d.POSITION].data.length);return n.indices[d.COLOR]=l,n.indices[d.SIZE]=l,n}Object.defineProperty(t,"__esModule",{value:!0});var d=i.VertexAttrConstants;t.isClosed=n,t.createPolylineGeometryData=s,t.createPolylineGeometry=o});