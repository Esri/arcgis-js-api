/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./maybe","./Collection","./Loadable","./asyncUtils"],(function(l,o,a,n,t){"use strict";async function e(l,o){return await l.load(),r(l,o)}async function r(l,e){const r=[],s=(...l)=>{for(const t of l)o.isNone(t)||(Array.isArray(t)?s(...t):a.isCollection(t)?t.forEach((l=>s(l))):n.isLoadable(t)&&r.push(t))};e(s);let c=null;if(await t.map(r,(async l=>{!1!==(await t.result(i(l)?l.loadAll():l.load())).ok||c||(c=l)})),c)throw c.loadError;return l}function i(l){return"loadAll"in l&&"function"==typeof l.loadAll}l.default=e,l.loadAll=e,l.loadAllChildren=r,Object.defineProperty(l,"__esModule",{value:!0})}));
