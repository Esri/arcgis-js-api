/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils"],(function(e,t,n,r){"use strict";function o(e,t,n){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,o){const s=r.parseUrl(e),u=t.toJSON(),i=r.asValidOptions(s.query,{query:r.encode({...u,f:"json"}),...o,method:"post"}),l=`${s.path}/create`,{data:a}=yield n(l,i);return a?a.versionInfo:null}))).apply(this,arguments)}e.createVersion=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
