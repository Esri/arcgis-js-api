/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/Query"],(function(e,t,r,u,n){"use strict";function o(e,t,r){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,o){const s=r.parseUrl(e);return u.executeQueryForCount(s,n.from(t),{...o}).then((e=>e.data.count))}))).apply(this,arguments)}e.executeForCount=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
