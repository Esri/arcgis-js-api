/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryAttachments","../support/AttachmentQuery"],(function(t,e,n,r,u){"use strict";function o(t,e,n){return c.apply(this,arguments)}function c(){return(c=e._asyncToGenerator((function*(t,e,o){const c=n.parseUrl(t);return r.executeAttachmentQuery(c,u.from(e),{...o}).then((t=>r.processAttachmentQueryResult(c,t)))}))).apply(this,arguments)}t.executeAttachmentQuery=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
