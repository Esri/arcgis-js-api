/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../centroid","../OptimizedFeature","../OptimizedGeometry"],(function(e,t,i,r,o){"use strict";const d={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new r.OptimizedFeature(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,r)=>(t.isNone(e.centroid)&&(e.centroid=i.getCentroidOptimizedGeometry(new o,e.geometry,r.hasZ,r.hasM)),e.centroid)};e.optimizedFeatureQueryEngineAdapter=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
