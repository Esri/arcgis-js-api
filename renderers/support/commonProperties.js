/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{symbolTypesRenderer as e,symbolTypesRenderer3D as r,symbolTypes as o}from"../../symbols.js";import{createTypeReader as s}from"../../core/accessorSupport/extensions/serializableProperty/reader.js";import{write as t}from"../../symbols/support/jsonUtils.js";import p from"../../symbols/Symbol.js";import i from"../../symbols/PolygonSymbol3D.js";const l={types:e,json:{write:{writer:t},origins:{"web-scene":{types:r,write:{writer:t},read:{reader:s({types:r})}}}}},y={types:{base:p,key:"type",typeMap:{"simple-fill":o.typeMap["simple-fill"],"picture-fill":o.typeMap["picture-fill"],"polygon-3d":o.typeMap["polygon-3d"]}},json:{write:{writer:t},origins:{"web-scene":{type:i,write:{writer:t}}}}};export{y as rendererBackgroundFillSymbolProperty,l as rendererSymbolProperty};
