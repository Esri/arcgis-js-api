/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../operations/lengths","../support/LengthsParameters"],(function(e,t,n,r,s,o){"use strict";function a(e,t,n){return l.apply(this,arguments)}function l(){return(l=t._asyncToGenerator((function*(e,t,a){t=o.from(t);const l=s.lengthsToRESTParameters(t),u=r.parseUrl(e),i={...u.query,f:"json",...l},p=r.asValidOptions(i,a);return n(u.path+"/lengths",p).then((({data:e})=>e))}))).apply(this,arguments)}e.lengths=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
