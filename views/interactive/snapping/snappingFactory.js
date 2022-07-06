/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{FeatureSnappingEngine as e}from"./FeatureSnappingEngine.js";import{SelfSnappingEngine as n}from"./SelfSnappingEngine.js";function i(i,p){return[new n({view:i,options:p}),new e({view:i,options:p,spatialReference:i.spatialReference})]}export{i as defaultSnappingEnginesFactory};
