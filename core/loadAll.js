/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./maybe","./Collection","./Loadable","./asyncUtils"],(function(l,o,a,e,n){"use strict";async function t(l,o){return await l.load(),r(l,o)}async function r(l,t){const r=[],i=(...l)=>{for(const n of l)o.isNone(n)||(Array.isArray(n)?i(...n):a.isCollection(n)?n.forEach((l=>i(l))):e.isLoadable(n)&&r.push(n))};t(i);let s=null;if(await n.map(r,(async l=>{var o;!1!==(await n.result((o=l,"loadAll"in o&&"function"==typeof o.loadAll?l.loadAll():l.load()))).ok||s||(s=l)})),s)throw s.loadError;return l}l.default=t,l.loadAll=t,l.loadAllChildren=r,Object.defineProperty(l,"__esModule",{value:!0})}));
