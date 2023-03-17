/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e,o=10){const r=n(e-t,!1);if(0===r)return[t,e];const c=n(r/(o-1),!0);return[Math.floor(t/c)*c,Math.ceil(e/c)*c]}function n(t,e){const n=Math.floor(Math.log10(t)),o=t/10**n;let r;return r=e?o<1.5?1:o<3?2:o<5?2.5:o<7?5:10:o<=1?1:o<=2?2:o<=3?2.5:o<=5?5:10,r*10**n}t.niceScale=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
