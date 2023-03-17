/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","./widgetUtils","./jsxFactory"],(function(e,t,n,i){"use strict";const r={heading:"esri-widget__heading"};function a({level:e,class:t,...a},c){const l=s(e),o=`h${l}`;return i.tsx(o,{...a,class:n.classes(r.heading,t),role:"heading","aria-level":String(l)},c)}function s(e){return t.clamp(Math.ceil(e),1,6)}function c(e,t=1){return s(e+t)}e.CSS=r,e.Heading=a,e.incrementHeadingLevel=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
