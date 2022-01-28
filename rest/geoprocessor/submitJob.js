/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./GPOptions","./utils","../support/JobInfo"],(function(t,e,n,r,o){"use strict";function u(t,e,n,r){return s.apply(this,arguments)}function s(){return(s=e._asyncToGenerator((function*(t,e,u,s){return u=n.from(u||{}),r.constructRequest(t,"submitJob",u,e,s).then((e=>{const n=o.fromJSON(e.data);return n.sourceUrl=t,n}))}))).apply(this,arguments)}t.submitJob=u,Object.defineProperty(t,"__esModule",{value:!0})}));
