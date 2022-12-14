/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./FeatureSnappingEngine","./SelfSnappingEngine"],(function(e,n,i){"use strict";function t(e,t){return[new i.SelfSnappingEngine({view:e,options:t}),new n.FeatureSnappingEngine({view:e,options:t,spatialReference:e.spatialReference})]}e.defaultSnappingEnginesFactory=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
