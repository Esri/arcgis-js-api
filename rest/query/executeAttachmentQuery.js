/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryAttachments","../support/AttachmentQuery"],(function(t,e,n,r,u){"use strict";function s(t,e,n){return a.apply(this,arguments)}function a(){return(a=e._asyncToGenerator((function*(t,e,s){const a=n.parseUrl(t);return r.executeAttachmentQuery(a,u.from(e),{...s}).then((t=>r.processAttachmentQueryResult(t.data.attachmentGroups,a.path)))}))).apply(this,arguments)}t.executeAttachmentQuery=s,Object.defineProperty(t,"__esModule",{value:!0})}));
