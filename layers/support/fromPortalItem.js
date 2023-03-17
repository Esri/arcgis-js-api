/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../config","../../core/Logger"],(function(r,t,e,o,l){"use strict";function a(r){return n.apply(this,arguments)}function n(){return(n=e._asyncToGenerator((function*(t){const e="portalItem"in t?t:{portalItem:t},a=yield new Promise(((t,e)=>r(["../../portal/support/portalLayers"],t,e)));try{return yield a.fromItem(e)}catch(n){const r=e&&e.portalItem,t=r&&r.id||"unset",a=r&&r.portal&&r.portal.url||o.portalUrl;throw l.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+a+"', id: '"+t+"')",n),n}}))).apply(this,arguments)}t.fromPortalItem=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
