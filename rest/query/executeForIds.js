/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/query","../support/Query"],(function(e,t,r,n,o){"use strict";function u(e,t,r){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,u){const s=r.parseUrl(e);return n.executeQueryForIds(s,o.from(t),{...u}).then((e=>e.data.objectIds))}))).apply(this,arguments)}e.executeForIds=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
