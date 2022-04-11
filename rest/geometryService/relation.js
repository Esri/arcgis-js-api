/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../operations/relation","../support/RelationParameters"],(function(e,t,r,n,o,a){"use strict";function i(e,t,r){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,i){t=a.from(t);const s=o.relationToRESTParameters(t),l=n.parseUrl(e),u={...l.query,f:"json",...s},p=n.asValidOptions(u,i);return r(l.path+"/relation",p).then((({data:e})=>e.relations))}))).apply(this,arguments)}e.relation=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
