/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../request","../geometry/support/normalizeUtils","./utils","../tasks/operations/identify","../tasks/support/IdentifyParameters","../tasks/support/IdentifyResult"],(function(e,t,r,s,n,o,i){"use strict";function u(e){const t=e.data;t.results=t.results||[];const r={results:[]};return r.results=t.results.map((e=>i.fromJSON(e))),r}e.identify=async function(e,i,a){const f=(i=function(e){return e=o.from(e)}(i)).geometry?[i.geometry]:[],l=s.parseUrl(e);return l.path+="/identify",r.normalizeCentralMeridian(f).then((e=>{const r=n.identifyToIdentifyRESTParameters(i,{geometry:e&&e[0]}),o=s.encode({...l.query,f:"json",...r}),f=s.asValidOptions(o,a);return t(l.path,f).then(u)}))},Object.defineProperty(e,"__esModule",{value:!0})}));
