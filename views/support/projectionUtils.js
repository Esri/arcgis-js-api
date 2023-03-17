/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../core/promiseUtils","../../geometry/projection"],(function(e,t,r,n,o){"use strict";let i,c=null;function l(e){return u.apply(this,arguments)}function u(){return(u=r._asyncToGenerator((function*(t){c||(c=new Promise(((t,r)=>e(["../../portal/support/geometryServiceUtils"],t,r))).then((e=>i=e))),yield c,n.throwIfAborted(t)}))).apply(this,arguments)}function p(e,t,r,n){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,t,r,n){if(!e)return null;const c=e.spatialReference;return o.isLoaded()||o.canProjectWithoutEngine(c,t)?o.project(e,t):i?i.projectGeometry(e,t,r,n):(yield Promise.race([l(n),o.load(n)]),p(e,t,r,n))}))).apply(this,arguments)}t.projectWithEngineOrService=p,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
