/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","./widgetUtils","../../core/has","../../core/Logger","./jsxFactory"],(function(e,t,n,i,l,r){"use strict";const s={heading:"esri-widget__heading"};function a(e,t){const i=c(e.level),l=`h${i}`;return delete e.level,r.tsx(l,{...e,class:n.classes(s.heading,e.class),role:"heading","aria-level":String(i)},t)}function c(e){return t.clamp(Math.ceil(e),1,6)}function o(e,t=1){return c(e+t)}e.CSS=s,e.Heading=a,e.incrementHeadingLevel=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
