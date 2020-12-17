/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../request","./utils","../tasks/operations/find","../tasks/support/FindParameters","../tasks/support/FindResult"],(function(s,t,e,n,r,o){"use strict";function u(s){const t=s.data;t.results=t.results||[];const e={results:[]};return e.results=t.results.map((s=>o.fromJSON(s))),e}s.find=async function(s,o,a){o=r.from(o);const i=n.findToFindRESTParameters(o),d=e.parseUrl(s);d.path+="/find";const f=e.encode({...d.query,f:"json",...i}),p=e.asValidOptions(f,a);return t(d.path,p).then(u)},Object.defineProperty(s,"__esModule",{value:!0})}));
