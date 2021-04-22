/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./GPOptions","./utils","../../tasks/support/JobInfo"],(function(t,e,o,s){"use strict";async function n(t,n,r,u){return r=e.from(r),o.constructRequest(t,"submitJob",r,n,u).then((e=>{const o=s.fromJSON(e.data);return o.sourceUrl=t,o}))}t.submitJob=n,Object.defineProperty(t,"__esModule",{value:!0})}));
