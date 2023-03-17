/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../request","../../../core/Error","../../utils"],(function(e,s,t,r,n){"use strict";function i(e,s,t,r){return o.apply(this,arguments)}function o(){return(o=s._asyncToGenerator((function*(e,s,i,o){if(!s)throw new r("start-reading:missing-guid","guid for version is missing");const a=n.parseUrl(e),u=n.asValidOptions(a.query,{query:n.encode({sessionId:i,f:"json"}),...o,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const c=`${a.path}/versions/${s}/startReading`,{data:l}=yield t(c,u);return!!l&&l.success}))).apply(this,arguments)}e.startReading=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
