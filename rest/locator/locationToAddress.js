/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../support/AddressCandidate","../support/LocationToAddressParameters"],(function(e,t,r,o,n,s){"use strict";function a(e,t,r){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,n){t=s.from(t);const a=o.parseUrl(e),i={...t.toJSON(),f:"json"},d=o.encode({...a.query,...i}),c=o.asValidOptions(d,n),l=`${a.path}/reverseGeocode`;return r(l,c).then(u)}))).apply(this,arguments)}function u({data:e}){if(!e)return;const{address:t,location:r}=e,o=t&&t.Match_addr||"";return n.fromJSON({address:o,attributes:t||{},location:r,score:100})}e.locationToAddress=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
