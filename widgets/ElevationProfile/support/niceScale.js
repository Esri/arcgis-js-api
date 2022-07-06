/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t,n,r=10){const c=o(n-t,!1);if(0===c)return[t,n];const e=o(c/(r-1),!0);return[Math.floor(t/e)*e,Math.ceil(n/e)*e]}function o(t,o){const n=Math.floor(Math.log10(t)),r=t/10**n;let c;return c=o?r<1.5?1:r<3?2:r<5?2.5:r<7?5:10:r<=1?1:r<=2?2:r<=3?2.5:r<=5?5:10,c*10**n}export{t as niceScale};
