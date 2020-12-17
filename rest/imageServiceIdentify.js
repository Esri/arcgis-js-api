/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","../request","../geometry/support/normalizeUtils","./utils","../tasks/support/ImageServiceIdentifyResult"],(function(e,t,r,n,o,i){"use strict";e.imageServiceIdentify=async function(e,s,a){const u=o.parseUrl(e),c=s.geometry?[s.geometry]:[];return n.normalizeCentralMeridian(c).then((e=>{const n=s.toJSON(),i=e&&e[0];t.isSome(i)&&(n.geometry=JSON.stringify(i.toJSON()));const c=o.encode({...u.query,f:"json",...n}),y=o.asValidOptions(c,a);return r(u.path+"/identify",y)})).then((e=>i.fromJSON(e.data)))},Object.defineProperty(e,"__esModule",{value:!0})}));
