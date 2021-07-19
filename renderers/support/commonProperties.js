/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../symbols","../../symbols/support/jsonUtils","../../symbols/Symbol","../../symbols/PolygonSymbol3D"],(function(e,r,s,t,y){"use strict";const o={types:r.symbolTypesRenderer,json:{write:{writer:s.write},origins:{"web-scene":{types:r.symbolTypesRenderer3D,write:{writer:s.write}}}}},l={types:{base:t,key:"type",typeMap:{"simple-fill":r.symbolTypes.typeMap["simple-fill"],"picture-fill":r.symbolTypes.typeMap["picture-fill"],"polygon-3d":r.symbolTypes.typeMap["polygon-3d"]}},json:{write:{writer:s.write},origins:{"web-scene":{type:y,write:{writer:s.write}}}}};e.rendererBackgroundFillSymbolProperty=l,e.rendererSymbolProperty=o,Object.defineProperty(e,"__esModule",{value:!0})}));
