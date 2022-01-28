/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils"],(function(e,n,t,r){"use strict";function s(e,n,t){return a.apply(this,arguments)}function a(){return(a=n._asyncToGenerator((function*(e,n,s){const a=r.parseUrl(e),u={...a.query,f:"json",...n.toJSON()},o=r.asValidOptions(u,s);return t(a.path+"/areasAndLengths",o).then((e=>e.data))}))).apply(this,arguments)}e.areasAndLengths=s,Object.defineProperty(e,"__esModule",{value:!0})}));
