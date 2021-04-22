/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","../../tasks/support/AddressCandidate","../../tasks/support/AddressesToLocationsParameters"],(function(e,s,t,o,n){"use strict";async function r(e,o,r){o=n.from(o);const c=t.parseUrl(e),d={...o.toJSON(),f:"json"},i=t.encode({...c.query,...d}),u=t.asValidOptions(i,r),p=`${c.path}/geocodeAddresses`;return s(p,u).then(a)}function a(e){const{data:s}=e;if(!s)return[];const{locations:t,spatialReference:n}=s;return t?t.map((e=>{const{location:s}=e;return s&&(s.spatialReference=n),o.fromJSON(e)})):[]}e.addressesToLocations=r,Object.defineProperty(e,"__esModule",{value:!0})}));
