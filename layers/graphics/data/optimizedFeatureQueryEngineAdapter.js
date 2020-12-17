/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../OptimizedFeature","../OptimizedGeometry","../centroid"],(function(e,t,i,r){"use strict";const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,i)=>new t(i,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=r.getCentroidOptimizedGeometry(new i,e.geometry,t.hasZ,t.hasM)),e.centroid)};e.default=o,e.optimizedFeatureQueryEngineAdapter=o,Object.defineProperty(e,"__esModule",{value:!0})}));
