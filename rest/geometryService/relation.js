/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../support/RelationParameters","../../tasks/operations/relation"],(function(e,t,r,n,a,o){"use strict";function s(e,t,r){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,s){t=a.from(t);const i=o.relationToRESTParameters(t),l=n.parseUrl(e),u={...l.query,f:"json",...i},p=n.asValidOptions(u,s);return r(l.path+"/relation",p).then((({data:e})=>e.relations))}))).apply(this,arguments)}e.relation=s,Object.defineProperty(e,"__esModule",{value:!0})}));
