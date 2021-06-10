/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../tasks/support/GPMessage","./GPOptions","./utils"],(function(e,s,t,u){"use strict";async function r(e,r,n,a){return n=t.from(n),u.constructRequest(e,"execute",n,r,a).then((e=>{const t=e.data.results||[],r=e.data.messages||[];return{results:t.map(u.decode),messages:r.map((e=>s.fromJSON(e)))}}))}e.execute=r,Object.defineProperty(e,"__esModule",{value:!0})}));
