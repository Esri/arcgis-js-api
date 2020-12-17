/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","../../tasks/operations/lengths","../../tasks/support/LengthsParameters"],(function(e,t,s,n,r){"use strict";e.lengths=async function(e,a,o){a=r.from(a);const u=n.lengthsToRESTParameters(a),i=s.parseUrl(e),l={...i.query,f:"json",...u},p=s.asValidOptions(l,o);return t(i.path+"/lengths",p).then((({data:e})=>e))},Object.defineProperty(e,"__esModule",{value:!0})}));
