/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../utils","./operations/query","../support/Query","../../geometry/Extent"],(function(e,t,n,r,o,u,s){"use strict";function a(e,t,n){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,n){const a=r.parseUrl(e);return o.executeQueryForExtent(a,u.from(t),{...n}).then((e=>({count:e.data.count,extent:s.fromJSON(e.data.extent)})))}))).apply(this,arguments)}e.executeForExtent=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
