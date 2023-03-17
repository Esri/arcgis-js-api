/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./index","./observers"],(function(e,t,n){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.7
   */const o=new Set;let c;const i={childList:!0};function s(e){c||(c=n.createObserver("mutation",d)),c.observe(e.el,i)}function r(e){o.delete(e.el),d(c.takeRecords()),c.disconnect();for(const[t]of o.entries())c.observe(t,i)}function d(e){e.forEach((({target:e})=>{t.forceUpdate(e)}))}e.connectConditionalSlotComponent=s,e.disconnectConditionalSlotComponent=r}));
