/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryAttachments","../support/AttachmentQuery"],(function(t,e,n,r,u){"use strict";function a(t,e,n){return o.apply(this,arguments)}function o(){return(o=e._asyncToGenerator((function*(t,e,a){const o=n.parseUrl(t);return r.executeAttachmentQuery(o,u.from(e),{...a}).then((t=>r.processAttachmentQueryResult(t.data.attachmentGroups,o.path)))}))).apply(this,arguments)}t.executeAttachmentQuery=a,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
