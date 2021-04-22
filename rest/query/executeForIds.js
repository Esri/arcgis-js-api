/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../tasks/support/Query","../utils","./operations/query"],(function(e,t,r,s){"use strict";async function o(e,o,u){const n=r.parseUrl(e);return s.executeQueryForIds(n,t.from(o),{...u}).then((e=>e.data.objectIds))}e.executeForIds=o,Object.defineProperty(e,"__esModule",{value:!0})}));
