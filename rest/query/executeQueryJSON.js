/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/FeatureSet","../support/Query"],(function(e,r,t,n,u,o){"use strict";function i(e,r,t){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,r,t){const n=yield c(e,r,t);return u.fromJSON(n)}))).apply(this,arguments)}function c(e,r,t){return p.apply(this,arguments)}function p(){return(p=r._asyncToGenerator((function*(e,r,u){const i=t.parseUrl(e),s={...u},c=o.from(r),{data:p}=yield n.executeQuery(i,c,c.sourceSpatialReference,s);return p}))).apply(this,arguments)}e.executeQueryJSON=i,e.executeRawQueryJSON=c,Object.defineProperty(e,"__esModule",{value:!0})}));
