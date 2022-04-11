/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./componentsUtils","./observers"],(function(e,t,o){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */const n=new Set;let c;const s={childList:!0};function i(e){c||(c=o.createObserver("mutation",l)),c.observe(e.el,s)}function r(e){n.delete(e.el),l(c.takeRecords()),c.disconnect();for(const[t]of n.entries())c.observe(t,s)}function l(e){e.forEach((({target:e})=>{t.forceUpdate(e)}))}e.connectConditionalSlotComponent=i,e.disconnectConditionalSlotComponent=r}));
