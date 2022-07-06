/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{LABEL as s}from"../css.js";import{classes as t}from"../../support/widgetUtils.js";import{tsx as r}from"../../support/jsxFactory.js";function o(o,e){const{for:a,label:c,tabIndex:i,...l}=o;return r("div",{class:t(s,l?.class),key:a,...l},r("calcite-label",{for:a,scale:"s",tabIndex:i,"disable-spacing":"true"},c),e)}export{o as Label};
