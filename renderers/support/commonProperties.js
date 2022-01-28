/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../symbols","../../core/accessorSupport/extensions/serializableProperty/reader","../../symbols/support/jsonUtils","../../symbols/Symbol","../../symbols/PolygonSymbol3D"],(function(e,r,s,o,t,y){"use strict";const p={types:r.symbolTypesRenderer,json:{write:{writer:o.write},origins:{"web-scene":{types:r.symbolTypesRenderer3D,write:{writer:o.write},read:{reader:s.createTypeReader({types:r.symbolTypesRenderer3D})}}}}},l={types:{base:t,key:"type",typeMap:{"simple-fill":r.symbolTypes.typeMap["simple-fill"],"picture-fill":r.symbolTypes.typeMap["picture-fill"],"polygon-3d":r.symbolTypes.typeMap["polygon-3d"]}},json:{write:{writer:o.write},origins:{"web-scene":{type:y,write:{writer:o.write}}}}};e.rendererBackgroundFillSymbolProperty=l,e.rendererSymbolProperty=p,Object.defineProperty(e,"__esModule",{value:!0})}));
