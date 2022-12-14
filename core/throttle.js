/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,l,o){let n=null,u=1e3;"number"==typeof t?(u=t,o=l):(n=t??null,u=l);let r,i=0;const a=()=>{i=0,e.apply(o,r)},p=(...e)=>{n&&n.apply(o,e),r=e,u?i||(i=setTimeout(a,u)):a()};return p.remove=()=>{i&&(clearTimeout(i),i=0)},p.forceUpdate=()=>{i&&(clearTimeout(i),a())},p.hasPendingUpdates=()=>!!i,p}e.throttle=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
