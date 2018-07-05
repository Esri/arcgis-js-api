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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../geometry","../../../core/Logger","../MeshComponent"],function(e,r,t,n,o){function i(e){if(0===e.length)return g.error("merge()","Must specify one more more geometries to merge"),null;var r=e[0].spatialReference;if(e.some(function(e){return!e.spatialReference.equals(r)}))return g.error("merge()","Geometries must all be in the same spatial reference"),null;for(var n=p(e),o=[],i={position:0,uv:0,normal:0},a=0,s=e;a<s.length;a++){var f=s[a],v=f.vertexAttributes;l(f,i,o),u("position",v,n,i),u("normal",v,n,i),u("uv",v,n,i)}return new t.Mesh({vertexAttributes:n,components:o,spatialReference:r})}function a(e,r){return r.normal>0&&!e.vertexAttributes.normal}function s(e,r,t){a(e,r)&&"source"===t.shading&&(t.shading="flat")}function l(e,r,t){if(e.components)for(var n=0,i=e.components;n<i.length;n++){for(var a=i[n],l=a.clone(),u=0;u<l.faces.length;u++)l.faces[u]+=r.position/3;s(e,r,l),t.push(l)}else if(e.vertexAttributes&&e.vertexAttributes.position){for(var f=e.vertexAttributes.position.length/3,v=new Uint32Array(f),u=0;u<f;u++)v[u]=u+r.position;var a=new o({faces:v});s(e,r,a),t.push(a)}}function u(e,r,t,n){if(r){var o=r.position;if(o){var i=r[e];if(i)f(i,0,t[e],n[e],i.length),n[e]+=i.length;else{var a=t[e],s=n[e],l=m[e];if(a){for(var u=0;u<o.length;u+=3)for(var v=0;v<l;v++)a[s++]=0;n[e]=s}}}}}function f(e,r,t,n,o){for(var i=0;i<o;i++)t[n++]=e[r++];return t}function v(e){for(var r=!1,t=!1,n=0,o=e;n<o.length;n++){var i=o[n],a=i.vertexAttributes;if(a&&a.position&&(a.uv&&(r=!0),a.normal&&(t=!0),t&&r))break}return{normal:t,uv:r}}function p(e){for(var r=0,t=0,n=0,o=v(e),i=0,a=e;i<a.length;i++){var s=a[i],l=s.vertexAttributes;l&&l.position&&(r+=l.position.length,o.uv&&(t+=l.position.length/m.position*m.uv),o.normal&&(n+=l.position.length/m.position*m.normal))}return{position:new Float64Array(r),uv:t?new Float32Array(t):null,normal:n?new Float32Array(n):null}}Object.defineProperty(r,"__esModule",{value:!0});var g=n.getLogger("esri.geometry.support.triangleMeshMerge");r.merge=i;var m={position:3,normal:3,uv:2}});