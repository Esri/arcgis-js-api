/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../chunks/mat4","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64"],(function(t,n,r,e,o,a,c,i){"use strict";const u=i.create();let f=function(){function t(t){this.message=t}return t.prototype.toString=function(){return`AssertException: ${this.message}`},t}();function s(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new f(n)}}function h(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function l(t){return n.clamp(Math.round(32767*t),-32767,32767)}function M(t,n){const r=Math.abs(t[0]),e=Math.abs(t[1]),o=1/(r+e+Math.abs(t[2])),a=r*o,c=e*o,i=Math.min(t[2]*o,0);n[0]=(t[0]<0?-1:1)*(a-i),n[1]=(t[1]<0?-1:1)*(c-i)}function v(t,n){return void 0===t?n:t}function d(t){return[((t=Math.floor(t))>>16&255)/255,(t>>8&255)/255,(255&t)/255]}function x(t){return"0x"+((n.clamp(Math.round(255*t[0]),0,255)<<16)+(n.clamp(Math.round(255*t[1]),0,255)<<8)+n.clamp(Math.round(255*t[2]),0,255)).toString(16)}function y(t){const n=t.toString(16);return"00000000".substr(0,8-n.length)+n}function g(t,n,r,e,o,c,i,u,f=a.create()){const s=1e-5,h=e[i]-r[c],l=e[i+1]-r[c+1],M=e[i+2]-r[c+2],v=o[u]-r[c],d=o[u+1]-r[c+1],x=o[u+2]-r[c+2],y=n[1]*x-d*n[2],g=n[2]*v-x*n[0],p=n[0]*d-v*n[1],m=h*y+l*g+M*p;if(m>-s&&m<s)return!1;const k=1/m,b=t[0]-r[c],T=t[1]-r[c+1],w=t[2]-r[c+2];if(f[1]=k*(b*y+T*g+w*p),f[1]<0||f[1]>1)return!1;const j=T*M-l*w,A=w*h-M*b,E=b*l-h*T;return f[2]=k*(n[0]*j+n[1]*A+n[2]*E),!(f[2]<0||f[1]+f[2]>1)&&(f[0]=k*(v*j+d*A+x*E),!0)}function p(t,n,r,e){let o,a=(r[0]-t[0])/n[0],c=(e[0]-t[0])/n[0];a>c&&(o=a,a=c,c=o);let i=(r[1]-t[1])/n[1],u=(e[1]-t[1])/n[1];if(i>u&&(o=i,i=u,u=o),a>u||i>c)return!1;i>a&&(a=i),u<c&&(c=u);let f=(r[2]-t[2])/n[2],s=(e[2]-t[2])/n[2];return f>s&&(o=f,f=s,s=o),!(a>s||f>c)&&(s<c&&(c=s),!(c<0))}function m(t,n,r,e,a,c=o.create()){const i=(e[a]-r[a])*(n[0]-t[0])-(e[0]-r[0])*(n[a]-t[a]),u=(e[0]-r[0])*(t[a]-r[a])-(e[a]-r[a])*(t[0]-r[0]);if(0===i)return!1;const f=u/i;return c[0]=t[0]+f*(n[0]-t[0]),c[1]=t[a]+f*(n[a]-t[a]),!0}function k(t,n,r,e,o){o||(o=t),u[0]=t[0],u[1]=t[1],u[2]=t[2],u[3]=1,c.transformMat4(u,u,n),o.length>2&&(o[2]=-u[2]),c.transformMat4(u,u,r),s(0!==u[3]),o[0]=u[0]/u[3],o[1]=u[1]/u[3],o[2]=u[2]/u[3],o[0]=(.5*o[0]+.5)*e[2]+e[0],o[1]=(.5*o[1]+.5)*e[3]+e[1]}function b(t){for(const n in t)return n}function T(t){for(const n in t)return!1;return!0}function w(t,n){return Math.log(t)/Math.log(n)}function j(t,n){t[12]=n[0],t[13]=n[1],t[14]=n[2]}function A(t,n,r,e){t[12]=n,t[13]=r,t[14]=e}function E(t,n=a.create()){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function q(t,n){return j(t=r.identity(t),n),t}function B(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function F(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/n)}function I(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/r)}function R(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/n)}function S(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/r)}function U(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function D(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function G(t,r,e=0){const o=n.clamp(t,0,C);for(let n=0;n<4;n++)r[e+n]=Math.floor(256*K(o*P[n]))}function O(t,n=0){let r=0;for(let e=0;e<4;e++)r+=t[n+e]*_[e];return r}const P=[1,256,65536,16777216],_=[1/256,1/65536,1/16777216,1/4294967296],C=O(new Uint8ClampedArray([255,255,255,255]));function K(t){return t-Math.floor(t)}function N(t,n,r,o,a){const c=t;0===t[11]?(o[0]=2/(n*c[0]),o[1]=2/(r*c[5]),o[2]=(1+c[12])/c[0],o[3]=(1+c[13])/c[5],e.set(a,0,1)):(o[0]=-2/(n*c[0]),o[1]=-2/(r*c[5]),o[2]=(1-c[8])/c[0],o[3]=(1-c[9])/c[5],e.set(a,1,0))}t.AssertException=f,t.assert=s,t.createTranslationMatrix=q,t.dec2hex=y,t.encodeInt16=l,t.encodeNormal=M,t.fallbackIfUndefined=v,t.fovd2fovx=U,t.fovd2fovy=D,t.fovx2fovd=R,t.fovx2fovy=F,t.fovy2fovd=S,t.fovy2fovx=I,t.getFirstObjectKey=b,t.getMatrixTranslation=E,t.hex2rgb=d,t.inverseProjectionInfo=N,t.isTranslationMatrix=B,t.logWithBase=w,t.objectEmpty=T,t.packFloatRGBA=G,t.project=k,t.rayBoxTest=p,t.rayRay2D=m,t.rayTriangle3D=g,t.rgb2hex=x,t.setMatrixTranslation=j,t.setMatrixTranslation3=A,t.unpackFloatRGBA=O,t.verify=h,Object.defineProperty(t,"__esModule",{value:!0})}));
