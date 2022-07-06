/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e,t,l,n){let o=null,p=1e3;"number"==typeof t?(p=t,n=l):(o=t??null,p=l);let r,u=0;const a=()=>{u=0,e.apply(n,r)},c=(...e)=>{o&&o.apply(n,e),r=e,p?u||(u=setTimeout(a,p)):a()};return c.remove=()=>{u&&(clearTimeout(u),u=0)},c.forceUpdate=()=>{u&&(clearTimeout(u),a())},c.hasPendingUpdates=()=>!!u,c}export{e as throttle};
