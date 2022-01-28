/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","./widgetUtils","../../core/has","../../core/Logger","./jsxFactory"],(function(e,s,t,c,i,l){"use strict";const a={heading:"esri-widget__heading"};function n(e,c){const i=`h${s.clamp(Math.ceil(e.level),1,6)}`;return delete e.level,l.tsx(i,{...e,class:t.classes(a.heading,e.class)},c)}e.CSS=a,e.Heading=n,Object.defineProperty(e,"__esModule",{value:!0})}));
