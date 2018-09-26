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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../geometry","../../../core/Logger","../MeshComponent"],function(e,r,o,t,n){function i(e){if(0===e.length)return p.error("merge()","Must specify one more more geometries to merge"),null;var r=e[0].spatialReference;if(e.some(function(e){return!e.spatialReference.equals(r)}))return p.error("merge()","Geometries must all be in the same spatial reference"),null;for(var t=c(e),n=[],i={position:0,uv:0,normal:0,color:0},l=0,s=e;l<s.length;l++){var f=s[l],v=f.vertexAttributes;a(f,i,n),u("position",v,t,i,0),u("normal",v,t,i,0),u("uv",v,t,i,0),u("color",v,t,i,255)}return new o.Mesh({vertexAttributes:t,components:n,spatialReference:r})}function l(e,r){return r.normal>0&&!e.vertexAttributes.normal}function s(e,r,o){l(e,r)&&"source"===o.shading&&(o.shading="flat")}function a(e,r,o){if(e.components)for(var t=0,i=e.components;t<i.length;t++){for(var l=i[t],a=l.clone(),u=0;u<a.faces.length;u++)a.faces[u]+=r.position/3;s(e,r,a),o.push(a)}else if(e.vertexAttributes&&e.vertexAttributes.position){for(var f=e.vertexAttributes.position.length/3,v=new Uint32Array(f),u=0;u<f;u++)v[u]=u+r.position;var l=new n({faces:v});s(e,r,l),o.push(l)}}function u(e,r,o,t,n){if(r){var i=r.position;if(i){var l=r[e];if(l)f(l,0,o[e],t[e],l.length),t[e]+=l.length;else{var s=o[e],a=t[e],u=g[e];if(s){for(var v=0;v<i.length;v+=3)for(var c=0;c<u;c++)s[a++]=n;t[e]=a}}}}}function f(e,r,o,t,n){for(var i=0;i<n;i++)o[t++]=e[r++];return o}function v(e){for(var r=!1,o=!1,t=!1,n=0,i=e;n<i.length;n++){var l=i[n],s=l.vertexAttributes;if(s&&s.position&&(s.uv&&(r=!0),s.normal&&(o=!0),s.color&&(t=!0),o&&r&&t))break}return{normal:o,uv:r,color:t}}function c(e){for(var r=0,o=0,t=0,n=0,i=v(e),l=0,s=e;l<s.length;l++){var a=s[l],u=a.vertexAttributes;u&&u.position&&(r+=u.position.length,i.uv&&(o+=u.position.length/g.position*g.uv),i.normal&&(t+=u.position.length/g.position*g.normal),i.color&&(n+=u.position.length/g.position*g.color))}return{position:new Float64Array(r),uv:o?new Float32Array(o):null,normal:t?new Float32Array(t):null,color:n?new Uint8Array(n):null}}Object.defineProperty(r,"__esModule",{value:!0});var p=t.getLogger("esri.geometry.support.triangleMeshMerge");r.merge=i;var g={position:3,normal:3,uv:2,color:4}});