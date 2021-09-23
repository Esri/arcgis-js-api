/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./maybe"],(function(e,t){"use strict";function o(e,o,n={}){let i=t.assumeNonNull(n.expires);if("number"==typeof i){const e=new Date;e.setTime(e.getTime()+24*i*60*60*1e3),i=n.expires=e}"string"!=typeof i&&(n.expires=i.toUTCString());let s=e+"="+encodeURIComponent(o);for(const t in n){s+="; "+t;const e=n[t];!0!==e&&(s+="="+e)}document.cookie=s}e.writeCookie=o,Object.defineProperty(e,"__esModule",{value:!0})}));
