/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./pbfFeatureServiceParser"],(function(e,t){"use strict";function r(e,r){const u=t.parseFeatureQuery(e,r),s=u.queryResult.featureResult,o=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(s&&s.features&&s.features.length&&s.objectIdFieldName){const e=s.objectIdFieldName;for(const t of s.features)t.attributes&&(t.objectId=t.attributes[e])}return s&&(s.queryGeometry=o,s.queryGeometryType=y),s}e.parsePBFFeatureQuery=r,Object.defineProperty(e,"__esModule",{value:!0})}));
