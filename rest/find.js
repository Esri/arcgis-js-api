/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../request","./utils","../tasks/operations/find","../tasks/support/FindParameters","../tasks/support/FindResult"],(function(s,t,e,n,r,o){"use strict";async function u(s,o,u){o=r.from(o);const i=n.findToFindRESTParameters(o),d=e.parseUrl(s);d.path+="/find";const f=e.encode({...d.query,f:"json",...i}),p=e.asValidOptions(f,u);return t(d.path,p).then(a)}function a(s){const t=s.data;t.results=t.results||[];const e={results:[]};return e.results=t.results.map((s=>o.fromJSON(s))),e}s.find=u,Object.defineProperty(s,"__esModule",{value:!0})}));
