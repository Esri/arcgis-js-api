/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../centroid","../OptimizedFeature","../OptimizedGeometry"],(function(e,t,i,r){"use strict";const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new i(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,i)=>(e.centroid||(e.centroid=t.getCentroidOptimizedGeometry(new r,e.geometry,i.hasZ,i.hasM)),e.centroid)};e.default=o,e.optimizedFeatureQueryEngineAdapter=o,Object.defineProperty(e,"__esModule",{value:!0})}));
