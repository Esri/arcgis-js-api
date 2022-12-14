/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/FeatureSet","../support/Query"],(function(e,t,r,u,n,o){"use strict";function i(e,t,r){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,r){const u=yield a(e,t,r);return n.fromJSON(u)}))).apply(this,arguments)}function a(e,t,r){return c.apply(this,arguments)}function c(){return(c=t._asyncToGenerator((function*(e,t,n){const i=r.parseUrl(e),s={...n},a=o.from(t),{data:c}=yield u.executeQuery(i,a,a.sourceSpatialReference,s);return c}))).apply(this,arguments)}e.executeQueryJSON=i,e.executeRawQueryJSON=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
