/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../tasks/support/FeatureSet","../../tasks/support/Query","../utils","./operations/query"],(function(e,t,r,u,s){"use strict";async function a(e,r,u){const s=await n(e,r,u);return t.fromJSON(s)}async function n(e,t,a){const n=u.parseUrl(e),o={...a},c=r.from(t),{data:i}=await s.executeQuery(n,c,c.sourceSpatialReference,o);return i}e.executeQueryJSON=a,e.executeRawQueryJSON=n,Object.defineProperty(e,"__esModule",{value:!0})}));
