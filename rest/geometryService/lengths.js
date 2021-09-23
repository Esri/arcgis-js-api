/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../support/LengthsParameters","../../tasks/operations/lengths"],(function(e,t,n,s,r,a){"use strict";function o(e,t,n){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,o){t=r.from(t);const u=a.lengthsToRESTParameters(t),l=s.parseUrl(e),i={...l.query,f:"json",...u},p=s.asValidOptions(i,o);return n(l.path+"/lengths",p).then((({data:e})=>e))}))).apply(this,arguments)}e.lengths=o,Object.defineProperty(e,"__esModule",{value:!0})}));
