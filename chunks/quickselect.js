/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";var r,o,n={exports:{}};r=n,void 0!==(o=function(){function t(t,o,f,a,e){r(t,o,f||0,a||t.length-1,e||n)}function r(t,n,f,a,e){for(;a>f;){if(a-f>600){var i=a-f+1,u=n-f+1,c=Math.log(i),h=.5*Math.exp(2*c/3),s=.5*Math.sqrt(c*h*(i-h)/i)*(u-i/2<0?-1:1);r(t,n,Math.max(f,Math.floor(n-u*h/i+s)),Math.min(a,Math.floor(n+(i-u)*h/i+s)),e)}var M=t[n],v=f,x=a;for(o(t,f,n),e(t[a],M)>0&&o(t,f,a);v<x;){for(o(t,v,x),v++,x--;e(t[v],M)<0;)v++;for(;e(t[x],M)>0;)x--}0===e(t[f],M)?o(t,f,x):o(t,++x,a),x<=n&&(f=x+1),n<=x&&(a=x-1)}}function o(t,r,o){var n=t[r];t[r]=t[o],t[o]=n}function n(t,r){return t<r?-1:t>r?1:0}return t}())&&(r.exports=o);var f=n.exports;t.quickselect=f}));
