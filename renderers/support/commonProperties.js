/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../symbols/Symbol","../../symbols/PolygonSymbol3D","../../chunks/symbols"],(function(e,r,s,y){"use strict";const t={types:y.symbolTypesRenderer,json:{write:{writer:y.write},origins:{"web-scene":{types:y.symbolTypesRenderer3D,write:{writer:y.write}}}}},o={types:{base:r,key:"type",typeMap:{"simple-fill":y.symbolTypes.typeMap["simple-fill"],"picture-fill":y.symbolTypes.typeMap["picture-fill"],"polygon-3d":y.symbolTypes.typeMap["polygon-3d"]}},json:{write:{writer:y.write},origins:{"web-scene":{type:s,write:{writer:y.write}}}}};e.rendererBackgroundFillSymbolProperty=o,e.rendererSymbolProperty=t,Object.defineProperty(e,"__esModule",{value:!0})}));
