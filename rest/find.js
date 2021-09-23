/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../request","./utils","./support/FindParameters","./support/FindResult","../tasks/operations/find"],(function(t,e,s,n,r,u,o){"use strict";function i(t,e,s){return a.apply(this,arguments)}function a(){return(a=e._asyncToGenerator((function*(t,e,u){e=r.from(e);const i=o.findToFindRESTParameters(e),a=n.parseUrl(t);a.path+="/find";const p=n.encode({...a.query,f:"json",...i}),c=n.asValidOptions(p,u);return s(a.path,c).then(l)}))).apply(this,arguments)}function l(t){const e=t.data;e.results=e.results||[];const s={results:[]};return s.results=e.results.map((t=>u.fromJSON(t))),s}t.find=i,Object.defineProperty(t,"__esModule",{value:!0})}));
