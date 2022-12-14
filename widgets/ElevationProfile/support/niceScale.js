/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n=10){const r=o(t-e,!1);if(0===r)return[e,t];const c=o(r/(n-1),!0);return[Math.floor(e/c)*c,Math.ceil(t/c)*c]}function o(e,t){const o=Math.floor(Math.log10(e)),n=e/10**o;let r;return r=t?n<1.5?1:n<3?2:n<5?2.5:n<7?5:10:n<=1?1:n<=2?2:n<=3?2.5:n<=5?5:10,r*10**o}e.niceScale=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
