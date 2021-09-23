/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/pbfJSONFeatureSet","./operations/query","../support/FeatureSet","../support/Query"],(function(e,r,t,n,u,a,o){"use strict";function s(e,r,t){return i.apply(this,arguments)}function i(){return(i=r._asyncToGenerator((function*(e,r,t){const n=yield p(e,r,t);return a.fromJSON(n)}))).apply(this,arguments)}function p(e,r,t){return c.apply(this,arguments)}function c(){return(c=r._asyncToGenerator((function*(e,r,a){const s=t.parseUrl(e),i={...a},p=o.from(r),c=!p.quantizationParameters,{data:l}=yield u.executeQueryPBF(s,p,new n.JSONFeatureSetParserContext({sourceSpatialReference:p.sourceSpatialReference,applyTransform:c}),i);return l}))).apply(this,arguments)}e.executeQueryPBF=s,e.executeRawQueryPBF=p,Object.defineProperty(e,"__esModule",{value:!0})}));
