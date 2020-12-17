/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","../../tasks/support/AddressCandidate","../../tasks/support/LocationToAddressParameters"],(function(e,t,s,r,o){"use strict";function a({data:e}){if(!e)return;const{address:t,location:s}=e,o=t&&t.Match_addr||"";return r.fromJSON({address:o,attributes:t||{},location:s,score:100})}e.locationToAddress=async function(e,r,n){r=o.from(r);const d=s.parseUrl(e),c={...r.toJSON(),f:"json"},i=s.encode({...d.query,...c}),u=s.asValidOptions(i,n),f=`${d.path}/reverseGeocode`;return t(f,u).then(a)},Object.defineProperty(e,"__esModule",{value:!0})}));
