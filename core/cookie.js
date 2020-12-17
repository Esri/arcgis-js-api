/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./maybe"],(function(e,t){"use strict";e.writeCookie=function(e,o,n={}){let i=t.assumeNonNull(n.expires);if("number"==typeof i){const e=new Date;e.setTime(e.getTime()+24*i*60*60*1e3),i=n.expires=e}"string"!=typeof i&&(n.expires=i.toUTCString());let s=e+"="+encodeURIComponent(o);for(const e in n){s+="; "+e;const t=n[e];!0!==t&&(s+="="+t)}document.cookie=s},Object.defineProperty(e,"__esModule",{value:!0})}));
