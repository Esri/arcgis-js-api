/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../config","../../core/Logger"],(function(r,e,t,o,l){"use strict";function a(r){return n.apply(this,arguments)}function n(){return(n=t._asyncToGenerator((function*(e){const t="portalItem"in e?e:{portalItem:e},a=yield new Promise(((e,t)=>r(["../../portal/support/portalLayers"],e,t)));try{return yield a.fromItem(t)}catch(n){const r=t&&t.portalItem,e=r&&r.id||"unset",a=r&&r.portal&&r.portal.url||o.portalUrl;throw l.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+a+"', id: '"+e+"')",n),n}}))).apply(this,arguments)}e.fromPortalItem=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
