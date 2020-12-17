/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","../../tasks/operations/relation","../../tasks/support/RelationParameters"],(function(e,t,r,a,s){"use strict";e.relation=async function(e,n,o){n=s.from(n);const i=a.relationToRESTParameters(n),l=r.parseUrl(e),u={...l.query,f:"json",...i},p=r.asValidOptions(u,o);return t(l.path+"/relation",p).then((({data:e})=>e.relations))},Object.defineProperty(e,"__esModule",{value:!0})}));
