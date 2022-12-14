/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","./widgetUtils","./jsxFactory"],(function(e,t,n,i){"use strict";const l={heading:"esri-widget__heading"};function s(e,t){const s=a(e.level),r=`h${s}`;return delete e.level,i.tsx(r,{...e,class:n.classes(l.heading,e.class),role:"heading","aria-level":String(s)},t)}function a(e){return t.clamp(Math.ceil(e),1,6)}function r(e,t=1){return a(e+t)}e.CSS=l,e.Heading=s,e.incrementHeadingLevel=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
