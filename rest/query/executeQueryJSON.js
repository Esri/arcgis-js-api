/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/FeatureSet","../support/Query"],(function(e,t,r,n,u,o){"use strict";function i(e,t,r){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,r){const n=yield c(e,t,r);return u.fromJSON(n)}))).apply(this,arguments)}function c(e,t,r){return p.apply(this,arguments)}function p(){return(p=t._asyncToGenerator((function*(e,t,u){const i=r.parseUrl(e),a={...u},c=o.from(t),{data:p}=yield n.executeQuery(i,c,c.sourceSpatialReference,a);return p}))).apply(this,arguments)}e.executeQueryJSON=i,e.executeRawQueryJSON=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
