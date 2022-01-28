/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./FeatureReduction","./FeatureReductionCluster","./FeatureReductionSelection"],(function(e,t,n,u){"use strict";const a={key:"type",base:t.default,typeMap:{selection:u}},i={key:"type",base:t.default,typeMap:{selection:n}},o={types:{key:"type",base:t.default,typeMap:{selection:u,cluster:n}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:i},"web-scene":{types:a}}}};e.featureReductionProperty=o,Object.defineProperty(e,"__esModule",{value:!0})}));
