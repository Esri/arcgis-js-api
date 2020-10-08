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

define(["require","exports","../../../core/Logger","../MeshComponent"],(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.merge=void 0;var o=r.getLogger("esri.geometry.support.triangleMeshMerge");function i(e,t,r){(function(e,t){return t.normal>0&&!e.vertexAttributes.normal})(e,t)&&"source"===r.shading&&(r.shading="flat")}function a(e,t,r,o,a){if(e.components)for(var l=0,s=e.components;l<s.length;l++){for(var u=(v=s[l]).cloneWithDeduplication(r,o),f=0;f<u.faces.length;f++)u.faces[f]+=t.position/3;i(e,t,u),a.push(u)}else if(e.vertexAttributes&&e.vertexAttributes.position){var g=e.vertexAttributes.position.length/3,p=new Uint32Array(g);for(f=0;f<g;f++)p[f]=f+t.position;var v;i(e,t,v=new n({faces:p})),a.push(v)}}function l(e,t,r,n,o){if(t){var i=t.position;if(i){var a=t[e];if(a)!function(e,t,r,n,o){for(var i=0;i<o;i++)r[n++]=e[t++]}(a,0,r[e],n[e],a.length),n[e]+=a.length;else{var l=r[e],u=n[e],f=s[e];if(l){for(var g=0;g<i.length;g+=3)for(var p=0;p<f;p++)l[u++]=o;n[e]=u}}}}}t.merge=function(e,t){if(0===e.length)return o.error("merge()","Must specify one more more geometries to merge"),null;var r=e[0].spatialReference;if(e.some((function(e){return!e.spatialReference.equals(r)})))return o.error("merge()","Geometries must all be in the same spatial reference"),null;for(var n=function(e){for(var t=0,r=0,n=0,o=0,i=0,a=function(e){for(var t=!1,r=!1,n=!1,o=!1,i=0,a=e;i<a.length;i++){var l=a[i].vertexAttributes;if(l&&l.position&&(l.uv&&(t=!0),l.normal&&(r=!0),l.tangent&&(o=!0),l.color&&(n=!0),r&&t&&n&&o))break}return{normal:r,uv:t,color:n,tangent:o}}(e),l=0,u=e;l<u.length;l++){var f=u[l].vertexAttributes;f&&f.position&&(t+=f.position.length,a.uv&&(r+=f.position.length/s.position*s.uv),a.normal&&(n+=f.position.length/s.position*s.normal),a.color&&(o+=f.position.length/s.position*s.color),a.tangent&&(i+=f.position.length/s.position*s.tangent))}return{position:new Float64Array(t),uv:r?new Float32Array(r):null,normal:n?new Float32Array(n):null,tangent:i?new Float32Array(i):null,color:o?new Uint8Array(o):null}}(e),i=[],u={position:0,uv:0,normal:0,tangent:0,color:0},f=new Map,g=new Map,p=0,v=e;p<v.length;p++){var c=v[p],m=c.vertexAttributes;if(t&&t.reuseMaterials&&c.components)for(var h=0,A=c.components;h<A.length;h++){var b=A[h];b.material&&f.set(b.material,b.material)}a(c,u,f,g,i),l("position",m,n,u,0),l("normal",m,n,u,0),l("tangent",m,n,u,0),l("uv",m,n,u,0),l("color",m,n,u,255)}return{vertexAttributes:n,components:i,spatialReference:r}};var s={position:3,normal:3,tangent:4,uv:2,color:4}}));