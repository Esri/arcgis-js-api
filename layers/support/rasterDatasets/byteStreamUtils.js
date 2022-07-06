/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(r,t){let n=0,o="",e=0,f=0;const c=r.length;for(;n<c;)f=r[n++],e=f>>4,e<8?e=1:15===e?(e=4,f=(7&f)<<18|(63&r[n++])<<12|(63&r[n++])<<6|63&r[n++]):14===e?(e=3,f=(15&f)<<12|(63&r[n++])<<6|63&r[n++]):(e=2,f=(31&f)<<6|63&r[n++]),(0!==f||t)&&(o+=String.fromCharCode(f));return o}export{r as bytesToUTF8};
