/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../request","../geometry/support/normalizeUtils","./utils","../tasks/operations/identify","../tasks/support/IdentifyParameters","../tasks/support/IdentifyResult"],(function(e,t,r,s,n,o,i){"use strict";async function u(e,o,i){const u=(o=f(o)).geometry?[o.geometry]:[],l=s.parseUrl(e);return l.path+="/identify",r.normalizeCentralMeridian(u).then((e=>{const r=n.identifyToIdentifyRESTParameters(o,{geometry:e&&e[0]}),u=s.encode({...l.query,f:"json",...r}),f=s.asValidOptions(u,i);return t(l.path,f).then(a)}))}function a(e){const t=e.data;t.results=t.results||[];const r={results:[]};return r.results=t.results.map((e=>i.fromJSON(e))),r}function f(e){return e=o.from(e)}e.identify=u,Object.defineProperty(e,"__esModule",{value:!0})}));
