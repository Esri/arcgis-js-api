/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.getFontDecorationTop=function(e){switch(e){case"underline":return-26;case"line-through":return-18}return NaN},e.getFullyQualifiedFontName=function(e){const t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblic":return"-italic"}return""}(e);return function(e){const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}(e.family)+(t.length>0?t:"-regular")},Object.defineProperty(e,"__esModule",{value:!0})}));
