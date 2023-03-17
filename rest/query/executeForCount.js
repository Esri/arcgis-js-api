/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/Query"],(function(e,t,r,n,u){"use strict";function o(e,t,r){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,o){const i=r.parseUrl(e);return n.executeQueryForCount(i,u.from(t),{...o}).then((e=>e.data.count))}))).apply(this,arguments)}e.executeForCount=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
