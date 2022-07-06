/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isMultiOriginJSONMixin as r}from"../multiOriginJSONSupportUtils.js";function i(i){i&&i.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{r(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}export{i as updateOrigins};
