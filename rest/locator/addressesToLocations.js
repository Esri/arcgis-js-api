/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../support/AddressCandidate","../support/AddressesToLocationsParameters"],(function(e,t,s,n,r,o){"use strict";function a(e,t,s){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,r){t=o.from(t);const a=n.parseUrl(e),i={...t.toJSON(),f:"json"},c=n.encode({...a.query,...i}),p=n.asValidOptions(c,r),d=`${a.path}/geocodeAddresses`;return s(d,p).then(u)}))).apply(this,arguments)}function u(e){const{data:t}=e;if(!t)return[];const{locations:s,spatialReference:n}=t;return s?s.map((e=>{const{location:t}=e;return t&&(t.spatialReference=n),r.fromJSON(e)})):[]}e.addressesToLocations=a,Object.defineProperty(e,"__esModule",{value:!0})}));
