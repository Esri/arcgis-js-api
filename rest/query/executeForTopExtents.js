/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery","../../geometry/Extent"],(function(e,t,r,o,n,u,s){"use strict";function a(e,t,r){return p.apply(this,arguments)}function p(){return(p=t._asyncToGenerator((function*(e,t,r){const a=o.parseUrl(e),p=yield n.executeQueryForTopExtents(a,u.from(t),{...r});return{count:p.data.count,extent:s.fromJSON(p.data.extent)}}))).apply(this,arguments)}e.executeForTopExtents=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
