/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../request","../../../core/Error","../../utils"],(function(e,s,t,n,i){"use strict";function r(e,s,t,n){return o.apply(this,arguments)}function o(){return(o=s._asyncToGenerator((function*(e,s,r,o){if(!s)throw new n("stop-reading:missing-guid","guid for version is missing");const u=i.parseUrl(e),a=i.asValidOptions(u.query,{query:i.encode({sessionId:r,f:"json"}),...o,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const c=`${u.path}/versions/${s}/stopReading`,{data:l}=yield t(c,a);return!!l&&l.success}))).apply(this,arguments)}e.stopReading=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
