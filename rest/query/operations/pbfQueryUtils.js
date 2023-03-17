/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./pbfFeatureServiceParser"],(function(e,t){"use strict";function r(e,r){const u=t.parseFeatureQuery(e,r),o=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(o&&o.features&&o.features.length&&o.objectIdFieldName){const e=o.objectIdFieldName;for(const t of o.features)t.attributes&&(t.objectId=t.attributes[e])}return o&&(o.queryGeometry=s,o.queryGeometryType=y),o}e.parsePBFFeatureQuery=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
