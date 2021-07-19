/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/Query"],(function(e,t,r,n,u){"use strict";function o(e,t,r){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,o){const s=r.parseUrl(e);return n.executeQueryForCount(s,u.from(t),{...o}).then((e=>e.data.count))}))).apply(this,arguments)}e.executeForCount=o,Object.defineProperty(e,"__esModule",{value:!0})}));
