/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../support/AddressCandidate","../support/LocationToAddressParameters"],(function(e,t,r,o,s,n){"use strict";function a(e,t,r){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,s){t=n.from(t);const a=o.parseUrl(e),u={...t.toJSON(),f:"json"},d=o.encode({...a.query,...u}),c=o.asValidOptions(d,s),l=`${a.path}/reverseGeocode`;return r(l,c).then(i)}))).apply(this,arguments)}function i({data:e}){if(!e)return;const{address:t,location:r}=e,o=t&&t.Match_addr||"";return s.fromJSON({address:o,attributes:t||{},location:r,score:100})}e.locationToAddress=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
