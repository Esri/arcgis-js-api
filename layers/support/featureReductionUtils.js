/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./FeatureReduction","./FeatureReductionBinning","./FeatureReductionCluster","./FeatureReductionSelection"],(function(e,t,n,i,u){"use strict";const o={key:"type",base:t.FeatureReduction,typeMap:{selection:u}},r={key:"type",base:t.FeatureReduction,typeMap:{cluster:i,binning:n}},a={types:{key:"type",base:t.FeatureReduction,typeMap:{selection:u,cluster:i,binning:n}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:r},"portal-item":{types:r},"web-scene":{types:o}}}};e.featureReductionProperty=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
