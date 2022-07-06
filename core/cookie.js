/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{assumeNonNull as e}from"./maybe.js";function t(t,o,n={}){let i=e(n.expires);if("number"==typeof i){const e=new Date;e.setTime(e.getTime()+24*i*60*60*1e3),i=n.expires=e}"string"!=typeof i&&(n.expires=i.toUTCString());let r=t+"="+encodeURIComponent(o);for(const e in n){r+="; "+e;const t=n[e];!0!==t&&(r+="="+t)}document.cookie=r}export{t as writeCookie};
