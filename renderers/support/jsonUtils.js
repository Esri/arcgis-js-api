/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../core/Warning.js";import{createTypeReader as r}from"../../core/accessorSupport/extensions/serializableProperty/reader.js";import{rendererTypes as n}from"./types.js";function t(e,r){return o(e,null,r)}const s=r({types:n});function o(r,n,t){return r?r&&(r.styleName||r.styleUrl)&&"uniqueValue"!==r.type?(t&&t.messages&&t.messages.push(new e("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+r.type+"'",{definition:r,context:t})),null):s(r,n,t):null}export{t as fromJSON,o as read};
