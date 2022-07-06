/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t,a=5){let r=Math.round(t);if(r<=1)return 1;const n=r.toString().length;for(let e=n-1>=3?3:n-1;e>=0;e--){const n=10**e,o=Math.floor(t/n)*n,h=Math.ceil(t/n)*n,i=Math.round((o+h)/2),f=Math.abs(t-o)/t*100,M=Math.abs(t-h)/t*100,b=Math.abs(t-i)/t*100,l=Math.min(f,M,b);if(l<=a){if(l===f){r=o;break}if(l===M){r=h;break}if(l===b){r=i;break}}}return r}export{t as roundValue};
