/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{unwrap as e}from"../../../../core/maybe.js";import{createVisualElements as r}from"./lineGraphicVisualElementUtils.js";import{createVisualElements as t}from"./originGraphicVisualElementUtils.js";function i(i){switch(e(i.graphic.geometry).type){case"point":case"mesh":return t(i);case"polygon":case"polyline":return r(i);default:return null}}export{i as createVisualElements};
