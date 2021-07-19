/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../support/AddressCandidate","../support/LocationToAddressParameters"],(function(e,t,r,o,s,n){"use strict";function a(e,t,r){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,s){t=n.from(t);const a=o.parseUrl(e),u={...t.toJSON(),f:"json"},i=o.encode({...a.query,...u}),c=o.asValidOptions(i,s),l=`${a.path}/reverseGeocode`;return r(l,c).then(d)}))).apply(this,arguments)}function d({data:e}){if(!e)return;const{address:t,location:r}=e,o=t&&t.Match_addr||"";return s.fromJSON({address:o,attributes:t||{},location:r,score:100})}e.locationToAddress=a,Object.defineProperty(e,"__esModule",{value:!0})}));
