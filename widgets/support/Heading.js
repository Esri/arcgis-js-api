/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clamp as e}from"../../core/mathUtils.js";import{classes as t}from"./widgetUtils.js";import{tsx as r}from"./jsxFactory.js";const i={heading:"esri-widget__heading"};function n(e,n){const l=o(e.level),s=`h${l}`;return delete e.level,r(s,{...e,class:t(i.heading,e.class),role:"heading","aria-level":String(l)},n)}function o(t){return e(Math.ceil(t),1,6)}function l(e,t=1){return o(e+t)}export{i as CSS,n as Heading,l as incrementHeadingLevel};
