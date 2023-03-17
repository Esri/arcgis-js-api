/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../request","../../../core/Error","../../utils","./support/ReconcileResult"],(function(e,r,t,n,o,i){"use strict";function s(e,r,t,n){return c.apply(this,arguments)}function c(){return(c=r._asyncToGenerator((function*(e,r,s,c){if(!r)throw new n("reconcile:missing-guid","guid for version is missing");const u=o.parseUrl(e),l=s.toJSON(),a=o.asValidOptions(u.query,{query:o.encode({...l,f:"json"}),...c,method:"post"});r.startsWith("{")&&(r=r.slice(1,-1));const p=`${u.path}/versions/${r}/reconcile`,{data:d}=yield t(p,a);return i.fromJSON(d)}))).apply(this,arguments)}e.reconcile=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
