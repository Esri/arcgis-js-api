/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../has","../Logger","./get"],(function(e,t,o,s){"use strict";o.getLogger("esri.core.accessorSupport.set");function r(e,t,o){if(e&&t)if("object"==typeof t)for(const o of Object.getOwnPropertyNames(t))r(e,o,t[o]);else{if(-1!==t.indexOf(".")){const i=t.split("."),c=i.splice(i.length-1,1)[0];return void r(s.get(e,i),c,o)}e[t]=o}}e.default=r,e.set=r,Object.defineProperty(e,"__esModule",{value:!0})}));
