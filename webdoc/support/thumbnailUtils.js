/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const h={width:600,height:400},t=1.5;function i(i,e){e=e||h;let{width:d,height:n}=e;const g=d/n;return g<t?n=d/t:g>t&&(d=n*t),d>i.width&&(n*=i.width/d,d=i.width),n>i.height&&(d*=i.height/n,n=i.height),{width:Math.round(d),height:Math.round(n)}}export{i as getOptimalThumbnailSize};
