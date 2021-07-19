/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils"],(function(e,t,n,s){"use strict";function r(e,t,n){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,r){const i=s.parseUrl(e),u={...i.query,f:"json",...t.toJSON()},a=s.asValidOptions(u,r);return n(i.path+"/distance",a).then((({data:e})=>e&&e.distance))}))).apply(this,arguments)}e.distance=r,Object.defineProperty(e,"__esModule",{value:!0})}));
