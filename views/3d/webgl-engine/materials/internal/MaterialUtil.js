/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/mathUtils","../../../../../core/maybe","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/aaBoundingBox","../../lib/screenSizePerspectiveUtils","../../lib/Util","../renderers/utils"],(function(e,t,n,i,o,r,s,c,a){"use strict";const l=r.create();function f(e,t,n,i,o,r,s){if(!a.isInstanceHidden(t))if(e.boundingInfo){c.assert(0===e.primitiveType);const t=n.tolerance;p(e.boundingInfo,i,o,t,r,s)}else{const t=e.indices.get("position"),n=e.vertexAttributes.get("position");d(i,o,0,t.length/3,t,n,void 0,r,s)}}const u=o.create();function p(e,t,i,o,s,c){if(n.isNone(e))return;const a=b(t,i,u);if(r.setMin(l,e.getBBMin()),r.setMax(l,e.getBBMax()),n.isSome(s)&&s.applyToAabb(l),v(l,t,a,o)){const{primitiveIndices:n,indices:r,position:a}=e,l=n?n.length:r.length/3;if(l>B){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&p(n[e],t,i,o,s,c);return}}d(t,i,0,l,r,a,n,s,c)}}const m=o.create();function d(e,t,i,o,r,s,c,a,l){if(c)return h(e,t,i,o,r,s,c,a,l);const f=s.data,u=s.stride||s.size,p=e[0],d=e[1],g=e[2],x=t[0]-p,b=t[1]-d,v=t[2]-g;for(let h=i,y=3*i;h<o;++h){let e=u*r[y++],t=f[e++],i=f[e++],o=f[e];e=u*r[y++];let s=f[e++],c=f[e++],A=f[e];e=u*r[y++];let T=f[e++],I=f[e++],P=f[e];n.isSome(a)&&([t,i,o]=a.applyToVertex(t,i,o,h),[s,c,A]=a.applyToVertex(s,c,A,h),[T,I,P]=a.applyToVertex(T,I,P,h));const S=s-t,L=c-i,z=A-o,B=T-t,N=I-i,V=P-o,D=b*V-N*v,E=v*B-V*x,O=x*N-B*b,U=S*D+L*E+z*O;if(Math.abs(U)<=Number.EPSILON)continue;const W=p-t,R=d-i,_=g-o,k=W*D+R*E+_*O;if(U>0){if(k<0||k>U)continue}else if(k>0||k<U)continue;const G=R*z-L*_,H=_*S-z*W,j=W*L-S*R,C=x*G+b*H+v*j;if(U>0){if(C<0||k+C>U)continue}else if(C>0||k+C<U)continue;const X=(B*G+N*H+V*j)/U;if(X>=0){l(X,M(S,L,z,B,N,V,m),h)}}}function h(e,t,i,o,r,s,c,a,l){const f=s.data,u=s.stride||s.size,p=e[0],d=e[1],h=e[2],g=t[0]-p,x=t[1]-d,b=t[2]-h;for(let v=i;v<o;++v){const e=c[v];let t=3*e,i=u*r[t++],o=f[i++],s=f[i++],y=f[i];i=u*r[t++];let A=f[i++],T=f[i++],I=f[i];i=u*r[t];let P=f[i++],S=f[i++],L=f[i];n.isSome(a)&&([o,s,y]=a.applyToVertex(o,s,y,v),[A,T,I]=a.applyToVertex(A,T,I,v),[P,S,L]=a.applyToVertex(P,S,L,v));const z=A-o,B=T-s,N=I-y,V=P-o,D=S-s,E=L-y,O=x*E-D*b,U=b*V-E*g,W=g*D-V*x,R=z*O+B*U+N*W;if(Math.abs(R)<=Number.EPSILON)continue;const _=p-o,k=d-s,G=h-y,H=_*O+k*U+G*W;if(R>0){if(H<0||H>R)continue}else if(H>0||H<R)continue;const j=k*N-B*G,C=G*z-N*_,X=_*B-z*k,Y=g*j+x*C+b*X;if(R>0){if(Y<0||H+Y>R)continue}else if(Y>0||H+Y<R)continue;const q=(V*j+D*C+E*X)/R;if(q>=0){l(q,M(z,B,N,V,D,E,m),e)}}}const g=o.create(),x=o.create();function M(e,t,n,o,r,s,c){return i.set(g,e,t,n),i.set(x,o,r,s),i.cross(c,g,x),i.normalize(c,c),c}function b(e,t,n){return i.set(n,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function v(e,t,n,i){return y(e,t,n,i,1/0)}function y(e,t,n,i,o){const r=(e[0]-i-t[0])*n[0],s=(e[3]+i-t[0])*n[0];let c=Math.min(r,s),a=Math.max(r,s);const l=(e[1]-i-t[1])*n[1],f=(e[4]+i-t[1])*n[1];if(a=Math.min(a,Math.max(l,f)),a<0)return!1;if(c=Math.max(c,Math.min(l,f)),c>a)return!1;const u=(e[2]-i-t[2])*n[2],p=(e[5]+i-t[2])*n[2];return a=Math.min(a,Math.max(u,p)),!(a<0)&&(c=Math.max(c,Math.min(u,p)),!(c>a)&&c<o)}function A(e,n,i,o,r){let c=(i.screenLength||0)*e.pixelRatio;r&&(c=s.scale(c,o,n,r));const a=c*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return t.clamp(a*n,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function T(e,t,n){if(!e)return;const i=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f(n,i.divisor,i.offset,i.minPixelSize,o)}function I(e,t){const n=t?I(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=L(t)),null==t&&i in n||(n[i]=t)}return n}function P(e,t){let n=!1;for(const i in t){const o=t[i];void 0!==o&&(n=!0,Array.isArray(o)?e[i]=o.slice():e[i]=o)}return n}function S(e,n,i,o,r){if(!n.options.selectionMode)return;const s=e.vertexAttributes.get("position").data,c=e.vertexAttributes.get("size"),a=c&&c.data[0],l=i[0],f=i[1],u=((a+o)/2+4)*e.screenToWorldRatio;let p=Number.MAX_VALUE;for(let m=0;m<s.length-5;m+=3){const e=s[m],n=s[m+1],i=l-e,o=f-n,r=s[m+3]-e,c=s[m+4]-n,a=r*i+c*o,u=r*r+c*c,d=t.clamp(a/u,0,1),h=r*d-i,g=c*d-o,x=h*h+g*g;x<p&&(p=x)}p<u*u&&r()}function L(e){const t=[];return e.forEach((e=>t.push(e))),t}const z={multiply:1,ignore:2,replace:3,tint:4},B=1e3;e.bindScreenSizePerspective=T,e.colorMixModes=z,e.computeInvDir=b,e.computeNormal=M,e.copyParameters=I,e.intersectAabbInvDir=v,e.intersectAabbInvDirBefore=y,e.intersectDrapedRenderLineGeometry=S,e.intersectTriangleGeometry=f,e.intersectTriangles=d,e.updateParameters=P,e.verticalOffsetAtDistance=A,Object.defineProperty(e,"__esModule",{value:!0})}));
