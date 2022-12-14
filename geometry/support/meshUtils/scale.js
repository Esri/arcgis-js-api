/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../core/Logger.js";import{isSome as t}from"../../../core/maybe.js";import{s as r,b as o,g as i,a as n}from"../../../chunks/vec3.js";import{c as s,Z as a}from"../../../chunks/vec3f64.js";import{projectPointToVector as c}from"../../projection.js";import{getSphericalPCPF as p}from"../../projectionEllipsoid.js";import{isGeographicMesh as f}from"./geographicUtils.js";import{projectToPCPF as g,projectNormalToPCPF as l,projectTangentToPCPF as m,projectFromPCPF as u,projectNormalFromPCPF as h,projectTangentFromPCPF as j}from"./projection.js";const v=e.getLogger("esri.geometry.support.meshUtils.scale");function d(e,r,o){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const i=e.spatialReference;if(t(e.transform)){null!=o?.geographic&&o.geographic!==e.transform.geographic&&v.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const t=o?.origin??e.transform.getOriginPoint(i);x(e.transform,r,t)}else{const t=f(e.spatialReference,o),i=o&&o.origin||e.origin;t?A(e,r,i):b(e,r,i)}}function x(e,t,a){const c=r(w,a.x,a.y,a.z),p=o(w,c,e.origin);e.applyLocalInverse(p,k);const f=i(s(),e.scale,t);e.scale=f,e.applyLocalInverse(p,p),o(p,p,k),e.translation=n(s(),e.translation,p)}function A(e,r,o){const i=e.spatialReference,n=p(i),s=R;c(o,s,n)||c(e.origin,s,n);const a=e.vertexAttributes.position,f=e.vertexAttributes.normal,v=e.vertexAttributes.tangent,d=new Float64Array(a.length),x=t(f)?new Float32Array(f.length):null,A=t(v)?new Float32Array(v.length):null;g(a,i,d),t(f)&&l(f,a,d,i,x),t(v)&&m(v,a,d,i,A),y(d,r,s),u(d,a,i),t(f)&&h(x,a,d,i,f),t(v)&&j(A,a,d,i,v),e.vertexAttributesChanged()}function b(e,t,r){const o=R;if(!c(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,v.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}y(e.vertexAttributes.position,t,o),e.vertexAttributesChanged()}function y(e,t,r=a){if(e)for(let o=0;o<e.length;o+=3){for(let t=0;t<3;t++)w[t]=e[o+t]-r[t];i(w,w,t);for(let t=0;t<3;t++)e[o+t]=w[t]+r[t]}}const w=s(),k=s(),R=s();export{d as scale};