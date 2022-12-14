/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./FeatureReduction","./FeatureReductionBinning","./FeatureReductionCluster","./FeatureReductionSelection"],(function(e,t,n,i,u){"use strict";const o={key:"type",base:t.FeatureReduction,typeMap:{selection:u}},a={key:"type",base:t.FeatureReduction,typeMap:{cluster:i,binning:n}},r={types:{key:"type",base:t.FeatureReduction,typeMap:{selection:u,cluster:i,binning:n}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:a},"portal-item":{types:a},"web-scene":{types:o}}}};e.featureReductionProperty=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
