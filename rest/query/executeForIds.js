/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/Query"],(function(e,r,t,n,u){"use strict";function o(e,r,t){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,r,o){const s=t.parseUrl(e);return n.executeQueryForIds(s,u.from(r),{...o}).then((e=>e.data.objectIds))}))).apply(this,arguments)}e.executeForIds=o,Object.defineProperty(e,"__esModule",{value:!0})}));
