// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../webgl-engine/materials/RibbonLineMaterial","../../webgl-engine/materials/NativeLineMaterial","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],function(e,n,i,t,r,a){function o(e){var n={width:e.width,color:e.color,miterLimit:e.miterLimit,polygonOffset:!0};return"miter"===e.join||"bevel"===e.join?n.join=e.join:(n.join="miter",e.join&&console.warn("unsupported join type for line symbol: "+e.join)),new i(n,e.idHint+"_ribbonlinemat")}function l(e){return new t(e.width,e.color,e.idHint+"_nativelinemat")}function s(e){var n=e.length;return e[0]===e[n-3]&&e[1]===e[n-2]&&e[2]===e[n-1]}function w(e,n,i,t,a){var o,l,w,b;if(i=i&&!s(e)){for(var g=new Float32Array(e.length+3),m=0;m<e.length;m++)g[m]=e[m];var u=g.length;g[u-3]=e[0],g[u-2]=e[1],g[u-1]=e[2],l=g,o=e.length/3+1,w=new Uint32Array(2*(o-1)),b=new Uint32Array(2*(o-1))}else o=e.length/3,w=new Uint32Array(2*(o-1)),b=new Uint32Array(2*(o-1)),l=e;var v=new Float32Array(1);v[0]=a;for(var d=0,c=0,y=0;o-1>y;y++)w[d++]=y,w[d++]=y+1,b[c++]=0,b[c++]=0;var O={},h={};O[f.POSITION]=w,O[f.COLOR]=b,O[f.SIZE]=b,h[f.POSITION]={size:3,data:l},h[f.COLOR]={size:4,data:t},h[f.SIZE]={size:1,data:v},n&&(O.mapPos=w,h.mapPos={size:3,data:n});var j=new r(h,O,r.DefaultOffsets,"line");return j}Object.defineProperty(n,"__esModule",{value:!0});var f=a.VertexAttrConstants;n.createRibbonMaterial=o,n.createNativeMaterial=l,n.isClosed=s,n.createPolylineGeometry=w});