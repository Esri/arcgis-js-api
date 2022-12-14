/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery"],(function(e,t,o,r,u){"use strict";function n(e,t,o){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,n){const s=o.parseUrl(e);return(yield r.executeQueryForTopCount(s,u.from(t),{...n})).data.count}))).apply(this,arguments)}e.executeForTopCount=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
