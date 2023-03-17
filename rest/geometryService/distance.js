/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils"],(function(t,e,n,r){"use strict";function s(t,e,n){return i.apply(this,arguments)}function i(){return(i=e._asyncToGenerator((function*(t,e,s){const i=r.parseUrl(t),a={...i.query,f:"json",...e.toJSON()},o=r.asValidOptions(a,s);return n(i.path+"/distance",o).then((({data:t})=>t&&t.distance))}))).apply(this,arguments)}t.distance=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
