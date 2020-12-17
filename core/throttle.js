/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,l,n){let u=null,o=1e3;"number"==typeof t?(o=t,n=l):(u=null!=t?t:null,o=l);let r,a=0;const i=()=>{a=0,e.apply(n,r)},p=(...e)=>{u&&u.apply(n,e),r=e,o?a||(a=setTimeout(i,o)):i()};return p.remove=()=>{a&&(clearTimeout(a),a=0)},p.forceUpdate=()=>{a&&(clearTimeout(a),i())},p.hasPendingUpdates=()=>!!a,p}e.default=t,e.throttle=t,Object.defineProperty(e,"__esModule",{value:!0})}));
