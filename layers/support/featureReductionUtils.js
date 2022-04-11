/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./FeatureReduction","./FeatureReductionCluster","./FeatureReductionSelection"],(function(e,t,o,u){"use strict";const a={key:"type",base:t.default,typeMap:{selection:u}},i={key:"type",base:t.default,typeMap:{selection:o}},n={types:{key:"type",base:t.default,typeMap:{selection:u,cluster:o}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:i},"web-scene":{types:a}}}};e.featureReductionProperty=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
