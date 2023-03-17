/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils"],(function(e,t,n,r){"use strict";function s(e,t,n){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,s){const a=r.parseUrl(e),o={...a.query,f:"json",...t.toJSON()},u=r.asValidOptions(o,s);return n(a.path+"/areasAndLengths",u).then((e=>e.data))}))).apply(this,arguments)}e.areasAndLengths=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
