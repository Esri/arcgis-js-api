/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/mat4","../../../../../geometry/support/buffer/BufferView","../../lib/Util"],(function(e,t,f,r){"use strict";function o(e,t,f,r){const o=f.typedBuffer,s=f.typedBufferStride,i=e.length;r*=s;for(let n=0;n<i;++n){const f=2*e[n];o[r]=t[f],o[r+1]=t[f+1],r+=s}}function s(e,t,f,r,o){const s=f.typedBuffer,i=f.typedBufferStride,n=e.length;if(r*=i,null==o||1===o)for(let c=0;c<n;++c){const f=3*e[c];s[r]=t[f],s[r+1]=t[f+1],s[r+2]=t[f+2],r+=i}else for(let c=0;c<n;++c){const f=3*e[c];for(let e=0;e<o;++e)s[r]=t[f],s[r+1]=t[f+1],s[r+2]=t[f+2],r+=i}}function i(e,t,f,r,o=1){const s=f.typedBuffer,i=f.typedBufferStride,n=e.length;if(r*=i,1===o)for(let c=0;c<n;++c){const f=4*e[c];s[r]=t[f],s[r+1]=t[f+1],s[r+2]=t[f+2],s[r+3]=t[f+3],r+=i}else for(let c=0;c<n;++c){const f=4*e[c];for(let e=0;e<o;++e)s[r]=t[f],s[r+1]=t[f+1],s[r+2]=t[f+2],s[r+3]=t[f+3],r+=i}}function n(e,t,f,r){const o=f.typedBuffer,s=f.typedBufferStride,i=e.length;r*=s;for(let n=0;n<i;++n){const f=9*e[n];for(let e=0;e<9;++e)o[r+e]=t[f+e];r+=s}}function c(e,t,f,r){const o=f.typedBuffer,s=f.typedBufferStride,i=e.length;r*=s;for(let n=0;n<i;++n){const f=16*e[n];for(let e=0;e<16;++e)o[r+e]=t[f+e];r+=s}}function l(e,t,f,r,o,i=1){if(!f)return void s(e,t,r,o,i);const n=r.typedBuffer,c=r.typedBufferStride,l=e.length,u=f[0],d=f[1],a=f[2],B=f[4],p=f[5],y=f[6],g=f[8],w=f[9],h=f[10],V=f[12],b=f[13],z=f[14];if(o*=c,1===i)for(let s=0;s<l;++s){const f=3*e[s],r=t[f],i=t[f+1],l=t[f+2];n[o]=u*r+B*i+g*l+V,n[o+1]=d*r+p*i+w*l+b,n[o+2]=a*r+y*i+h*l+z,o+=c}else for(let s=0;s<l;++s){const f=3*e[s],r=t[f],l=t[f+1],S=t[f+2],m=u*r+B*l+g*S+V,k=d*r+p*l+w*S+b,M=a*r+y*l+h*S+z;for(let e=0;e<i;++e)n[o]=m,n[o+1]=k,n[o+2]=M,o+=c}}function u(e,f,r,o,i,n=1){if(!r)return void s(e,f,o,i,n);const c=r,l=o.typedBuffer,u=o.typedBufferStride,d=e.length,a=c[0],B=c[1],p=c[2],y=c[4],g=c[5],w=c[6],h=c[8],V=c[9],b=c[10],z=!t.isOrthoNormal(c),S=1e-6,m=1-S;if(i*=u,1===n)for(let t=0;t<d;++t){const r=3*e[t],o=f[r],s=f[r+1],n=f[r+2];let c=a*o+y*s+h*n,d=B*o+g*s+V*n,k=p*o+w*s+b*n;if(z){const e=c*c+d*d+k*k;if(e<m&&e>S){const t=1/Math.sqrt(e);c*=t,d*=t,k*=t}}l[i+0]=c,l[i+1]=d,l[i+2]=k,i+=u}else for(let t=0;t<d;++t){const r=3*e[t],o=f[r],s=f[r+1],c=f[r+2];let d=a*o+y*s+h*c,k=B*o+g*s+V*c,M=p*o+w*s+b*c;if(z){const e=d*d+k*k+M*M;if(e<m&&e>S){const t=1/Math.sqrt(e);d*=t,k*=t,M*=t}}for(let e=0;e<n;++e)l[i+0]=d,l[i+1]=k,l[i+2]=M,i+=u}}function d(e,f,r,o,s,n=1){if(!r)return void i(e,f,o,s,n);const c=r,l=o.typedBuffer,u=o.typedBufferStride,d=e.length,a=c[0],B=c[1],p=c[2],y=c[4],g=c[5],w=c[6],h=c[8],V=c[9],b=c[10],z=!t.isOrthoNormal(c),S=1e-6,m=1-S;if(s*=u,1===n)for(let t=0;t<d;++t){const r=4*e[t],o=f[r],i=f[r+1],n=f[r+2],c=f[r+3];let d=a*o+y*i+h*n,k=B*o+g*i+V*n,M=p*o+w*i+b*n;if(z){const e=d*d+k*k+M*M;if(e<m&&e>S){const t=1/Math.sqrt(e);d*=t,k*=t,M*=t}}l[s+0]=d,l[s+1]=k,l[s+2]=M,l[s+3]=c,s+=u}else for(let t=0;t<d;++t){const r=4*e[t],o=f[r],i=f[r+1],c=f[r+2],d=f[r+3];let k=a*o+y*i+h*c,M=B*o+g*i+V*c,v=p*o+w*i+b*c;if(z){const e=k*k+M*M+v*v;if(e<m&&e>S){const t=1/Math.sqrt(e);k*=t,M*=t,v*=t}}for(let e=0;e<n;++e)l[s+0]=k,l[s+1]=M,l[s+2]=v,l[s+3]=d,s+=u}}function a(e,t,f,r,o,s=1){const i=r.typedBuffer,n=r.typedBufferStride,c=e.length;if(o*=n,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*e[l];i[o]=t[f],i[o+1]=t[f+1],i[o+2]=t[f+2],i[o+3]=t[f+3],o+=n}else if(3===f)for(let l=0;l<c;++l){const f=3*e[l];i[o]=t[f],i[o+1]=t[f+1],i[o+2]=t[f+2],i[o+3]=255,o+=n}}else if(4===f)for(let l=0;l<c;++l){const f=4*e[l];for(let e=0;e<s;++e)i[o]=t[f],i[o+1]=t[f+1],i[o+2]=t[f+2],i[o+3]=t[f+3],o+=n}else if(3===f)for(let l=0;l<c;++l){const f=3*e[l];for(let e=0;e<s;++e)i[o]=t[f],i[o+1]=t[f+1],i[o+2]=t[f+2],i[o+3]=255,o+=n}}function B(e,t,s,i,n,c){for(const B of t.fieldNames){const t=e.vertexAttributes.get(B),p=e.indices.get(B);if(t&&p)switch(B){case"position":{r.assert(3===t.size);const e=n.getField(B,f.BufferViewVec3f);e&&l(p,t.data,s,e,c);break}case"normal":{r.assert(3===t.size);const e=n.getField(B,f.BufferViewVec3f);e&&u(p,t.data,i,e,c);break}case"uv0":{r.assert(2===t.size);const e=n.getField(B,f.BufferViewVec2f);e&&o(p,t.data,e,c);break}case"color":{r.assert(3===t.size||4===t.size);const e=n.getField(B,f.BufferViewVec4u8);e&&a(p,t.data,t.size,e,c);break}case"symbolColor":{r.assert(3===t.size||4===t.size);const e=n.getField(B,f.BufferViewVec4u8);e&&a(p,t.data,t.size,e,c);break}case"tangent":{r.assert(4===t.size);const e=n.getField(B,f.BufferViewVec4f);e&&d(p,t.data,i,e,c);break}}}}e.writeBufferMat3f=n,e.writeBufferMat4f=c,e.writeBufferVec2=o,e.writeBufferVec3=s,e.writeBufferVec4=i,e.writeColor=a,e.writeDefaultAttributes=B,e.writeNormal=u,e.writePosition=l,e.writeTangent=d,Object.defineProperty(e,"__esModule",{value:!0})}));
