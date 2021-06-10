/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../geometry/Extent","../../geometry","../../tasks/support/Query","../utils","./operations/query"],(function(e,t,r,n,o,u){"use strict";async function s(e,r,s){const c=o.parseUrl(e);return u.executeQueryForExtent(c,n.from(r),{...s}).then((e=>({count:e.data.count,extent:t.fromJSON(e.data.extent)})))}e.executeForExtent=s,Object.defineProperty(e,"__esModule",{value:!0})}));
