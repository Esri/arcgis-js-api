/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils"],(function(e,t,n,r){"use strict";function o(e,t,n){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,o){const s=r.parseUrl(e),u=t.toJSON(),l=r.asValidOptions(s.query,{query:r.encode({...u,f:"json"}),...o,method:"post"}),i=`${s.path}/delete`,{data:a}=yield n(i,l);return a?a.success:null}))).apply(this,arguments)}e.deleteVersion=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
