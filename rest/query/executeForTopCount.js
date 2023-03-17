/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery"],(function(e,t,r,o,u){"use strict";function n(e,t,r){return p.apply(this,arguments)}function p(){return(p=t._asyncToGenerator((function*(e,t,n){const p=r.parseUrl(e);return(yield o.executeQueryForTopCount(p,u.from(t),{...n})).data.count}))).apply(this,arguments)}e.executeForTopCount=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
