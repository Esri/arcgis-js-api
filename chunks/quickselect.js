/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";var r,o,n,e={},f={get exports(){return e},set exports(t){e=t}};r=f,o=function(){function t(t,o,e,f,a){r(t,o,e||0,f||t.length-1,a||n)}function r(t,n,e,f,a){for(;f>e;){if(f-e>600){var i=f-e+1,u=n-e+1,c=Math.log(i),s=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*s*(i-s)/i)*(u-i/2<0?-1:1);r(t,n,Math.max(e,Math.floor(n-u*s/i+h)),Math.min(f,Math.floor(n+(i-u)*s/i+h)),a)}var M=t[n],x=e,l=f;for(o(t,e,n),a(t[f],M)>0&&o(t,e,f);x<l;){for(o(t,x,l),x++,l--;a(t[x],M)<0;)x++;for(;a(t[l],M)>0;)l--}0===a(t[e],M)?o(t,e,l):o(t,++l,f),l<=n&&(e=l+1),n<=l&&(f=l-1)}}function o(t,r,o){var n=t[r];t[r]=t[o],t[o]=n}function n(t,r){return t<r?-1:t>r?1:0}return t},void 0!==(n=o())&&(r.exports=n);const a=e;t.quickselect=a}));
