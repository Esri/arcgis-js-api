/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery"],(function(e,r,t,o,u){"use strict";function n(e,r,t){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,r,n){const s=t.parseUrl(e);return(yield o.executeQueryForTopIds(s,u.from(r),{...n})).data.objectIds}))).apply(this,arguments)}e.executeForTopIds=n,Object.defineProperty(e,"__esModule",{value:!0})}));
