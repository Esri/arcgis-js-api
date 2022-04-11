/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";var o,r,n,f={exports:{}};o=f,r=function(){function t(t,r,f,e,a){o(t,r,f||0,e||t.length-1,a||n)}function o(t,n,f,e,a){for(;e>f;){if(e-f>600){var i=e-f+1,c=n-f+1,u=Math.log(i),s=.5*Math.exp(2*u/3),h=.5*Math.sqrt(u*s*(i-s)/i)*(c-i/2<0?-1:1);o(t,n,Math.max(f,Math.floor(n-c*s/i+h)),Math.min(e,Math.floor(n+(i-c)*s/i+h)),a)}var M=t[n],x=f,l=e;for(r(t,f,n),a(t[e],M)>0&&r(t,f,e);x<l;){for(r(t,x,l),x++,l--;a(t[x],M)<0;)x++;for(;a(t[l],M)>0;)l--}0===a(t[f],M)?r(t,f,l):r(t,++l,e),l<=n&&(f=l+1),n<=l&&(e=l-1)}}function r(t,o,r){var n=t[o];t[o]=t[r],t[r]=n}function n(t,o){return t<o?-1:t>o?1:0}return t},void 0!==(n=r())&&(o.exports=n);const e=f.exports;t.quickselect=e}));
