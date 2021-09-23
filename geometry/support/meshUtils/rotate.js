/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../core/Logger","../../../core/maybe","../../../chunks/mat3","../../../chunks/mat3f64","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/vec3","../../../chunks/vec3f64","../../projection","../../projectionEllipsoid","../axisAngleDegrees","./geographicUtils","./projection"],(function(e,t,r,o,n,i,a,s,c,l,p,g,f,u){"use strict";const m=t.getLogger("esri.geometry.support.meshUtils.rotate");function h(e,t,o){if(!e.vertexAttributes||!e.vertexAttributes.position||0===t[3])return;const n=e.spatialReference;if(r.isSome(e.transform)){var i;null!=(null==o?void 0:o.geographic)&&o.geographic!==e.transform.geographic&&m.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const r=null!=(i=null==o?void 0:o.origin)?i:e.transform.getOriginPoint(n);d(e.transform,t,r)}else{var a;const r=null!=(a=null==o?void 0:o.origin)?a:e.origin;f.isGeographicMesh(e.spatialReference,o)?v(e,t,r):P(e,t,r)}}function d(e,t,r){const o=s.set(A,r.x,r.y,r.z),n=s.subtract(A,o,e.origin);e.applyLocalInverse(n,b),e.rotation=g.compose(e.rotation,t,g.create()),e.applyLocalInverse(n,n),s.subtract(n,n,b),e.translation=s.add(c.create(),e.translation,n)}function v(e,t,n){const i=e.spatialReference,a=p.getSphericalPCPF(i),c=k;l.projectPointToVector(n,c,a)||l.projectPointToVector(e.origin,c,a);const f=e.vertexAttributes.position,m=e.vertexAttributes.normal,h=e.vertexAttributes.tangent,d=new Float64Array(f.length),v=r.isSome(m)?new Float32Array(m.length):null,P=r.isSome(h)?new Float32Array(h.length):null;l.computeTranslationToOriginAndRotation(a,c,F,a),o.fromMat4(y,F);const A=j;s.transformMat3(g.axis(j),g.axis(t),y),A[3]=t[3],u.projectToPCPF(f,i,d),r.isSome(m)&&u.projectNormalToPCPF(m,f,d,i,v),r.isSome(h)&&u.projectTangentToPCPF(h,f,d,i,P),x(d,A,3,c),u.projectFromPCPF(d,f,i),r.isSome(m)&&(x(v,A,3),u.projectNormalFromPCPF(v,f,d,i,m)),r.isSome(h)&&(x(P,A,4),u.projectTangentFromPCPF(P,f,d,i,h)),e.vertexAttributesChanged()}function P(e,t,r){const o=k;if(!l.projectPointToVector(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,m.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}x(e.vertexAttributes.position,t,3,o),x(e.vertexAttributes.normal,t,3),x(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function x(e,t,o,n=c.ZEROS){if(!r.isNone(e)){i.identity(F),i.rotate(F,F,g.angleRad(t),g.axis(t));for(let t=0;t<e.length;t+=o){for(let r=0;r<3;r++)A[r]=e[t+r]-n[r];s.transformMat4(A,A,F);for(let r=0;r<3;r++)e[t+r]=A[r]+n[r]}}}const A=c.create(),b=c.create(),j=g.create(),F=a.create(),y=n.create(),k=c.create();e.rotate=h,Object.defineProperty(e,"__esModule",{value:!0})}));
