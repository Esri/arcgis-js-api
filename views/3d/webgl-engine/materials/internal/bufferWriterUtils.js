/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{p as t}from"../../../../../chunks/mat4.js";import{BufferViewVec4f as e,BufferViewVec4u8 as f,BufferViewVec2f as o,BufferViewVec3f as r}from"../../../../../geometry/support/buffer/BufferView.js";import{assert as s}from"../../lib/Util.js";import{VertexAttribute as n}from"../../lib/VertexAttribute.js";function i(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c)s[o]=e[t[c]],o+=n;else for(let c=0;c<i;++c){const f=e[t[c]];for(let t=0;t<r;t++)s[o]=f,o+=n}}function c(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s}}function l(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n}}function d(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n}}function u(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=9*t[i];for(let t=0;t<9;++t)r[o+t]=e[f+t];o+=s}}function a(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=16*t[i];for(let t=0;t<16;++t)r[o+t]=e[f+t];o+=s}}function p(t,e,f,o,r,s=1){if(!f)return void l(t,e,o,r,s);const n=o.typedBuffer,i=o.typedBufferStride,c=t.length,d=f[0],u=f[1],a=f[2],p=f[4],B=f[5],y=f[6],g=f[8],h=f[9],S=f[10],b=f[12],m=f[13],z=f[14];if(r*=i,1===s)for(let l=0;l<c;++l){const f=3*t[l],o=e[f],s=e[f+1],c=e[f+2];n[r]=d*o+p*s+g*c+b,n[r+1]=u*o+B*s+h*c+m,n[r+2]=a*o+y*s+S*c+z,r+=i}else for(let l=0;l<c;++l){const f=3*t[l],o=e[f],c=e[f+1],O=e[f+2],k=d*o+p*c+g*O+b,F=u*o+B*c+h*O+m,M=a*o+y*c+S*O+z;for(let t=0;t<s;++t)n[r]=k,n[r+1]=F,n[r+2]=M,r+=i}}function B(e,f,o,r,s,n=1){if(!o)return void l(e,f,r,s,n);const i=o,c=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],B=i[2],y=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!t(i),O=1e-6,k=1-O;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let l=a*r+y*n+S*i,u=p*r+g*n+b*i,F=B*r+h*n+m*i;if(z){const t=l*l+u*u+F*F;if(t<k&&t>O){const e=1/Math.sqrt(t);l*=e,u*=e,F*=e}}c[s+0]=l,c[s+1]=u,c[s+2]=F,s+=d}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],l=f[o+2];let u=a*r+y*i+S*l,F=p*r+g*i+b*l,M=B*r+h*i+m*l;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e}}for(let t=0;t<n;++t)c[s+0]=u,c[s+1]=F,c[s+2]=M,s+=d}}function y(e,f,o,r,s,n=1){if(!o)return void d(e,f,r,s,n);const i=o,c=r.typedBuffer,l=r.typedBufferStride,u=e.length,a=i[0],p=i[1],B=i[2],y=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!t(i),O=1e-6,k=1-O;if(s*=l,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],d=f[o+3];let u=a*r+y*n+S*i,F=p*r+g*n+b*i,M=B*r+h*n+m*i;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e}}c[s+0]=u,c[s+1]=F,c[s+2]=M,c[s+3]=d,s+=l}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],d=f[o+2],u=f[o+3];let F=a*r+y*i+S*d,M=p*r+g*i+b*d,N=B*r+h*i+m*d;if(z){const t=F*F+M*M+N*N;if(t<k&&t>O){const e=1/Math.sqrt(t);F*=e,M*=e,N*=e}}for(let t=0;t<n;++t)c[s+0]=F,c[s+1]=M,c[s+2]=N,c[s+3]=u,s+=l}}function g(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i}}function h(t,i,l,d,u,a){for(const h of i.fieldNames){const i=t.vertexAttributes.get(h),S=t.indices.get(h);if(i&&S)switch(h){case n.POSITION:{s(3===i.size);const t=u.getField(h,r);t&&p(S,i.data,l,t,a);break}case n.NORMAL:{s(3===i.size);const t=u.getField(h,r);t&&B(S,i.data,d,t,a);break}case n.UV0:{s(2===i.size);const t=u.getField(h,o);t&&c(S,i.data,t,a);break}case n.COLOR:{s(3===i.size||4===i.size);const t=u.getField(h,f);t&&g(S,i.data,i.size,t,a);break}case n.SYMBOLCOLOR:{s(3===i.size||4===i.size);const t=u.getField(h,f);t&&g(S,i.data,i.size,t,a);break}case n.TANGENT:{s(4===i.size);const t=u.getField(h,e);t&&y(S,i.data,d,t,a);break}}}}export{i as writeBufferFloat,u as writeBufferMat3f,a as writeBufferMat4f,c as writeBufferVec2,l as writeBufferVec3,d as writeBufferVec4,g as writeColor,h as writeDefaultAttributes,B as writeNormal,p as writePosition,y as writeTangent};