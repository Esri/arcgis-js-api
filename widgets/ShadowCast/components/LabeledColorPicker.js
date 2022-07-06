/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Label as o}from"./Label.js";import{ColorPicker as r}from"../../support/ColorPicker.js";import"../../support/widgetUtils.js";import{tsx as t}from"../../support/jsxFactory.js";function e(e){return t(o,{for:e.id,label:e.label,tabIndex:-1},t(r,{id:e.id,value:e.value,onChange:e.onChange}))}export{e as LabeledColorPicker};
