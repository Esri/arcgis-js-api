/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t){if(null!==t){e.push(t.length);for(const i of t)i.serialize(e);return e}e.push(0)}function i(e,t,i){const n=e.readInt32(),r=new Array(n);for(let o=0;o<r.length;o++)r[o]=t.deserialize(e,i);return r}e.deserializeList=i,e.serializeList=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
