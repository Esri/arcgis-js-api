/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../core/Logger","../../../core/maybe","../../../chunks/mat3","../../../chunks/mat3f64","../../../chunks/mat4f64","../../../chunks/vec3","../../../chunks/vec3f64","../../projection","../../projectionEllipsoid","../spatialReferenceUtils","../webMercatorUtils","../buffer/BufferView","../../../chunks/vec32"],(function(r,e,t,o,f,n,a,c,i,u,s,m,y,V){"use strict";const p=e.getLogger("esri.geometry.support.meshUtils.normalProjection");function l(r,e,t,o,f){return C(o)?(E(0,y.BufferViewVec3f.fromTypedArray(r),y.BufferViewVec3f64.fromTypedArray(e),y.BufferViewVec3f64.fromTypedArray(t),o,y.BufferViewVec3f.fromTypedArray(f)),f):(p.error("Cannot convert spatial reference to PCPF"),f)}function T(r,e,t,o,f){return C(o)?(E(1,y.BufferViewVec3f.fromTypedArray(r),y.BufferViewVec3f64.fromTypedArray(e),y.BufferViewVec3f64.fromTypedArray(t),o,y.BufferViewVec3f.fromTypedArray(f)),f):(p.error("Cannot convert to spatial reference from PCPF"),f)}function P(r,e,t){return i.projectBuffer(r,e,0,t,u.getSphericalPCPF(e),0,r.length/3),t}function B(r,e,t){return i.projectBuffer(r,u.getSphericalPCPF(t),0,e,t,0,r.length/3),e}function d(r,e,o){if(t.isNone(r))return e;const f=y.BufferViewVec3f64.fromTypedArray(r),n=y.BufferViewVec3f64.fromTypedArray(e);return V.transformMat4(n,f,o),e}function A(r,e,f){if(t.isNone(r))return e;o.normalFromMat4(S,f);const n=y.BufferViewVec3f.fromTypedArray(r),a=y.BufferViewVec3f.fromTypedArray(e);return V.transformMat3(a,n,S),o.isOrthoNormal(S)||V.normalize(a,a),e}function g(r,e,f){if(t.isNone(r))return e;o.normalFromMat4(S,f);const n=y.BufferViewVec3f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),a=y.BufferViewVec3f.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT);if(V.transformMat3(a,n,S),o.isOrthoNormal(S)||V.normalize(a,a),r!==e)for(let t=3;t<r.length;t+=4)e[t]=r[t];return e}function w(r,e,t,o,f){if(!C(o))return p.error("Cannot convert spatial reference to PCPF"),f;E(0,y.BufferViewVec3f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),y.BufferViewVec3f64.fromTypedArray(e),y.BufferViewVec3f64.fromTypedArray(t),o,y.BufferViewVec3f.fromTypedArray(f,4*Float32Array.BYTES_PER_ELEMENT));for(let n=3;n<r.length;n+=4)f[n]=r[n];return f}function F(r,e,t,o,f){if(!C(o))return p.error("Cannot convert to spatial reference from PCPF"),f;E(1,y.BufferViewVec3f.fromTypedArray(r,16),y.BufferViewVec3f64.fromTypedArray(e),y.BufferViewVec3f64.fromTypedArray(t),o,y.BufferViewVec3f.fromTypedArray(f,16));for(let n=3;n<r.length;n+=4)f[n]=r[n];return f}function E(r,e,t,f,n,c){if(!e)return;const s=t.count,y=u.getSphericalPCPF(n);if(M(n))for(let u=0;u<s;u++)f.getVec(u,j),e.getVec(u,N),i.computeTranslationToOriginAndRotation(y,j,_,y),o.fromMat4(S,_),1===r&&o.transpose(S,S),a.transformMat3(N,N,S),c.setVec(u,N);else for(let u=0;u<s;u++){f.getVec(u,j),e.getVec(u,N),i.computeTranslationToOriginAndRotation(y,j,_,y),o.fromMat4(S,_);const n=m.y2lat(t.get(u,1));let s=Math.cos(n);0===r&&(s=1/s),S[0]*=s,S[1]*=s,S[2]*=s,S[3]*=s,S[4]*=s,S[5]*=s,1===r&&o.transpose(S,S),a.transformMat3(N,N,S),a.normalize(N,N),c.setVec(u,N)}return c}function C(r){return M(r)||h(r)}function M(r){return r.isWGS84||s.isCGCS2000(r)||s.isMars(r)||s.isMoon(r)}function h(r){return r.isWebMercator}const j=c.create(),N=c.create(),_=n.create(),S=f.create();r.projectFromPCPF=B,r.projectNormalFromPCPF=T,r.projectNormalToPCPF=l,r.projectTangentFromPCPF=F,r.projectTangentToPCPF=w,r.projectToPCPF=P,r.transformNormal=A,r.transformPosition=d,r.transformTangent=g,Object.defineProperty(r,"__esModule",{value:!0})}));
