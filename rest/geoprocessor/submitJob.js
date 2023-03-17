/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./GPOptions","./utils","../support/JobInfo"],(function(t,n,e,o,r){"use strict";function u(t,n,e,o){return s.apply(this,arguments)}function s(){return(s=n._asyncToGenerator((function*(t,n,u,s){return u=e.from(u||{}),o.constructRequest(t,"submitJob",u,n??{},s).then((n=>{const e=r.fromJSON(n.data);return e.sourceUrl=t,e}))}))).apply(this,arguments)}t.submitJob=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
