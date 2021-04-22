/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../symbols/Symbol","../../symbols/PolygonSymbol3D","../../symbols","../../symbols/support/jsonUtils"],(function(e,r,s,t,y){"use strict";const o={types:t.symbolTypesRenderer,json:{write:{writer:y.write},origins:{"web-scene":{types:t.symbolTypesRenderer3D,write:{writer:y.write}}}}},l={types:{base:r,key:"type",typeMap:{"simple-fill":t.symbolTypes.typeMap["simple-fill"],"picture-fill":t.symbolTypes.typeMap["picture-fill"],"polygon-3d":t.symbolTypes.typeMap["polygon-3d"]}},json:{write:{writer:y.write},origins:{"web-scene":{type:s,write:{writer:y.write}}}}};e.rendererBackgroundFillSymbolProperty=l,e.rendererSymbolProperty=o,Object.defineProperty(e,"__esModule",{value:!0})}));
