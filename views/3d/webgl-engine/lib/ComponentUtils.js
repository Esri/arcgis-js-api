/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t,n,e,l){if(e>=n)return t;null==t&&(t=i());const s=t.isVisibleBit;let a=t.data;const c=r(a),o=e/c|0,f=e-c*o,h=(n-1)/c|0,B=a,E=l===s;if(!(e<B.length*c)&&E){const t=1.5,n=o+1,i=Math.ceil(B.length*t),e=h+1;let r=Math.max(n,i);r=Math.min(r,e),a=new Uint32Array(r),a.set(B)}return o<a.length&&(a[o]=u(a[o],f,E)),t.data=a,t}function n(t,n){if(null==t)return!0;const{isVisibleBit:i,data:u}=t,l=r(u);return n<u.length*l?e(i,u,n,l):!t.isVisibleBit}function i(t=!0){return{isVisibleBit:!t,data:new Uint32Array(0)}}function e(t,n,i,e){const r=i/e|0,u=i-r*e;return l(n[r],u)===t}function r(t){const n=8;return t.BYTES_PER_ELEMENT*n}function u(t,n,i){return t&~(1<<n)|(i?1:0)<<n}function l(t,n){return 0!=(t&1<<n)}export{i as defaultVisibilities,n as getVisibility,t as updateVisibilityWithCount};
