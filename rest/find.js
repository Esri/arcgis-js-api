/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../request","./utils","./operations/find","./support/FindParameters","./support/FindResult"],(function(e,t,n,s,r,o,u){"use strict";function i(e,t,n){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,u){t=o.from(t);const i=r.findToFindRESTParameters(t),a=s.parseUrl(e);a.path+="/find";const p=s.encode({...a.query,f:"json",...i}),c=s.asValidOptions(p,u);return n(a.path,c).then(l)}))).apply(this,arguments)}function l(e){const t=e.data;t.results=t.results||[];const n={results:[]};return n.results=t.results.map((e=>u.fromJSON(e))),n}e.find=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
