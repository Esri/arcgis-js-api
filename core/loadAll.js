/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{map as o,result as r}from"./asyncUtils.js";import a from"./Collection.js";import t from"./Loadable.js";import{isNone as l}from"./maybe.js";async function n(o,r){return await o.load(),i(o,r)}async function i(n,i){const c=[],f=(...o)=>{for(const r of o)l(r)||(Array.isArray(r)?f(...r):a.isCollection(r)?r.forEach((o=>f(o))):t.isLoadable(r)&&c.push(r))};i(f);let e=null;if(await o(c,(async o=>{!1!==(await r(s(o)?o.loadAll():o.load())).ok||e||(e=o)})),e)throw e.loadError;return n}function s(o){return"loadAll"in o&&"function"==typeof o.loadAll}export{n as loadAll,i as loadAllChildren};
