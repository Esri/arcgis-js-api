/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/GetVersionInfosResult"],(function(e,n,t,r,o){"use strict";function s(e,n,t){return u.apply(this,arguments)}function u(){return(u=n._asyncToGenerator((function*(e,n,s){const u=r.parseUrl(e),i=n.toJSON(),l=r.asValidOptions(u.query,{query:r.encode({...i,f:"json"}),...s}),a=`${u.path}/versionInfos`,{data:p}=yield t(a,l);if(!p)return null;return o.fromJSON(p)}))).apply(this,arguments)}e.getVersionInfos=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
