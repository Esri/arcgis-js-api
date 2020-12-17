/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./_commonjsHelpers"],(function(o,t){"use strict";var n=t.createCommonjsModule((function(o){var t;void 0!==(t=function(){function o(o,n,e,f,a){t(o,n,e||0,f||o.length-1,a||r)}function t(o,r,e,f,a){for(;f>e;){if(f-e>600){var i=f-e+1,c=r-e+1,u=Math.log(i),s=.5*Math.exp(2*u/3),h=.5*Math.sqrt(u*s*(i-s)/i)*(c-i/2<0?-1:1);t(o,r,Math.max(e,Math.floor(r-c*s/i+h)),Math.min(f,Math.floor(r+(i-c)*s/i+h)),a)}var M=o[r],l=e,m=f;for(n(o,e,r),a(o[f],M)>0&&n(o,e,f);l<m;){for(n(o,l,m),l++,m--;a(o[l],M)<0;)l++;for(;a(o[m],M)>0;)m--}0===a(o[e],M)?n(o,e,m):n(o,++m,f),m<=r&&(e=m+1),r<=m&&(f=m-1)}}function n(o,t,n){var r=o[t];o[t]=o[n],o[n]=r}function r(o,t){return o<t?-1:o>t?1:0}return o}())&&(o.exports=t)}));o.quickselect=n}));
