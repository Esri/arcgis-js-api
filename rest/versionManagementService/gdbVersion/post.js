/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../request","../../../core/Error","../../utils","./support/PostResult"],(function(s,t,o,r,e,n){"use strict";function i(s,t,o,r){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(s,t,i,u){if(!t)throw new r("post:missing-guid","guid for version is missing");const p=e.parseUrl(s),l=i.toJSON();i.rows&&(l.rows=JSON.stringify(i.rows));const a=e.asValidOptions(p.query,{query:e.encode({...l,f:"json"}),...u,method:"post"});t.startsWith("{")&&(t=t.slice(1,-1));const c=`${p.path}/versions/${t}/post`,{data:f}=yield o(c,a);return n.fromJSON(f)}))).apply(this,arguments)}s.post=i,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})}));
