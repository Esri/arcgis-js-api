/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../request","../../../core/Error","../../utils"],(function(s,t,e,i,n){"use strict";function o(s,t,e,i,n){return r.apply(this,arguments)}function r(){return(r=t._asyncToGenerator((function*(s,t,o,r,u){if(!t)throw new i("stop-editing:missing-guid","guid for version is missing");const a=n.parseUrl(s),c=n.asValidOptions(a.query,{query:n.encode({sessionId:o,saveEdits:r,f:"json"}),...u,method:"post"});t.startsWith("{")&&(t=t.slice(1,-1));const d=`${a.path}/versions/${t}/stopEditing`,{data:l}=yield e(d,c);return!!l&&l.success}))).apply(this,arguments)}s.stopEditing=o,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})}));
