// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../webgl-engine/materials/RibbonLineMaterial","../../webgl-engine/materials/NativeLineMaterial","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],function(e,n,t,r,i,a){function o(e){var n={width:e.width,color:e.color,miterLimit:e.miterLimit,polygonOffset:!0};return"miter"===e.join||"bevel"===e.join?n.join=e.join:(n.join="miter",e.join&&console.warn("unsupported join type for line symbol: "+e.join)),new t(n,e.idHint+"_ribbonlinemat")}function l(e){return new r(e.width,e.color,e.idHint+"_nativelinemat")}function s(e,n){for(var t,r=0;r<n.length;r++)for(var i=e[r],a=0;a<n[r].length;a++){for(var o=n[r][a],l=[],s=o[0];s<o[1];s++)l.push(i[s]);l.length>0&&t.push(l)}return t}function g(e){var n=e.length;return e[0]===e[n-3]&&e[1]===e[n-2]&&e[2]===e[n-1]}function v(e,n,t,r,a,o){var l,s,v,m;if(t=t&&!g(e)){for(var u=new Float32Array(e.length+3),w=0;w<e.length;w++)u[w]=e[w];var c=u.length;u[c-3]=e[0],u[c-2]=e[1],u[c-1]=e[2],s=u,l=e.length/3+1,v=new Uint32Array(2*(l-1)),m=new Uint32Array(2*(l-1))}else l=e.length/3,v=new Uint32Array(2*(l-1)),m=new Uint32Array(2*(l-1)),s=e;var d=new Float32Array(1);d[0]=a;for(var y=0,b=0,h=0;l-1>h;h++)v[y++]=h,v[y++]=h+1,m[b++]=0,m[b++]=0;var O={},p={};O[f.POSITION]=v,O[f.COLOR]=m,O[f.SIZE]=m,p[f.POSITION]={size:3,data:s},p[f.COLOR]={size:4,data:r},p[f.SIZE]={size:1,data:d},n&&(O.mapPos=v,p.mapPos={size:3,data:n});var I=[{type:"line",indices:O,positionKey:f.POSITION}];if(o){var j={faces:I[0],vertexAttr:p,id:i.getNewId().toString()};return j}return new i(I,p)}var f=a.VertexAttrConstants;n.createRibbonMaterial=o,n.createNativeMaterial=l,n.createOutlineGeometryFromSegments=s,n.isClosed=g,n.createPolylineGeometry=v});