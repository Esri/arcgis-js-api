/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../Error","../has","../Logger","./get"],(function(e,t,n,o,r){"use strict";function s(e,t,n){if(e&&t)if("object"==typeof t)for(const o of Object.getOwnPropertyNames(t))s(e,o,t[o]);else{if(t.includes(".")){const o=t.split("."),i=o.splice(o.length-1,1)[0];return void s(r.get(e,o),i,n)}const o=e.__accessor__;null!=o&&i(t,o),e[t]=n}}function i(e,o){if(n("esri-unknown-property-errors")&&!u(e,o))throw new t("set:unknown-property",c(e,o))}function u(e,t){return null!=t.metadatas[e]}function c(e,t){return"setting unknown property '"+e+"' on instance of "+t.host.declaredClass}e.set=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
