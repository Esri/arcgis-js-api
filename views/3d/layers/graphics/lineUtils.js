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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../webgl-engine/materials/RibbonLineMaterial","../../webgl-engine/materials/NativeLineMaterial","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],function(e,n,t,r,i,a){function o(e){var n={width:e.width,color:e.color,miterLimit:e.miterLimit,polygonOffset:!0};return"miter"===e.join||"bevel"===e.join?n.join=e.join:(n.join="miter",e.join&&console.warn("unsupported join type for line symbol: "+e.join)),new t(n,e.idHint+"_ribbonlinemat")}function l(e){return new r(e.width,e.color,e.idHint+"_nativelinemat")}function s(e,n){for(var t=[],r=0;r<n.length;r++)for(var i=e[r],a=0;a<n[r].length;a++){for(var o=n[r][a],l=[],s=o[0];s<o[1];s++)l.push(i[s]);l.length>0&&t.push(l)}return t}function f(e){var n=e.length;return e[0]===e[n-3]&&e[1]===e[n-2]&&e[2]===e[n-1]}function g(e,n,t,r,a){var o,l,s,g;if(t=t&&!f(e)){for(var u=new Float32Array(e.length+3),v=0;v<e.length;v++)u[v]=e[v];var w=u.length;u[w-3]=e[0],u[w-2]=e[1],u[w-1]=e[2],l=u,o=e.length/3+1,s=new Uint32Array(2*(o-1)),g=new Uint32Array(2*(o-1))}else o=e.length/3,s=new Uint32Array(2*(o-1)),g=new Uint32Array(2*(o-1)),l=e;var b=new Float32Array(1);b[0]=a;for(var c=0,h=0,y=0;o-1>y;y++)s[c++]=y,s[c++]=y+1,g[h++]=0,g[h++]=0;var d={},O={};d[m.POSITION]=s,d[m.COLOR]=g,d[m.SIZE]=g,O[m.POSITION]={size:3,data:l},O[m.COLOR]={size:4,data:r},O[m.SIZE]={size:1,data:b},n&&(d.mapPos=s,O.mapPos={size:3,data:n});var p=new i(O,d,i.DefaultOffsets,"line");return p}var m=a.VertexAttrConstants;n.createRibbonMaterial=o,n.createNativeMaterial=l,n.createOutlineGeometryFromSegments=s,n.isClosed=f,n.createPolylineGeometry=g});