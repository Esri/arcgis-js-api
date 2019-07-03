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

define(["require","exports","../../../core/Logger","../MeshComponent"],function(e,t,r,n){function o(e){if(0===e.length)return v.error("merge()","Must specify one more more geometries to merge"),null;var t=e[0].spatialReference;if(e.some(function(e){return!e.spatialReference.equals(t)}))return v.error("merge()","Geometries must all be in the same spatial reference"),null;for(var r=g(e),n=[],o={position:0,uv:0,normal:0,tangent:0,color:0},i=0,a=e;i<a.length;i++){var u=a[i],f=u.vertexAttributes;l(u,o,n),s("position",f,r,o,0),s("normal",f,r,o,0),s("tangent",f,r,o,0),s("uv",f,r,o,0),s("color",f,r,o,255)}return{vertexAttributes:r,components:n,spatialReference:t}}function i(e,t){return t.normal>0&&!e.vertexAttributes.normal}function a(e,t,r){i(e,t)&&"source"===r.shading&&(r.shading="flat")}function l(e,t,r){if(e.components)for(var o=0,i=e.components;o<i.length;o++){for(var l=i[o],s=l.cloneWithSharedTextures(),u=0;u<s.faces.length;u++)s.faces[u]+=t.position/3;a(e,t,s),r.push(s)}else if(e.vertexAttributes&&e.vertexAttributes.position){for(var f=e.vertexAttributes.position.length/3,g=new Uint32Array(f),u=0;u<f;u++)g[u]=u+t.position;var l=new n({faces:g});a(e,t,l),r.push(l)}}function s(e,t,r,n,o){if(t){var i=t.position;if(i){var a=t[e];if(a)u(a,0,r[e],n[e],a.length),n[e]+=a.length;else{var l=r[e],s=n[e],f=p[e];if(l){for(var g=0;g<i.length;g+=3)for(var v=0;v<f;v++)l[s++]=o;n[e]=s}}}}}function u(e,t,r,n,o){for(var i=0;i<o;i++)r[n++]=e[t++];return r}function f(e){for(var t=!1,r=!1,n=!1,o=!1,i=0,a=e;i<a.length;i++){var l=a[i],s=l.vertexAttributes;if(s&&s.position&&(s.uv&&(t=!0),s.normal&&(r=!0),s.tangent&&(o=!0),s.color&&(n=!0),r&&t&&n&&o))break}return{normal:r,uv:t,color:n,tangent:o}}function g(e){for(var t=0,r=0,n=0,o=0,i=0,a=f(e),l=0,s=e;l<s.length;l++){var u=s[l],g=u.vertexAttributes;g&&g.position&&(t+=g.position.length,a.uv&&(r+=g.position.length/p.position*p.uv),a.normal&&(n+=g.position.length/p.position*p.normal),a.color&&(o+=g.position.length/p.position*p.color),a.tangent&&(i+=g.position.length/p.position*p.tangent))}return{position:new Float64Array(t),uv:r?new Float32Array(r):null,normal:n?new Float32Array(n):null,tangent:i?new Float32Array(i):null,color:o?new Uint8Array(o):null}}Object.defineProperty(t,"__esModule",{value:!0});var v=r.getLogger("esri.geometry.support.triangleMeshMerge");t.merge=o;var p={position:3,normal:3,tangent:4,uv:2,color:4}});