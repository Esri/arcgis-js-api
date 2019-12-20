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

define(["require","exports","../../../core/Logger","../MeshComponent"],function(e,t,n,r){function o(e,t){if(0===e.length)return g.error("merge()","Must specify one more more geometries to merge"),null;var n=e[0].spatialReference;if(e.some(function(e){return!e.spatialReference.equals(n)}))return g.error("merge()","Geometries must all be in the same spatial reference"),null;for(var r=p(e),o=[],i={position:0,uv:0,normal:0,tangent:0,color:0},a=new Map,u=new Map,f=0,v=e;f<v.length;f++){var c=v[f],m=c.vertexAttributes;if(t&&t.reuseMaterials&&c.components)for(var h=0,A=c.components;h<A.length;h++){var b=A[h];b.material&&a.set(b.material,b.material)}l(c,i,a,u,o),s("position",m,r,i,0),s("normal",m,r,i,0),s("tangent",m,r,i,0),s("uv",m,r,i,0),s("color",m,r,i,255)}return{vertexAttributes:r,components:o,spatialReference:n}}function i(e,t){return t.normal>0&&!e.vertexAttributes.normal}function a(e,t,n){i(e,t)&&"source"===n.shading&&(n.shading="flat")}function l(e,t,n,o,i){if(e.components)for(var l=0,s=e.components;l<s.length;l++){for(var u=s[l],f=u.cloneWithDeduplication(n,o),p=0;p<f.faces.length;p++)f.faces[p]+=t.position/3;a(e,t,f),i.push(f)}else if(e.vertexAttributes&&e.vertexAttributes.position){for(var g=e.vertexAttributes.position.length/3,v=new Uint32Array(g),p=0;p<g;p++)v[p]=p+t.position;var u=new r({faces:v});a(e,t,u),i.push(u)}}function s(e,t,n,r,o){if(t){var i=t.position;if(i){var a=t[e];if(a)u(a,0,n[e],r[e],a.length),r[e]+=a.length;else{var l=n[e],s=r[e],f=v[e];if(l){for(var p=0;p<i.length;p+=3)for(var g=0;g<f;g++)l[s++]=o;r[e]=s}}}}}function u(e,t,n,r,o){for(var i=0;i<o;i++)n[r++]=e[t++];return n}function f(e){for(var t=!1,n=!1,r=!1,o=!1,i=0,a=e;i<a.length;i++){var l=a[i],s=l.vertexAttributes;if(s&&s.position&&(s.uv&&(t=!0),s.normal&&(n=!0),s.tangent&&(o=!0),s.color&&(r=!0),n&&t&&r&&o))break}return{normal:n,uv:t,color:r,tangent:o}}function p(e){for(var t=0,n=0,r=0,o=0,i=0,a=f(e),l=0,s=e;l<s.length;l++){var u=s[l],p=u.vertexAttributes;p&&p.position&&(t+=p.position.length,a.uv&&(n+=p.position.length/v.position*v.uv),a.normal&&(r+=p.position.length/v.position*v.normal),a.color&&(o+=p.position.length/v.position*v.color),a.tangent&&(i+=p.position.length/v.position*v.tangent))}return{position:new Float64Array(t),uv:n?new Float32Array(n):null,normal:r?new Float32Array(r):null,tangent:i?new Float32Array(i):null,color:o?new Uint8Array(o):null}}Object.defineProperty(t,"__esModule",{value:!0});var g=n.getLogger("esri.geometry.support.triangleMeshMerge");t.merge=o;var v={position:3,normal:3,tangent:4,uv:2,color:4}});