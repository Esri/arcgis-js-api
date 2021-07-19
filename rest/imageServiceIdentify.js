/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../request","../core/maybe","../geometry/support/normalizeUtils","./utils","./support/ImageServiceIdentifyResult"],(function(e,t,r,n,o,i,s){"use strict";function u(e,t,r){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,u){const a=i.parseUrl(e),l=t.geometry?[t.geometry]:[];return o.normalizeCentralMeridian(l).then((e=>{const o=t.toJSON(),s=e&&e[0];n.isSome(s)&&(o.geometry=JSON.stringify(s.toJSON()));const l=i.encode({...a.query,f:"json",...o}),c=i.asValidOptions(l,u);return r(a.path+"/identify",c)})).then((e=>s.fromJSON(e.data)))}))).apply(this,arguments)}e.imageServiceIdentify=u,Object.defineProperty(e,"__esModule",{value:!0})}));
