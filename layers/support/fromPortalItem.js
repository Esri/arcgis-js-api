/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../config.js";import t from"../../core/Logger.js";const o=t.getLogger("esri.layers.support.fromPortalItem");async function a(t){const a="portalItem"in t?t:{portalItem:t},e=await import("../../portal/support/portalLayers.js");try{return await e.fromItem(a)}catch(p){const t=a&&a.portalItem,e=t&&t.id||"unset",l=t&&t.portal&&t.portal.url||r.portalUrl;throw o.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+l+"', id: '"+e+"')",p),p}}export{a as fromPortalItem};
