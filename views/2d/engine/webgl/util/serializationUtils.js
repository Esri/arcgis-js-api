/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t){if(null!==t){e.push(t.length);for(const i of t)i.serialize(e);return e}e.push(0)}function i(e,t,i){const n=e.readInt32(),r=new Array(n);for(let s=0;s<r.length;s++)r[s]=t.deserialize(e,i);return r}e.deserializeList=i,e.serializeList=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
