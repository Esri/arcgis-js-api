/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t=-26,r=-18;function n(e){const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function s(e){const t=u(e)+o(e);return n(e.family)+(t.length>0?t:"-regular")}function i(e){switch(e){case"underline":return t;case"line-through":return r}return NaN}function u(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function o(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}e.getFontDecorationTop=i,e.getFullyQualifiedFontName=s,Object.defineProperty(e,"__esModule",{value:!0})}));
