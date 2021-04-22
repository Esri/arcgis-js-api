/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../tasks/support/AttachmentQuery","../utils","./operations/queryAttachments"],(function(t,e,r,n){"use strict";async function s(t,s,u){const a=r.parseUrl(t);return n.executeAttachmentQuery(a,e.from(s),{...u}).then((t=>n.processAttachmentQueryResult(t.data.attachmentGroups,a.path)))}t.executeAttachmentQuery=s,Object.defineProperty(t,"__esModule",{value:!0})}));
