/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../tasks/support/Query","../utils","./operations/query"],(function(e,t,r,u){"use strict";async function o(e,o,n){const s=r.parseUrl(e);return u.executeQueryForCount(s,t.from(o),{...n}).then((e=>e.data.count))}e.executeForCount=o,Object.defineProperty(e,"__esModule",{value:!0})}));
