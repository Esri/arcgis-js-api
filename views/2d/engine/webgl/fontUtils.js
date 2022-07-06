/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e=-26,r=-18;function t(e){const r=e.toLowerCase().split(" ").join("-");switch(r){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return r}}function n(e){const r=u(e)+c(e);return t(e.family)+(r.length>0?r:"-regular")}function s(t){switch(t){case"underline":return e;case"line-through":return r}return NaN}function u(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function c(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}export{s as getFontDecorationTop,t as getFontFamily,n as getFullyQualifiedFontName};
