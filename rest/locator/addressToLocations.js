/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","./utils","../../tasks/support/AddressCandidate","../../tasks/support/AddressToLocationsParameters"],(function(e,t,s,n,a,r){"use strict";async function i(e,n,a){n=r.from(n);const i=s.parseUrl(e),{address:d,...c}=n.toJSON(),u={...d,...c,f:"json"},f=s.encode({...i.query,...u}),p=s.asValidOptions(f,a),l=`${i.path}/findAddressCandidates`;return t(l,p).then(o)}function o({data:e}){if(!e)return[];const{candidates:t,spatialReference:s}=e;return t?t.map((e=>{if(!e)return;const{extent:t,location:r}=e,i=!t||n.isValidExtent(t);return n.isValidLocation(r)&&i?(t&&(t.spatialReference=s),r.spatialReference=s,a.fromJSON(e)):void 0})):[]}e.addressToLocations=i,Object.defineProperty(e,"__esModule",{value:!0})}));
