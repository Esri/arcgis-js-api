/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function i(t,i,n,r){if(n>=i)return t;null==t&&(t=e());const l=t.isVisibleBit;let o=t.data;const a=u(o),c=n/a|0,f=n-a*c,d=(i-1)/a|0,b=o,h=r===l;if(!(n<b.length*a)&&h){const t=1.5,i=c+1,n=Math.ceil(b.length*t),e=d+1;let r=Math.max(i,n);r=Math.min(r,e),o=new Uint32Array(r),o.set(b)}return c<o.length&&(o[c]=s(o[c],f,h)),t.data=o,t}function n(t,i){if(null==t)return!0;const{isVisibleBit:n,data:e}=t,s=u(e);return i<e.length*s?r(n,e,i,s):!t.isVisibleBit}function e(t=!0){return{isVisibleBit:!t,data:new Uint32Array(0)}}function r(t,i,n,e){const r=n/e|0,u=n-r*e;return l(i[r],u)===t}function u(t){const i=8;return t.BYTES_PER_ELEMENT*i}function s(t,i,n){return t&~(1<<i)|(n?1:0)<<i}function l(t,i){return 0!=(t&1<<i)}t.defaultVisibilities=e,t.getVisibility=n,t.updateVisibilityWithCount=i,Object.defineProperty(t,"__esModule",{value:!0})}));
