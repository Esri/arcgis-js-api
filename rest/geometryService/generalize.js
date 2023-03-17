/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","../operations/generalize","../support/GeneralizeParameters"],(function(e,r,t,n,a,o,s){"use strict";function i(e,r,t){return l.apply(this,arguments)}function l(){return(l=r._asyncToGenerator((function*(e,r,i){const l=(r=s.from(r)).toJSON(),p=o.generalizeToRESTParameters(r),u=a.parseUrl(e),c={...u.query,f:"json",...p},f=l.geometries[0].spatialReference,g=a.asValidOptions(c,i);return t(u.path+"/generalize",g).then((({data:e})=>(e.geometries||[]).map((e=>n.fromJSON(e).set({spatialReference:f})))))}))).apply(this,arguments)}e.generalize=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
