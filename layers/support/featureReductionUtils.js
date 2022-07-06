/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{FeatureReduction as e}from"./FeatureReduction.js";import t from"./FeatureReductionBinning.js";import i from"./FeatureReductionCluster.js";import o from"./FeatureReductionSelection.js";const n={key:"type",base:e,typeMap:{selection:i}},p={types:{key:"type",base:e,typeMap:{selection:o,cluster:i,binning:t}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:n},"portal-item":{types:n},"web-scene":{types:{key:"type",base:e,typeMap:{selection:o}}}}}};export{p as featureReductionProperty};
