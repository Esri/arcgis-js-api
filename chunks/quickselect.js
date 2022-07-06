/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t,o,r,n={exports:{}};t=n,o=function(){function t(t,r,a,f,e){o(t,r,a||0,f||t.length-1,e||n)}function o(t,n,a,f,e){for(;f>a;){if(f-a>600){var h=f-a+1,i=n-a+1,u=Math.log(h),M=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*M*(h-M)/h)*(i-h/2<0?-1:1);o(t,n,Math.max(a,Math.floor(n-i*M/h+c)),Math.min(f,Math.floor(n+(h-i)*M/h+c)),e)}var s=t[n],x=a,p=f;for(r(t,a,n),e(t[f],s)>0&&r(t,a,f);x<p;){for(r(t,x,p),x++,p--;e(t[x],s)<0;)x++;for(;e(t[p],s)>0;)p--}0===e(t[a],s)?r(t,a,p):r(t,++p,f),p<=n&&(a=p+1),n<=p&&(f=p-1)}}function r(t,o,r){var n=t[o];t[o]=t[r],t[r]=n}function n(t,o){return t<o?-1:t>o?1:0}return t},void 0!==(r=o())&&(t.exports=r);const a=n.exports;export{a as q};
