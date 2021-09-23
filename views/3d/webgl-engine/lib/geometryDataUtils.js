/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/triangle"],(function(e,t,n,r){"use strict";let a=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const s=new Uint16Array([0]),c=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function i(e){if(1===e)return s;if(e<c.length)return new Uint16Array(c.buffer,0,e);if(e>a.length){const t=Math.max(2*a.length,e);a=new Uint32Array(t);for(let e=0;e<a.length;e++)a[e]=e}return new Uint32Array(a.buffer,0,e)}function l(e){if(1===e)return new Uint16Array(s);if(e<c.length)return new Uint16Array(c.slice(0,e));if(e>a.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(a.slice(0,e))}function o(e,n,a){if(!e)return!1;const{size:s,data:c}=e;t.set(a,0,0,0),t.set(A,0,0,0);let i=0,l=0;for(let o=0;o<n.length-2;o+=3){const e=n[o+0]*s,u=n[o+1]*s,f=n[o+2]*s;t.set(d,c[e+0],c[e+1],c[e+2]),t.set(g,c[u+0],c[u+1],c[u+2]),t.set(h,c[f+0],c[f+1],c[f+2]);const y=r.areaPoints3d(d,g,h);y?(t.add(d,d,g),t.add(d,d,h),t.scale(d,d,1/3*y),t.add(a,a,d),i+=y):(t.add(A,A,d),t.add(A,A,g),t.add(A,A,h),l+=3)}return(0!==l||0!==i)&&(0!==i?(t.scale(a,a,1/i),!0):0!==l&&(t.scale(a,A,1/l),!0))}function u(e,n,r){if(!e||!n)return!1;const{size:a,data:s}=e;t.set(r,0,0,0);let c=-1,i=0;for(let t=0;t<n.length;t++){const e=n[t]*a;c!==e&&(r[0]+=s[e+0],r[1]+=s[e+1],r[2]+=s[e+2],i++),c=e}return i>1&&t.scale(r,r,1/i),i>0}function f(e,n,r,a){if(!e)return!1;const{size:s,data:c}=e;t.set(a,0,0,0),t.set(A,0,0,0);let i=0,l=0;const o=n?n.length-1:c.length/s-1,u=o+(r?2:0);for(let f=0;f<u;f+=2){const e=f<o?f:o,r=f<o?f+1:0,u=(n?n[e]:e)*s,h=(n?n[r]:r)*s;d[0]=c[u+0],d[1]=c[u+1],d[2]=c[u+2],g[0]=c[h+0],g[1]=c[h+1],g[2]=c[h+2],t.scale(d,t.add(d,d,g),.5);const y=t.dist(d,g);y>0?(t.add(a,a,t.scale(d,d,y)),i+=y):(t.add(A,A,d),l++)}return 0!==i?(t.scale(a,a,1/i),!0):0!==l&&(t.scale(a,A,1/l),!0)}const d=n.create(),g=n.create(),h=n.create(),A=n.create();e.computeAttachmentOriginLines=f,e.computeAttachmentOriginPoints=u,e.computeAttachmentOriginTriangles=o,e.generateDefaultIndexArray=i,e.generateIndexArray=l,Object.defineProperty(e,"__esModule",{value:!0})}));
