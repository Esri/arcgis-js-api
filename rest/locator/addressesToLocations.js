/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../support/AddressCandidate","../support/AddressesToLocationsParameters"],(function(e,t,s,n,o,r){"use strict";function a(e,t,s){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,o){t=r.from(t);const a=n.parseUrl(e),i={...t.toJSON(),f:"json"},c=n.encode({...a.query,...i}),l=n.asValidOptions(c,o),d=`${a.path}/geocodeAddresses`;return s(d,l).then(u)}))).apply(this,arguments)}function u(e){const{data:t}=e;if(!t)return[];const{locations:s,spatialReference:n}=t;return s?s.map((e=>{const{location:t}=e;return t&&(t.spatialReference=n),o.fromJSON(e)})):[]}e.addressesToLocations=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
