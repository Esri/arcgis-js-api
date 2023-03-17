/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../request","./utils","./operations/find","./support/FindParameters","./support/FindResult"],(function(t,e,n,r,s,o,u){"use strict";function i(t,e,n){return a.apply(this,arguments)}function a(){return(a=e._asyncToGenerator((function*(t,e,u){e=o.from(e);const i=s.findToFindRESTParameters(e),a=r.parseUrl(t);a.path+="/find";const p=r.encode({...a.query,f:"json",...i}),c=r.asValidOptions(p,u);return n(a.path,c).then(l)}))).apply(this,arguments)}function l(t){const e=t.data;e.results=e.results||[];const n={results:[]};return n.results=e.results.map((t=>u.fromJSON(t))),n}t.find=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
