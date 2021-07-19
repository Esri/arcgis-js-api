/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/AssociationGeometriesResult"],(function(e,t,s,n,o){"use strict";function i(e,t,s){return r.apply(this,arguments)}function r(){return(r=t._asyncToGenerator((function*(e,t,o){const i=n.parseUrl(e),r={...t.toJSON(),f:"json"},c=n.encode({...i.query,...r});o?o.method="post":o={method:"post"};const a=n.asValidOptions(c,o),l=`${i.path}/synthesizeAssociationGeometries`;return s(l,a).then(u)}))).apply(this,arguments)}function u(e){const{data:t}=e;return t?o.fromJSON(t):null}e.synthesizeAssociationGeometries=i,Object.defineProperty(e,"__esModule",{value:!0})}));
