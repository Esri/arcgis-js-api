/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery","../../geometry/Extent"],(function(e,t,r,o,n,u,s){"use strict";function p(e,t,r){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,r){const p=o.parseUrl(e),a=yield n.executeQueryForTopExtents(p,u.from(t),{...r});return{count:a.data.count,extent:s.fromJSON(a.data.extent)}}))).apply(this,arguments)}e.executeForTopExtents=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
