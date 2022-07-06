/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{JSONMap as e}from"../../jsonMap.js";import{property as n}from"./property.js";function r(r,o={}){const a=r instanceof e?r:new e(r,o),t={type:o?.ignoreUnknown??1?a.apiValues:String,json:{type:a.jsonValues,read:!o?.readOnly&&{reader:a.read},write:{writer:a.write}}};return void 0!==o?.readOnly&&(t.readOnly=!!o.readOnly),void 0!==o?.default&&(t.json.default=o.default),void 0!==o?.name&&(t.json.name=o.name),n(t)}export{r as enumeration};
