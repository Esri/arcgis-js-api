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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util","../../webgl-engine/materials/NativeLineMaterial","../../webgl-engine/materials/RibbonLineMaterial"],function(e,n,i,t,r,a){function l(e){var n={width:e.width,color:e.color,miterLimit:e.miterLimit,polygonOffset:!0,join:"miter",slicePlaneEnabled:e.slicePlaneEnabled};return"miter"===e.join||"bevel"===e.join?n.join=e.join:e.join&&console.warn("unsupported join type for line symbol: "+e.join),new a(n,e.idHint+"_ribbonlinemat")}function o(e){var n={color:e.color,slicePlaneEnabled:e.slicePlaneEnabled};return new r(n,e.idHint+"_nativelinemat")}function s(e){var n=e.length;return e[0]===e[n-3]&&e[1]===e[n-2]&&e[2]===e[n-1]}function d(e,n,t,r,a){var l,o,d,b;if(t=t&&!s(e)){for(var c=new Float32Array(e.length+3),w=0;w<e.length;w++)c[w]=e[w];var g=c.length;c[g-3]=e[0],c[g-2]=e[1],c[g-1]=e[2],o=c,l=e.length/3+1,d=new Uint32Array(2*(l-1)),b=new Uint32Array(2*(l-1))}else l=e.length/3,d=new Uint32Array(2*(l-1)),b=new Uint32Array(2*(l-1)),o=e;var m=new Float32Array(1);m[0]=a;for(var u=0,v=0,I=0;I<l-1;I++)d[u++]=I,d[u++]=I+1,b[v++]=0,b[v++]=0;var y={},O={};return y[f.POSITION]=d,y[f.COLOR]=b,y[f.SIZE]=b,O[f.POSITION]={size:3,data:o,offsetIdx:0,strideIdx:3},O[f.COLOR]={size:4,data:r,offsetIdx:0,strideIdx:4},O[f.SIZE]={size:1,data:m,offsetIdx:0,strideIdx:1},n&&(y.mapPos=d,O.mapPos={size:3,data:n,offsetIdx:0,strideIdx:3}),new i(O,y,i.DefaultOffsets,"line")}Object.defineProperty(n,"__esModule",{value:!0});var f=t.VertexAttrConstants;n.createRibbonMaterial=l,n.createNativeMaterial=o,n.isClosed=s,n.createPolylineGeometry=d});