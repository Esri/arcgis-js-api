/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../utils","./operations/query","../support/Query","../../geometry/Extent"],(function(e,t,n,r,o,u,s){"use strict";function c(e,t,n){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,n){const c=r.parseUrl(e);return o.executeQueryForExtent(c,u.from(t),{...n}).then((e=>({count:e.data.count,extent:s.fromJSON(e.data.extent)})))}))).apply(this,arguments)}e.executeForExtent=c,Object.defineProperty(e,"__esModule",{value:!0})}));
