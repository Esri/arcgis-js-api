/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","../../tasks/operations/relation","../../tasks/support/RelationParameters"],(function(e,t,r,a,s){"use strict";async function n(e,n,o){n=s.from(n);const i=a.relationToRESTParameters(n),l=r.parseUrl(e),u={...l.query,f:"json",...i},p=r.asValidOptions(u,o);return t(l.path+"/relation",p).then((({data:e})=>e.relations))}e.relation=n,Object.defineProperty(e,"__esModule",{value:!0})}));
