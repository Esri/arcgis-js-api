/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../config","../kernel","../core/lang","../core/urlUtils","../support/apiKeyUtils"],(function(e,t,n,r,i,o){"use strict";function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function f(e){return"string"==typeof e?i.urlToObject(e):r.clone(e)}function l(e,t,n){const r={};for(const i in e){if("declaredClass"===i)continue;const o=e[i];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){r[i]=[];for(let e=0;e<o.length;e++)r[i][e]=l(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(n&&n[i]);r[i]=t?e:JSON.stringify(e)}else r[i]=t?o:JSON.stringify(o);else r[i]=o}return r}function u(e,r){return o.supportsApiKey(e)&&(r||t.apiKey)?r||t.apiKey:n.id?.findCredential(e)?.token}e.asValidOptions=s,e.encode=l,e.getToken=u,e.parseUrl=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
