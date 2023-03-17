/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../request","../../../core/Error","../../utils"],(function(t,s,e,i,n){"use strict";function r(t,s,e,i){return o.apply(this,arguments)}function o(){return(o=s._asyncToGenerator((function*(t,s,r,o){if(!s)throw new i("start-editing:missing-guid","guid for version is missing");const u=n.parseUrl(t),a=n.asValidOptions(u.query,{query:n.encode({sessionId:r,f:"json"}),...o,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const c=`${u.path}/versions/${s}/startEditing`,{data:l}=yield e(c,a);return!!l&&l.success}))).apply(this,arguments)}t.startEditing=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
