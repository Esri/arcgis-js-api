/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../support/AddressCandidate","../support/AddressesToLocationsParameters"],(function(e,t,n,o,r,s){"use strict";function a(e,t,n){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,r){t=s.from(t);const a=o.parseUrl(e),i={...t.toJSON?.(),f:"json"},c=o.encode({...a.query,...i}),p=o.asValidOptions(c,r),d=`${a.path}/geocodeAddresses`;return n(d,p).then(u)}))).apply(this,arguments)}function u(e){const{data:t}=e;if(!t)return[];const{locations:n,spatialReference:o}=t;return n?n.map((e=>{const{location:t}=e;return t&&(t.spatialReference=o),r.fromJSON(e)})):[]}e.addressesToLocations=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
