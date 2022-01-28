/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryTopFeatures","../support/FeatureSet","../support/TopFeaturesQuery"],(function(e,r,t,u,o,n){"use strict";function s(e,r,t,u){return p.apply(this,arguments)}function p(){return(p=r._asyncToGenerator((function*(e,r,s,p){const a=t.parseUrl(e),i={...p},{data:l}=yield u.executeTopFeaturesQuery(a,n.from(r),s,i);return o.fromJSON(l)}))).apply(this,arguments)}e.executeTopFeaturesQuery=s,Object.defineProperty(e,"__esModule",{value:!0})}));
