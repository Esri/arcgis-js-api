/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryTopFeatures","../support/FeatureSet","../support/TopFeaturesQuery"],(function(e,r,t,u,o,n){"use strict";function p(e,r,t,u){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,r,p,s){const a=t.parseUrl(e),i={...s},{data:l}=yield u.executeTopFeaturesQuery(a,n.from(r),p,i);return o.fromJSON(l)}))).apply(this,arguments)}e.executeTopFeaturesQuery=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
