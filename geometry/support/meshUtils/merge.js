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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../MeshComponent"],(function(e,t,n,r){Object.defineProperty(t,"__esModule",{value:!0});var o=n.getLogger("esri.geometry.support.triangleMeshMerge");function i(e,t,n){(function(e,t){return t.normal>0&&!e.vertexAttributes.normal})(e,t)&&"source"===n.shading&&(n.shading="flat")}function a(e,t,n,o,a){if(e.components)for(var l=0,s=e.components;l<s.length;l++){for(var u=(v=s[l]).cloneWithDeduplication(n,o),f=0;f<u.faces.length;f++)u.faces[f]+=t.position/3;i(e,t,u),a.push(u)}else if(e.vertexAttributes&&e.vertexAttributes.position){var p=e.vertexAttributes.position.length/3,g=new Uint32Array(p);for(f=0;f<p;f++)g[f]=f+t.position;var v;i(e,t,v=new r({faces:g})),a.push(v)}}function l(e,t,n,r,o){if(t){var i=t.position;if(i){var a=t[e];if(a)!function(e,t,n,r,o){for(var i=0;i<o;i++)n[r++]=e[t++]}(a,0,n[e],r[e],a.length),r[e]+=a.length;else{var l=n[e],u=r[e],f=s[e];if(l){for(var p=0;p<i.length;p+=3)for(var g=0;g<f;g++)l[u++]=o;r[e]=u}}}}}t.merge=function(e,t){if(0===e.length)return o.error("merge()","Must specify one more more geometries to merge"),null;var n=e[0].spatialReference;if(e.some((function(e){return!e.spatialReference.equals(n)})))return o.error("merge()","Geometries must all be in the same spatial reference"),null;for(var r=function(e){for(var t=0,n=0,r=0,o=0,i=0,a=function(e){for(var t=!1,n=!1,r=!1,o=!1,i=0,a=e;i<a.length;i++){var l=a[i].vertexAttributes;if(l&&l.position&&(l.uv&&(t=!0),l.normal&&(n=!0),l.tangent&&(o=!0),l.color&&(r=!0),n&&t&&r&&o))break}return{normal:n,uv:t,color:r,tangent:o}}(e),l=0,u=e;l<u.length;l++){var f=u[l].vertexAttributes;f&&f.position&&(t+=f.position.length,a.uv&&(n+=f.position.length/s.position*s.uv),a.normal&&(r+=f.position.length/s.position*s.normal),a.color&&(o+=f.position.length/s.position*s.color),a.tangent&&(i+=f.position.length/s.position*s.tangent))}return{position:new Float64Array(t),uv:n?new Float32Array(n):null,normal:r?new Float32Array(r):null,tangent:i?new Float32Array(i):null,color:o?new Uint8Array(o):null}}(e),i=[],u={position:0,uv:0,normal:0,tangent:0,color:0},f=new Map,p=new Map,g=0,v=e;g<v.length;g++){var c=v[g],m=c.vertexAttributes;if(t&&t.reuseMaterials&&c.components)for(var h=0,A=c.components;h<A.length;h++){var b=A[h];b.material&&f.set(b.material,b.material)}a(c,u,f,p,i),l("position",m,r,u,0),l("normal",m,r,u,0),l("tangent",m,r,u,0),l("uv",m,r,u,0),l("color",m,r,u,255)}return{vertexAttributes:r,components:i,spatialReference:n}};var s={position:3,normal:3,tangent:4,uv:2,color:4}}));